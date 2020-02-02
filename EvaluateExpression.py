# Expresion must contain single digit operands and only (+,-,/,*) operators are allowed
def evaluateExpression(exp):
    expLength = len(exp)
    if (expLength == 0):
        return - 1
    result = int(exp[0])
    for e in range(1, expLength, 2):
        operator = exp[e]
        op2 = exp[e + 1]
        if (not op2.isdigit()):
            return -1
        if (operator == '+'):
            result += int(op2)
        elif (operator == '-'):
            result -= int(op2)
        elif (operator == '*'):
            result *= int(op2)
        elif (operator == '/'):
            result /= int(op2)
        else:
            return - 1
    return result


expression = input("Enter an expression: ")
result = evaluateExpression(expression)
if (result == -1):
    print(expression, " is invalid")
else:
    print("Result: ", result)
