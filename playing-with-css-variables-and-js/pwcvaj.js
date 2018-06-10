window.addEventListener('load', () => {
    const spacingSlider = document.getElementById('spacing');
    const blurSlider = document.getElementById('blur');
    const colorPicker = document.getElementById('color-picker');
    const content = document.getElementById('content');
    const image = document.querySelector('.content img');
    spacingSlider.addEventListener('input', e => {
        content.style.padding = `${e.target.value}px`;
    });
    blurSlider.addEventListener('input', e => {
        image.style.filter = `blur(${e.target.value/10}px)`;
    });
    colorPicker.addEventListener('change', e => {
        content.style.backgroundColor = e.target.value;
    });
}, false);