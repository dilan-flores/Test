import mongoose, {Schema,model} from 'mongoose'

const cabeceraSchema = new Schema({
    // Numero_factura:{
    //     type:String,
    //     require:true,
    //     trim:true
    // },
    Fecha_factura:{
        type:Date,
        require:true,
        trim:true,
        default:Date.now()
    },
    Total_factura:{
        type:Number,
        require:true,
        trim:true
    },
    Cliente:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Cliente'
    },// por el momento será así la parte de producto
    Stock:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Stock'
    },
},{
    timestamps:true
})

export default model('Cabecera',cabeceraSchema)
