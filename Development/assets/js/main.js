$(function(){
 // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });

});

$("#minu-qty").click(function(){
const qtys = parseInt($("#qty").val(), 10);
if(qtys == 1){
    alert('Minimum 1 Quantity Required')
} else {
    const upQty = qtys - 1;
    $("#qty").val(upQty);

}
});

$("#plus-qty").click(function(){
const qtys = parseInt($("#qty").val(), 10);
const up = 1;
const upQty = qtys + up;
$("#qty").val(upQty);
});