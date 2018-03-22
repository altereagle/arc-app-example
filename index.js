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