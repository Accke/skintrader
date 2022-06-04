function changeImage(){
    let displayImage = document.getElementById('target')
    if(displayImage.src.match('skins/katarina.jpg')){
        displayImage.src = 'skins/skin1.jpg'
    } else {
        displayImage.src = 'skins/katarina.jpg'
    }
}

const btn = document.getElementById('btn');
const p1 = document.getElementById('p1');

btn.addEventListener('click', function handleClick() {
  p1.textContent = 'ne smislja mi se tekst';
});

