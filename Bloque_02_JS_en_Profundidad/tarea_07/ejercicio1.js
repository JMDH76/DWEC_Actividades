let catRequestButtom = document.getElementsByName('cat')[0];
let catImageFrame = document.getElementsByClassName('table-wrapper');

catRequestButtom.addEventListener('click', (event) => {
    event.preventDefault();

    if (document.getElementById('catImage')) {
        catImage.remove();
    }
    getData();
});


const getData = async () => {
    try {
        let response = await axios.get('https://api.thecatapi.com/v1/images/search?size=full');
        let url = response.data[0].url;

        let catImage = document.createElement('div');
        catImage.setAttribute('id', 'catImage');
        catImage.style.border = '1px solid black';
        catImage.style.backgroundImage = 'url(' + url + ')';
        catImage.style.backgroundSize = 'cover';
        catImage.style.width = '400px';
        catImage.style.height = '400px';
        catImage.style.margin = '15px';
        catImage.style.marginLeft = '200px'

        catImageFrame[0].appendChild(catImage);

    } catch {
        console.error(error)
    }
}
