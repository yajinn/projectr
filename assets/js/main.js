/*
 * Author    :Yasin Coşkun
 * Kullanacağımız tüm fonksiyonları kullanım yerlerine,alanlarına göre classlara ayırdım, site classı içinde bulunan fonksiyonlar sitenin tamamında kullanacağım
 * fonksiyonları içeriyor, diğerleride kullanılacak sayfalara göre ayırdım. yüklendiğinde çalışması gereken fonksiyonları ready'de tanımladım
 */
$(document).ready(function () {
    //INIT
    site.placeholder();
    site.tooltip();
    site.modal();
    site.alert("Fallr kullanım örneği, detaylı bilgi için Yasin'e müracaat ediniz");
});

site = {
    //PLACEHOLDER OLD BROWSER FIXED
    placeholder: function () {
        $('input, textarea').placeholder();
    },
    //TOOLTIP ENGINE
    tooltip: function () {
        $(".tipFocus").tipsy({ gravity: "s", html: true, offset: 5, opacity: 1, trigger: "focus", fade: true, input: true });
        $(".tipOver").tipsy({ gravity: "s", html: true, offset: 5, opacity: 1, trigger: "hover", fade: true, input: true });
    },
    //DEFAULT MODAL
    modal: function () {
        $(".modal").fancybox({
            closeBtn: false,
            scrolling: 'no',
            autoDimensions: false,
            width: 480,
            height: 550,
            minWidth: 480,
            minHeight: 550,
            padding: 0
        });
    },
    //ALERT FUNCTION
    alert:function(message){
        $.fallr('show', {
            closeKey        : true,
            closeOverlay    : true,
            content         : '<p>'+ message +'</p>',
            icon            : 'info'
        });
    }
}
home = {

}
details = {

}

list = {

}

login = {

}