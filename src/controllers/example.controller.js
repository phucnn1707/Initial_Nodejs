const { successMessage, errorMessage } = require('../resources/messages');

const getExample = async (req, res) => {
  try {
    res.status(200).json({ message: successMessage.exampleFetched });
  } catch (error) {
    res.status(500).json({ message: errorMessage.fetchError });
  }
};

const exampleController = {
  getExample,
};

module.exports = exampleController;
