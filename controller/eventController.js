import express from 'express';
import { Events } from '../models/events.js'; // Import the Events object

const router = express.Router();

// Define routes using Events methods as middleware
router.get('/events', async (req, res) => {
  try {
    const allEvents = await Events.getAll();
    res.json(allEvents);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/events/:id', async (req, res) => {
  try {
    const event = await Events.getById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Other routes...

export default router;
