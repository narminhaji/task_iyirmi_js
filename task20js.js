
const btn = document.getElementById("button");
let d = true; 
let i = 0;
btn.addEventListener('click', function () {
    if (d === true && i <= 10) {
        btn.textContent = `BUTTON ${i++} `;
        if (i === 10) {
            d = !d;
        }
    }
    else if (d === false && i >= 0) {
        btn.textContent = `Click me ${i--}  `;
        if (i === 0) {
            d = !d;
        }
    }
});