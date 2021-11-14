

describe(('Demo tests'), () => {
    beforeAll(async () => {
        //await page.goto(url);
    });
    
    test.skip('Should login', async () => {
        const url = "https://qaecom.staging.listfly.com";
        const page_title = "QAECOM Email Marketing";
        const username = "admin";
        const password = "Testing1!";
    
        await page.goto(url);
    
        const title = await page.title();
        expect(title).toContain(page_title);
    
        //user name
        await page.fill('#user', username);
    
        //password
        await page.fill('#pass', password);
    
        //click login
        await page.click("input[value='Login']");
    });
    
    test.skip('page should render', async () => {
        await page.goto("https://www.activecampaign.com/");
        const title = await page.title();
        expect(title).toContain("ActiveCampaign");
    });
    
    test.skip('Open a new tab', async () => {
        //await page.click(button, { button: "middle" });
        //await page.waitForTimeout(); //waitForNavigation and waitForLoadState do not work in this case
    
        let pages = await context.pages();
        await pages[1].bringToFront();
        const title = await pages[1].title();
        expect(title).toContain('Title');
    
    });
    
    //Multiple contexts
    //Browser contexts are isolated environments on a single browser instance. 
    //Playwright can create multiple browser contexts within a single scenario. 
    //This is useful when you want to test for multi-user functionality, like chat.
    test('Multiple contexts', async () => {
        // Create two isolated browser contexts
        const userContext = await browser.newContext();
        const adminContext = await browser.newContext();
    
        // Create pages and interact with contexts independently
        const newUserContextPage = await userContext.newPage();
        const newAdminContextPage = await adminContext.newPage();
        
        const url = "https://qaecom.staging.listfly.com";
        const page_title = "QAECOM Email Marketing";
        const username = "admin";
        const password = "Testing1!";
    
        for await (const page of [newUserContextPage, newAdminContextPage]) {
            await page.goto(url);
            //USER CONTEXT
            //user name
            await page.fill('#user', username);
        
            //password
            await page.fill('#pass', password);
                
            //click login
            await page.click("input[value='Login']");
    
            let title = await page.title();
            expect(title).toContain(page_title);
        }
    
        expect(1).toEqual(1);
    });
});
