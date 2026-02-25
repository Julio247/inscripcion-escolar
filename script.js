<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscripción Escolar - Primaria</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header id="mainHeader">
            <h1>Prosecución de Educación Primaria</h1>
            <p>Sistema de Registro Estudiantil</p>
        </header>

        <form id="registroForm" action="https://formsubmit.co/loshhidalgo4@gmail.com" method="POST">
            
            <fieldset>
                <legend>Información Académica</legend>
                <div class="row">
                    <div class="input-group"><label>Grado:</label><input type="text" name="grado" required></div>
                    <div class="input-group"><label>Sección:</label><input type="text" name="seccion" required></div>
                </div>
            </fieldset>

            <fieldset>
                <legend>Datos del Estudiante</legend>
                <div class="row">
                    <div class="input-group"><label>Nombres:</label><input type="text" name="nombres" required></div>
                    <div class="input-group"><label>Apellidos:</label><input type="text" name="apellidos" required></div>
                </div>
                <div class="row">
                    <div class="input-group"><label>Cédula / ID:</label><input type="text" name="cedula"></div>
                    <div class="input-group"><label>Fecha de Nacimiento:</label><input type="date" name="fecha_nacimiento" required></div>
                </div>

                <p style="margin-top: 15px; color: #444; font-weight: bold; font-size: 0.9em;">Lugar de Nacimiento:</p>
                <div class="row">
                    <div class="input-group"><label>Estado:</label><input type="text" name="estado_nac" required></div>
                    <div class="input-group"><label>Municipio:</label><input type="text" name="municipio_nac" required></div>
                    <div class="input-group"><label>Parroquia:</label><input type="text" name="parroquia_nac" required></div>
                </div>

                <div class="row">
                    <div class="input-group"><label>Edad:</label><input type="number" name="edad" required></div>
                    <div class="input-group full-width"><label>Dirección de Habitación:</label><input type="text" name="direccion" required></div>
                </div>
            </fieldset>

            <fieldset>
                <legend>Tallas y Salud</legend>
                <div class="row">
                    <div class="input-group"><label>Talla Camisa:</label><input type="text" name="talla_camisa"></div>
                    <div class="input-group"><label>Talla Pantalón:</label><input type="text" name="talla_pantalon"></div>
                    <div class="input-group"><label>Talla Zapato:</label><input type="text" name="talla_zapato"></div>
                </div>
                <div class="row">
                    <div class="input-group"><label>Peso (kg):</label><input type="text" name="peso"></div>
                    <div class="input-group"><label>Estatura (cm):</label><input type="text" name="estatura"></div>
                </div>
            </fieldset>

            <input type="hidden" name="_captcha" value="false">
            <button type="submit" id="btnEnviar">FINALIZAR E INSCRIBIR</button>
        </form>

        <div id="pantallaExito" class="hidden">
            <div class="success-card">
                <div class="check-icon">✓</div>
                <h2>Inscripción Completada</h2>
                <p>Usted ya ha realizado el registro para este periodo escolar.</p>
                <div style="margin-top: 20px; padding: 10px; background: #f0f0f0; border-radius: 5px; font-size: 0.8em; color: #666;">
                    Sistema bloqueado para evitar duplicados (F5 inhabilitado).
                </div>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

