import mongoose, { mongo } from "mongoose";

const userScheme = new mongoose.Schema({
  username: {
    type: String, 
    required: [true, "Provide a User Name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Provide a User Email"],
    unique: true,
  },
  phone: {
    type: Number,
    required: [true, "Provide a User number"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Provide a User password"],
    unique: true,
  },

  isvarified: {
    type: Boolean,
    default: false,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },

  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("Users", userScheme);

export default User;
