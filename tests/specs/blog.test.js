import { expect } from '@wdio/globals'
import Blog from '../pageobjects/blog.page.js'

describe('Blog', () =>{
    it ('Get list of all recent posts & Assert text length of first li is > 10', async () => {
        await browser.url('/blog')

        // Get the recent post elements
        // const recentPosts = await $$('#recent-posts-3 ul li')
        
        const recentPosts = await Blog.listRecentPosts
        console.log("Recent Posts:", recentPosts)
        // Loop through the list and assert the text length is greater than 10
        for (const item of recentPosts) {
            //await browser.debug()
            const text = await item.getText()
            console.log("Post Text:", text)
            await expect(text.length).toBeGreaterThan(10)
        }

        // Assert the total length of the list is 4
        console.log(recentPosts)
        await expect(recentPosts).toHaveLength(5)
        
    });
}); 