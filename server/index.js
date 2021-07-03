const express=require('express');
const app=express();
const PORT=process.env.port || 8000;
const mysql=require('mysql');
const cors=require('cors');

const bodyParser=require('body-parser');
const {urlencoded}=require('body-parser');

const db=mysql.createPool({
  host:"localhost",
  user:"root",
  password:"zookim97",
  database:"simpleboard"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/api/get", (req,res)=>{
  const sqlQuery="select * from simpleboard;"
  db.query(sqlQuery, (err,result)=>{
    res.send(result);
  })
})

app.post("/api/insert", (req, res)=>{
  const title=req.body.title;
  const content=req.body.content;
  const sqlQuery = "INSERT INTO simpleboard (title, content) VALUES (?,?)";
  db.query(sqlQuery, [title, content], (err, result)=>{
    res.send('success!');
  });
})

/*app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res)=>{
  const sqlQuery="select * from simpleboard";
  db.query(sqlQuery, (err,result)=>{
    res.send(result);
  })
});

app.post("/api/insert", (req, res)=>{
  const title=req.body.title;
  const content=req.body.content;
  const sqlQuery = "INSERT INTO simpleboard (title, content) VALUES (?,?)";
  db.query(sqlQuery, [title, content], (err, result)=>{
    res.send('success!');
  });
});*/


app.listen(PORT, ()=>{
  console.log(`running on port ${PORT}`);
});