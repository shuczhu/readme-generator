const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your application?',
          },
          {
            type: 'input',
            name: 'instruction',
            message: 'Please enter any user instructions for installation',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Please enter any instructions to use the application',
          },
          {
            type: 'input',
            name: 'contributing',
            message: 'Please enter any contributing guidelines',
          },
          {
            type: 'input',
            name: 'test',
            message: 'Please enter any test instructions',
          },
          {
            type: 'checkbox',
            message: 'Please select license',
            name: 'license',
            choices: ['MIT License', 'GNU License', 'Apache License', 'Eclipse Public License','BSD License','None'],
          },
          {
            type: 'input',
            name: 'Github',
            message: 'What is your Github username?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
          },
    ]
    )
    .then (({title,
    instruction,
usage,
contributing,
test,
license,
Github,
email})=> {

const template = ` # ${title}
* [installation instruction](#instruction)
* [usage](#usage)
* [contributing guidelines](#contributing)
* [test](#test)
* [license](#license)
* [questions?](#question)
## Installation
${instruction}
## Usage
${usage}
## Contributing Guidelines
${contributing}
## Test
${test}
## License
${license}
## Questions
Questions? You can reach me at ${email}.
Github link ${Github}
`
createNewFile(title,template)}
);

function createNewFile(fileName, data){
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data, (err) => {
        if (err){
            console.log(err)
        }
        console.log("Your README has been generated!")
    })
}