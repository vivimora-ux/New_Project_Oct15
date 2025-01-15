import { expect } from "@wdio/globals";
import Home from "../pageobjects/home.page.js";
import AllureReporter from "@wdio/allure-reporter";

describe("Home", () => {
  // before(async () => {
  //     console.log('THIS COULD BE USED FOR TEST SETUP')
  // })
  // beforeEach(async () => {
  //     console.log('THIS RUNS BEFORE EACH TEST')
  //     // Open URL
  //     //await browser.url('')
  // })
  // after(async () => {
  //     console.log('THIS COULD BE USED FOR TEST CLEANUP')
  // })
  // afterEach(async () => {
  //     console.log('THIS RUNS AFTER EACH TEST')
  // })

  // Test Case 1:
  it("Open URL & assert title", async () => {
    AllureReporter.addSeverity("minor");
    // Open URL
    await browser.url("");
    // Visual Testing ScreenShot
    await expect(browser).toMatchScreenSnapshot("home-page");
    //await expect(browser).toMatchFullPageSnapshot("home-page");

    //Assert title
    await expect(browser).toHaveTitle(
      "Practice E-Commerce Site – SDET Unicorns"
    );
  });

  // Test Case 2:
  it("Open About Page & assert URL", async () => {
    //Click on About tab
    await Home.aboutMenu.click();
    //Asser URL
    await expect(browser).toHaveUrl(expect.stringContaining("about"));
  });

  // Test Case 3:
  it("Click on Logo button & assert URL", async () => {
    AllureReporter.addFeature("Logo Verification");

    // Validate cssSelector is on page
    await expect(Home.logo).toBeClickable();
    await expect(Home.logo).toBePresent();

    await expect(Home.logo).toMatchElementSnapshot("logo-home-page");

    // Click on Logo button
    await Home.logo.click();

    // Assert URL is home page
    await expect(browser).toHaveUrl("https://practice.sdetunicorns.com/");
    console.log("SMILE");
  });

  // Test Case 4: ****** Find Element & Get Text ******
  it("Find Element & Get Text", async () => {
    // Finding Heading element on Page
    await expect(Home.headingElement);
    // Assert the text is expected
    await expect(Home.headingElement).toHaveText(
      "Think different. Make different."
    );
    //await expect(headingElement).toHaveText('Think different. Make different.')
    await browser.pause(5000);
  });
});
