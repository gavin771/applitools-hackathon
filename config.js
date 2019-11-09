require("dotenv").config();

const testVersion = process.env.APP_VERSION;
const VERSION_ONE = "v1";
const VERSION_TWO = "v2";

// if an app version is not provided in the env variables, we can't execute our tests so we throw an error
if (testVersion !== VERSION_ONE && testVersion !== VERSION_TWO) {
  throw new Error(
    "Please define an app version. Use one of the scripts in the package.json file to help you"
  );
}

//based on our app version we export a different login url, dashboard url and test version
//for use within our tests
module.exports = {
  loginUrl: `${
    testVersion === VERSION_ONE ? "/hackathon.html" : "/hackathonV2.html"
  }`,
  dashboardUrl: `${
    testVersion === VERSION_ONE ? "/hackathonApp.html" : "/hackathonAppV2.html"
  }`,
  testVersion
};
