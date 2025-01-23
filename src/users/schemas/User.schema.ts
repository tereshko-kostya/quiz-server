import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    userId: String,
    username: String,
    image: String
});