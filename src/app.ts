import * as express from 'express';
import * as path from 'path';

var app = express();

const staticDir = path.join(__dirname, 'public'); 
app.use(express.static(staticDir));

app.get('/hello', (req,res) => {
  res.send('hello mofo');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})