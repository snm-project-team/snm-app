import express from 'express';
const router = new express.Router();

router.get('/', (req, res) => {
  res.json({test: 'test'});
});

export default router;
