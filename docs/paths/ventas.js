/**
 * @swagger
 * tags:
 *   - name: Ventas
 *     description: Registro y consulta de ventas
 *
 * /api/ventas:
 *   get:
 *     tags:
 *       - Ventas
 *     summary: Obtener todas las ventas
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de ventas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Venta'
 *
 *   post:
 *     tags:
 *       - Ventas
 *     summary: Registrar una nueva venta
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Venta'
 *           example:
 *             cliente: "Juan Pérez"
 *             productos:
 *               - nombre: "Jabón en barra"
 *                 cantidad: 2
 *                 precioUnitario: 15.5
 *               - nombre: "Cloro 1L"
 *                 cantidad: 1
 *                 precioUnitario: 12
 *             total: 43
 *             tipoPago: "Efectivo"
 *             fecha: "2024-03-25T10:15:00.000Z"
 *     responses:
 *       201:
 *         description: Venta registrada
 *       400:
 *         description: Error al registrar venta
 *
 * /api/ventas/{id}:
 *   get:
 *     tags:
 *       - Ventas
 *     summary: Obtener una venta por ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Venta encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venta'
 *       404:
 *         description: Venta no encontrada
 *
 *   put:
 *     tags:
 *       - Ventas
 *     summary: Actualizar una venta por ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Venta'
 *           example:
 *             cliente: "Juan Pérez"
 *             productos:
 *               - nombre: "Jabón en barra"
 *                 cantidad: 3
 *                 precioUnitario: 15.5
 *             total: 46.5
 *             tipoPago: "Tarjeta"
 *             fecha: "2024-03-25T11:00:00.000Z"
 *     responses:
 *       200:
 *         description: Venta actualizada
 *       400:
 *         description: Error al actualizar
 *
 *   delete:
 *     tags:
 *       - Ventas
 *     summary: Eliminar una venta por ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Venta eliminada
 *       404:
 *         description: Venta no encontrada
 */
