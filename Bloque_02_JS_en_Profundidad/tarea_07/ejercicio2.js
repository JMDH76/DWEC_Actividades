let catsRequestButtom = document.getElementsByName('cats')[0];

const getCats = async () => {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10');
        let collection = response.data;
        collection.map((element, index) => {
            let catImage = document.createElement('div');
            catImage.setAttribute('class', 'cats');
            catImage.setAttribute('id', `catImage${index + 1}`);
            catImage.style.border = '1px solid black';
            catImage.style.backgroundImage = 'url(' + element.url + ')';
            catImage.style.backgroundSize = 'cover';
            catImage.style.width = '400px';
            catImage.style.height = '400px';
            catImage.style.margin = '15px';
            catImage.style.marginLeft = '200px'
            catImageFrame[1].appendChild(catImage);
        });
    } catch {
        console.error(error)
    }
}

catsRequestButtom.addEventListener('click', () => {
    
    if (document.getElementById('catImage1')) {
        let images = document.querySelectorAll('.cats');
        
        Array.from(images).map((element, index) => {
            let img = document.getElementById(`catImage${index + 1}`);
            img.remove();
        })
    }
    getCats();
})