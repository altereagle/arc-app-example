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

| Examples | Description |
| --- | --- |
| [basic_example.js](https://altereagle.github.io/arc.app-example/basic_example.html)| This is a basic example of that has a single microservice that returns `Hello World!` |

### Run
```bash
npm start
```

* View the API by visiting `http://localhost:8080`