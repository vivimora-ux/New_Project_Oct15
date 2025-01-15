import { $$ } from '@wdio/globals'
import Page from './page.js';

class Blog extends Page {

    get listRecentPosts () {
        return $$('#recent-posts-3 ul li')
    }

    open () {
        return super.open()
    } 
}

export default new Blog()