
function sleepTotal(){
let logDates = [];
let sleepLogged = [];
    
function displayDates() {
    $.getJSON('/logs', function(data) {
     console.log(data);
        let dates = data.logs
            for (var i = 0; i < dates.length; i++){
            logDates.push(`${new Date(dates[i].date).getMonth()+1}/${new Date(dates[i].date).getDate()+1}/${new Date(dates[i].date).getFullYear()}`);
    }
        
                    console.log(logDates.reverse());

                    
});
}
displayDates();

function displaySleep() {
    $.getJSON('/logs', function(data) {
     console.log(data.logs[0].sleepTotal);
        let sleep = data.logs
            for (var i = 0; i < sleep.length; i++){
            sleepLogged.push(sleep[i].sleepTotal);
    }
        
                    console.log(sleepLogged.reverse());

                    
});
}

displaySleep();


var ctx = $("#myChart");


var stackedLine = new Chart(ctx, {
 type: 'line',
    data: {
    labels: logDates,
    datasets: [{ 
        data: sleepLogged,
        label: "Sleep Total",
        borderColor: '#FE9985',
        backgroundColor: '#FFF',
        fill: false
      }
    ]
  },
  options: {
    responseive: true,
      legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Hour of Sleep per Night',
      fontSize: 18,
    },
      scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            },
            ticks: {
                beginAtZero: true
            }
        }]
    }
  }
});
}

sleepTotal();



function waterIntake(){
let logDates = [];
let loggedWater = [];
    
function displayDates() {
    $.getJSON('/logs', function(data) {
     console.log(data);
        let dates = data.logs
            for (var i = 0; i < dates.length; i++){
            logDates.push(`${new Date(dates[i].date).getMonth()+1}/${new Date(dates[i].date).getDate()+1}/${new Date(dates[i].date).getFullYear()}`);
    }
        
                    console.log(logDates.reverse());

                    
});
}
displayDates();

function displayWater() {
    $.getJSON('/logs', function(data) {
     console.log(data.logs[0].waterIntake);
        let water = data.logs
            for (var i = 0; i < water.length; i++){
            loggedWater.push(water[i].waterIntake);
    }
        
                    console.log(loggedWater.reverse());

                    
});
}

displayWater();

   

var ctx = $("#waterIntake");


var stackedLine = new Chart(ctx, {
 type: 'line',
  data: {
    labels: logDates,
    datasets: [{ 
        data: loggedWater,
        label: "Ounces of Water per Day",
        backgroundColor: '#FFF',
        borderColor: "#B4E1FF",
        fill: false
      }
    ]
  },
  options: {
    responseive: true,
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Total Logged Water Intake',
      fontSize: 18,

    },
      scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            },
            ticks: {
                beginAtZero: true
            }
        }]
    }
  }
});
}

waterIntake();





function stress(){
let logDates = [];
let loggedStress = [];
    
function displayDates() {
    $.getJSON('/logs', function(data) {
     console.log(data);
        let dates = data.logs
            for (var i = 0; i < dates.length; i++){
            logDates.push(`${new Date(dates[i].date).getMonth()+1}/${new Date(dates[i].date).getDate()+1}/${new Date(dates[i].date).getFullYear()}`);
    }
        
                    console.log(logDates.reverse());

                    
});
}
displayDates();

function displayStress() {
    $.getJSON('/logs', function(data) {
     console.log(data.logs[0].stress);
        let stress = data.logs
            for (var i = 0; i < stress.length; i++){
            loggedStress.push(stress[i].stress);
    }
        
                    console.log(loggedStress.reverse());

                    
});
}

displayStress();


var ctx = $("#stress");


var stackedLine = new Chart(ctx, {
 type: 'line',
  data: {
    labels: logDates,
    datasets: [{ 
        data: loggedStress,
        label: "Stress Ranking per Day",
        backgroundColor: '#FFF',
        borderColor: "#BEB7DF",
        fill: false
      }
    ]
  },
  options: {
    responseive: true,
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Total Logged Stress',
      fontSize: 18,
    },
      scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            },
            ticks: {
                beginAtZero: true
            }
        }]
    }
  }
});
}

stress();




function energy(){
let logDates = [];
let energyLogged = [];
    
function displayDates() {
    $.getJSON('/logs', function(data) {
     console.log(data);
        let dates = data.logs
            for (var i = 0; i < dates.length; i++){
            logDates.push(`${new Date(dates[i].date).getMonth()+1}/${new Date(dates[i].date).getDate()+1}/${new Date(dates[i].date).getFullYear()}`);
    }
        
                    console.log(logDates.reverse());

                    
});
}
displayDates();

function displayEnergy() {
    $.getJSON('/logs', function(data) {
     console.log(data.logs[0].energy);
        let energy = data.logs
            for (var i = 0; i < energy.length; i++){
            energyLogged.push(energy[i].energy);
    }
        
                    console.log(energyLogged.reverse());

                    
});
}

displayEnergy();


var ctx = $("#energy");


var stackedLine = new Chart(ctx, {
 type: 'line',
    data: {
    labels: logDates,
    datasets: [{ 
        data: energyLogged,
        label: "Energy Levels per Day",
        backgroundColor: '#FFF',
        borderColor: '#B15E6C',
        fill: false
      }
    ]
  },
  options: {
    responseive: true,
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Total Logged Energy',
      fontSize: 18,

    },
      scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            },
            ticks: {
                beginAtZero: true
            }
        }]
    }
  }
});
}

