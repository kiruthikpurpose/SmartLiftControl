package main

import "fmt"

const MAX_WEIGHT = 1020 // Maximum weight in kg
const MAX_PEOPLE = 8    // Maximum number of people allowed

type Lift struct {
    currentWeight  int
    peopleInLift   int
}

func (l *Lift) detectPeopleInLift() {
    if l.peopleInLift < MAX_PEOPLE {
        l.peopleInLift++
    }
}

func (l *Lift) checkWeight() bool {
    return l.currentWeight >= MAX_WEIGHT || l.peopleInLift >= MAX_PEOPLE
}

func (l *Lift) skipFloors() {
    for l.checkWeight() {
        fmt.Println("Lift full, skipping floors...")
        if l.peopleInLift > 0 {
            l.peopleInLift-- // Simulate people exiting
        }
    }
}

func (l *Lift) moveLiftToFloor() {
    fmt.Println("Lift moving...")
}

func main() {
    lift := Lift{}
    for {
        lift.detectPeopleInLift()
        if lift.checkWeight() {
            fmt.Println("Lift full!")
            lift.skipFloors()
        } else {
            lift.moveLiftToFloor()
        }

        fmt.Printf("People in lift: %d, Weight: %d kg\n", lift.peopleInLift, lift.currentWeight)
    }
}
