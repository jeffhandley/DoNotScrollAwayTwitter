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

                if (emojiButton && typeof emojiButton.getBoundingClientRect === 'function' && typeof emojiButton.scrollIntoView === 'function') {
                    var firstTweet = emojiButton.getBoundingClientRect().top + 8;

                    if (firstTweet > 0) {
                        window.scrollBy({
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
