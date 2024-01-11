import User from "../models/user.schema.js";

export const getUser = async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    if (users) {
      res.json(users);
    }
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req, res) => {
  const { name } = req.body;
  const fileName = req?.file?.filename ? req?.file?.filename: null;
  try {
    const newUser = new User({
      name,
      resume: fileName,
    });

    const user = await newUser.save();
    if (user) {
      res.json(user);
    }
  } catch (error) {
    console.log(error);
  }
};
