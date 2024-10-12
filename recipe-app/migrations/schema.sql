CREATE TABLE categories (
    id CHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE recipes (
    id CHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category_id CHAR(36),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE ingredients (
    id CHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE steps (
    id CHAR(36) PRIMARY KEY,
    description TEXT NOT NULL
);

CREATE TABLE recipe_ingredients (
    id CHAR(36) PRIMARY KEY,
    recipe_id CHAR(36),
    ingredient_id CHAR(36),
    quantity VARCHAR(50),
    FOREIGN KEY (recipe_id) REFERENCES recipes(id),
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(id)
);

CREATE TABLE recipe_steps (
    id CHAR(36) PRIMARY KEY,
    recipe_id CHAR(36),
    step_id CHAR(36),
    step_order INT,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id),
    FOREIGN KEY (step_id) REFERENCES steps(id)
);
