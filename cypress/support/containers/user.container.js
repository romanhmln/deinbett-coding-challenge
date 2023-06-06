import { stringGen } from "../helpers";

class User {

    name = stringGen(10, 'name');
    email = `${stringGen(8, 'name').toLowerCase()}@${Cypress.env('subdomain')}`;
    newPassword = stringGen(10, 'password');
    oldPassword = stringGen(10, 'password');

    getName(){
        return this.name;
    }

    getOldPassword() {
        return this.oldPassword
    }

    getNewPassword() {
        return this.newPassword
    }

    getEmail() {
        return this.email
    }
}

module.exports = new User();