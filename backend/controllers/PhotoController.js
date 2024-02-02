const Photo = require("../models/Photo")

const mongoose = require("mongoose");
const User = require("../models/User");

// Insert a photo, with an user related to it
const insertPhoto = async (req, res) => {
    const { title } = req.body
    const image = req.file.filename

    const reqUser = req.user

    const user = await User.findById(reqUser._id);

    // create a photo
    const newPhoto = await Photo.create({
        image,
        title,
        userIde: user._id,
        userName: user.name,

    })

    // if photo was create successfully, return data
    if (!newPhoto) {
        errors: ["Houve um problema, por favor tente novamente mais tarde."]
    }

    res.status(201).json(newPhoto)

    res.send("Photo insert");
};

module.exports = {
    insertPhoto,
}