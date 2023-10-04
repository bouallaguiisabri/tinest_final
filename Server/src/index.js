const express = require('express');
const cors = require('cors');
const app = express();
const DBconnect = require('./Config/dataBase');
const authRoutes = require('./Routes/authRoute');
// const societeRoute = require ('./Routes/societeRoutes')
// const agenceRoute = require('./Routes/agenceRoute');
const adminRoute = require('./Routes/adminRoute')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();


DBconnect();
app.use(cookieParser());

app.use(express.json());
app.use(cors());

// app.use('/api', authRoutes);
// app.use('/api', societeRoute);
// app.use('/api', agenceRoute);
app.use('/api', adminRoute);

const colisRoute = require('./Routes/colisRoute.js');
app.use('/api', colisRoute);
const agenceRoute = require('./Routes/agenceRoute.js');
app.use('/api', agenceRoute);

const magasinierRoute = require('./Routes/magasinierRoute.js');
app.use('/api', magasinierRoute);

const authRoute = require('./Routes/authRoute');
app.use('/api', authRoute);

const livreurRoute = require('./Routes/livreurRoute.js');
app.use('', livreurRoute);

const stockRoute = require('./Routes/stockRoute.js');
app.use('/api', stockRoute);


// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Error occurred:', err);
  res.status(500).json({ error: 'An error occurred on the server' });
}); 

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 