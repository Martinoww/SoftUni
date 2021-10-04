function focused() {
    let fields = Array.from(document.getElementsByTagName('input'));
    fields.forEach(f => {
        f.addEventListener('focus', (ev) => {ev.target.parentNode.classList.add('focused');});
        f.addEventListener('blur', (ev) => {ev.target.parentNode.classList.remove('focused');});
    });
}