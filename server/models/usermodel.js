import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  avatar: { type: String, required: true },
  totalScore: { type: Number, default: 0 },
});

export default mongoose.model("User", userSchema);
