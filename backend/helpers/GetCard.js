const Cart = require("../models/Cart");

//Helper function to get a cart by userId or guestId
const getCart = async (userId, guestId) => {
  if (userId) {
    return await Cart.findOne({ user: userId });
  } else if (guestId) {
    return await Cart.findOne({ guestId: guestId });
  }
  return null;
};

module.exports = { getCart };
