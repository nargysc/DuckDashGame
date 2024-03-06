duck = document.querySelector(' .duck');
cursor = document.querySelector(' .cursor');
blood = document.querySelector(' .blood');
audio = document.querySelector('audio');
button = document.querySelector('button');

//screenWidth = body.offsetWidth;
//screenHeight = body.offsetHeight;

window.addEventListener('mousemove',function(e){
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
})

window.addEventListener('mousemove',function(e){
    blood.style.left = e.pageX + "px";
    blood.style.top = e.pageY + "px";
})

blood.style.display = 'none';
window.addEventListener('click', function(e){
        blood.style.display = `block`;
   setTimeout(function(){
    blood.style.display = `none`;
   },1000)
   audio.play()
})