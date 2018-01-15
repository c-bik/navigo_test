const
    express = require('express'),
    app = express();

// client side navigation re-directed to main page if hit to server
app.use('/courses', express.static('public'));
app.use('/course/:courseId', express.static('public'));
app.use('/about', express.static('public'));
app.use('/', express.static('public'));

// START THE SERVER
// =============================================================================
app.listen(8080, "127.0.0.1");
console.log('hosted at http://127.0.0.1:8080');