function attachGradientEvents() {
   document.getElementById('gradient').addEventListener('mousemove', onMove);

   function onMove(ev){
       let box = ev.target;
       let result = Math.floor(ev.offsetX / box.clientWidth * 100);
       document.getElementById('result').textContent = `${result}%`
   }
}