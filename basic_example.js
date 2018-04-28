// # Arc Example
// This is a basic app created using Arc.
// - This example has one microservice that simply returns "hello world"
// - This example uses the [Arc Extension - API](https://www.npmjs.com/package/arc.extension-api)
// - Run using: `node basic_example.js`

// Load [Arc](https://www.npmjs.com/package/arcms) resources
const arc          = require(`arcms`);

// Load the [API extension]((https://www.npmjs.com/package/arc.extension-api) resources
const apiExtension = require(`arc.extension-api`);

// Define the [manifest](https://github.com/altereagle/arc/wiki/Microservice-Manifests) to use
const manifest     = {
  'Example': {
    resource   : `example`,
    description: `This is a very simple microservice example.`
  }
};

// Add the API extension and set the port to 8080
arc.addExtension(apiExtension, {
  port: 8080
});

// Configure and start the App
arc(manifest)
  .then(() => {
    console.log(`Arc Example Online`.bold.cyan);
  });