const express=require('express');
const app=express();
const PORT=process.env.port || 8000;
const mysql=require('mysql');

const bodyParser=require('body-parser');
const {urlencoded}=require('body-parser');

const db=mysql.createPool({
  host:"localhost",
  user:"root",
  password:"zookim97",
  database:"simpleboard"
});

app.get("/", (req,res)=>{
  const sqlQuery= "INSERT INTO simpleboard(title, content) values('내가 본 영화', '좋은 영화였다.')";
  db.query(sqlQuery, (err, result)=>{
    res.send('success!');
  });
})

console.log(`${PORT}`);

app.listen(PORT, ()=>{
  console.log(`running on port ${PORT}`);
});