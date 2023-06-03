import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(_req, res, _next) {
  res.send("hello");
});

export default router;
