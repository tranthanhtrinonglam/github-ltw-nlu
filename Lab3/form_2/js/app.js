function checkUser(){
    var input_user = document.getElementById('user').value;
    var check_user = document.getElementById('user__email-error');
    let u_length = input_user.length;
    if(input_user === ''){
        check_user.style.visibility = 'visible';
    }else if (input_user !== '' && u_length < 8){
        check_user.innerHTML = 'Vui lòng nhập ít nhất 8 kí tự';
    }else {
        check_user.innerHTML = '';
        check_user.style.visibility = 'hidden';
    }
}
function checkPass(){
    var input_password = document.getElementById('password').value;
    var check_password = document.getElementById('password-error');
    let p_length = input_password.length;
    if(input_password === ''){
        check_password.style.visibility = 'visible';
    }else if (input_password !== '' && p_length < 8){
        check_password.innerHTML = 'Vui lòng nhập ít nhất 8 kí tự';
    }else {
        check_password.innerHTML = '';
        dcheck_password.style.visibility = 'hidden';
    }
}

    