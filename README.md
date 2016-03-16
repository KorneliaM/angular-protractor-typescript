# AngularJS Protractor Setup With Typescript

## Installation:

### First preferably install the global dependencies:

- ```npm install -g typescript typings```

### Then install the package with ```npm install```

### Lastly follow the installation steps for installing [angular/protractor](https://github.com/angular/protractor):

- ```npm install -g protractor```
- ```webdriver-manager update```


## Usage:

Start the selenium webdriver with: ```npm run webdriver```

Then, start a local web-server with ```npm run server```

Compile the tests by executing ```tsc``` (or ```tsc --watch```)

Run the tests by typing ```npm run test```