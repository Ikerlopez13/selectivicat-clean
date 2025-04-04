import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Campo premium con valor por defecto false
  hasPremiumStatus: { 
    type: Boolean, 
    default: false 
  },
  premiumUpdatedAt: Date,
  // Añade aquí más campos según necesites
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User; 