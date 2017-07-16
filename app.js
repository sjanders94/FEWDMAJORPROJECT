$( document ).ready(function() {

//zipcode is numbers only
function validate(inputnum){
      if(!/\D/.test(inputnum)){ 
        return true;
    } else {
        return false;
    }  
    alert("end of function");
    return false; 
}


 $("form").submit(function(){
     //ensuring that zipcode returns 
     //if($('#zipcode').val().length !== 0 ){
    if(!validate($('#zipcode').val())){
         alert("invalid number"); 
         return false;
    }
    alert("Yay, you entered the zipcode properly!");
    return true; 
});   

//ensuring all required fields have text
 $("form").submit(function(){
    if($('#name').val().length == 0 ) {
    alert("please enter name!");
} else {
}
    if($('#mail').val().length == 0 ) {
    alert("please enter email!");
    return false;
} else {
    if($('#address').val().length == 0 ) {
    alert("please enter address!");
    return false;
} else { 
    if($('#city').val().length == 0 ) {
    alert("please enter city!");
    return false;
} else {
    if($('#state').val().length == 0 ) {
    alert("please enter state!");
    return false; 
}else {
    if($('#zipcode').val().length == 0 ) {
    alert("please enter zipcode!");
    return false;
};
    alert("Successful Submission. Enjoy your movie!");
    return true;
}};
}}});
});

