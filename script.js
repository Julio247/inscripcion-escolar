document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const G_URL = 'https://docs.google.com/forms/d/e/TU_ID_AQUÍ/formResponse';
    const formData = new FormData();
    
    // Mapeo básico de campos
    formData.append('entry.111', document.getElementById('grado').value);
    formData.append('entry.222', document.getElementById('seccion').value);
    formData.append('entry.333', document.getElementById('nombres').value);
    formData.append('entry.444', document.getElementById('apellidos').value);
    formData.append('entry.555', document.getElementById('edad').value);
    formData.append('entry.666', document.getElementById('direccion').value);

    fetch(G_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    }).then(() => {
        document.getElementById('mensajeExito').classList.remove('hidden');
        this.reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }).catch(err => console.error("Error al enviar", err));
});

fetch(G_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    }).then(() => {
        // OCULTAR EL FORMULARIO Y EL HEADER
        document.getElementById('registroForm').classList.add('hidden');
        document.querySelector('header').classList.add('hidden');

        // MOSTRAR LA PANTALLA DE ÉXITO
        document.getElementById('pantallaExito').classList.remove('hidden');
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }).catch(err => {
        alert("Error al enviar. Intente de nuevo.");
    });