public class KSLC {
    static final int MAX_WEIGHT = 1020;  // Maximum weight in kg
    static final int MAX_PEOPLE = 8;     // Maximum number of people allowed
    static int currentWeight = 0;
    static int peopleInLift = 0;
    static boolean liftFull = false;

    public static void main(String[] args) {
        while (true) {
            detectPeopleInLift();
            liftFull = checkWeight();

            if (liftFull) {
                System.out.println("Lift full!");
                skipFloors();
            } else {
                moveLiftToFloor();
            }

            System.out.println("People in lift: " + peopleInLift + ", Weight: " + currentWeight + " kg");
        }
    }

    public static void detectPeopleInLift() {
        if (peopleInLift < MAX_PEOPLE) {
            peopleInLift++;
        }
    }

    public static boolean checkWeight() {
        return currentWeight >= MAX_WEIGHT || peopleInLift >= MAX_PEOPLE;
    }

    public static void skipFloors() {
        while (checkWeight()) {
            System.out.println("Lift full, skipping floors...");
            peopleInLift--;  // Simulate people exiting
        }
    }

    public static void moveLiftToFloor() {
        System.out.println("Lift moving...");
    }
}
