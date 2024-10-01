import time

current_weight = 0
max_weight = 1020  # Max weight in kg
people_in_lift = 0
max_people = 8
lift_full = False

def detect_people_in_lift():
    global people_in_lift
    if people_in_lift < max_people:
        people_in_lift += 1
    return people_in_lift

def check_weight():
    global current_weight
    return current_weight >= max_weight or people_in_lift >= max_people

def skip_floors():
    global people_in_lift
    while check_weight():
        print("Lift full, skipping floors...")
        time.sleep(2)  
        if people_in_lift > 0:
            people_in_lift -= 1  

def handle_lift_movements():
    if not lift_full:
        print("Lift moving to floor...")
        time.sleep(2)  
        print("Lift arrived at floor")

def main():
    global lift_full
    while True:
        people_in_lift = detect_people_in_lift()
        lift_full = check_weight()

        if lift_full:
            print("Lift is full!")
            skip_floors()
        else:
            handle_lift_movements()

        print(f"People in lift: {people_in_lift}, Current weight: {current_weight} kg")
        time.sleep(3) 

if __name__ == "__main__":
    main()
