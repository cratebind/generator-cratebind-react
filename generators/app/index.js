"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument("appname", { type: String, required: true });
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the ${chalk.red("cratebind-react")} generator!`)
    );

    // Const prompts = [
    //   {
    //     type: "confirm",
    //     name: "someAnswer",
    //     message: "Would you like to enable this option?",
    //     default: true
    //   }
    // ];

    // return this.prompt(prompts).then(props => {
    //   // To access props later use this.props.someAnswer;
    //   this.props = props;
    // });
  }

  writing() {
    const projectPath = `./${this.options.appname}/`;
    this.destinationRoot(projectPath);
    this.fs.copy(this.templatePath("**/*"), this.destinationPath("./"));
    this.fs.copy(this.templatePath("**/.*"), this.destinationPath("./"));
  }

  install() {
    this.installDependencies({
      bower: false,
      yarn: { force: true },
      npm: false
    });
  }
};
