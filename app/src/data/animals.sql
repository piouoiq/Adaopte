CREATE TABLE animals (
    id INTEGER PRIMARY KEY,
    animals_name TEXT NOT NULL,
    age INT NOT NULL,
    breed TEXT NOT NULL,
    type_id INTEGER,
    city_id INTEGER,
    description TEXT,
    created_at DATETIME,

    FOREIGN KEY (type_id) REFERENCES types(id),
    FOREIGN KEY (city_id) REFERENCES cities(id)
);