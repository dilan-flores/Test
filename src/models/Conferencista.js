import mongoose, {Schema,model} from 'mongoose'

const conferencistaSchema = new Schema({
    Nombre_conf:{
        type:String,
        require:true,
        trim:true
    },
    Apellido_conf:{
        type:String,
        require:true,
        trim:true
    },
    Cedula_conf:{
        type:String,
        require:true,
        trim:true
    },
    Genero_conf:{
        type:String,
        require:true,
        trim:true
    },
    Ciudad_conf:{
        type:String,
        require:true,
        trim:true
    },
    Direccion_conf:{
        type:String,
        require:true,
        trim:true
    },
    FN_conf:{// Fecha de nacimiento
        type:Date,
        require:true,
        trim:true
    },
    Telefono_conf:{// Fecha de nacimiento
        type:String,
        require:true,
        trim:true
    },
    Email_conf:{
        type:String,
        require:true,
        trim:true,
        // No almacena correos previamente establecidos
        //unique:true
    },
    Empresa_conf:{
        type:String,
        require:true,
        trim:true
    }
},{
    timestamps:true
})

export default model('Conferencista',conferencistaSchema)
