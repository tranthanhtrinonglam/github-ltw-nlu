function checkName(){
    var input_name = document.getElementById('name').value;
    var check_name = document.getElementById('checkName');
    if(input_name === ''){
        check_name.style.visibility = 'visible';
    }else {
        check_name.style.visibility = 'hidden';
    }
}
function checkDay(){
    var input_day = document.getElementById('day').value;
    var check_day = document.getElementById('checkDay');
    if(input_day >= 1 && input_day <=31){
        check_day.style.visibility = 'hidden';
    }else {
        check_day.style.visibility = 'visible';
    }
}
function checkMonth(){
    var input_month = document.getElementById('month').value;
    var check_month = document.getElementById('checkMonth');
    if(input_month >= 1 && input_month <=12){
        check_month.style.visibility = 'hidden';
    }else {
        check_month.style.visibility = 'visible';
    }
}
function checkYear(){
    var input_year = document.getElementById('year').value;
    var check_year = document.getElementById('checkYear');
    if(input_year >= 1800 && input_year <=2023){
        check_year.style.visibility = 'hidden';
    }else {
        check_year.style.visibility = 'visible';
    }
}

    