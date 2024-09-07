// 获取所有的panel
const panels = document.querySelectorAll('.panel');
const container = document.querySelector('.container');

// 父组件监听子组件点击事件
container.addEventListener('click', function(event) {
    if (event.target === container) return;
    panels.forEach(panel => {
        if (panel === event.target) {
            panel.classList.add('active');
        } else {
            panel.classList.remove('active');
        }
    })
})