$(document).ready(function(){
    $(document).on("click",".product-block",function(){
        if( $(this).hasClass("id1")){
           alert('+');
           window.location = "asics.html"
        }
        else if( $(this).hasClass("id2")){
           alert('+2');
        }
        else{
            alert('-');
        }
    });
});