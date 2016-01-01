var app = {
    generateShortId: function() {
        return ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4);
    },
    loadNavbar: function(){
        $.ajax({
            url: '/taobao-shop/html/inc/navbar.html',
            success: function(res) {
                var template = Handlebars.compile(res);
                var html = template();
                $('body').prepend(html);
            }
        })
    },
    render:function(ele, source, data) {
        template = Handlebars.compile(source);
        $(ele).html(template(data));
    }
}

$(document).ready(function(){
    // app.loadHeader();
    app.loadNavbar();
});
