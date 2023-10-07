const express = require('express');

const mysql = require('mysql2'); 
//const db = connect to 

const app = expres();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'employees_db'
    },
    console.log(`Connected to employees_db`)
);
db.connect((err) => {
    if (err) throw err;
    
});

const getBooks = async (book) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&key=AIzaSyAi3EIdAR7i4QzZGHPltWG5xfkBqiVo9vg`
      
    );
    const data = await response.json();

    const title = data[title];
    const author = data[authors];
    const description = data[description];
    const category = data[categories];
    //const isbn = data
    const cover = data[smallThumbnail];

    return data;
  };
//set variables for title, author, description, genre, publisheddate, isbn


db.connect(db, (err, client, done) => {
    done();
    if(err) {
        console.log(err);
    }
    client.query('INSERT INTO book_info(title, author, description, category, isbn) VALUES()')

})

