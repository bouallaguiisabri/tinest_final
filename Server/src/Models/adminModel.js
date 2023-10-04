const mongoose = require("mongoose"); 
const bcrypt = require("bcrypt");
const crypto = require("crypto");


var adminSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
    },
    email: {
       type: String,
            required: true,
            unique: true,
    },
        mobile: {
            type: Number,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
      type: String,
      default: "admin",
    },
       
   
    },
    {
        timestamps:true,
    }
);
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
adminSchema.methods.isPasswordMatched = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
adminSchema.methods.createPasswordResetToken = async function () {
  const resettoken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resettoken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 30 * 60 * 1000; // 10 minutes
  return resettoken;
};


module.exports = mongoose.model("Admin", adminSchema);