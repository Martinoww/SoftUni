function validate() {
    let input = document.getElementById('email');
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/
    input.addEventListener('change', onChange);

    function onChange(){
        if(pattern.test(input.value)){
            input.classList.remove('error')
        }else {
            input.classList.add('error')
        }
    }
}