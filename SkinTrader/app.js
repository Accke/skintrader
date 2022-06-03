function changeImage(){
    let displayImage = document.getElementById('target')
    if(displayImage.src.match('skins/katarina.jpg')){
        displayImage.src = 'skins/skin1.jpg'
    } else {
        displayImage.src = 'skins/katarina.jpg'
    }
}