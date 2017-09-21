import * as Bootstrap from './src/Bootstrap';

Bootstrap.init();

(function () {
    var intervalId = window.setInterval(() => {
        if (document.styleSheets[0]) {
            console.log("Hit");
            clearInterval(intervalId);
        }
    }, 0);
})();