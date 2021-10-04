function encodeAndDecodeMessages() {
    document.getElementsByTagName('button')[0].addEventListener('click', encodeAndSend);
    document.getElementsByTagName('button')[1].addEventListener('click', decodeAndRead);
    const [encodeArea, decodeArea] = [...document.querySelectorAll('#main textarea')];
    
    function encodeAndSend(e){
        decodeArea.value = encodeArea.value.split('').map(c => String.fromCharCode(c.charCodeAt() + 1)).join('');
        encodeArea.value = '';
    };
    
    function decodeAndRead(e){
    decodeArea.value = decodeArea.value.split('').map(c => String.fromCharCode(c.charCodeAt() - 1)).join('');
    };
}