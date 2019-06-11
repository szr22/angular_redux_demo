# to set up git account

git config --global user.email "you@example.com"
git config --global user.name "Your Name"

push existing repository from the command line

git remote add origin git@github.com:szr22/angular_redux_demo.git
git push -u origin master

# to initial the project
run yarn

# to run the project
run node --inspect=22424 --nolazy app.js

p.s. inspect-brk will start a ws app

# Using Yarn with Angular CLI
ng config -g cli.packageManager yarn

Angular CLI has support for cnpm, a package manager that works behind the Chinese firewall. As expected, you can activate it with this command:
ng config -g cli.packageManager cnpm

If at any point you want to revert back to npm run this:
ng config -g cli.packageManager npm

p.s. The global configuration file is stored in <YOUR_HOMEDIR>/.angular-config.json

# Installing The Nave Command Line Tool
npm install -g nave
nave use 10.15.1
node -v

# Installing the Angular Command Line Interface
yarn global add @angular/cli

ng --version

npm install -g @angular/cli
p.s. Yarn is a relatively new tool. If you run into issues installing global dependencies, such as for example you can’t find the CLI executable, you can always do one more use of npm

# Scaffolding Our First Angular Application Using the Angular CLI
ng config -g cli.packageManager yarn
p.s. get/set have been deprecated in favor of the config command

ng new angular-redux-demo
p.s. angular project name can't use underscore

yarn add @angular/http
yarn add angular-in-memory-web-api
yarn add rxjs-compat