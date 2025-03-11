const mapContent = document.getElementById('map-content');
const img = document.getElementById('pannable-image');
let isPanning = false;
let startX, startY, initialX, initialY;
let scale = 1;
let originX = 0;
let originY = 0;
const minScale = 1;
const maxScale = 3;

const maxOffsetXn = -675;
const maxOffsetXp = 1100;
const maxOffsetYn = -565;
const maxOffsetYp = 570;


//keybinds for moving the map
document.addEventListener('keydown', (e) => {
    const rect = mapContent.getBoundingClientRect();
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
            if(maxOffsetYp >= mapContent.offsetTop){ //bounds for moving the map around
                mapContent.style.top = `${mapContent.offsetTop + 15}px`;
                console.log(mapContent.offsetTop);
            }
            return;
        case 'ArrowDown':
            if(maxOffsetYn <= mapContent.offsetTop){
            mapContent.style.top = `${mapContent.offsetTop - 15}px`;
            console.log(mapContent.offsetTop);
            }
            return;
        case 'ArrowLeft':
            if(maxOffsetXp >= mapContent.offsetLeft){
                mapContent.style.left = `${mapContent.offsetLeft + 15}px`;
                console.log(mapContent.offsetLeft);
            }
            return;
        case 'ArrowRight':
            if(mapContent.offsetLeft >= maxOffsetYn){
                mapContent.style.left = `${mapContent.offsetLeft - 15}px`;
                console.log(mapContent.offsetLeft);
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
    mapContent.style.transform = `scale(${scale}) translate(${-originX}px, ${-originY}px)`;
});

// Prevent default zoom behavior on touch devices
document.addEventListener('touchmove', (e) => {
    if (e.scale !== 1) {
        e.preventDefault();
    }
}, { passive: false });