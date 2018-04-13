const arc          = require(`arcms`);
const apiExtension = require(`arc.extension-api`);
const manifest       = require(`./microservice/example/manifest`);

// Add the API extension to Arc and set the API extension to run on port 8080
arc.addExtension(apiExtension, {
  port: 8080
});

// Arc configures and starts an example microservice
arc(manifest)
  .then(() => {
    console.log(`Arc Example Online`.bold.cyan);
  });