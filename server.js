'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const {PORT, DATABASE_URL} = require('./config');
const {Log} = require('./models');
const passport = require('passport');


app.use(express.static('public'));

app.use(express.json());


const { router: usersRouter } = require('./users');
const { router: authRouter, localStrategy, jwtStrategy } = require('./auth');


app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  if (req.method === 'OPTIONS') {
    return res.send(204);
  }
  next();
});

passport.use(localStrategy);
passport.use(jwtStrategy);

app.use('/api/users/', usersRouter);
app.use('/api/auth/', authRouter);

const jwtAuth = passport.authenticate('jwt', { session: false });


//////////////////
//End-Points
//////////////////



app.get('/', (req, res) => {
  res.status(200);
  res.sendFile('index.html', { root: './public' });
});

app.get('/all', (req, res) => {
  res.status(200);
  res.sendFile('all.html', { root: './public' });
});

app.get('/dashboard', (req, res) => {
  res.status(200);
  res.sendFile('dashboard.html', { root: './public' });
});

app.get('/logs', (req, res) => {
      Log.find()
        .sort({ date: -1 })
        .then(logs => {
            res.status(200).json({
            logs: logs.map(log => log.serialize())
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    });
});
        
        
app.get('/logs/:id', (req, res) => {
  Log.findById(req.params.id)
    .then(log => res.json(log.serialize()))
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    });
});



app.post('/logs', (req, res) => {

  const requiredFields = ['date', 'sleepStartHr', 'sleepStartMin', 'sleepEndHr', 'sleepEndMin'];
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  }

Log.find({ date: req.body.date }).then(log => {
    if (log.length !== 0) {
      return res.status(400).send('A log with this date already exists');
    } else {
      Log
        .create({
            date: req.body.date,
            stress: req.body.stress,
            gratitude: req.body.gratitude,
            energy: req.body.energy,
            communityFeeling: req.body.communityFeeling,
            waterIntake: req.body.waterIntake,
            cleanEating: req.body.cleanEating,
            exercise: req.body.exercise,
            sleepStartHr: req.body.sleepStartHr,
            sleepStartMin: req.body.sleepStartMin,
            sleepEndHr: req.body.sleepEndHr,
            sleepEndMin: req.body.sleepEndMin,
      })
        .then(log => res.status(201).json(log.serialize()))
        .catch(err => {
          console.error(err);
          res.status(500).json({ message: 'Internal server error' });
       });
    }});
});
    
    
    
    
    
    
app.put('/logs/:id', (req, res) => {
  if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
    const message =
      `Request path id (${req.params.id}) and request body id ` +
      `(${req.body.id}) must match`;
    console.error(message);
    return res.status(400).json({ message: message });
  }
     const requiredFields = ['date'];
        let message;
        let missingError = false;

  requiredFields.forEach(field => {
    if (!(req.body[field])) {
      message = `Missing \`${field}\` value in request body`;
      console.error(message);
      missingError = true;
      return;
    }
  });

  if (missingError) {
    return res.status(400).send(message);
  }

  const toUpdate = {};
  const updateableFields = [
    'date',
    'sleepStartHr',
    'sleepStartMin',
    'sleepEndHr',
    'sleepEndMin',
    'stress',
    'gratitude',
    'energy',
    'communityFeeling',
    'waterIntake',
    'cleanEating',
    'exercise'
  ];
      
  updateableFields.forEach(field => {
    if (field in req.body) {
      toUpdate[field] = req.body[field];
    }
  });
      Log.findByIdAndUpdate(req.params.id, { $set: toUpdate })
    .then(log => res.status(204).end())
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    });
});
    
    
    
    
app.delete('/logs/:id', (req, res) => {
  Log.findByIdAndRemove(req.params.id)
    .then(log => res.status(204).end())
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

app.use('*', function(req, res) {
  res.status(404).json({ message: 'Not Found' });
});

    
    
    
    
//////////////////
//Server
//////////////////
    
    
    

    
let server;

function runServer(databaseUrl, port = PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(
      databaseUrl,
      err => {
        if (err) {
          return reject(err);
        }
        server = app
          .listen(port, () => {
            console.log(`Your app is listening on port ${port}`);
            resolve();
          })
          .on('error', err => {
            mongoose.disconnect();
            reject(err);
          });
      }
    );
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}



if (require.main === module) {
  runServer(DATABASE_URL).catch(err => console.error(err));
}

module.exports = { app, server, runServer, closeServer };