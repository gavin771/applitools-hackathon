const assert = require("assert");
const expect = require("chai").expect;
const testConfig = require("../config");
const LoginPage = require("../pages/v1/Login.page");
const DashboardPage = require("../pages/v1/Dashboard.page");
const CanvasChart = require("../pages/v1/CanvasChart.page");

describe(`Applitools Visual AI Rockstar Hackathon: Traditional Tests - App ${testConfig.testVersion}`, () => {
  describe("[1] Login Page UI Elements Test", () => {
    before(() => {
      browser.url(testConfig.loginUrl);
    });

    it("should have the right title", () => {
      const title = browser.getTitle();
      assert.equal(
        title,
        "ACME demo app",
        `Page title incorrect [${title} !== ACME demo app]`
      );
    });

    it("should have a correctly formatted login container", () => {
      assert.ok(
        LoginPage.dialogContainer.isDisplayed(),
        "Login container does not exist"
      );
      //MISSING TEST: Test that container is centered on page for various screen sizes, virtually
      //impossible to consider all screen sizes and verify the position of elements.
      //MISSING TEST: Test that container has correct height and width for screen size, virtually
      //impossible to consider all screen sizes and verify the position of elements.
    });

    it("should have a logo", () => {
      assert.ok(LoginPage.logoImage.isDisplayed(), "Wrong logo does not exist");
      assert.ok(
        String(LoginPage.logoImage.getAttribute("src")).includes(
          "/img/logo-big.png"
        ),
        `Wrong logo: [${LoginPage.logoImage.getAttribute("src")}]`
      );
      // MISSING TEST: Test that the logo is the correct color and type, not possible traditionally 
      // since the logo is an image
    });

    it("should have a login form header", () => {
      assert.ok(
        LoginPage.formHeader.isDisplayed(),
        "Form header does not exist"
      );
      assert.equal(
        LoginPage.formHeader.getText(),
        "Login Form",
        `Form header text [${LoginPage.formHeader.getText()}] !== Login Form`
      );
    });

    it("should have a correctly formatted username section", () => {
      assert.ok(
        LoginPage.usernameLabel.isDisplayed(),
        "Username label does not exist"
      );
      assert.equal(
        LoginPage.usernameLabel.getText(),
        "Username",
        "Username label incorrect"
      );
      assert.ok(
        LoginPage.usernameField.isDisplayed(),
        "Username field does not exist"
      );

      assert.equal(
        LoginPage.usernameField.getAttribute("placeholder"),
        "Enter your username",
        `Username placeholder incorrect [${LoginPage.usernameField.getAttribute(
          "placeholder"
        )}] !== 'Enter your username'`
      );
      assert.ok(
        LoginPage.usernameIcon.isDisplayed(),
        "Username icon does not exist"
      );
      assert.equal(
        LoginPage.usernameIcon.getCSSProperty("color").value,
        "rgba(4,123,248,1)",
        `Username icon has wrong color ${
          LoginPage.usernameIcon.getCSSProperty("color").value
        } !== rgba(4,123,248,1)`
      );
      // MISSING TEST: Test for the correct alignment of all 3 elements in relation to each other
    });

    it("should have a correctly formatted password section", () => {
      assert.ok(
        LoginPage.passwordLabel.isDisplayed(),
        "Password label does not exist"
      );
      assert.equal(
        LoginPage.passwordLabel.getText(),
        "Password",
        "Password label incorrect"
      );
      assert.ok(
        LoginPage.passwordField.isDisplayed(),
        "Password field does not exist"
      );
      assert.equal(
        LoginPage.passwordField.getAttribute("placeholder"),
        "Enter your password",
        `Password placeholder incorrect [${LoginPage.passwordField.getAttribute(
          "placeholder"
        )}] !== 'Enter your password'`
      );
      assert.ok(
        LoginPage.passwordIcon.isDisplayed(),
        "Password icon does not exist"
      );
      assert.equal(
        LoginPage.passwordIcon.getCSSProperty("color").value,
        "rgba(4,123,248,1)",
        `Password icon has wrong color ${
          LoginPage.passwordIcon.getCSSProperty("color").value
        } !== rgba(4,123,248,1)`
      );
      // MISSING TEST: Test for the correct alignment of all 3 elements in relation to each other
    });

    it("should have a correctly formatted login button", () => {
      assert.ok(
        LoginPage.loginButton.isDisplayed(),
        "Login button does not exist"
      );
      assert.equal(
        LoginPage.loginButton.getText(),
        "Log In",
        `Form header text [${LoginPage.loginButton.getText()}] !== Log In`
      );
      assert.equal(
        LoginPage.loginButton.getCSSProperty("background-color").value,
        "rgba(4,123,248,1)",
        `Log In button has wrong color ${
          LoginPage.loginButton.getCSSProperty("background-color").value
        } !== rgba(4,123,248,1)`
      );
      // MISSING TEST: Test for the correct alignment of login button
    });

    it("should have a remember me checkbox", () => {
      assert.ok(
        LoginPage.rememberMeCheckbox.isDisplayed(),
        "Remember me checkbox does not exist"
      );
      assert.ok(
        LoginPage.rememberMeLabel.isDisplayed(),
        "Remember me label does not exist"
      );
      assert.equal(
        LoginPage.rememberMeCheckbox.getCSSProperty("margin-right").value,
        "5px",
        `Checkbox has incorrect margin [${
          LoginPage.rememberMeCheckbox.getCSSProperty("margin-right").value
        }]`
      );
      assert.equal(
        LoginPage.rememberMeLabel.getText(),
        "Remember Me",
        `Remember me text [${LoginPage.loginButton.getText()}] !== Remember me`
      );
      // MISSING TEST: Test for the correct alignment of checkbox and label
    });

    it("should have a correctly formatted twitter icon", () => {
      assert.ok(
        LoginPage.twitterIcon.isDisplayed(),
        "Twitter icon does not exist"
      );
      assert.ok(
        String(LoginPage.twitterIcon.getAttribute("src")).includes(
          "/img/social-icons/twitter.png"
        ),
        `Wrong twitter icon: [${LoginPage.twitterIcon.getAttribute("src")}]`
      );
      // MISSING TEST: Test for the correct alignment of icon
    });

    it("should have a correctly formatted facebook icon", () => {
      assert.ok(
        LoginPage.facebookIcon.isDisplayed(),
        "Facebook icon does not exist"
      );
      assert.ok(
        String(LoginPage.facebookIcon.getAttribute("src")).includes(
          "/img/social-icons/facebook.png"
        ),
        `Wrong facebook icon: [${LoginPage.facebookIcon.getAttribute("src")}]`
      );
      // MISSING TEST: Test for the correct alignment of icon
    });

    it("should have a correctly formatted linkedIn icon", () => {
      assert.ok(
        LoginPage.linkedinIcon.isDisplayed(),
        "LinkedIn icon does not exist"
      );
      assert.ok(
        String(LoginPage.linkedinIcon.getAttribute("src")).includes(
          "img/social-icons/linkedin.png"
        ),
        `Wrong linkedIn icon: [${LoginPage.linkedinIcon.getAttribute("src")}]`
      );
      // MISSING TEST: Test for the correct alignment of icon
    });
  });

  describe("[2] Data-Driven Login Test", () => {
    beforeEach(() => {
      browser.url(testConfig.loginUrl);
    });

    it("should throw an error if no username and password is given and the login button is clicked", () => {
      LoginPage.login("", "");
      LoginPage.errorMessage.waitForDisplayed(
        undefined,
        false,
        "No error message shown"
      );

      assert.equal(
        LoginPage.errorMessage.getCSSProperty("width").value,
        "450px",
        `Error message width [${
          LoginPage.errorMessage.getCSSProperty("width").value
        }] !== 450px`
      );
      assert.equal(
        LoginPage.errorMessage.getText(),
        "Both Username and Password must be present",
        `Error message [${LoginPage.errorMessage.getText()}] !== Both Username and Password must be present`
      );
    });

    it("should throw an error if only the username is given and the login button is clicked", () => {
      LoginPage.login("name@email.com", "");
      LoginPage.errorMessage.waitForDisplayed(
        undefined,
        false,
        "No error message shown"
      );
      assert.equal(
        LoginPage.errorMessage.getCSSProperty("width").value,
        "450px",
        `Error message width [${
          LoginPage.errorMessage.getCSSProperty("width").value
        }] !== 450px`
      );
      assert.equal(
        LoginPage.errorMessage.getText(),
        "Password must be present",
        `Error message [${LoginPage.errorMessage.getText()}] !== Password must be present`
      );
    });

    it("should throw an error if only the password is given and the login button is clicked", () => {
      LoginPage.login("", "password");
      LoginPage.errorMessage.waitForDisplayed(
        undefined,
        false,
        "No error message shown"
      );
      assert.equal(
        LoginPage.errorMessage.getCSSProperty("width").value,
        "450px",
        `Error message width [${
          LoginPage.errorMessage.getCSSProperty("width").value
        }] !== 450px`
      );
      assert.equal(
        LoginPage.errorMessage.getText(),
        "Username must be present",
        `Error message [${LoginPage.errorMessage.getText()}] !== Username must be present`
      );
    });

    it("should login if an email and password is given and the login button is clicked", () => {
      LoginPage.login("name@email.com", "password");
      assert.ok(
        String(browser.getUrl()).includes(testConfig.dashboardUrl),
        "URL is not at dashboard"
      );
      assert.ok(
        $(".content-w").isDisplayed(),
        "Dashboard content container not displayed"
      );
    });
  });

  describe("[3] Table Sort Test", () => {
    before(() => {
      browser.url(testConfig.loginUrl);
      LoginPage.login("email", "password");
    });

    it("should verify the order of transactions after sorting by amount", () => {
      const transactionsBeforeSort = DashboardPage.transactions;
      DashboardPage.amountsTableHeader.click();
      const transactionsAfterSort = DashboardPage.transactions;

      //verifies that sorted table data is correct and that data stayed in tact
      expect(
        transactionsAfterSort,
        "Transactions not sorted correctly"
      ).to.have.deep.ordered.members(
        DashboardPage.sortTransactions(transactionsBeforeSort)
      );
    });
  });

  describe("[4] Canvas Chart Test", () => {
    before(() => {
      browser.url(testConfig.loginUrl);
      LoginPage.login("email", "password");
    });

    it("should have correct data when canvas chart initially loads", () => {
      DashboardPage.compareExpensesButton.click();
      // MISSING TEST: Since the chart chart element does not render html for the chart itself, it is not possible
      // to test the data within the chart natively with WebdriverIO, outside of taking a screenshot of the chart....
      // but even then, we can't accurately test the bar values.
      assert.ok(false, "No test for canvas chart data");
    });

    it("should have correct data when 'Show data for next year' button is clicked", () => {
      CanvasChart.showDataForNextYearButton.click();
      // MISSING TEST: Since the chart chart element does not render html for the chart itself, it is not possible
      // to test the data within the chart natively with WebdriverIO, outside of taking a screenshot of the chart....
      // but even then, we can't accurately test the bar values.
      assert.ok(false, "No test for canvas chart button");
    });
  });

  describe("[5] Dynamic Content Test", () => {
    before(() => {
      browser.url(`${testConfig.loginUrl}?showAd=true`);
      LoginPage.login("email", "password");
    });

    it("should have Ad 1 present", () => {
      assert.ok(DashboardPage.adOne.isDisplayed(), "Ad 1 does not exist");
      assert.ok(
        String(DashboardPage.adOne.getAttribute("src")).includes(
          "/img/flashSale.gif"
        ),
        `Wrong Ad 1: [${DashboardPage.adOne.getAttribute("src")}]`
      );
    });
    it("should have Ad 2 present", () => {
      assert.ok(DashboardPage.adTwo.isDisplayed(), "Ad 2 does not exist");
      assert.ok(
        String(DashboardPage.adTwo.getAttribute("src")).includes(
          "/img/flashSale2.gif"
        ),
        `Wrong Ad 2: [${DashboardPage.adTwo.getAttribute("src")}]`
      );
    });
  });
});
