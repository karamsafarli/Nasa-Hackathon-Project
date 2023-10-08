require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const { OpenAI } = require("openai");



const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.get('/', () => {
    console.log('hello')
})

app.post('/chat-request', async (req, res) => {
    const { prompt } = req.body;
    console.log(prompt)
    try {
        if (!prompt) {
            console.log("No prompt")
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: 'user', content: prompt }],
        });

        const completion = response.choices[0].message;
        console.log(completion)

        return res.status(200).json(completion);

    } catch (error) {
        console.log(error)
    }
})

app.listen(3001, async () => {
    console.log("app listening")
})