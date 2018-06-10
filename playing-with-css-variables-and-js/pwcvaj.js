window.addEventListener('load', () => {
    // I did.
    /*
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
    */

    // Tutorial did.
    const inputs = document.querySelectorAll('.control-item input');
    const handleUpdate = (e) => {
        //If using "this", means the whole window load event. 
        const unit = e.target.dataset.unit || '';
        document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + unit);
    }
    // inputs.forEach(i => i.addEventListener('change', handleUpdate));
    // inputs.forEach(i => i.addEventListener('mousemove', handleUpdate));
    inputs.forEach(i => i.addEventListener('input', handleUpdate));
    
    
}, false);