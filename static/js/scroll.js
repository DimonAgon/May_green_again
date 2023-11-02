
function unRollScroll(){
    const scroll = document.getElementById('scroll')
    scroll.style.color = 'transparent'

    const outer_bundle_elements = document.getElementsByClassName('outer-bundle');
    for (const element of outer_bundle_elements) {
    element.style.fill = 'none';
    element.style.stroke = 'none';
    }

    const inner_bundle_elements = document.getElementsByClassName('inner-bundle');
    for (const element of inner_bundle_elements) {
        element.style.fill = 'white';
        element.style.stroke = 'black';
    }

    const goodsList = document.getElementById('goods-list');
    goodsList.style.opacity = 'initial';
}

function rollScroll(){
    const scroll = document.getElementById('scroll')
    scroll.style.color = 'black'

    const inner_bundle_elements = document.getElementsByClassName('inner-bundle');
    for (const element of inner_bundle_elements) {
        element.style.fill = 'none';
        element.style.stroke = 'none';
    }

    const outer_bundle_elements_lit = document.querySelectorAll('.outer-bundle.lit');
    for (const element of outer_bundle_elements_lit) {
        element.style.fill = 'white';
        element.style.stroke = 'black';
    }

    const outer_bundle_elements_shadowed = document.querySelectorAll('.outer-bundle.shadowed');
    for (const element of outer_bundle_elements_shadowed) {
        element.style.fill = '#D9D9D9';
        element.style.stroke = 'black';
    }

    const goodsList = document.getElementById('goods-list');
    goodsList.style.opacity = '0';
}
