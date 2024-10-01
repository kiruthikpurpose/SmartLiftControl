#include <stdio.h>

#define MAX_WEIGHT 1020  // Maximum weight in kg
#define MAX_PEOPLE 8     // Maximum number of people allowed in the lift

int current_weight = 0;
int people_in_lift = 0;
int lift_full = 0;

int detect_people_in_lift() {
    if (people_in_lift < MAX_PEOPLE) {
        people_in_lift++;
    }
    return people_in_lift;
}

int check_weight() {
    return current_weight >= MAX_WEIGHT || people_in_lift >= MAX_PEOPLE;
}

void skip_floors() {
    while (check_weight()) {
        printf("Lift full, skipping floors...\n");
        people_in_lift--;  // Simulate people exiting
    }
}

void move_lift_to_floor() {
    printf("Lift moving...\n");
}

int main() {
    while (1) {
        detect_people_in_lift();
        lift_full = check_weight();

        if (lift_full) {
            printf("Lift full!\n");
            skip_floors();
        } else {
            move_lift_to_floor();
        }

        printf("People in lift: %d, Weight: %d kg\n", people_in_lift, current_weight);
    }

    return 0;
}
