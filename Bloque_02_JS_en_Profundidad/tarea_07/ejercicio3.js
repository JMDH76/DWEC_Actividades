let profilesButton = document.getElementsByName('profiles');

const getProfile2 = async () => {
    try {
        let response = await axios.get('https://api.github.com/search/users?q=JavaScript');

        let data = response.data.items[0];
        let dataJson = JSON.stringify(data);
        let array = Object.values(JSON.parse(dataJson));
        console.log('JSON:');
        console.log(data);
        console.log("");

        console.log('Array:');
        array.map((element) => {
            console.log(element);
        })
    } catch (error) {
        console.error(error);
    }
}

profilesButton[0].addEventListener('click', getProfile2);
