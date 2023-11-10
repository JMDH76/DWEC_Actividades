const getProfile3 = async () => {
    try {
        let response = await axios.get('https://api.github.com/search/users?q=David');
        let image = response.data.items[0].avatar_url;
        let login = response.data.items[0].login;
        let id = response.data.items[0].id;
        

        if (document.getElementById('avatarImage')) {
            document.getElementById('avatarImage').remove();
            document.getElementById('paragraf_1').remove();
            document.getElementById('paragraf_2').remove();
        }

        let profileImage = document.createElement('div');
        profileImage.setAttribute('id', 'avatarImage');
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

        contenedorEjercicios[4].appendChild(profileImage);
        contenedorEjercicios[4].appendChild(userLogin);
        userLogin.appendChild(userId);

    } catch (error) {
        console.error(error);
    }
}

profilesButton[2].addEventListener('click', getProfile3);