// Create web server
// 1. Create web server
// 2. Create router
// 3. Create route
// 4. Create handler
// 5. Create response

// 1. Create web server
const express = require('express');
const app = express();

// 2. Create router
const router = express.Router();

// 3. Create route
// 4. Create handler
router.get('/', (req, res) => {
    res.send('Comments');
});

// 5. Create response
module.exports = router;