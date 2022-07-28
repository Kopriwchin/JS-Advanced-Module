function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let resultElement = document.getElementById('result');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);
    function gradientMove(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        resultElement.textContent = power + "%";
    }
    function gradientOut() {
        resultElement.textContent = "";
    }
};
