const times = [3700, 4000, 4400, 4800];

const parameters = [
    { opacity: '50%', width: '105%', height: '105%' },
    { opacity: '100%', width: '100%', height: '100%' }
];

const fotos = (opacity, width, height) => {
    Array.from(photos).map((element) => {
        element.style.opacity = opacity;
        element.style.width = width;
        element.style.height = height;
    });
};

times.map((element, index) => {
    let parameter;
    (index % 2 === 0) ? parameter = 0 : parameter = 1;
    setTimeout(() => {
        fotos(parameters[parameter].opacity, parameters[parameter].width, parameters[parameter].height)
    }, element);

    /* Actividad 4. Añadimos evento a todas las fotos para que se borren al clicar sobre una de ellas */
    if (index === 3) {
        Array.from(photos).map((element, index) => {
            element.addEventListener('click', () => removePhotos(index));
        });
    }
});
