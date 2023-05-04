import mongoose,{Schema} from "mongoose";

const PropertySchema =new Schema({
    id: Schema.Types.ObjectId,
    name:{
        type: String,
        required: [true, "Please fill property name"],
    },
    area_image:String,
    area_name: String,
    password: {
        type:String,
        min:[8,"Password must be 8 character min."],
    },
    properties_for_rent:Number,
    properties_for_sales: Number,
    cityId: Number,
});

export const ProductModel = mongoose.model("Property", PropertySchema);