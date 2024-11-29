describe('Upload Tests', () => {
    // Test Case 1:
    // Open URL home page: https://practice.sdetunicorns.com/
    // Make sure <title> match: Practice E-Commerce Site – SDET Unicorns
    it('Simple upload test', async () => {
        // Open URL
        await browser.url('https://practice.sdetunicorns.com/upload ')

    });
});