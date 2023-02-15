const inquirer = require("inquirer");
const fs = require("fs");

const generateREADME = ({
  user,
  name,
  description,
  installation,
  usage,
  screenshot,
  licenses,
  contribution,
  contributionName,
  test,
  email,
}) =>
  `
   <img src="https://img.shields.io/badge/Licenses-${licenses}-f39f37" alt="badge for licenses"> 
   <h1 align="center">${name}</h1>

   <h2 align="center">Project Description</h2>
   <p align="center">${description}</p>
   
   <h2 align="center">Table of Content</h2>
   <li align="center"><a href="#Installation">Installation</a></li>
   <li align="center"><a href="#Usage">Usage</a></li>
   <li align="center"><a href="#Credits">Credits</a></li>
   <li align="center"><a href="#Licenses">Licenses</a></li>
     
   <h2 align="center" id="Installation">Installation</h2>
   <p align="center">${installation}</p>
   
   <h2 align="center" id="Usage">Usage</h2>
   <p align="center">You can access my project, ${name}, by simply clicking on this highlighted text.</p>
   <p align="center"><a href="${usage}" target="_blank">Here</a></p>
   
   <h2 align="center">Screenshots</h2>

   ![text](${screenshot})
   
   <h2 align="center" id="Credits">Credit</h2>
   <p align="center"><a href="${contribution}" target="_blank">${contributionName}</a></p>

   <h2 align="center">Tests</h2>
   <p align="center">${test}</p>
   
   <h2 align="center" id="Licenses">Licenses</h2>
   <p align="center">${licenses}</p>

   <p align="center">Copyright (c) 2023 ${user}</p>

   <h2 align="center">For any questions, feel free to reach out to my ${email}!</h2>
   `;

const init = () => {
  inquirer
    .prompt([
      {
        name: "user",
        type: "input",
        message: "What is your name?",
      },
      {
        name: "name",
        type: "input",
        message: "What would you like your title to be?",
      },
      {
        name: "description",
        type: "input",
        message: "Please type a descriptive description for your project.",
      },
      {
        name: "installation",
        type: "input",
        message:
          "Please type what kind of installation you used for your project.",
      },
      {
        name: "usage",
        type: "input",
        message: "Please copy and paste the full URL link to your project.",
      },
      {
        name: "screenshot",
        type: "input",
        message:
          "Please copy and paste the full URL link to your GitHub Screenshot of your project.",
      },
      {
        name: "licenses",
        type: "checkbox",
        message: "Please choose a license.",
        choices: ["MIT", "GNU"],
      },
      {
        name: "contribution",
        type: "input",
        message:
          "Please copy and paste the full URL link to the webpage that contributed to your project.",
      },
      {
        name: "contributionName",
        type: "input",
        message:
          "Please provide the name of the webpage that contributed to your project.",
      },
      {
        name: "test",
        type: "input",
        message: "Please type what tests were used for your project.",
      },
      {
        name: "email",
        type: "input",
        message: "What is your email address to reach out?",
      },
    ])
    .then((data) => {
      const generate = generateREADME(data);

      fs.writeFile("README.md", generate, (err) =>
        err
          ? console.log(err)
          : console.log(
              "You have successfully created your professional README.md"
            )
      );
    });
};

init();
