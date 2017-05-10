// ==UserScript==
// @name         Tweetdeck media opener
// @namespace    https://github.com/Kjwon15/tweetdeck-open-media
// @version      0.2
// @description  Press "o" to open media in selected tweet.
// @author       Kjwon15
// @match        https://tweetdeck.twitter.com/*
// @grant GM_setClipboard
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

function copyLink() {
  let selectedTweet = document.querySelector('.is-selected-tweet');
  let img = document.querySelector('.open-modal img.media-img');
  let link;
  if (img) {
    link = img.getAttribute('src');
  } else {
    link = selectedTweet.querySelector('time a').getAttribute('href');
  }
  GM_setClipboard(link);
}

document.addEventListener('keypress', (event) => {
  if (['textarea', 'input'].includes(document.activeElement.tagName.toLowerCase())) {
    return;
  }

  let alt = event.altKey;
  let ctrl = event.ctrlKey;
  let shift = event.shiftKey;
  let meta = event.metaKey;

  if (!alt && !ctrl && !shift && !meta) {
    if (event.key == 'o') {
      openMedia();
    }
    else if (event.key == 'y') {
      copyLink();
    }
  }

  // console.log(`alt: ${event.altKey} ctrl: ${event.ctrlKey} shift: ${event.shiftKey} meta: ${event.metaKey} keycode: ${event.key}`);
});

