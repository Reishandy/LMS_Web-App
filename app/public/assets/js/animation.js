// Animations functions
function grow(element, scale = 1.2) {
    anime({
        targets: element,
        scale: scale,
        duration: 100,
        easing: 'easeOutQuad'
    })
}

function shrink(element) {
    anime({
        targets: element,
        scale: 1,
        duration: 100,
        easing: 'easeOutQuad'
    })
}

function enter(element) {
    anime({
        targets: element,
        scale: [0, 1],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutBack'
    })
}

function leave(element) {
    anime({
        targets: element,
        scale: 0,
        opacity: 0,
        duration: 500,
        easing: 'easeInBack'
    })
}