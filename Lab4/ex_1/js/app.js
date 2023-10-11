var background_color = document.querySelectorAll('.btn');
var background = document.getElementById('container');
background_color.forEach(function(button){ // duyet qua tung button
    button.addEventListener('click', function(){
        background.className = button.classList[1]; // gan className cua container = truy cap toi class thu 2 cua tung button
    })
});
