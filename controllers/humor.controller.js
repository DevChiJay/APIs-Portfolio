const Humor = require("../models/humor.model");


const getAllHumors = async (req, res, next) => {
  try {
    const humors = await Humor.find();
    if (!humors || humors.length === 0) {
      return res.status(404).json({ message: "No humor entries found." });
    }
    return res.status(200).json({ humors });
  } catch (error) {
    return next(error);
  }
};

const getRandomHumor = async (req, res, next) => {
  try {
    const humors = await Humor.find();
    if (!humors || humors.length === 0) {
      return res.status(404).json({ message: "Could not find any humors." });
    }
    const random = Math.floor(Math.random() * humors.length);
    return res.status(200).json({ humor: humors[random].title });
  } catch (error) {
    return next(error);
  }
};

const getAllNew = async (req, res, next) => {
  try {
    const humors = await Humor.find({ status: "Pending" });
    if (!humors || humors.length === 0) {
      return res.status(400).json({ message: "No new humors." });
    }
    return res.status(200).json({ humors });
  } catch (error) {
    return next(error);
  }
};

const addHumor = async (req, res, next) => {
  try {
    const data = {
      ...req.body,
      status: "Pending",
    };
    const humor = new Humor(data);
    await humor.save();
    return res.status(200).json({ message: "Humor added successfully!" });
  } catch (error) {
    return next(error);
  }
};

const saveHumor = async (req, res, next) => {
  try {
    const humorId = req.params.id;
    if (!humorId) res.status(400).json({ message: "Humor Id is required." });

    const activeHumor = await Humor.findByIdAndUpdate(
      humorId,
      { status: "Active" },
      { new: true, runValidators: true }
    );
    if (!activeHumor) res.status(404).json({ error: "Humor not found" });

    res.status(200).json({ message: "Humor saved successfully" });
  } catch (error) {
    return next(error);
  }
};

const removePendingHumor = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) res.status(400).json({ message: "Humor Id is required." });

    await Humor.findByIdAndDelete(id);
    res.status(200).json({ message: "Humors removed successfully!" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllHumors,
  getRandomHumor,
  getAllNew,
  addHumor,
  saveHumor,
  removePendingHumor,
};
