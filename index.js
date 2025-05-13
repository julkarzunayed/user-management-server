const express = require ("express");
const cors = require("cors")

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("This is from users server");
})

const users = [
    {id: 1, name: 'Sabana', email: 'sabaa@gmail.com'},
    {id: 2, name: 'Sonia', email: 'sonia@gmail.com'},
    {id: 3, name: 'Jorina', email: 'jorina@gmail.com'}
]

app.get("/users", (req, res) => {
    res.send(users)
})

app.post("/users", (req, res) => {
    console.log("users post method");
    console.log(req.body);
    const newUser = req.body;
    // newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`User is running form Port ${port}`);
})