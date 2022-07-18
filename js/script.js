function checkIfOnTop() {
    return (window.scrollY == 0);
}

function makeElemAppear(id) {
    const elem = document.getElementById(id);
    elem.style.display = 'block';
}

function makeElemDesappear(id) {
    const elem = document.getElementById(id);
    elem.style.display = "none";
}

function scrollListener() {
    document.addEventListener('scroll', () => {
        console.log('scrolled!');
        if (checkIfOnTop()) {
            makeElemDesappear('top-arrow');
        }else {
            makeElemAppear('top-arrow');
        }
    });
}

scrollListener();