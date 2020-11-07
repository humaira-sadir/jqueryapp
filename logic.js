


$(document).ready(function(){
var len=0;
$('.next').click(function(){
    //alert(len);

    var currentImg=$('.active');
    var nextImg=currentImg.next();
    len=nextImg.length;

    
if(len >0){
    currentImg.removeClass('active');
    nextImg.addClass('active');}

    setInterval(function(){ alert("Hello"); }, 2000);

});
$('.previous').click(function(){

    var currentImg=$('.active');
    var prevImg=currentImg.prev();

//alert(len);
if(prevImg.length>0){
    currentImg.removeClass('active');
    prevImg.addClass('active');
}
});

});