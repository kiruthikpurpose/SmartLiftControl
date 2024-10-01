#define IR_SENSOR1_PIN 2   // Entrance sensor
#define IR_SENSOR2_PIN 3   // Inside lift sensor
#define WEIGHT_SENSOR_PIN A0 // Weight sensor input
#define BUTTONS_PIN 4       // Floor buttons
#define LIFT_STATUS_LED 5   // Indicates lift status
#define BUZZER_PIN 6        // Buzzer for full capacity alert

const int MAX_WEIGHT = 1020; // Max weight in kg
int current_weight = 0;
int max_people = 8;
int people_in_lift = 0;
bool lift_full = false;

void setup() {
  pinMode(IR_SENSOR1_PIN, INPUT);
  pinMode(IR_SENSOR2_PIN, INPUT);
  pinMode(WEIGHT_SENSOR_PIN, INPUT);
  pinMode(BUTTONS_PIN, INPUT);
  pinMode(LIFT_STATUS_LED, OUTPUT);
  pinMode(BUZZER_PIN, OUTPUT);
  
  Serial.begin(9600);
}

void loop() {
  current_weight = analogRead(WEIGHT_SENSOR_PIN);
  people_in_lift = detectPeopleInLift();

  if (current_weight > MAX_WEIGHT || people_in_lift >= max_people) {
    lift_full = true;
    digitalWrite(BUZZER_PIN, HIGH); 
    skipFloors();
  } else {
    lift_full = false;
    digitalWrite(BUZZER_PIN, LOW); 
  }

  handleLiftMovements();
}

int detectPeopleInLift() {
  int count = 0;
  if (digitalRead(IR_SENSOR1_PIN) == HIGH) count++;
  if (digitalRead(IR_SENSOR2_PIN) == HIGH) count++;
  return count;
}

void handleLiftMovements() {
  if (!lift_full && digitalRead(BUTTONS_PIN) == HIGH) {
    moveLiftToFloor();
  }
}

void skipFloors() {
  while (lift_full && detectPeopleInLift() < max_people) {
    people_in_lift--;
  }
}

void moveLiftToFloor() {
  digitalWrite(LIFT_STATUS_LED, HIGH); 
  delay(2000); 
  digitalWrite(LIFT_STATUS_LED, LOW);  
}
