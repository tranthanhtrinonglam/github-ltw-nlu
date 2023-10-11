function count_B(){
    var a = document.getElementById('A').value;
    var b = document.getElementById('B').value;
    var count = 0;
    if(a !== '' && b !== ''){
        // neu moi g thi phan biet hoa thuong, con i thi khong phan biet 
        var regex = new RegExp(b,'gi');
        var matches = a.match(regex);
        if(matches){
            count = matches.length;
        }
    }
    document.getElementById('result').value= 'Số lần \"' + b+ '\" xuất hiện trong '+ a + ': '+count;
}
