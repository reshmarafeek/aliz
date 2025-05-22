const exp = require('express');
const app = exp();
const mysql = require('mysql2');
const bodyparser = require("body-parser");
app.use(bodyparser.json)
const db = mysql.createPool({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'reshu@2005',
    database: 'naan'
})
app.listen(8000, () => {
    console.log("server is running on 8000");
})
db.getConnection((err) => {
    if (err)
    {
        console.log('database not connected');
    }
    else {
        console.log('database is connected');
        
    }
   
})

const pro={
    "name": "reshu"
}
app.get('/alluser', (req, res) => {
    const que = 'select * from emp';
    db.query(que, (err, result) => {
        if (err) {
            return res.send("Database error")
        } else {
            res.send(result)
        }
    })
    
});


app.get("/singleuser", (req, res) => {
  const que = "select * from emp where empno=7369";
  db.query(que, (err, result) => {
    if (err) {
      return res.send("Database error");
    } else {
      res.send(result);
    }
  });
});

