
(function() {

        var data = [
        {
            name: 'Open in Browser',
            description: 'This extension does exactly what it says, it enables you to view an HTML file in browser. It opens HTML pages in your default browser, but you can also select “open in other browsers” to open in a different one on right click.',
            author: 'TechER',
            url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens&_ga=2.191462056.309103579.1584999469-243682315.1584999469',
            downloads: 1639141, 
            stars: 3.5,
            price: 0,
            selector: 'p1'
        },
        {
            name: 'Atom-Beautify', 
            description: 'The atom-beautify package will clean up your code, and make it more readable.', 
            author: 'Glavin001', 
            url: 'https://atom.io/packages/atom-beautify', 
            downloads: 4228040, 
            stars: 4541, 
            price: 6.75, 
            selector: 'p2'
        },
        {
            name: 'Trailing Spaces',
            description: 'The Trailing spaces extension does pretty much what’s in the title, it enables you to highlight trailing spaces and remove them quickly.',
            author: 'Shardul Mahadik',
            url: 'https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces',
            downloads: 343113,
            stars: 30,
            price: 0,
            selector: 'p3'
        },
    ];

    function Package(data) { 
        this.name = data.name; 
        this.description = data.description; 
        this.author = data.author; 
        this.url = data.url; 
        this.downloads = data.downloads; 
        this.stars = data. stars; 
        this.selector = data.selector; 
    
        this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString(); 
        };
    
        this.getFormattedStars = function () { 
        return this.stars.toLocaleString();
        };
    }

    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function (id) {
        return document.getElementById(id);
    }

    var writePackageInfo = function(package) {
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authEl = getEl(selector + '-author'),
            downloadEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars');
            nameEl.textContent = package.name;
            descEl.textContent = package.description;
            authEl.textContent = package.author;
            downloadEl.textContent = package.getFormattedDownloads();
            starsEl.textContent = package.getFormattedStars();
    }



    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var openInBrowser = new Package(data[0]);
    writePackageInfo(openInBrowser);

    var beautifly = new Package(data[1]);
    writePackageInfo(beautifly);

    var TrailingSpaces = new Package(data[2]);
    writePackageInfo(TrailingSpaces);


}());