<h1 align="center">🛒 Sistema de Abarrotes – Backend API</h1>

<p align="center">
  <strong>API RESTful construida con Node.js, Express y MongoDB</strong><br />
  Gestiona productos, clientes, ventas, proveedores, cierres de caja y usuarios.<br />
  <em>Autenticación segura con JWT y documentación interactiva con Swagger</em>
</p>

---

## 🚀 Características

<ul>
  <li>✅ Autenticación segura con <strong>JWT</strong></li>
  <li>✅ CRUD completo: productos, clientes, ventas, proveedores y usuarios</li>
  <li>✅ Control de cierre de caja diario</li>
  <li>✅ Documentación interactiva con <strong>Swagger</strong></li>
  <li>✅ Middleware para proteger rutas privadas</li>
  <li>✅ Estructura <strong>modular y mantenible</strong></li>
  <li>✅ Base de datos MongoDB con <strong>Mongoose</strong></li>
</ul>

---

## 📁 Estructura del proyecto

<pre>
carlos-alejandro-abarrotes-backend/
│
├── config/             # Configuración de base de datos
├── controllers/        # Lógica de negocio por entidad
├── docs/               # Documentación Swagger
├── middlewares/        # Middleware de autenticación
├── models/             # Modelos Mongoose
├── routes/             # Definición de rutas por módulo
├── server.js           # Entrada principal del servidor
└── .env                # Variables de entorno (excluido del repo)
</pre>

---

## ⚙️ Instalación y ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/abarrotes-backend.git
cd abarrotes-backend
2. Instala las dependencias
bash
Copiar
Editar
npm install
3. Crea un archivo .env en la raíz con el siguiente contenido:
env
Copiar
Editar
PORT=3000
MONGO_URI=mongodb://localhost:27017/abarrotes_db
JWT_SECRET=tu_clave_secreta
4. Inicia el servidor
bash
Copiar
Editar
node server.js
🧪 Endpoints principales
<table> <thead> <tr> <th>Recurso</th> <th>Ruta base</th> <th>Requiere Token</th> </tr> </thead> <tbody> <tr><td><strong>Auth</strong></td><td><code>/api/auth</code></td><td>❌ No</td></tr> <tr><td><strong>Productos</strong></td><td><code>/api/productos</code></td><td>✅ Sí</td></tr> <tr><td><strong>Clientes</strong></td><td><code>/api/clientes</code></td><td>✅ Sí</td></tr> <tr><td><strong>Ventas</strong></td><td><code>/api/ventas</code></td><td>✅ Sí</td></tr> <tr><td><strong>Proveedores</strong></td><td><code>/api/proveedores</code></td><td>✅ Sí</td></tr> <tr><td><strong>Usuarios</strong></td><td><code>/api/usuarios</code></td><td>❌ Solo registro</td></tr> <tr><td><strong>Cierre Caja</strong></td><td><code>/api/cierreCaja</code></td><td>✅ Sí</td></tr> </tbody> </table>
📘 Documentación Swagger
📍 Abre en tu navegador:
<a href="http://localhost:3000/api-docs" target="_blank"><code>http://localhost:3000/api-docs</code></a>

🔍 Explora todos los endpoints, visualiza esquemas y prueba respuestas en tiempo real.

🔐 Autenticación
Cuando inicies sesión recibirás un token JWT.
Para usar rutas protegidas, debes incluir el siguiente encabezado:

http
Copiar
Editar
Authorization: Bearer <tu_token_aquí>
👨‍💻 Autor
<table> <tr> <td><strong>👤 Nombre:</strong></td> <td>Carlos Alejandro</td> </tr> <tr> <td><strong>📧 Email:</strong></td> <td><a href="mailto:carlos@example.com">carlos@example.com</a></td> </tr> <tr> <td><strong>📍 Ubicación:</strong></td> <td>Cancún, México</td> </tr> </table>
📝 Licencia
Este proyecto está licenciado bajo ISC.
Puedes usarlo, adaptarlo y distribuirlo libremente.

🧠 Próximas mejoras
🔄 Validaciones con express-validator

🔐 Manejo avanzado de roles (admin / empleado)

📊 Dashboard con métricas e informes

🖼️ Subida de imágenes para productos

💥 Mejor manejo de errores y respuestas

<p align="center"> ⭐ Si te gustó este proyecto, considera dejar una estrella en GitHub. </p> ```
