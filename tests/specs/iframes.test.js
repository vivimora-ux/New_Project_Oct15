describe('Iframe',() => {
    it('Working with iframe', async () => {
        // Open url
        await browser.url('https://practice.sdetunicorns.com/iframe-sample/')

        // Access the Iframe

        // How to get info to fix errors
            // Printing Elements out
                // -> console.log($('iframe#advanced_iframe'))
            // Pause
                // -> browser.pause(5000)

        const iframe = await $('iframe#advanced_iframe')
        await browser.switchFrame(iframe)
        
        // Verify Logo exist
        await expect($('.hfe-site-logo').toExist())
        
        // Switch to parent frame
        await browser.switchToParentFrame()
        
        // Debug on Terminal
        await browser.debug()
        // Verify Page Title
        await expect($('.zak-page-tite').toHaveText('IFrame Sample'))
    
    });
});