const img = document.getElementById('pannable-image');
let isPanning = false;
let startX, startY, initialX, initialY;
let scale = 1;
let originX = 0;
let originY = 0;
const minScale = 2;
const maxScale = 5;

//keybinds for moving the map
document.addEventListener('keydown', (e) => {
    const rect = img.getBoundingClientRect();
    const offsetX = rect.width / 2;
    const offsetY = rect.height / 2;
    let delta = 1;

    switch (e.key) {
        case '+':
        case '=':
            delta = 1.05;
            break;
        case '-':
            delta = 0.95;
            break;
        case 'ArrowUp':
            if(570 >= img.offsetTop){ //bounds for moving the map around
                img.style.top = `${img.offsetTop + 15}px`;
                console.log(img.offsetTop);
            }
            return;
        case 'ArrowDown':
            if(-565 <= img.offsetTop){
            img.style.top = `${img.offsetTop - 15}px`;
            console.log(img.offsetTop);
            }
            return;
        case 'ArrowLeft':
            if(1100 >= img.offsetLeft){
                img.style.left = `${img.offsetLeft + 15}px`;
                console.log(img.offsetLeft);
            }
            return;
        case 'ArrowRight':
            if(img.offsetLeft >= -675){
                img.style.left = `${img.offsetLeft - 15}px`;
                console.log(img.offsetLeft);
            }
            return;
        default:
            return;
    }

    const newScale = Math.min(maxScale, Math.max(minScale, scale * delta));
    const scaleChange = newScale / scale;
    scale = newScale;
    originX = offsetX / scale + originX - offsetX / (scale * scaleChange);
    originY = offsetY / scale + originY - offsetY / (scale * scaleChange);
    img.style.transform = `scale(${scale}) translate(${-originX}px, ${-originY}px)`;
});

// Prevent default zoom behavior on touch devices
document.addEventListener('touchmove', (e) => {
    if (e.scale !== 1) {
        e.preventDefault();
    }
}, { passive: false });