energy();


function exercise(){
let logDates = [];
let exerciseLogged = [];
    
function displayDates() {
    $.getJSON('/logs', function(data) {
     console.log(data);
        let dates = data.logs
            for (var i = 0; i < dates.length; i++){
            logDates.push(`${new Date(dates[i].date).getMonth()+1}/${new Date(dates[i].date).getDate()+1}/${new Date(dates[i].date).getFullYear()}`);
    }
        
                    console.log(logDates.reverse());

                    
});
}
displayDates();

function displayExercise() {
    $.getJSON('/logs', function(data) {
        let exercise = data.logs
            for (var i = 0; i < exercise.length; i++){
            exerciseLogged.push(exercise[i].exercise);
    }
        
                    console.log(exerciseLogged.reverse());

                    
});
}

displayExercise();


var ctx = $("#exercise");


var stackedLine = new Chart(ctx, {
 type: 'line',
    data: {
    labels: logDates,
    datasets: [{ 
        data: exerciseLogged,
        label: "Exercise Levels per Day",
        borderColor: '#129490',
        backgroundColor: '#FFF',
        fill: false
      }
    ]
  },
  options: {
    responseive: true,
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Total Logged Exercise',
      fontSize: 18,

    },
      scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            },
            ticks: {
                beginAtZero: true
            }
        }]
    }
  }
});
}

exercise();



function cleanEating(){
let logDates = [];
let cleanEatingLogged = [];
    
function displayDates() {
    $.getJSON('/logs', function(data) {
     console.log(data);
        let dates = data.logs
            for (var i = 0; i < dates.length; i++){
            logDates.push(`${new Date(dates[i].date).getMonth()+1}/${new Date(dates[i].date).getDate()+1}/${new Date(dates[i].date).getFullYear()}`);
    }
        
                    console.log(logDates.reverse());

                    
});
}
displayDates();

function displayCleanEating() {
    $.getJSON('/logs', function(data) {
        let cleanEating = data.logs
            for (var i = 0; i < cleanEating.length; i++){
            cleanEatingLogged.push(cleanEating[i].cleanEating);
    }
        
                    console.log(cleanEatingLogged.reverse());

                    
});
}

displayCleanEating();


var ctx = $("#cleanEating");


var stackedLine = new Chart(ctx, {
 type: 'line',
    data: {
    labels: logDates,
    datasets: [{ 
        data: cleanEatingLogged,
        label: "Cleanliness of Eating per Day",
        borderColor: '#70B77E',
        backgroundColor: '#FFF',
        fill: false
      }
    ]
  },
  options: {
    responseive: true,
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Total Logged Clean Eating',
      fontSize: 18,

    },
      scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            },
            ticks: {
                beginAtZero: true
            }
        }]
    }
  }
});
}

cleanEating();


function socialSupport(){
let logDates = [];
let socialSupportLogged = [];
    
function displayDates() {
    $.getJSON('/logs', function(data) {
     console.log(data);
        let dates = data.logs
            for (var i = 0; i < dates.length; i++){
            logDates.push(`${new Date(dates[i].date).getMonth()+1}/${new Date(dates[i].date).getDate()+1}/${new Date(dates[i].date).getFullYear()}`);
    }
        
                    console.log(logDates.reverse());

                    
});
}
displayDates();

function displaySocialSupport() {
    $.getJSON('/logs', function(data) {
        let socialSupport = data.logs
            for (var i = 0; i < socialSupport.length; i++){
            socialSupportLogged.push(socialSupport[i].communityFeeling);
    }
        
                    console.log(socialSupportLogged.reverse());

                    
});
}

displaySocialSupport();


var ctx = $("#socialSupport");


var stackedLine = new Chart(ctx, {
 type: 'line',
    data: {
    labels: logDates,
    datasets: [{ 
        data: socialSupportLogged,
        label: "Social Support Rating per Day",
        backgroundColor: '#FFF',
        borderColor: '#7B8CDE',
        fill: false,
      }
    ]
  },
  options: {
    responseive: true,
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Total Logged Social Support',
      fontSize: 18,

    },
      scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            },
            ticks: {
                beginAtZero: true
            }
        }]
    }
  }
});
}

socialSupport();




