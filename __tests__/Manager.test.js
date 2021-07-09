const Manager = require('../lib/Manager');


test('Can set office number via constructor', () => {
    const testValue = "officeNumber"; 
    const mangNum = new Manager("testuser", 123, "testuser@SpeechGrammarList.com", testValue);
    expect(mangNum.officeNumber).toBe(testValue)
});

test('getRole() should return Manager', () => {
    const testValue = "Manager"; 
    const mangInfo = new Manager("testuser", 123, "testuser@SpeechGrammarList.com", 555-555-5555);
    expect(mangInfo.getRole()).toBe(testValue)
});



// officeNumber

// getRole() // Overridden to return 'Manager'