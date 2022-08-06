
const submit = document.getElementById('login');

submit.addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if(email.value == "pruebaJorge@alura.com"){
        if(password.value == "12345678"){
            window.location.href = './productos.html'
        } else {
            
            alert("Contraseña es incorrecto")
        }
    } else {
        
        alert("El email y/o la contraseña es incorrecto")
    }
})


