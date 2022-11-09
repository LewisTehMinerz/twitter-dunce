// ==UserScript==
// @name         Twitter Dunce
// @namespace    https://lewistehminerz.dev/
// @version      0.1
// @description  Bought Twitter Blue? You're a dunce!
// @author       You
// @match        https://twitter.com/*
// @icon         data:image/png;base64,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
// @grant        none
// ==/UserScript==

// dunce hat from the noun project - https://thenounproject.com/icon/dunce-cap-126405/
const ICON = 'data:image/png;base64,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';

const open = XMLHttpRequest.prototype.open;
const send = XMLHttpRequest.prototype.send;

XMLHttpRequest.prototype.send = function() {
    if (this.__url.match(/UserByScreenName/)) {
        this.addEventListener('load', () => {
            const responseData = JSON.parse(this.response);
            if (responseData.data.user.result.is_blue_verified) {
                console.log(responseData.data.user.result);

                // twitter's frontend is hot garbage
                const toReplace = [
                    document.querySelector('h2 > div > div > div > div > span:nth-child(2)'), // header
                    document.querySelector('div[aria-label="Provides details about verified accounts."]'), // user profile
                    ...document.querySelectorAll(`a[href="/${responseData.data.user.result.legacy.screen_name}"] > div > div:nth-child(2)`) // tweets
                ];

                for (const replacement of toReplace) {
                    replacement.innerHTML = `<img src="${ICON}" height="24" style="padding-left: 3px">`;
                }
            }
        });
    }

    send.apply(this, arguments);
}

XMLHttpRequest.prototype.open = function(_, url) {
    this.__url = url;
    return open.apply(this, arguments);
}
