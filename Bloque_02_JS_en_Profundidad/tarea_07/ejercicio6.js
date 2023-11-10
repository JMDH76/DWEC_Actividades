let formSubmitButton = document.getElementsByTagName('form');
let formFieldPositionArray = document.getElementsByName('position');
let form = document.getElementsByTagName('form');

const getProfile4 = async (event) => {
    event.preventDefault();
    let pos = formFieldPositionArray[0].value;


    try {
        let response = await axios.get('https://api.github.com/search/users?q=David');

        let data = response.data.items;
        let dataJson = JSON.stringify(data);
        let dataArray = Object.values(JSON.parse(dataJson));
    
        let image = dataArray[pos].avatar_url;
        let login = dataArray[pos].login;
        let id = dataArray[pos].id;

        if (document.getElementById('avatarImage_6')) {
            document.getElementById('avatarImage_6').remove();
            document.getElementById('paragraf_1').remove();
           
        }
        let profileImage = document.createElement('div');
            profileImage.setAttribute('id', 'avatarImage_6');
            profileImage.style.border = '1px solid black';
            profileImage.style.backgroundImage = `url(${image})`;
            profileImage.style.backgroundSize = 'cover';
            profileImage.style.width = '400px';
            profileImage.style.height = '400px';
            profileImage.style.marginTop = '15px';

            let userLogin = document.createElement('p');
            userLogin.innerHTML = login;
            userLogin.setAttribute('id', 'paragraf_1')
            userLogin.style.fontSize = '30px';
            userLogin.style.fontWeight = 'bold';
            userLogin.style.nargin = '0';

            let userId = document.createElement('p');
            userId.innerHTML = id;
            userId.setAttribute('id', 'paragraf_2')
            userId.style.fontSize = '20px';
            userId.style.fontWeight = 'bold';
            userId.style.nargin = '0';

            contenedorEjercicios[5].appendChild(profileImage);
            contenedorEjercicios[5].appendChild(userLogin);
            userLogin.appendChild(userId);
            form[0].reset();

    } catch (error) {
        console.log(error);
    }
}
formSubmitButton[0].addEventListener('submit', (event) => getProfile4(event));


