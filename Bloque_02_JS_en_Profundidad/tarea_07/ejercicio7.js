
const getProfile5 = async (event) => {
    event.preventDefault();

    let pos = formFieldPositionArray[1].value;
    let searchTerm = document.getElementsByName('search_term')[0].value;
    console.log(pos)
    console.log(searchTerm)

    try {
        let response = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`);
        let data = response.data.items;
        let dataJson = JSON.stringify(data);
        let dataArray = Object.values(JSON.parse(dataJson));

        let image = dataArray[pos].avatar_url;
        let login = dataArray[pos].login;
        let id = dataArray[pos].id;

        if (document.getElementById('avatarImage_7')) {
            document.getElementById('avatarImage_7').remove();
            document.getElementById('paragraf_1').remove();
        }

        let profileImage = document.createElement('div');
        profileImage.setAttribute('id', 'avatarImage_7');
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

        contenedorEjercicios[6].appendChild(profileImage);
        contenedorEjercicios[6].appendChild(userLogin);
        userLogin.appendChild(userId);
        form[1].reset();

    } catch (error) {
        console.log(error);
    }
}

formSubmitButton[1].addEventListener('submit', (event) => getProfile5(event));