/**
 * @swagger
 * /api/usuarios/registrar:
 *   post:
 *     tags:
 *       - Usuarios
 *     summary: Registrar un nuevo usuario (con contraseña encriptada)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - email
 *               - password
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Carlos"
 *               email:
 *                 type: string
 *                 example: "carlos@example.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *               rol:
 *                 type: string
 *                 example: "admin"
 *     responses:
 *       201:
 *         description: Usuario registrado
 *       400:
 *         description: El usuario ya existe
 */
