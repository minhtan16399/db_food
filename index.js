import express from "express"
import cors from 'cors'
import rootRoutes from "./src/routes/rootRoutes.js";

const app = express();
const port = 8080;

app.use(express.json());

app.use(cors({
    credentials: true,
}));

app.use(rootRoutes);

app.get("/", (req, res) => {
    res.send("Test request");
});


app.listen(port, () => {
    console.log('starting');
});
