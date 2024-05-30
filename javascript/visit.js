$('.map-menu li').click(function (e) {
    e.preventDefault()
    let idx = $(this).index()
    $('.map-menu li').removeClass('on')
    $(this).addClass('on')

    $('.map-img').removeClass('on')
    $('.map-img').eq(idx).addClass('on')

    $('.exhibitions').removeClass('on')
    $('.exhibitions').eq(idx).addClass('on')
    
   
    $('.video li').removeClass('on')
    $('.video li').eq(idx).addClass('on')
})

$('a.close').click(function(){
    $('.video li').fadeOut()
})