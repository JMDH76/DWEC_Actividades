const changeOpacity = (counter, opacity, limit, factor) => {

    let interval = setInterval(() => {
        photos[counter].style.opacity = opacity;
        if (counter === limit) {
            clearInterval(interval);
            if (limit === 5) changeOpacity(5, '100%', 0, -1);
        }
        counter += factor;
    }, 100);
}

changeOpacity(0, '60%', 5, 1);
setTimeout(() => changeOpacity(0, '60%', 5, 1), 1800);
