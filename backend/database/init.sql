//como esta creada la base de datos

CREATE DATABASE likeme

CREATE TABLE posts (
    id SERIAL, 
    titulo VARCHAR(25), 
    img VARCHAR(1000), 
    descripcion VARCHAR(255), 
    likes INT default 0
    );