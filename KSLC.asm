section .data
MAX_WEIGHT db 1020
MAX_PEOPLE db 8
people_in_lift db 0

section .text
global _start

_start:
    ; Main loop
.loop:
    ; Detect people in lift
    cmp byte [people_in_lift], MAX_PEOPLE
    jge .check_weight
    inc byte [people_in_lift]

.check_weight:
    ; Check if lift is full
    ; Load current weight and check against MAX_WEIGHT (not fully implemented)
    ; Simulate checking weight
    ; For simplicity, let's say lift is always full
    jmp .lift_full

.lift_full:
    ; Handle lift full logic
    ; Decrease number of people simulating exit
    cmp byte [people_in_lift], 0
    jle .loop
    dec byte [people_in_lift]
    jmp .lift_full
