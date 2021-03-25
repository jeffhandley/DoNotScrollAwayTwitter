function onWindowBlur() {
    var popupButtons = [...document.querySelectorAll("div[role=button][aria-haspopup=true")];

    if (popupButtons && popupButtons.length > 2) {
        var emojiButton = popupButtons[2];

        if (emojiButton && typeof emojiButton.getClientRects === 'function' && typeof emojiButton.scrollIntoView === 'function') {
            var emojiButtonTop = emojiButton.getClientRects()[0].top;

            if (window.scrollY < emojiButtonTop) {
                emojiButton.scrollIntoView();
            }
        }
    }
}

window.addEventListener('blur', onWindowBlur);
