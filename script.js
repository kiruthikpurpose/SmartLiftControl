const MAX_WEIGHT = 120; // Max weight per person
const MAX_PEOPLE = 10;  // Max people in the lift
let currentWeight = 0;
let peopleInLift = 0;
let currentFloor = 0;

function addPerson() {
    const weightInput = document.getElementById("personWeight").value;
    const weight = parseInt(weightInput);

    if (!weight || weight <= 0 || weight > MAX_WEIGHT) {
        showAlert("Please enter a valid weight (1 - 120 kg).");
        return;
    }

    if (peopleInLift < MAX_PEOPLE && currentWeight + weight <= MAX_WEIGHT * MAX_PEOPLE) {
        currentWeight += weight;
        peopleInLift++;
        updateLiftStatus();
        clearAlert();
        enableExternalControls();
    } else {
        showAlert("Lift is full or overloaded!");
    }

    document.getElementById("personWeight").value = "";
}

function removePerson() {
    const weightInput = document.getElementById("removeWeight").value;
    const weightToRemove = parseInt(weightInput);

    if (!weightToRemove || weightToRemove <= 0 || weightToRemove > MAX_WEIGHT) {
        showAlert("Please enter a valid weight to remove (1 - 120 kg).");
        return;
    }

    if (currentWeight - weightToRemove >= 0 && peopleInLift > 0) {
        currentWeight -= weightToRemove;
        peopleInLift--;
        updateLiftStatus();
        clearAlert();
        enableExternalControls();
    } else {
        showAlert("Cannot remove this weight. Check the weight or people in the lift.");
    }

    document.getElementById("removeWeight").value = "";
}

function selectFloor(floor) {
    if (peopleInLift > 0 && currentWeight <= MAX_WEIGHT * MAX_PEOPLE) {
        clearAlert();
        if (currentFloor !== floor) {
            moveLift(floor);
            currentFloor = floor;
            disableExternalControls(); // Disable external controls when moving
        }
    } else {
        showAlert("Cannot move. Lift is full or overloaded!");
    }
}

function callElevator(floor) {
    if (currentWeight <= MAX_WEIGHT * MAX_PEOPLE) {
        clearAlert();
        if (currentFloor !== floor) {
            moveLift(floor);
            currentFloor = floor;
            disableExternalControls(); // Disable external controls when moving
        }
    } else {
        showAlert("Cannot call elevator. Overloaded!");
    }
}

function updateLiftStatus() {
    document.getElementById("weight").innerText = currentWeight;
    document.getElementById("people").innerText = peopleInLift;
}

function moveLift(floor) {
    const lift = document.getElementById("lift");
    const targetHeight = (floor - 1) * 80; // Adjust height for 5 floors
    lift.style.height = targetHeight + "px";
}

function enableExternalControls() {
    const externalButtons = document.querySelectorAll(".external-button");
    externalButtons.forEach(button => button.disabled = false);
}

function disableExternalControls() {
    const externalButtons = document.querySelectorAll(".external-button");
    externalButtons.forEach(button => button.disabled = true);
}

function showAlert(message) {
    document.getElementById("alert").innerText = message;
}

function clearAlert() {
    document.getElementById("alert").innerText = "";
}
