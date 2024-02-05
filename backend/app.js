const  express =require('express'); 
const mongoose= require('mongoose');
const Vedios= require("./model/music")
const cors= require('cors');
mongoose.connect('mongodb://localhost:27017/Lists');
mongoose.connection.once('open',()=>{
    console.log("connection is established");
})
const app = express();
app.use(cors());
app.use(express.json());
app.post('/home', (req, res) => {
    // Create a sample data document and save it to the database
    const newData = new Vedios(req.body);
    const { username, password } = req.body;
    console.log('Received username:', username);
    console.log('Received password:', password);
    newData.save()
        .then(() => {
            res.status(200).send('Data saved successfully');
        })
        .catch((err) => {
            res.status(500).send('Error saving data');
        });
});
app.get('/Lists', (req, res) => {
    // Fetch data from the "Lists" collection
    Vedios.find({})
    .then((lists) => {
        console.log(lists)
        res.json(lists); // Send the fetched data as JSON response
    })
    .catch((err) => {
        console.error('Error fetching data from MongoDB:', err);
        res.status(500).send('Error fetching data from MongoDB');
    });
});


app.listen({ port: 4000 });
console.log('Listening to port 4000');
