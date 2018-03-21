# Arc App Example
[![Build Status](https://travis-ci.org/altereagle/arc-app-example.svg?branch=master)](https://travis-ci.org/altereagle/arc-app-example)
[![Maintainability](https://api.codeclimate.com/v1/badges/6d55db826315077e802b/maintainability)](https://codeclimate.com/github/altereagle/arc-app-example/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6d55db826315077e802b/test_coverage)](https://codeclimate.com/github/altereagle/arc-app-example/test_coverage)

An example application using Arc

### Install
`npm install arc-app-example`

**Example:** Create a microservice
> /microservice/arc.example/index.js

```javascript
module.exports = () => {
  return `Hello, World!`;
};
```

**Example:** Use the microservice with Arc
> /example.js

```javascript
// Load arc and the api extension
const arc          = require(`arcms`);
const apiExtension = require(`arc.extension-api`);

// The application adds the API extension to Arc
arc.addExtension(apiExtension, {
  port: 8080
});

// The application configures and starts an example microservice
arc({
  'Example': {
    protocol   : `example-protocol-name://`,
    resource   : `example`,
    description: `This is a basic microservice example`
  }
})
  .then(()=>{
    console.log(`Arc Example Online`.bold.cyan);
  });

// A developer can view the API at http://localhost:8080
```

```bash
node example.js
```

---