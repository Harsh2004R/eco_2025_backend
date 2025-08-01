import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    phone: { type: Number, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true }
}, { timestamps: true, })
export const userModel = mongoose.model("user", userSchema);





















