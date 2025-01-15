import { $ } from '@wdio/globals'
import Page from './page.js';

class Contact extends Page {

    get contactForm() {
        return $('#evf-form-277')
    }
    get inputName() {
        return $('.contact-name input')
    }
    get inputEmail() {
        return $('.contact-email input')
    }
    get inputPhone() {
       return $('.contact-phone input')
    }
    get txtAreaMessage() {
        return $('.contact-message textarea')
    }
    get myButton() {
        return $('#evf-submit-277')
    }
    get successAlert() {
        return $('.everest-forms-notice--success')
    }
    async submitForm(name, email, phone, message) {
        await this.inputName.addValue(name);
        await this.inputEmail.addValue(email);
        await this.inputPhone.addValue(phone);
        await this.txtAreaMessage.addValue(message);
        await this.myButton.click()
    }

    open () {
        return super.open()
    } 
}
export default new Contact()