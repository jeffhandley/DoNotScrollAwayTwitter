function onWindowBlur() {
    if (window.scrollY < 140) {
        window.scrollTo(window.scrollX, 140);
    }
}

window.addEventListener('blur', onWindowBlur);
