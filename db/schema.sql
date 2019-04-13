
-- CREATE DATABASE dog_owners;

-- Use programming db for the following statements --
USE dog_owners;

  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
  
  CREATE TABLE dog_info (
  id INTEGER(50) AUTO_INCREMENT NOT NULL,
  dog_name VARCHAR (100)NOT NULL,
  present BOOLEAN DEFAULT false,
  first_name VARCHAR (100) NOT NULL,
  last_name VARCHAR (100) NOT NULL,
  addres VARCHAR (200) NOT NULL,
  email VARCHAR (100) NOT NULL,
  primary key (id)
);