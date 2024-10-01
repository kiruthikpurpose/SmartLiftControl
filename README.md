# SmartLiftControl - Kiruthik

## Overview

This project aims to design a smart elevator (lift) control system that manages the flow of users efficiently and ensures safety within the lift. The system is implemented in nine different programming languages, including Python, C, C++, Java, JavaScript, Arduino, Assembly, Rust, and Go. The system accounts for various factors, such as weight, the number of people in the lift, and special cultural considerations (like separating male and female passengers) that are unique to specific environments, such as a college or office building.

### Project Idea

The idea for this project came from a real-world problem of managing elevators in a large environment with high foot traffic. With multiple floors and two available lifts, ensuring optimal usage and safety was crucial. The goal was to create a system that could efficiently handle users while avoiding overload conditions and improving user experience.

### Key Features
- **Multi-sensor Integration**: Utilizes infrared sensors to detect people entering or exiting the lift. Weight sensors are used to measure the total weight and ensure it doesn't exceed safety limits.
- **User Detection**: The system counts the number of people using infrared sensors, ensuring that the lift doesn't get overloaded. The system differentiates between the male and female passengers to respect cultural considerations.
- **Weight Monitoring**: A weight sensor prevents the lift from operating if the load exceeds the maximum capacity, which is set at 1020kg.
- **Efficient Lift Movement**: If the lift is full, it skips certain floors, improving efficiency and reducing unnecessary stops.
- **Safety Alerts**: The system includes a buzzer that sounds when the lift is full, alerting passengers not to enter.
- **Error Handling**: The code includes error handling, such as what happens when power is lost or sensors fail. It will resume operations effectively when power is restored.

### Languages Used
This project has been implemented in nine different languages:
1. **Python**
2. **C**
3. **C++**
4. **Java**
5. **JavaScript**
6. **Arduino**
7. **Assembly**
8. **Rust**
9. **Go**

### Components Used
- **Infrared Sensors**: Detects people entering and exiting the lift.
- **Weight Sensor**: Monitors the total weight inside the lift to prevent overloading.
- **Buzzer**: Alerts users when the lift is full.
- **LEDs**: Indicate lift status (moving, stationary, etc.).
- **Buttons**: Floor selection buttons inside and outside the lift.
- **Microcontroller**: The system is compatible with microcontrollers like ESP32, ESP8266, or Arduino UNO.

### How It Works

1. **Initialization**: The system starts by initializing all sensors, the weight sensor, IR sensors, buttons, and lift status indicators.
2. **User Detection**: As users approach and enter the lift, the IR sensors detect their presence, and the system counts the number of people inside.
3. **Weight Monitoring**: The weight sensor constantly monitors the total weight inside the lift. If the weight exceeds the limit or if the number of people exceeds the maximum capacity, the system prevents the lift from moving and triggers the buzzer.
4. **Floor Selection**: Users press the floor buttons to indicate their desired destination. The system processes these requests as long as the lift is not full.
5. **Efficient Movement**: The system moves the lift between floors and skips stops when the lift is at full capacity.
6. **Security and Reliability**: The system handles power interruptions and resumes normal operation when power is restored. The code is designed to be robust and secure, handling unexpected conditions gracefully.

### Considerations
- **Cost Optimization**: The system uses a minimal number of sensors while still achieving accurate results. Strategic placement of infrared sensors keeps the cost low without sacrificing reliability.
- **Cultural Sensitivity**: The system accounts for situations where male and female passengers may need to be separated, a common requirement in certain environments.
- **Scalability**: The system can be easily scaled to larger environments or expanded with additional sensors if needed.

### Installation and Setup
1. **Hardware Setup**:
   - Connect infrared sensors at the entrance and inside the lift.
   - Attach the weight sensor to the lift floor.
   - Connect LEDs and buzzer to indicate status and alerts.
   - Connect the floor selection buttons to the microcontroller.
   
2. **Software Setup**:
   - Upload the respective code to the microcontroller (e.g., Arduino UNO or ESP32).
   - For higher-level languages (Python, Java, etc.), execute the code on a system that can interface with the microcontroller or simulate the behavior.

3. **Testing**:
   - Simulate the elevator environment by placing objects or people inside the lift to test the weight sensor and people detection.
   - Press floor buttons to simulate floor selections and monitor how the lift responds.
   - Ensure that the system triggers alerts when overloaded and skips floors when full.

### Future Improvements
- **AI Integration**: Using AI algorithms to optimize lift scheduling and reduce wait times.
- **Camera-Based User Detection**: Replacing infrared sensors with computer vision to improve accuracy in detecting people entering or exiting the lift.
- **Predictive Maintenance**: Adding a system to monitor the performance of sensors and hardware, ensuring early detection of faults.

### Conclusion
The Elevator Control System is designed to be a robust, cost-effective solution for environments where efficient and safe lift usage is critical. With implementation across multiple languages and flexibility for different microcontrollers, the system is adaptable to various environments and user requirements. This project demonstrates the power of combining sensors, microcontrollers, and smart software logic to solve real-world problems.
