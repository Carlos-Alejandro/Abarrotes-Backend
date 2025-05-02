/**
 * @swagger
 * tags:
 *   - name: Proveedores
 *     description: CRUD de proveedores registrados

 * /api/proveedores:
 *   get:
 *     tags: [Proveedores]
 *     summary: Obtener todos los proveedores
 *     security: [ bearerAuth: [] ]
 *     responses:
 *       200:
 *         description: Lista de proveedores

 *   post:
 *     tags: [Proveedores]
 *     summary: Crear un proveedor
 *     security: [ bearerAuth: [] ]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Proveedor'
 *     responses:
 *       201:
 *         description: Proveedor creado

 * /api/proveedores/{id}:
 *   get:
 *     tags: [Proveedores]
 *     summary: Obtener proveedor por ID
 *     security: [ bearerAuth: [] ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Proveedor encontrado

 *   put:
 *     tags: [Proveedores]
 *     summary: Actualizar proveedor por ID
 *     security: [ bearerAuth: [] ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Proveedor'
 *     responses:
 *       200:
 *         description: Proveedor actualizado

 *   delete:
 *     tags: [Proveedores]
 *     summary: Eliminar proveedor por ID
 *     security: [ bearerAuth: [] ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Proveedor eliminado
 */
