import {Router} from 'express'
const router = Router()

import verificarAutenticacion from "../middlewares/autenticacion.js";

import{
    listarReserva,
    detalleReserva,
    registrarReserva,
    actualizarReserva,
    eliminarReserva
} from "../controllers/reserva_controller.js"

router.get("/reserva",verificarAutenticacion,listarReserva);
router.get("/reserva/:id",verificarAutenticacion,detalleReserva);
router.post("/reserva/registro",verificarAutenticacion,registrarReserva);
router.put("/reserva/actualizar/:id",verificarAutenticacion,actualizarReserva);
router.delete("/reserva/eliminar/:id",verificarAutenticacion,eliminarReserva);

export default router