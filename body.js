(function(w, d){
    w['_brSiteId'] = INSTALL_OPTIONS.siteId;
    function br() {
        var i='browsi-js'; if (d.getElementById(i)) {return;}
        var siteId = /^[a-zA-Z0-9]{1,7}$/.test(w['_brSiteId']) ? w['_brSiteId'] : null;
        var js=d.createElement('script'); js.id=i; js.async=true;
        js.src='//js.brow.si/' + ( siteId != null ? siteId + '/' : '' ) + 'br.js';
        (d.head || d.getElementsByTagName('head')[0]).appendChild(js);
    }
    d.readyState == 'complete' ? br() :
        ( w.addEventListener ? w.addEventListener('load', br, false) : w.attachEvent('onload', br) );
})(window, document);
