import { $ } from '@wdio/globals'
import Page from './page.js';

class Nav extends Page {

    get logo () {
        return $('.custom-logo-link')
    }
    get headingElement () {
        return $('.elementor-widget-container h1')
    }

    open () {
        return super.open()
    } 
}

export default new Nav();