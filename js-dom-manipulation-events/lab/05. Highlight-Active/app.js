function focused() {
    let sectionElements = document.querySelectorAll('input');
    let sectionElementsArray = Array.from(sectionElements);
    
    sectionElementsArray.forEach(x => {
        x.addEventListener('focus', function() {
            x.parentElement.classList.add('focused');
        })
    })

    sectionElementsArray.forEach(x => {
        x.addEventListener('blur', function() {
            x.parentElement.classList.remove('focused');
        })
    })
}