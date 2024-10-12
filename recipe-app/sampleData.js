const db = require('./config/db'); 

const sampleData = async () => {
  try {

    const categories = [
      { name: 'Japanese' },
      { name: 'Cake' },
      { name: 'Vegetarian' },
    ];


    await db.execute('INSERT INTO categories (name) VALUES (?)', [categories[0].name]);
    await db.execute('INSERT INTO categories (name) VALUES (?)', [categories[1].name]);
    await db.execute('INSERT INTO categories (name) VALUES (?)', [categories[2].name]);


    const recipes = [
      {
        name: 'Sushi',
        description: 'Delicious sushi with fresh fish and rice.',
        categoryId: 1, 
      },
      {
        name: 'Cheesecake',
        description: 'Creamy cheesecake with a graham cracker crust.',
        categoryId: 2, 
      },
      {
        name: 'Vegetable Stir Fry',
        description: 'A healthy mix of vegetables stir-fried with soy sauce.',
        categoryId: 3, 
      },
    ];

    for (const recipe of recipes) {
      await db.execute(
        'INSERT INTO recipes (name, description, category_id) VALUES (?, ?, ?)',
        [recipe.name, recipe.description, recipe.categoryId]
      );
    }

  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    db.end(); 
  }
};

sampleData();
