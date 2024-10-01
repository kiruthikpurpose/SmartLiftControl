const MAX_WEIGHT: i32 = 1020; // Maximum weight in kg
const MAX_PEOPLE: i32 = 8;    // Maximum number of people allowed

struct Lift {
    current_weight: i32,
    people_in_lift: i32,
}

impl Lift {
    fn new() -> Lift {
        Lift { current_weight: 0, people_in_lift: 0 }
    }

    fn detect_people_in_lift(&mut self) {
        if self.people_in_lift < MAX_PEOPLE {
            self.people_in_lift += 1;
        }
    }

    fn check_weight(&self) -> bool {
        self.current_weight >= MAX_WEIGHT || self.people_in_lift >= MAX_PEOPLE
    }

    fn skip_floors(&mut self) {
        while self.check_weight() {
            println!("Lift full, skipping floors...");
            if self.people_in_lift > 0 {
                self.people_in_lift -= 1; // Simulate people exiting
            }
        }
    }

    fn move_lift_to_floor(&self) {
        println!("Lift moving...");
    }
}

fn main() {
    let mut lift = Lift::new();
    loop {
        lift.detect_people_in_lift();
        if lift.check_weight() {
            println!("Lift full!");
            lift.skip_floors();
        } else {
            lift.move_lift_to_floor();
        }

        println!("People in lift: {}, Weight: {} kg", lift.people_in_lift, lift.current_weight);
    }
}
