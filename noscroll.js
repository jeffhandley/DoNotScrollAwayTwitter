let willNotScrollAway = false;

(function doNotScrollAwayTwitter() {
    console.log('doNotScrollAwayTwitter', willNotScrollAway);

    if (willNotScrollAway) {
        return;
    }

    willNotScrollAway = true;

    function onWindowBlur() {
        if (location.pathname === '/home') {
            var popupButtons = [...document.querySelectorAll("div[role=button][aria-haspopup=true")];

            if (popupButtons && popupButtons.length > 2) {
                var emojiButton = popupButtons[2];

                if (emojiButton && typeof emojiButton.getClientRects === 'function' && typeof emojiButton.scrollIntoView === 'function') {
                    var firstTweet = emojiButton.getClientRects()[0].top + 8;

                    if (window.scrollY < firstTweet) {
                        window.scrollTo({
                            left: window.scrollX,
                            top: firstTweet,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        }
    }

    window.addEventListener('blur', onWindowBlur);
})();
