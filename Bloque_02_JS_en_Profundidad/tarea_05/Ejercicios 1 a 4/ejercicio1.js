let imagesUrl = ["./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg","./images/6.jpg"];
let photos = document.getElementsByClassName('photo');

Array.from(photos).map((element, index) => {
    let url = imagesUrl[index];
    element.style.backgroundImage = 'url(' + url+')';
});

