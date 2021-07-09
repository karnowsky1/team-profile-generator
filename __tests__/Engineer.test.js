const Engineer = require('../lib/Engineer');

test('Can set GitHUb account via constructor', () => {
    const testValue = "githubName"; 
    const engInfo = new Engineer("testuser", 123, "testuser@SpeechGrammarList.com", testValue);
    expect(engInfo.github).toBe(testValue)
});

test('getRole() should return Engineer', () => {
    const testValue = "Engineer"; 
    const engInfo = new Engineer("testuser", 123, "testuser@SpeechGrammarList.com", "githubid");
    expect(engInfo.getRole()).toBe(testValue)
});