import mongoose, {Schema,model} from 'mongoose'

const reservaSchema = new Schema({
    // Numero_factura:{
    //     type:String,
    //     require:true,
    //     trim:true
    // },
    Codigo_res:{
        type:String,
        require:true,
        trim:true,
    },
    Descripcion_res:{
        type:String,
        require:true,
        trim:true
    },
    Conferencista:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Conferencista'
    },
    Auditorio:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Auditorio'
    },
},{
    timestamps:true
})

export default model('Reserva',reservaSchema)
