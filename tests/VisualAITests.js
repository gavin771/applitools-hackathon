const assert = require("assert");
const testConfig = require("../config");
const LoginPage = require("../pages/v1/Login.page");
const DashboardPage = require("../pages/v1/Dashboard.page");
const CanvasChart = require("../pages/v1/CanvasChart.page");

describe(`Applitools Visual AI Rockstar Hackathon: Visual AI Tests - App ${testConfig.testVersion}`, () => {
  describe("[1] Login Page UI Elements Test", () => {
    before(() => {
      //Starts a new test
      browser.call(() =>
        eyes.open(browser, "ACME demo app", `[1] Login Page UI Elements Test`)
      );
      browser.url(testConfig.loginUrl);
    });

    //Applitools doesn't capture the page title, so we still verify this in a traditional way
    it("should have the right title", () => {
      const title = browser.getTitle();
      assert.equal(
        title,
        "ACME demo app",
        `Page title incorrect [${title} !== ACME demo app]`
      );
    });

    //All tests previously created in traditional test file are captured here :)
    it("should have a correctly formatted Login Page", () => {
      //Takes a screenshot of the entire page with the screen name Login Screen
      browser.call(() => eyes.check("Login Screen", Target.window().fully()));
      browser.call(() => eyes.close(true));
    });

    after(() => {
      browser.call(() => eyes.abortIfNotClosed());
    });
  });

  describe("[2] Data-Driven Login Test", () => {
    beforeEach(() => {
      browser.url(testConfig.loginUrl);
    });

    it("should throw an error if no username and password is given and the login button is clicked", () => {
      browser.call(() =>
        eyes.open(
          browser,
          "ACME demo app",
          `[2] Data-Driven Login Test [no username and password]`
        )
      );
      LoginPage.login("", ""); //attempt to login with no username and password

      browser.call(() =>
        eyes.check(
          "Login Attempt: [no username and password]",
          Target.window().fully()
        )
      ); //applitools check
      browser.call(() => eyes.close(true));
    });

    it("should throw an error if only the username is given and the login button is clicked", () => {
      browser.call(() =>
        eyes.open(
          browser,
          "ACME demo app",
          `[2] Data-Driven Login Test [only username]`
        )
      );
      LoginPage.login("name@email.com", "");
      browser.call(() =>
        eyes.check("Login Attempt: [only username]", Target.window().fully())
      );
      browser.call(() => eyes.close(true));
    });

    it("should throw an error if only the password is given and the login button is clicked", () => {
      browser.call(() =>
        eyes.open(
          browser,
          "ACME demo app",
          `[2] Data-Driven Login Test [only password]`
        )
      );
      LoginPage.login("", "password");
      browser.call(() =>
        eyes.check("Login Attempt: [only password]", Target.window().fully())
      );
      browser.call(() => eyes.close(true));
    });

    it("should login if an email and password is given and the login button is clicked", () => {
      browser.call(() =>
        eyes.open(
          browser,
          "ACME demo app",
          `[2] Data-Driven Login Test [username and password]`
        )
      );
      LoginPage.login("name@email.com", "password");
      browser.call(() =>
        eyes.check(
          "Login Attempt: [username and password]",
          Target.window().fully()
        )
      );
      browser.call(() => eyes.close(true));
    });

    afterEach(async () => {
      browser.call(() => eyes.abortIfNotClosed());
    });
  });

  describe("[3] Table Sort Test", () => {
    before(() => {
      browser.url(testConfig.loginUrl);
      LoginPage.login("email", "password");
    });

    it("should verify the order of transactions after sorting by amount", () => {
      browser.call(() =>
        eyes.open(browser, "ACME demo app", `[3] Table Sort Test`)
      );
      DashboardPage.amountsTableHeader.click();

      browser.call(() =>
        eyes.check("Table Sort Test", Target.window().fully())
      );
      browser.call(() => eyes.close(true));
    });

    after(async () => {
      browser.call(() => eyes.abortIfNotClosed());
    });
  });

  describe("[4] Canvas Chart Test", () => {
    beforeEach(() => {
      browser.url(testConfig.loginUrl);
      LoginPage.login("email", "password");
    });

    it("should have correct data when canvas chart initially loads", () => {
      DashboardPage.compareExpensesButton.click();
      browser.call(() =>
        eyes.open(
          browser,
          "ACME demo app",
          `[4] Canvas Chart Test: Initial Data`
        )
      );

      browser.call(() =>
        eyes.check("Canvas Chart Test: Initial Data", Target.window().fully())
      );
      browser.call(() => eyes.close(true));
    });

    it("should have correct data when 'Show data for next year' button is clicked", () => {
      DashboardPage.compareExpensesButton.click();
      CanvasChart.showDataForNextYearButton.click();
      browser.call(() =>
        eyes.open(browser, "ACME demo app", `[4] Canvas Chart Test: More Data`)
      );

      browser.call(() =>
        eyes.check("Canvas Chart Test: More Data", Target.window().fully())
      );
      browser.call(() => eyes.close(true));
    });

    afterEach(async () => {
      browser.call(() => eyes.abortIfNotClosed());
    });
  });

  describe("[5] Dynamic Content Test", () => {
    beforeEach(() => {
      browser.url(`${testConfig.loginUrl}?showAd=true`);
      LoginPage.login("email", "password");
    });

    it("should have two ads present", () => {
      browser.call(() =>
        eyes.open(browser, "ACME demo app", `[5] Dynamic Content Test: Ads`)
      );

      browser.call(() =>
        eyes.check("Dynamic Content Test: Ads", Target.window().fully())
      );
      browser.call(() => eyes.close(true));
    });

    afterEach(async () => {
      browser.call(() => eyes.abortIfNotClosed());
    });
  });
});
