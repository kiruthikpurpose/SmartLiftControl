const MAX_WEIGHT = 1020; 
const MAX_PEOPLE = 8; 
let currentWeight = 0; 
let peopleInLift = 0; 
let liftFull = false; 

function setup() {
    console.log("Lift Control System Initialized");
}

function loop() {
    currentWeight = readWeightSensor();
    peopleInLift = detectPeopleInLift();

    if (currentWeight > MAX_WEIGHT || peopleInLift >= MAX_PEOPLE) {
        liftFull = true;
        alertFullCapacity();
        skipFloors();
    } else {
        liftFull = false;
    }

    handleLiftMovements();
}

function readWeightSensor() {
    return Math.floor(Math.random() * (MAX_WEIGHT + 100));
}

function detectPeopleInLift() {
    return Math.floor(Math.random() * (MAX_PEOPLE + 1));
}

function alertFullCapacity() {
    console.log("Lift is full! Please wait.");
}

function skipFloors() {
    while (liftFull && peopleInLift < MAX_PEOPLE) {
        console.log("Skipping floors...");
        peopleInLift--;
    }
}

function handleLiftMovements() {
    if (!liftFull) {
        const buttonPressed = readButtonPress();
        if (buttonPressed) {
            moveLiftToFloor();
        }
    }
}

function readButtonPress() {
    return Math.random() < 0.5;
}

function moveLiftToFloor() {
    console.log("Moving lift to the desired floor...");
    setTimeout(() => {
        console.log("Lift has arrived at the floor.");
    }, 2000);
}

setup();
setInterval(loop, 1000);
