import express from 'express';
import cors from 'cors';
import router from './src/routes/post.routes.js'

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use(cors());  //se ejecuta midleware con autorizacion a todas las cors
app.use('/', router);  //en postRouter puede ser cualquier nombre
// app.get('/posts', getAllPost) //  async (rep, res) => {
    //const SQLquery = {text:'SELECT * FROM posts'}; se va a model
    //try {    se va a controllers
        //const result = await pool.query(SQLquery)  se va a model
        //console.log(result.rows)   se va a model como Return result.rows
        //res.status(200). json({posts: result.rows})// se hace con .json por que se simila sin front  ------ se va a controllers

   // } catch (error) {      se va a controllers
        // console.log(error)  se va a controller
        //res.status(500).json( {error: error.message}) // se hace con .json por que se simila sin front --------se va a controller
    //   }
//  })




app.listen(PORT, ()=>{
    console.log(`🚨🚨 servidor encendido 🚨🚨 http://localhost:${PORT}`)
})