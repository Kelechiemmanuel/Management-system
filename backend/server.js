
require('dotenv').config();
const express = require('express');
const cors = require ('cors');

const pool = require('./db')

const app = express();
app.use(cors());
app.use(express.json());

app.get('/stats', async(req, res) => {
    try {
        const total = await pool.query("SELECT COUNT(*) FROM stud");
        const males = await pool.query("SELECT COUNT(*) FROM stud WHERE gender='Male'");
        const females =await pool.query("SELECT COUNT(*) FROM stud WHERE gender='Female'");

        res.json({
            total: total.rows[0].count,
            males: males.rows[0].count,
            females: females.rows[0].count
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'error fetching data'
        });
        
    }
})

app.get('/record', async (req, res) => {
    const student = await pool.connect();
    try {
        const result = await student.query("SELECT * FROM stud");
        res.json(result.rows);
    } catch (error) {
        console.log(error);
        
    } finally{
        student.release();
    }
});

app.post('/record', async (req, res) => {
    const{name, age, level, gender} = req.body;
    try {
        const result = await pool.query("INSERT INTO stud (name, age, level, gender) VALUES($1, $2, $3, $4) RETURNING *", [name, age, level, gender]);
        res.json(result.rows[0]);
    } catch (error) {
        console.log(error);
        
    }
});

app.put('/record/:id', async (req, res) => {
    const {id} = req.params;
    const {name, age, level, gender} = req.body;
    try {
        const result = await pool.query("UPDATE stud SET name=$1, age=$2, level=$3, gender=$4 WHERE id=$5 RETURNING *", [name, age, level, gender, id]);
        res.json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'update fail'
        })
        
    }
});

app.delete('/record/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const result = await pool.query("DELETE FROM stud WHERE id=$1", [id]);
        res.json(result.rows[0])
    } catch (error) {
        console.log(error); 
        res.status(500).json({
            error: "something went wrong"
        })
        
    }
})





const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
})