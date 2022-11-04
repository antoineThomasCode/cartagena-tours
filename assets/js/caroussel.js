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
    console.log(item);
    console.log("gallery image item " + item.id + " ^^^^^^^");
    item.onclick = () => {
      display_img.src = item.src;
      console.log(item.id);
      i = item.id;
    };
  }
})();

(function rightClick() {
  right.onclick = () => {
    i++;
    console.log(i);
    if (i > arr_length - 1) {
      i = 0;
    }
    console.log(img_arr[i]);
    display_img.src = img_url_array[i].src;
    console.log(img_url_array)
  };
})();

(function leftClick() {
  left.onclick = () => {
    i--;
    console.log(i);
    if (i < 0) {
      i = arr_length - 1;
    }
    console.log(img_arr[i]);
    display_img.src = img_url_array[i].src;
  };
})();
