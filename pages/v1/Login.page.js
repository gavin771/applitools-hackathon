class Login {
  get dialogContainer() {
    return $(".auth-box-w");
  }

  get logoContainer() {
    return $(".logo-w");
  }

  get logoImage() {
    return $(".logo-w img");
  }

  get formHeader() {
    return $(".auth-header");
  }

  get usernameLabel() {
    return $(".form-group:nth-child(1) label");
  }

  get usernameField() {
    return $("#username");
  }
  get usernameIcon() {
    return $(".pre-icon.os-icon.os-icon-user-male-circle");
  }
  get passwordLabel() {
    return $(".form-group:nth-child(2) label");
  }

  get passwordField() {
    return $("#password");
  }

  get passwordIcon() {
    return $(".pre-icon.os-icon.os-icon-fingerprint");
  }

  get loginButton() {
    return $(".buttons-w #log-in");
  }

  get rememberMeLabel() {
    return $(".buttons-w .form-check-label");
  }

  get rememberMeCheckbox() {
    return $(".buttons-w .form-check-label input");
  }

  get twitterIcon() {
    return $(".buttons-w a:nth-child(1) > img");
  }

  get facebookIcon() {
    return $(".buttons-w a:nth-child(2) > img");
  }

  get linkedinIcon() {
    return $(".buttons-w a:nth-child(3) > img");
  }

  get errorMessage() {
    return $(".alert.alert-warning");
  }
  /**
   * Signs in a user with given credentials
   *
   * @param {String} username
   * @param {String} password
   */
  login(username, password) {
    this.usernameField.waitForDisplayed(500);
    this.usernameField.setValue(username);
    this.passwordField.setValue(password);
    this.loginButton.click();
  }
}

module.exports = new Login();
