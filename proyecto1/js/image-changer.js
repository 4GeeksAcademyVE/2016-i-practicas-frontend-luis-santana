
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    
    if(mySrc === 'img/bg1.png'){
        myImage.setAttribute('src','img/bg2.png');
    } else {
        if(mySrc === 'img/bg2.png'){
            myImage.setAttribute('src','img/bg3.png');
        } else {
            myImage.setAttribute('src','img/bg1.png');
        }
    }
}