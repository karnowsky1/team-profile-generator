const Employee = require('../lib/Employee');

test('getName() should return name', () => {
    const testValue = "employeeName"; 
    const employeeInfo = new Employee(testValue, 123, "testuser@SpeechGrammarList.com");
    expect(employeeInfo.name).toBe(testValue)
});

test('getId() should return employees id', () => {
    const testValue = "employeeId"; 
    const empId = new Employee("testuser", testValue, "testuser@SpeechGrammarList.com");
    expect(empId.id).toBe(testValue)
});

test('getEmail() should return employees email', () => {
    const testValue = "employeeEmail"; 
    const empEmail = new Employee("testuser", 123, testValue);
    expect(empEmail.email).toBe(testValue)
});

test('getRole() should return Employee', () => {
    const testValue = "Employee"; 
    const employeeInfo = new Employee("testuser", 123, "testuser@SpeechGrammarList.com");
    expect(employeeInfo.getRole()).toBe(testValue)
});


// name
// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'