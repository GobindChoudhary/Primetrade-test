import taskModel from "../model/task.model.js";

export const createTask = async (req, res) => {
  try {
    console.log(req.body);
    const { title, description } = req.body;
    const { user } = req;
    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title is required",
      });
    }

    const task = await taskModel.create({
      title,
      description,
      user: user._id,
    });

    return res.status(201).json({
      success: true,
      task,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
