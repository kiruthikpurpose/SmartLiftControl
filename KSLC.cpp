#include <iostream>

const int MAX_WEIGHT = 1020; // Maximum weight in kg
const int MAX_PEOPLE = 8;    // Maximum number of people allowed

int currentWeight = 0;
int peopleInLift = 0;

int detectPeopleInLift() {
    if (peopleInLift < MAX_PEOPLE) {
        peopleInLift++;
    }
    return peopleInLift;
}

bool checkWeight() {
    return currentWeight >= MAX_WEIGHT || peopleInLift >= MAX_PEOPLE;
}

void skipFloors() {
    while (checkWeight()) {
        std::cout << "Lift full, skipping floors...\n";
        peopleInLift--;  // Simulate people exiting
    }
}

void moveLiftToFloor() {
    std::cout << "Lift moving...\n";
}

int main() {
    while (true) {
        detectPeopleInLift();
        if (checkWeight()) {
            std::cout << "Lift full!\n";
            skipFloors();
        } else {
            moveLiftToFloor();
        }

        std::cout << "People in lift: " << peopleInLift << ", Weight: " << currentWeight << " kg\n";
    }

    return 0;
}
