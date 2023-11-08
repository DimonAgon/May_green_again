
function unRollScroll(){
    const indicator = document.getElementById('scroll-indicator')
    indicator.style.visibility = 'hidden'

    const rolled = document.getElementsByClassName('rolled');
    for (const element of rolled) {
        element.style.display = 'none';
    }

    const unrolled = document.getElementsByClassName('unrolled');
    for (const element of unrolled) {
        element.style.display = 'block';
    }

    const goodsList = document.getElementById('goods-list');
    goodsList.style.opacity = 'initial';
}

function rollScroll(){
    const indicator = document.getElementById('scroll-indicator')
    indicator.style.visibility = 'initial'

    const rolled = document.getElementsByClassName('rolled');
    for (const element of rolled) {
        element.style.display = 'block';
    }

    const unrolled = document.getElementsByClassName('unrolled');
    for (const element of unrolled) {
        element.style.display = 'none';
    }

    const goodsList = document.getElementById('goods-list');
    goodsList.style.opacity = '0';
}
