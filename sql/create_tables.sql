-- Drop the table if it already exists
DROP TABLE IF EXISTS movies;
-- Create a new table called 'customers'
CREATE TABLE movies(
    movie_id SERIAL PRIMARY KEY,
    title VARCHAR (50) NOT NULL,
    genre VARCHAR (50) NOT NULL,
    year VARCHAR (50) NOT NULL
);