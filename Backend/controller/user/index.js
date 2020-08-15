exports.createUser = async (data) => {
  try {
    const userData = await Chat.createOne({ data });
    return userData;
  } catch (err) {
    throw err;
  }
};
