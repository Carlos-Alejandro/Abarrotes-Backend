/**
 * @swagger
 * tags:
 *   - name: CierresCaja
 *     description: Operaciones relacionadas con el cierre de caja

 * /api/cierreCaja:
 *   get:
 *     tags: [CierresCaja]
 *     summary: Obtener todos los cierres de caja
 *     security: [ bearerAuth: [] ]
 *     responses:
 *       200:
 *         description: Lista de cierres

 *   post:
 *     tags: [CierresCaja]
 *     summary: Crear un cierre de caja
 *     security: [ bearerAuth: [] ]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CierreCaja'
 *     responses:
 *       201:
 *         description: Cierre creado

 * /api/cierreCaja/{id}:
 *   get:
 *     tags: [CierresCaja]
 *     summary: Obtener un cierre por ID
 *     security: [ bearerAuth: [] ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cierre encontrado

 *   put:
 *     tags: [CierresCaja]
 *     summary: Actualizar cierre por ID
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
 *             $ref: '#/components/schemas/CierreCaja'
 *     responses:
 *       200:
 *         description: Actualizado

 *   delete:
 *     tags: [CierresCaja]
 *     summary: Eliminar cierre por ID
 *     security: [ bearerAuth: [] ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Eliminado correctamente
 */

