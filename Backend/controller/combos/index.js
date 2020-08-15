const comboModel = require('../../model/combo');

async function getAllcombos(req, res, next) {
  try {
    const combos = await comboModel.getAllCombos();
    res.status(200).json({ data: combos });
  } catch (err) {
    next(err);
  }
}

async function getcomboById(req, res, next) {
  try {
    const { id } = req.params;
    const combo = await comboModel.getComboById(id);
    res.status(200).send({ data: combo });
  } catch (err) {
    next(err);
  }
}

module.exports = { getAllcombos, getcomboById };
