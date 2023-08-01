const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
.then((client)=>{
    const db = client.db('co2_calculator');
    const dataCollection = db.collection('data');
    const dataRouter = createRouter(dataCollection);
    app.use('/api/co2', dataRouter);
})
.catch(console.error)

app.listen(9000, function (){
    console.log(`Listening on port ${this.address().port}`);
})