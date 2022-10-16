import express from 'express'

const myFunc = (num: number): number => {
  return num * num;
};

const app = express();
const port = 3000;
app.get('/api', (req, res) => {
  res.send("hello world");
})

app.listen(port, ()=> {
  console.log('server started at localhost:', port);
})

export default myFunc;