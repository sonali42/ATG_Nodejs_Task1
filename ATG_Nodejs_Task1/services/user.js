const User = require("../models/user_model");
const bcrypt = require("bcrypt");


const createUser = async (userData) => {
  try {
    let { username, email, password } = userData;
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error("user already exist with email:", email);
    }

    password = await bcrypt.hash(password, 8);

    const user = await User.create({ username, email, password });

    console.log("created user", user);

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};


const getUserByUsername = async (username) => {
    try {
      const user = await User.findOne({ username });
    //   console.log(username)
      if (!user) {
        throw new Error("user not found with this username");
      }
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  };



module.exports = {
  createUser,
  getUserByUsername
};
