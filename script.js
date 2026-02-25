document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('registroForm');
    const pantallaExito = document.getElementById('pantallaExito');
    const header = document.getElementById('mainHeader');

    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Cambio visual inmediato para feedback
        const btn = document.getElementById('btnEnviar');
        btn.textContent = "Procesando...";
        btn.disabled = true;

        const datos = new FormData(formulario);

        try {
            // Petición de alto nivel usando Fetch API y await
            const respuesta = await fetch(formulario.action, {
                method: 'POST',
                body: datos,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (respuesta.ok) {
                // Ocultamos el formulario y el header definitivamente
                formulario.style.display = 'none';
                if(header) header.style.display = 'none';
                
                // Mostramos la pantalla de éxito
                pantallaExito.classList.remove('hidden');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                throw new Error('Error en el servidor');
            }
        } catch (error) {
            console.error("Error al enviar:", error);
            alert("Hubo un problema. Intente nuevamente.");
            btn.textContent = "REGISTRAR INSCRIPCIÓN";
            btn.disabled = false;
        }
    });
});

