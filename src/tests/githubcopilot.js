function calculateDaysBetween(startDate, endDate) {
    let startTime = startDate.getTime();
    let endTime = endDate.getTime();

    let result = (endTime - startTime) / (1000 * 60 * 60 * 24);
    return result;
}

// find all images without alternate text
// and give them a red border
function highlightImagesWithoutAltText(page) {
    let images = page.$$('img');
    for (let i = 0; i < images.length; i++) {
        let image = images[i];
        if (image.getAttribute('alt') == null) {
            image.setAttribute('style', 'border: 3px solid red');
        }
    }
}

// Express server on port 3000
const app = express();

// return a current time
app.get('/time', (req, res) => {
    res.send(new Date().toString());
});

// return server status
app.get('/status', (req, res) => {
    res.send('OK');
});

// return a list of all images on the page
app.get('/images', (req, res) => {
    let images = page.$$('img');
    let imageList = [];
    for (let i = 0; i < images.length; i++) {
        let image = images[i];
        imageList.push(image.getAttribute('src'));
    }
    res.send(imageList);
});

// set the page title
app.get('/title', (req, res) => {
    let title = page.title();
    res.send(title);
}   );

// sum the numbers in the query string
app.get('/sum', (req, res) => {
    let sum = 0;
    let numbers = req.query.numbers.split(',');
    for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
    }
    res.send(sum.toString());
}   );