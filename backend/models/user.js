const mongoose  = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid").v1;
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 32
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 32
  },
  email: {
    type: String,
    required: true,
    unque: true,
    trim: true
  },
  encry_password: {
    type: String,
    required: true
  },
  //salt: String
})

userSchema
  .virtual("password") 
  .set(function(password) {
    this._password = password;
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function() {
    return this._password;
  });

userSchema.methods = {
  autheticate: function(plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },

  securePassword: function(plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  }
};

module.exports = mongoose.model("User", userSchema);