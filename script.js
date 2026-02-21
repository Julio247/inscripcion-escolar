// Esperamos a que el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('registroForm');

    // Escuchamos el evento de envío
    formulario.addEventListener('submit', async (e) => {
        e.preventDefault(); // Evitamos que la página se recargue

        // Creamos un objeto con los datos del formulario
        const datos = new FormData(formulario);
        
        // Convertimos los datos a un objeto simple para poder manipularlos si fuera necesario
        const dataObjeto = Object.fromEntries(datos.entries());
        console.log("Datos capturados:", dataObjeto);

        try {
            // Enviamos los datos usando la API Fetch (Alto Nivel)
            const respuesta = await fetch(formulario.action, {
                method: 'POST',
                body: datos,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (respuesta.ok) {
                // Si la respuesta es correcta, ejecutamos la lógica de éxito
                mostrarExito();
                formulario.reset();
            } else {
                throw new Error('Error en la respuesta del servidor');
            }
        } catch (error) {
            console.error("Error detectado:", error);
            alert("Ocurrió un error al procesar el registro.");
        }
    });

    function mostrarExito() {
        // Manipulación del DOM para feedback visual
        const header = document.querySelector('header');
        const exitoDiv = document.getElementById('pantallaExito');
        
        formulario.classList.add('hidden');
        if(header) header.classList.add('hidden');
        exitoDiv.classList.remove('hidden');
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});
