import {Router} from 'express'
import{
    listarConferencista,
    registrarConferencista,
    actualizarConferencista,
    eliminarConferencista
} from "../controllers/conferencista_controller.js";

import verificarAutenticacion from "../middlewares/autenticacion.js";

const router = Router()

router.get("/conferencista",verificarAutenticacion,listarConferencista);
router.post("/conferencista/registro",verificarAutenticacion,registrarConferencista);
router.put("/conferencista/actualizar/:id",verificarAutenticacion,actualizarConferencista);
router.delete("/conferencista/eliminar/:id", verificarAutenticacion,eliminarConferencista);

export default router
