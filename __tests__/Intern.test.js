const Intern = require('../lib/Intern');

test('Can set school name via constructor', () => {
    const testValue = "schoolName"; 
    const schoolInfo = new Intern("testuser", 123, "testuser@SpeechGrammarList.com", testValue);
    expect(schoolInfo.school).toBe(testValue)
});

test('getRole() should return Intern', () => {
    const testValue = "Intern"; 
    const internInfo = new Intern("testuser", 123, "testuser@SpeechGrammarList.com", "school name");
    expect(internInfo.getRole()).toBe(testValue)
});

// school

// getSchool()

// getRole() // Overridden to return 'Intern'