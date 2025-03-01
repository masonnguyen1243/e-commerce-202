const Subscriber = require("../models/Subscriber");

const subscribe = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required!" });

    //Check if the email is already subscribed
    let subscriber = await Subscriber.findOne({ email });
    if (subscriber) {
      return res.status(400).json({ message: "Email is already subscribed" });
    }

    //Create a new subscriber
    subscriber = new Subscriber({ email });
    await subscriber.save();

    res
      .status(200)
      .json({ message: "Successfully subscribed to the newsletter!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { subscribe };
