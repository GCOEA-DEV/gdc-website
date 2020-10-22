// @route /api/developers
// Get all Developers
const developers = require('../../database/database').developers;

// TODO
// Mailing service
// Fetch all projects
// Fetch all developers

const getAllDevs = (req, res, next) => {
  // Get all developers
  // console.log(developers);
  res.status(200).json(developers);
};

module.exports = {
  getAllDevs,
};
