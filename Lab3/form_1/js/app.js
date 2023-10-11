function check_Email(){
var input_Email = document.getElementById('email').value;
// var error_Email = document.getElementById('email-error');
var emailRegex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
if(emailRegex.test(input_Email)){
    document.getElementById('email-error').style.visibility = 'hidden';
}else{
    document.getElementById('email-error').style.visibility = 'visible';

}
}
function check_Phone(){
    var input_Phone = document.getElementById('phone').value;
    var phoneRegex = /^\d{10}$/;
    if(phoneRegex.test(input_Phone)){
        document.getElementById('phone-error').style.visibility = 'hidden';
    }else{
    document.getElementById('phone-error').style.visibility = 'visible';
        }
}
