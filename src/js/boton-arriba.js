function irArriba(){
    window.addEventListener('scroll', () => {
        let scroll = document.documentElement.scrollTop;
        // console.log(scroll);
        let botonArriba = document.querySelector('#botonArriba');

        if(scroll > 2000) {
            botonArriba.style.right = 20 + "px";
        } else {
            botonArriba.style.right = -100 + "px";
        }
    })
}

irArriba();