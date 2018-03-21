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