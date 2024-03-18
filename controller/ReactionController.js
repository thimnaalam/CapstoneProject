import express from 'express';
const router = express.Router();

// dont forget to change the path
import { getReactions, addReaction } from '../model/Reactions';


router.get('/', async (req, res) => {
    try {
        const reactions = await getReactions();
        res.status(200).json(reactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/', async (req, res) => {
    try {
        const newReaction = await addReaction(req.body);
        res.status(201).json(newReaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


export default router;