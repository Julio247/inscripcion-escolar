document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('registroForm');
    const pantallaExito = document.getElementById('pantallaExito');
    const header = document.getElementById('mainHeader');

    // Función para limpiar la vista y mostrar el éxito
    const bloquearAcceso = () => {
        if(formulario) formulario.style.display = 'none';
        if(header) header.style.display = 'none';
        if(pantallaExito) pantallaExito.classList.remove('hidden');
    };

    // Verificar si ya se registró antes (Protección F5)
    if (localStorage.getItem('yaRegistrado') === 'true') {
        bloquearAcceso();
    }

    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const btn = document.getElementById('btnEnviar');
        btn.textContent = "Procesando inscripción...";
        btn.disabled = true;

        const datos = new FormData(formulario);

        try {
            const respuesta = await fetch(formulario.action, {
                method: 'POST',
                body: datos,
                headers: { 'Accept': 'application/json' }
            });

            if (respuesta.ok) {
                // Guardar marca de registro en el navegador
                localStorage.setItem('yaRegistrado', 'true');
                
                // Mostrar pantalla de éxito definitiva
                bloquearAcceso();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                throw new Error('Error en el servidor');
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un error al enviar. Por favor, intente de nuevo.");
            btn.textContent = "FINALIZAR E INSCRIBIR";
            btn.disabled = false;
        }
    });
});
