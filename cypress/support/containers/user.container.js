class User {

    variables = {
        email: String,
        newPassword: String,
        oldPassword: String
    }

    setEmail(email) {
        this.email = email;
    }

    setNewPassword(newPassword) {
        this.newPassword = newPassword;
    }

    setOldPassword(oldPassword) {
        this.oldPassword = oldPassword;
    }
}

module.exports = new User();