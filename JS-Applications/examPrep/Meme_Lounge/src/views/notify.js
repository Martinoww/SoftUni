const element = document.getElementById('errorBox');

export function notify(msg){
    element.querySelector('span').textContent = msg;
    element.style.display = 'block'
setTimeout(()=> element.style.display = 'none', 3000)
}