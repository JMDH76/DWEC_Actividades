let photo = document.getElementsByClassName('photo');
let photoContainer = document.getElementsByClassName('photo-container');
let title = document.getElementsByTagName('h1')[0];
let test = true;

Array.from(photo).map((element, index) =>
    element.style.backgroundImage = `url(images/${index + 1}.jpg)`
);

[0, 1, 2].map(element => {
    photoContainer[element].style.transition = '2s';
    photo[element].style.transition = '2s';
});
document.body.style.transition = '2s';

Array.from(photoContainer).map(element => element.style.background = 'black');

setInterval(() => {
    [200, 400, 600].map((element, index) => animate(element, index));
    test = !test;
}, 5000);

const animate = (element, index) => {
    if (test) {
        photo[index].style.height = '0px';
        photo[index].style.color = 'white';
        photoContainer[index].style.height = '600px';
        photoContainer[index].style.lineHeight = '150px';
        title.style.color = 'black';
        document.body.style.backgroundColor = '#efefef';
    } else {
        photo[index].style.height = `${element}px`;
        photo[index].style.color = 'black';
        photoContainer[index].style.height = '200px';
        photoContainer[index].style.lineHeight = `${150 * (index + 1)}px`;
        title.style.color = 'white';
        document.body.style.backgroundColor = 'black';
    }
}