import express from 'express';

const bookArray = [];

const app = express();
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
const PORT = 3000;

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/summary', (req, res) => {

    const bookobject = {
        title: req.body.title,
        comments: req.body.comments,
        rating: req.body.rating
    }

    console.log(bookobject);

    bookArray.push(bookobject);

    console.log(bookArray);

    res.render('summary', {bookArray});
    });
    

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});