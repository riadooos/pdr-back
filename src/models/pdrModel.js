import mongoose from "mongoose";

const Schema = mongoose.Schema

export const pdrSchema = new Schema({

    code:{type: String, require: true},
    designation: {type: String, require: true},
    reference: {type: String, require: true},
    machine: {type: String, require: true},
    status_comptable: {type: Boolean, require: true},
    image: {type: String},
    images: []

}, {timestamps: true})