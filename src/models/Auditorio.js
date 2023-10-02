import mongoose, {Schema,model} from 'mongoose'

const auditorioSchema = new Schema({
    Codigo_auditorio:{
        type:String,
        require:true,
        trim:true
    },
    Nombre_auditorio:{
        type:String,
        require:true,
        trim:true
    },
    Ubicacion_auditorio:{
        type:String,
        require:true,
        trim:true
    },
    Capacidad_auditorio:{
        type:Number,
        require:true,
        trim:true
    },
    Descripcion:{
        type:String,
        require:true,
        trim:true,
        //default:Date.now()
    }
},{
    timestamps:true
})

export default model('Auditorio',auditorioSchema)
