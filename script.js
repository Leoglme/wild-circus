$(function(){
    
    $(".navbar a, footer .lienacceuil").on("click", function(event){
        
        event.preventDefault();
        var hash = this.hash;
        
        $('body, html').animate({scrollTop: $(hash).offset().top}, 800 , function(){window.location.hash = hash;})
    })    
})