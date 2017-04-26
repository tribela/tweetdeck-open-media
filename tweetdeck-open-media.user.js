// ==UserScript==
// @name         Tweetdeck media opener
// @namespace    https://github.com/Kjwon15/tweetdeck-open-media
// @version      0.2
// @description  Press "o" to open media in selected tweet.
// @author       Kjwon15
// @match        https://tweetdeck.twitter.com/*
// @updateURL https://github.com/kjwon15/tweetdeck-open-media/raw/master/tweetdeck-open-media.user.js
// ==/UserScript==

/* jshint esnext: false */
/* jshint esversion: 6 */

function openMedia() {
  let selectedTweet = document.querySelector('.is-selected-tweet');
  let firstMedia = selectedTweet.querySelector('.js-media a');
  if (firstMedia) {
    firstMedia.click();
  }
}

document.addEventListener('keypress', (event) => {
  if (['textarea', 'input'].includes(document.activeElement.tagName.toLowerCase())) {
    return;
  }

  let alt = event.altKey;
  let ctrl = event.ctrlKey;
  let shift = event.shiftKey;
  let meta = event.metaKey;

  if (!alt && !ctrl && !shift && !meta && event.key == 'o') {
    openMedia();
  }

  // console.log(`alt: ${event.altKey} ctrl: ${event.ctrlKey} shift: ${event.shiftKey} meta: ${event.metaKey} keycode: ${event.key}`);
});

