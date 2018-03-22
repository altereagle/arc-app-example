# Arc Example App
[![Build Status](https://travis-ci.org/altereagle/arc.app-example.svg?branch=master)](https://travis-ci.org/altereagle/arc.app-example)
[![Maintainability](https://api.codeclimate.com/v1/badges/75a81f454a5795843414/maintainability)](https://codeclimate.com/github/altereagle/arc.app-example/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/75a81f454a5795843414/test_coverage)](https://codeclimate.com/github/altereagle/arc.app-example/test_coverage)

* This app demonstrates how to create a *microservice*, and add functionality with an *extension* using **[Arc](https://www.npmjs.com/package/arcms)**.

### Install
```bash
npm install arc.app-example
```

### Microservice
> /microservice/example/index.js

```javascript
module.exports = () => {
  return `Hello, World!`;
};
```
* A micoservice at it's most basic is just a node module.
* If you want to know more about microservices, check the Arc **[wiki](https://github.com/altereagle/arc/wiki)**.

### Microservice Configuration
> /microservice/example/config.js

```javascript
module.exports = {
  'Example': {
    protocol   : `example-protocol-name://`,
    resource   : `example`,
    description: `This is a basic microservice example`
  }
};
```
* A microservice configuration is an object that has properties used for configuartions
* If you want to know about how to configure a microservice, check the Arc **[wiki](https://github.com/altereagle/arc/wiki)**.

### The Application
> /index.js

```javascript
const arc          = require(`arcms`);
const apiExtension = require(`arc.extension-api`);
const config       = require(`./microservice/example/config`);

// Add the API extension to Arc and set the API extension to run on port 8080
arc.addExtension(apiExtension, {
  port: 8080
});

// Arc configures and starts an example microservice
arc(config)
  .then(()=>{
    console.log(`Arc Example Online`.bold.cyan);
  });
```
* You can learn more about Arc extensions in the Arc **[wiki](https://github.com/altereagle/arc/wiki)**.
* You can learn more about configuring microservices in the Arc **[wiki](https://github.com/altereagle/arc/wiki)**.

### Run
```bash
node example.js
```
* View the API by visiting `http://localhost:8080`