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
  // Añade aquí más campos según necesites
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User; 