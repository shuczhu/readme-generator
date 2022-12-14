const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

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
![image](https://img.shields.io/badge/license-${license}-blue.svg)
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
Github link: https://github.com/${Github}
`           
            createNewFile(template)
        }
    )


function createNewFile(data) {

    const dir = './dist';
    const filename = './dist/readMe.md';

    if (fs.existsSync(dir)){
        writeFile(data);
    } else {
        fs.mkdirSync(dir)
        writeFile(data);
    }


    function writeFile(data) {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.log(err)
        } else {
        console.log("Your readMe has been generated!")}
    })}
}