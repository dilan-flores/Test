import express from 'express'
import dotenv from 'dotenv'
// Intercambio de recursos de origen cruzado
import cors from 'cors'; // Mecanismo de seguridad 
import routerUsuario from './routers/usuario_routes.js'
import routerConferencista from './routers/conferencista_routes.js'
import routerAuditorio from './routers/auditorio_routes.js'
import routerReserva from './routers/reserva_routes.js'

// Inicializaciones
const app = express()
dotenv.config()

// Configuraciones 
app.set('port',process.env.port || 3000)
app.use(cors())

// Middlewares 
app.use(express.json())

// Variables globales

// Rutas
app.use('/api',routerUsuario)
app.use('/api',routerConferencista)
app.use('/api',routerAuditorio)
app.use('/api',routerReserva)
// Manejo de una ruta que no sea encontrada
app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))

export default  app