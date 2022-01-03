const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require,
  },
  email: {
    type: String,
    require,
  },
  password: {
    type: String,
    require,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;

// We are hashing the password

// userSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     this.password = bcrypt.hash(this.password, 12); // 12 => salt value
//   }

//   next();
// });

// // for hashing
// const User = mongoose.model("users", userSchema);

// module.exports = User;
