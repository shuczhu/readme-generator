const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
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
            type: 'list',
            message: 'Please select license',
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },

    ]
    )
    .then(
        ({ title,
            instruction,
            usage,
            contributing,
            test,
            license,
            Github,
            email }) => { 
            const template = ` # ${title} 
            # ![alt text](https://img.shields.io/badge/license-${license}-blue.svg)
* [Installation Instruction](#instruction)
* [Usage](#usage)
* [Contributing Guidelines](#contributing)
* [Test](#test)
* [License](#license)
* [Questions?](#question)
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
            createNewFile(title, template)
        }
    )


function createNewFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
        if (err) {
            console.log(err)
        } else {
        console.log("Your readMe has been generated!")}
    })
}