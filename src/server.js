import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs-extra';
import path from 'path';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const DB_FILE = path.join(__dirname, 'db.json')

async function loadData() {
    const data = await fs.readJson(DB_FILE)
    return data
}

app.get('/api/education', async (req, res) => {
    try {
        const data = await loadData()
        res.send(data.education)
    } catch (error) {
        res.status(500).send({ message: "Failed to read data." })
    }
})

app.get('/api/work_experience', async (req, res) => {
    try {
        const data = await loadData()
        res.send(data.work_experience)
    } catch (error) {
        res.status(500).send({ message: "Failed to read data." })
    }
})

app.get('/api/skills', async (req, res) => {
    try {
        const data = await loadData()
        res.send(data.skills)
    } catch (error) {
        res.status(500).send({ message: "Failed to read data." })
    }
})

app.get('/api/soft_skills', async (req, res) => {
    try {
        const data = await loadData()
        res.send(data.soft_skills)
    } catch (error) {
        res.status(500).send({ message: "Failed to read data." })
    }
})

app.get('/api/languages', async (req, res) => {
    try {
        const data = await loadData()
        res.send(data.languages)
    } catch (error) {
        res.status(500).send({ message: "Failed to read data." })
    }
})

app.get('/api/personal_info', async (req, res) => {
    try {
        const data = await loadData()
        res.send(data.personal_info)
    } catch (error) {
        res.status(500).send({ message: "Failed to read data." })
    }
})

app.listen(3000, () => {
    console.log("Server runnning on port 3000")
})