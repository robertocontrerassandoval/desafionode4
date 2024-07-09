// se puede llar tambien query

import pool from '../../database/config.js'




//modelo post

const create = async(titulo, img , descripcion, likes) => {
    const query = "INSERT INTO posts (titulo, img , descripcion, likes) VALUES($1, $2, $3, $4) RETURNING *";  // agrego la consulta
    const values = [titulo, img , descripcion, likes];


    try {
        const response = await pool.query(query, values); // response puede ser cualquier nombre
        if(response.rowCount > 0) {
           return response.rows;
        }
        
        } catch (error) {
        console.log(error.message);
        
         }
}

// modelo get
export const getProducts = async () => { // exporto a main o donde se necesite ejecutar esta funcion
    const query = "SELECT * FROM posts";

    try {
        const response = await pool.query(query);
        if(response.rowCount > 0) {
            return response.rows;
        }
    } catch (error) {
        console.log(error);
    }
   
}

//modelo editar put

const editarLike = async (id) =>{
    try{
        const query ="UPDATE posts SET likes = likes +1 WHERE id = $1 ";
        const values = [id];
        const response = await pool.query(query, values);
        if(response.rowCount < 0) {
            return response.rows
        }
    } catch (error) {
        console.log(error);
    }
};

const deleteLike = async (id) => {
    try {
    const query = 'DELETE FROM posts WHERE id = $1 RETURNING *';
    const values = [id];
    const response = await pool.query(query, values);
    if(response.rowCount > 0) {
        return response.rows;
    }
    
    } catch (error) {
        console.log(error);
    }
};


export const models = {
    create,
    getProducts,
    editarLike, 
    deleteLike
}