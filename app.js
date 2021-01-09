const express = require('express');
const app = express();
const path = require('path');

app.listen(3030, ()=>{
  console.log('Servidor 3030 funcionando')
})


app.get("/home", (req,res)=>{
  let htmlPath = path.resolve(__dirname, './views/index.html');

  res.sendFile(htmlPath);
});
