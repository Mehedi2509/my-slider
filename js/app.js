const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg'
];

let picNumber = 0;
const imageTag = document.getElementById('image');

setInterval(() => {
    if (images.length <= picNumber) {
        picNumber = 0

    }
    const image = images[picNumber];
    imageTag.setAttribute('src', image);
    picNumber++
    // console.log(picNumber);
}, 2500)
