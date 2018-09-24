'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dailyTrackerSchema = new Schema({
  
  date: { type: Date, default: Date.now },
  sleepStartHr: Number,
  sleepStartMin: Number,
  sleepEndHr: Number,
  sleepEndMin: Number,
  stress: Number,
  gratitude: Number,
  energy: Number,
  communityFeeling: Number,
  waterIntake: Number,
  cleanEating: Number,
  exercise: Number,
})

function calculateSleepTotal(startHr, startMin, endHr, endMin) {
  let calculatedSleepTotal;

  if (startHr > endHr) {
    // eg. 22 > 6
    // eg. 22:30 > 6:15
    calculatedSleepTotal =
      24 - (startHr + startMin / 60) + (endHr + endMin / 60);
  } else if (startHr < endHr) {
    // eg. 0 < 7
    calculatedSleepTotal = endHr + endMin / 60 - (startHr + startMin / 60);
  } else {
    // eg. slept @ 6, woke up @6:30
    calculatedSleepTotal = endMin / 60 - startMin / 60;
  }

  calculatedSleepTotal = calculatedSleepTotal.toFixed(2);
  return calculatedSleepTotal;
}

// VIRTUALS


dailyTrackerSchema.virtual('sleepTotal').get(function() {
  let sleepTotal = calculateSleepTotal(
    this.sleepStartHr,
    this.sleepStartMin,
    this.sleepEndHr,
    this.sleepEndMin
  );
  return sleepTotal;
});

// SERIALIZE

dailyTrackerSchema.methods.serialize = function() {
  return {
    id: this._id,
    date: this.date,
    stress: this.stress,
    gratitude: this.gratitude,
    energy: this.energy,
    communityFeeling: this.communityFeeling,
    waterIntake: this.waterIntake,
    cleanEating: this.cleanEating,
    exercise: this.exercise,
    sleepStartHr: this.sleepStartHr,
    sleepStartMin: this.sleepStartMin,
    sleepEndHr: this.sleepEndHr,
    sleepEndMin: this.sleepEndMin,
    sleepTotal: this.sleepTotal,
    };
  };



const Log = mongoose.model('Log', dailyTrackerSchema);

module.exports = {Log};