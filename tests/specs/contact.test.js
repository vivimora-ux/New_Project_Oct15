import { expect } from '@wdio/globals'
import Contact from '../pageobjects/contact.page.js'

describe('Contact', () => {
    // Fill all the inputs fields, submit form & Assert the success message

    it ('Fill all the inputs fields, submit form & Assert the success message', async () => {
        await browser.url('/contact')
        
        // Scrolling to the form
        await Contact.contactForm.scrollIntoView()
        //await Contact.contactForm.scrollIntoView({ block: 'center', inline: 'center' })

        await Contact.submitForm('Panchita','Panchita@msn.com', '1231231234', 'Hello, I am able to insert some text. SMILE')
        
        // Submit info    
        //const myButton = await $('.evf-submit-container button')
        // await Contact.myButton.click()
        // await browser.pause (1000)
        
        // Assert the success message
        await expect (Contact.successAlert)
        await browser.pause (5000)
        await expect (Contact.successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
        
        //assert(text === 'Thanks for contacting us! We will be in touch with you shortly')

    });

});