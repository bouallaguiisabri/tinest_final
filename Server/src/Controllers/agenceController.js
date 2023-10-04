const Agence = require('../Models/agenceModel');

const createAgence = async (req, res) => {
  try {
    const { adminId, number_livreur, address, number_magasinner, region } = req.body;

    // Create a new agence object
    const agence = new Agence({
      admin: adminId,
      number_livreur,
      address,
      number_magasinner,
      region,
    });

    // Save the agence to the database
    await agence.save();

    res.status(201).json(agence);
  } catch (error) {
    console.error('Error creating agence:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
const getAgences = async (req, res) => {
  try {
    const agences = await Agence.find().populate('admin', 'username');
    res.json(agences);
  } catch (error) {
    console.error('Error retrieving agences:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
const getAgenceById = async (req, res) => {
  try {
    const { id } = req.params;

    const agence = await Agence.findById(id);

    if (!agence) {
      throw new Error('Agence not found');
    }

    res.json(agence);
  } catch (error) {
    console.error('Error retrieving agence:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
const updateAgenceById = async (req, res) => {
  try {
    const { id } = req.params;
    const { number_livreur, address, number_magasinner, region } = req.body;

    const agence = await Agence.findByIdAndUpdate(
      id,
      { number_livreur, address, number_magasinner, region },
      { new: true }
    );

    if (!agence) {
      throw new Error('Agence not found');
    }

    res.json(agence);
  } catch (error) {
    console.error('Error updating agence:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
const deleteAgenceById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAgence = await Agence.findByIdAndDelete(id);

    if (!deletedAgence) {
      throw new Error('Agence not found');
    }

    res.json({ message: 'Agence deleted successfully' });
  } catch (error) {
    console.error('Error deleting agence:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
const updateAgencesByAdminId = async (req, res) => {
  try {
    const { adminId } = req.params;
    const { number_livreur, address, number_magasinner, region } = req.body;

    // Update all agences that belong to the admin with the specified adminId
    const updatedAgences = await Agence.updateMany(
      { admin: adminId },
      { number_livreur, address, number_magasinner, region }
    );

    res.json(updatedAgences);
  } catch (error) {
    console.error('Error updating agences:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
const deleteAllAgences = async (req, res) => {
  try {
    // Delete all agences from the database
    const deletedAgences = await Agence.deleteMany();

    res.json({ message: 'All agences deleted successfully', deletedCount: deletedAgences.deletedCount });
  } catch (error) {
    console.error('Error deleting agences:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = {
  createAgence,
  getAgences,
  deleteAllAgences,
  deleteAgenceById,
  updateAgenceById,
  updateAgencesByAdminId,
  getAgenceById,
}