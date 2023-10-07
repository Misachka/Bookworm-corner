DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

USE books_db;

CREATE TABLE book_info (
   title VARCHAR(30) PRIMARY KEY NOT NULL,
   author VARCHAR(30) NOT NULL,
   description VARCHAR(30),
   category VARCHAR(30) NOT NULL
   
)

