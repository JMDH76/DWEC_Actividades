let contenedorEjercicios = document.getElementsByClassName('table-wrapper');

const getProfile = async () => {
    try {
        let response = await axios.get('https://api.github.com/search/users?q=JavaScript');
        let image = response.data.items[0].avatar_url;

        if (document.getElementById('avatarImage')) {
            document.getElementById('avatarImage').remove();
        }

        let profileImage = document.createElement('div');
        profileImage.setAttribute('id', 'avatarImage');
        profileImage.style.border = '1px solid black';
        profileImage.style.backgroundImage = `url(${image})`;
        profileImage.style.backgroundSize = 'cover';
        profileImage.style.width = '400px';
        profileImage.style.height = '400px';
        profileImage.style.marginTop = '15px';

        contenedorEjercicios[3].appendChild(profileImage);

    } catch (error) {
        console.error(error);
    }
}

profilesButton[1].addEventListener('click', getProfile);

