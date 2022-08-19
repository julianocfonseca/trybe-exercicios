const enviar = document.getElementById('send');
const termo = document.getElementById('termos');

termo.addEventListener('click', (e) => {
    if(e.target.checked){
        enviar.disabled = false;
    } else {
        enviar.disabled = true;
    }
});

enviar.addEventListener('click', (e) => {
    // e.preventDefault();
})