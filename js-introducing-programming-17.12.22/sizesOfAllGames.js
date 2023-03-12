let trList = document.querySelectorAll('tr');
let sizeSum = 1;

trList.forEach(x => {
    if (!(isNaN(String(x.childNodes[1].textContent).slice(0, -3)))) {
        if (!(String(x.childNodes[1].textContent).indexOf(-3) == 'K')) {
            let size = String(x.childNodes[1].textContent).slice(0, -3);
            sizeSum += Number(size);
        }
    }
    
});
console.log('\n');
console.log(Number(sizeSum / 1024).toFixed(2) + 'GB');