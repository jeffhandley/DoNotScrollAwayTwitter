function onWindowBlur() {
    var popupButtons = [...document.querySelectorAll("div[role=button][aria-haspopup=true")];

    console.log('popupButtons', popupButtons && popupButtons.length);

    if (popupButtons && popupButtons.length > 2) {
        var emojiButton = popupButtons[2];

        console.log('emojiButton', emojiButton);

        if (emojiButton && typeof emojiButton.getClientRects === 'function' && typeof emojiButton.scrollIntoView === 'function') {
            var emojiButtonTop = emojiButton.getClientRects()[0].top;

            if (window.scrollY < emojiButtonTop) {
                emojiButton.scrollIntoView();
                window.scrollBy(0, 8);
            }
        }
    }
}

window.addEventListener('blur', onWindowBlur);
