var greeting = document.querySelector('.greeting');
var greetings = ['Xin chào!','Rất vui được gặp bạn!', 'Chào bạn !', 'Chào mừng bạn đến với tụi mình!'];
function hi(){ 
   var random = Math.floor(Math.random() * greetings.length);
   return greetings[random];
};
greeting.textContent = hi(); 