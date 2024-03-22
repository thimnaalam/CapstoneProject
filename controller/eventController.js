import {Events} from '../model/events.js';

const eventController = {
  getAllEvents: async (req, res) => {
    try {
      const events = await Events.getAll();
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getEventById: async (req, res) => {
    try {
      const event = await Events.getById(req.params.id);
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  createEvent: async (req, res) => {
    try {
      const eventID = await Events.create(req.body);
      res.status(201).json({ id: eventID, message: 'Event created successfully' });
    } catch (error) {
      res.status(400).json({ error: 'Bad request' });
    }
  },

  updateEvent: async (req, res) => {
    try {
      const updated = await Events.update(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ error: 'Event not found' });
      }
      res.json({ message: 'Event updated successfully' });
    } catch (error) {
      res.status(400).json({ error: 'Bad request' });
    }
  },

  deleteEvent: async (req, res) => {
    try {
      const deleted = await Events.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: 'Event not found' });
      }
      res.json({ message: 'Event deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = eventController;