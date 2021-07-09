// include necessary packages
const inquirer = require('inquirer');
const fs = require('fs');

// import classes
// const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { htmlTemplate, endOfHTML } = require('./src/templateCode');
// if the object descunstruction doesnt work just give it a variable name

let allTeamMembers = [];

// inquirer - Create questions for user input
async function mangQuestions() {
  return await inquirer
    .prompt([
      {
        type: 'input',
        name: 'mangName',
        message: 'What is the team managers name? (Required)',
        validate: (mangName) => {
          if (mangName) {
            return true;
          } else {
            console.log('Please enter the team managers name!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'mangID',
        message: 'What is your employee ID? (Required)',
        validate: (mangID) => {
          if (mangID) {
            return true;
          } else {
            console.log('Please enter your employee ID!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'mangEmail',
        message: 'Enter your email address. (Required)',
        validate: (mangEmail) => {
          if (mangEmail) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'mangPhone',
        message: 'What is your office number? (Required)',
        validate: (mangPhone) => {
          if (mangPhone) {
            return true;
          } else {
            console.log('Please enter your office number!');
            return false;
          }
        },
      },
    ])
    .then(async (mangAnswers) => {
      console.log('prompt answer', mangAnswers);
      const mgrInfo = new Manager(
        mangAnswers.mangName,
        mangAnswers.mangID,
        mangAnswers.mangEmail,
        mangAnswers.mangPhone
      );
      console.log('Class OBJ', mgrInfo);
      allTeamMembers.push(mgrInfo);
      await addEmployee();
    });
} //END OF MANAGER FUNCTION

async function addEmployee() {
  return await inquirer
    .prompt({
      type: 'list',
      name: 'addEmployee',
      message:
        'Select an employee to add to the team or finish the team profile.',
      choices: ['Engineer', 'Intern', 'Finish team profile'],
      validate: (addEmployee) => {
        if (addEmployee) {
          return true;
        } else {
          console.log('Please select an employee or select Finish!');
          return false;
        }
      },
    })
    .then(async (response) => {
      console.log(response);

      // chose engineer
      if (response.addEmployee === 'Engineer') {
        await engQuestions();
      } else if (response.addEmployee === 'Intern') {
        await internQuestions();
      } else {
        //GENERTAE HTML FILE FUNCTION IS CALLED
        console.log('here is a list of all the team members');
        console.log(allTeamMembers);
        const data = generateEmployeeHtml();
        const fileWriter = await writeFile('index.html', data);
      }
    });
}

async function engQuestions() {
  return await inquirer
    .prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: 'What is the engineers name? (Required)',
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log('Please enter the engineers name!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'enginID',
        message: 'What is your employee ID? (Required)',
        validate: (enginID) => {
          if (enginID) {
            return true;
          } else {
            console.log('Please enter your employee ID!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'enginEmail',
        message: 'Enter your email address. (Required)',
        validate: (enginEmail) => {
          if (enginEmail) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'username',
        message: 'Enter your Github username. (Required)',
        validate: (usernameInput) => {
          if (usernameInput) {
            return true;
          } else {
            console.log('Please enter your Github username!');
            return false;
          }
        },
      },
    ])
    .then((engAnswers) => {
      const engineerInfo = new Engineer(
        engAnswers.engineerName,
        engAnswers.enginID,
        engAnswers.enginEmail,
        engAnswers.username
      );
      console.log('Class OBJ', engineerInfo);
      allTeamMembers.push(engineerInfo);
      addEmployee();
    });
} //END OF ENGINEER FUNCTION

async function internQuestions() {
  return await inquirer
    .prompt([
      {
        type: 'input',
        name: 'internName',
        message: 'What is the interns name? (Required)',
        validate: (internName) => {
          if (internName) {
            return true;
          } else {
            console.log('Please enter the interns name!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'internID',
        message: 'What is your employee ID? (Required)',
        validate: (internID) => {
          if (internID) {
            return true;
          } else {
            console.log('Please enter your employee ID!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'internEmail',
        message: 'Enter your email address. (Required)',
        validate: (internEmail) => {
          if (internEmail) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'internSchool',
        message: 'Enter your schools name. (Required)',
        validate: (internSchool) => {
          if (internSchool) {
            return true;
          } else {
            console.log('Please enter your schools name!');
            return false;
          }
        },
      },
    ])
    .then(async (internAnswer) => {
      console.log(internAnswer);
      const internInfo = new Intern(
        internAnswer.internName,
        internAnswer.internID,
        internAnswer.internEmail,
        internAnswer.internSchool
      );
      console.log('Class OBJ', internInfo);
      allTeamMembers.push(internInfo);
      await addEmployee();
    });
} // END OF INTERN FUNCTION

function generateEmployeeHtml() {
  let html = '';
  html += htmlTemplate;
  allTeamMembers.forEach((teamMember) => {
    html += `
        <div class="card col-2 m-1 p-1">
            <h5 class="card-title">${teamMember.getName()}</h5>
            <h3 class="card-title">Role: ${teamMember.getRole()}</h5>
            <p class="card-text"> ID: ${teamMember.getId()}</p>
            <p class="card-text"> Email: ${teamMember.getEmail()}</p>
            <p class="card-text"> ${teamMember.getHtml()}</p>
        </div>
        `;
  });
  html += endOfHTML;
  return html;

  //   for (let i = 0; i < allTeamMembers.length; i++) {

  // generate the html for each iteration of the loop once the string has been created append it to the html string on line 238
  //   }
  // html variable to the template code
}

// Create a function to write file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (error) {
    if (error) {
      console.log(error);
    }

    console.log('Team Profile success!');
  });
}

// writing files
const writeFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't acceidnetally execute the resolve() function as well
        return;
      }
      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File created!',
      });
    });
  });
};

// Create a function to initialize app
const init = async () => {
  // const questionaire
  console.log('Welcome to Team Profile Generator!');
  const mangagerResponse = await mangQuestions();
  // const data = generateEmployeeHtml();
  // console.log('are we getting here please');
  // console.log(data);
  // const fileWriter = await writeFile('index.html', data);

  // writeToFile("ReadMe.md", answers)
  // writeToFile("ReadMe.md", generateMarkdown({...answers}))
};

// Function call to initialize app
init();
