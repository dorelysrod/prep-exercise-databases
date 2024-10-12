const express = require('express');
const recipeRoutes = require('./routes/recipeRoutes');
const app = express();

app.use(express.json()); 
app.use('/recipes', recipeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
