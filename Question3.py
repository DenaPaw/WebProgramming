import numpy as np
import skfuzzy as fuzz
import skfuzzy.control as ctrl

# Step 1: Define fuzzy variables
working_hours = ctrl.Antecedent(np.arange(0, 13, 1), 'working_hours')  
rest_hours = ctrl.Antecedent(np.arange(0, 13, 1), 'rest_hours')        
performance = ctrl.Consequent(np.arange(0, 101, 1), 'performance')     # 0 to 100%

# Step 2: Define fuzzy membership functions
working_hours['low'] = fuzz.trimf(working_hours.universe, [0, 0, 5])
working_hours['medium'] = fuzz.trimf(working_hours.universe, [3, 6, 9])
working_hours['high'] = fuzz.trimf(working_hours.universe, [7, 12, 12])

rest_hours['less'] = fuzz.trimf(rest_hours.universe, [0, 0, 5])
rest_hours['normal'] = fuzz.trimf(rest_hours.universe, [3, 6, 9])
rest_hours['more'] = fuzz.trimf(rest_hours.universe, [7, 12, 12])

performance['poor'] = fuzz.trimf(performance.universe, [0, 0, 50])
performance['average'] = fuzz.trimf(performance.universe, [25, 50, 75])
performance['good'] = fuzz.trimf(performance.universe, [50, 100, 100])

# Step 3: Define fuzzy rules
rule1 = ctrl.Rule(working_hours['low'] & rest_hours['less'], performance['poor'])
rule2 = ctrl.Rule(working_hours['low'] & rest_hours['normal'], performance['poor'])
rule3 = ctrl.Rule(working_hours['medium'] & rest_hours['less'], performance['average'])
rule4 = ctrl.Rule(working_hours['medium'] & rest_hours['normal'], performance['average'])
rule5 = ctrl.Rule(working_hours['high'] & rest_hours['less'], performance['poor'])
rule6 = ctrl.Rule(working_hours['high'] & rest_hours['normal'], performance['good'])
rule7 = ctrl.Rule(working_hours['high'] & rest_hours['more'], performance['good'])
rule8 = ctrl.Rule(working_hours['medium'] & rest_hours['more'], performance['good'])

# Step 4: Create control system
performance_control = ctrl.ControlSystem([rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8])
employee_performance = ctrl.ControlSystemSimulation(performance_control)

# Step 5: Test with input values
employee_performance.input['working_hours'] = 8  # Example: 8 hours of work
employee_performance.input['rest_hours'] = 4     # Example: 4 hours of rest

employee_performance.compute()

# Output result
print(f"Predicted Employee Performance: {employee_performance.output['performance']:.2f}%")
