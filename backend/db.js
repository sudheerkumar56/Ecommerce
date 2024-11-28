const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://manoj:manoj@cluster0.q0hhtbe.mongodb.net/e-commerce')
//schema for creating products
const productschema=mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    }
})
const Userschema=mongoose.Schema({
    username:{
        tpye:String,
        
        
    },
    email:{
    type:String,
    
    unique:true
    },
    password:{
        type:String,
        
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const product=mongoose.model('product',productschema);
const user=mongoose.model('user',Userschema);
module.exports={product,user};