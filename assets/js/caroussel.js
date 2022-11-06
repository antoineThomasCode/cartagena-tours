let i = 0;
//right arrow
const right = document.getElementById("right");
//left arrow
const left = document.getElementById("left");

//get gallery img element
let gal_img = document.getElementsByClassName("gal_img");

//get display img element
let dis_img = document.getElementById("display_img");
//array of images
let img_url_array = document.getElementsByClassName('gal_img')
let img_arr = [
  {
    id: 0,
  },
  {
    id: 1
  },
  {
    id: 2
  }
];

let arr_length = img_arr.length;



(function galImgClick() {
  for (let item of gal_img) {
    item.onclick = () => {
      display_img.src = item.src;
      i = item.id;
    };
  }
})();

(function rightClick() {
  right.onclick = () => {
    i++;
    if (i > arr_length - 1) {
      i = 0;
    }
    display_img.src = img_url_array[i].src;
  };
})();

(function leftClick() {
  left.onclick = () => {
    i--;
    if (i < 0) {
      i = arr_length - 1;
    }
    display_img.src = img_url_array[i].src;
  };
})();
