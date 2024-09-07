const progress = document.querySelector('#progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    updateProgress()
})

prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }
    updateProgress()
})

function updateProgress() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    const total = circles.length
    const actives = document.querySelectorAll('.active').length
    const percentage = ((actives - 1) / (total - 1)) * 100
    progress.style.width = `${percentage}%`

    // btn status
    if (actives === 1) {
        prev.classList.add('disabled')
    } else if (actives === circles.length) {
        next.classList.add('disabled')
    } else {
        prev.classList.remove('disabled')
        next.classList.remove('disabled')
    }
}