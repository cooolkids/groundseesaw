$('.map-menu li a').click(function(e){
    e.preventDefault()
    let href=$(this).attr('href')

    $('.map-container li').removeClass('on')
    $(href).addClass('on')
    
    $('.map-menu li a').removeClass('on')
    $(this).addClass('on')
})





