const UserModel = require("../model/UserModel");

// create a user

const createUser = async (request, response) => {
  console.log(request.body);

  try {
    const newUser = await UserModel.create(request.body);

    if (newUser) {
      return response.status(201).json({
        message: "User is created",
        data: newUser,
      });
    } else {
      return response.status(500).json({
        message: "User is not created",
      });
    }
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      message: error.message,
    });
  }
};

// getALl users

const getAllUser = async (request, response) => {
  try {
    const allUsers = await UserModel.find({});
    if (allUsers) {
      return response.status(200).json({
        message: "fetching all users",
        data: allUsers,
      });
    } else {
      return response.status(404).json({
        message: "no Users found in url",
      });
    }
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      message: error.message,
    });
  }
};

// getOne User
const getOneUser = async (request, response) => {
  const { id } = request.params;

  try {
    const oneUserData = await UserModel.findById(id);
    if (oneUserData) {
      return response.status(200).json({
        message: "fetch one user data",
        data: oneUserData,
      });
    } else {
      return response.status(404).json({
        message: "user not found",
      });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

// update user
const updateUser = async (request, response) => {
  const { id } = request.params;

  try {
    const updateUser = await UserModel.findByIdAndUpdate(id, request.body);
    if (updateUser) {
      return response.status(201).json({
        message: "user is updated",
        data: updateUser,
      });
    } else {
      return response.status(500).json({
        message: "user is not updated",
      });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

// deleteUser
const deleteUser = async (request, response) => {
  const { id } = request.params;

  try {
    const deleteUser = await UserModel.findByIdAndDelete(id);
    if (deleteUser) {
      return response.status(200).json({
        message: "User is deleted",
      });
    } else {
      return response.status(404).json({
        message: "user is not deleted",
      });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { createUser, getAllUser, getOneUser, updateUser, deleteUser };
