(function() {
    'use strict'
    window.parent.postMessage({type:'location', currentUrl:location.pathname}, location.origin)
})();
