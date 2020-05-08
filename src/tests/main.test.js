//Number.prototype._called = {};
const Page = require('./page')

let page;

beforeEach(async()=>{
    page = await Page.build();
    await page.goto('http://localhost:3000', {waitUntil: 'domcontentloaded'})
})

afterEach(async()=>{
    //delay before close
    await page.waitFor(2000);
    //close
    await page.browser().close();
})

//normal text test
test('the header has the correct text', async()=>{
    const text = await page.$eval('h1', e => e.innerHTML);
    expect(text).toEqual('Check this out');
})

//button text test
test('the search input field has the correct text', async()=>{
    const text = await page.$eval('.MuiButton-label', e => e.innerHTML);
    expect(text).toEqual('Check');
})

//button visibility test
// test('the check button is not in disabled state', async()=>{
//     const is_disabled = await page.$eval('.Mui-disabled');
//     expect(is_disabled).toBe(false);
// })

//input field (before submit) test
test('the search input field is type-able', async()=>{
    await page.type('#textfield', 'Hello');
    const text = await page.$eval('#textfield', e => e.value);
    expect(text).toEqual('Hello');
})

//input field (submit) test
test('the search input field is submit-able', async()=>{
    await page.type('#textfield','Hihi');
    await page.click('Button');
    const val = await page.$eval('#value', e =>e.innerHTML) ;
    expect(val).toEqual('Hihi');
})

//input field (after-submit) test
test('the search input field is empty after submit', async()=>{
    await page.type('#textfield','Hihi');
    await page.click('Button');
    const val = await page.$eval('#textfield', e => e.value) ;
    expect(val).toEqual('');
})

//delete inputted test
test('submitted value is delete-able', async()=>{
    await page.type('#textfield','Hihi');
    await page.click('Button');
    await page.type('#textfield','Hoho');
    await page.click('Button');
    await page.click('#deleteButton');
    const val = await page.$eval('#value', e =>e.innerHTML) ;
    expect(val).toEqual('Hoho');
})

// describe('H2 Text', ()=>{
//     test('h2 loads correctly', async ()=>{
//         let browser = await puppeteer.launch({
//             headless: false
//         });
//         let page = await browser.newPage();

//         await page.goto('http://localhost:3000');
//         await page.waitForSelector('.App-title');

//         const html = await page.$eval('.App-title', e => e.innerHTML);
//         expect(html).toBe('Không có nút nào');

//         browser.close();
//     }, 17000);
// });




// const timeout = 5000;
// describe(
//     '/ (Home Page)',
//     () =>{
//         let page;
//         beforeAll(async () =>{
//             page = await global.__BROWSER__.newPage();
//             await page.goto('http://localhost:3000');
//         }, timeout);

//         it('should load without error', async () =>{
//             const text = await page.evaluate(()=> document.body.textContent);
//             expect(text.toContain('Không có nút nào'));
//         });
//     },
//     timeout,
// );