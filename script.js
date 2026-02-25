document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('registroForm');
    const pantallaExito = document.getElementById('pantallaExito');
    const header = document.getElementById('mainHeader');

    // FUNCIÓN PARA OCULTAR TODO Y MOSTRAR ÉXITO
    const mostrarExitoBloqueado = () => {
        if(formulario) formulario.style.display = 'none';
        if(header) header.style.display = 'none';
        if(pantallaExito) pantallaExito.classList.remove('hidden');
    };

    // 1. CHEQUEO DE "ALTO NIVEL" AL CARGAR (BLOQUEO F5)
    if (localStorage.getItem('estudianteInscrito') === 'true') {
        mostrarExitoBloqueado();
    }

    // 2. LÓGICA DE ENVÍO
    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const btn = document.getElementById('btnEnviar');
        btn.textContent = "Guardando en Base de Datos...";
        btn.disabled = true;

        const datos = new FormData(formulario);

        try {
            const respuesta = await fetch(formulario.action, {
                method: 'POST',
                body: datos,
                headers: { 'Accept': 'application/json' }
            });

            if (respuesta.ok) {
                // GUARDAR LA MARCA EN EL NAVEGADOR DEL USUARIO
                localStorage.setItem('estudianteInscrito', 'true');
                
                // CAMBIAR LA VISTA
                mostrarExitoBloqueado();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                throw new Error('Error');
            }
        } catch (error) {
            alert("No se pudo completar el registro. Intente de nuevo.");
            btn.textContent = "FINALIZAR E INSCRIBIR";
            btn.disabled = false;
        }
    });
});


