const connection = require('../config/db');

const getAllRecipes = async () => {
  const [rows] = await connection.query('SELECT * FROM recipes');
  return rows;
};

const getRecipeById = async (id) => {
  const [rows] = await connection.query('SELECT * FROM recipes WHERE id = ?', [id]);
  return rows[0];
};

const createRecipe = async (name, description, categoryId) => {
  const [result] = await connection.query(
    'INSERT INTO recipes (id, name, description, category_id) VALUES (UUID(), ?, ?, ?)',
    [name, description, categoryId]
  );
  return result.insertId;
};

const updateRecipe = async (id, name, description, categoryId) => {
  await connection.query(
    'UPDATE recipes SET name = ?, description = ?, category_id = ? WHERE id = ?',
    [name, description, categoryId, id]
  );
};

const deleteRecipe = async (id) => {
  await connection.query('DELETE FROM recipes WHERE id = ?', [id]);
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
