document.addEventListener("DOMContentLoaded", () => {

    const botonEnviar = document.querySelector("#enviar");
    const email = document.querySelector("#email");
    const iconoError = document.querySelector("#error-icono");
    const textoError = document.querySelector("#error-texto");
    const exitoTexto = document.querySelector("#exito-texto");

    let textoEmail;


    email.addEventListener("change", (e) => {
        textoEmail = e.target.value;
    });



    botonEnviar.addEventListener("click", (e, email) => {
        e.preventDefault();

        email = textoEmail;

        if (!validarEmail(email)) {

            iconoError.style.display = "block";
            textoError.style.display = "block";

            setTimeout(() => {
                iconoError.style.display = "none";
                textoError.style.display = "none";
            }, 2000);
        } else {
            exitoTexto.style.display = "block";

            setTimeout(() => {
                exitoTexto.style.display = "none";
            }, 2000);
        }
    });


    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }


})