duck = document.querySelector(' .duck');
cursor = document.querySelector(' .cursor');
blood = document.querySelector(' .blood');
audio = document.querySelector('audio');
button = document.querySelector('button');


window.addEventListener('mousemove',function(e){
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
})