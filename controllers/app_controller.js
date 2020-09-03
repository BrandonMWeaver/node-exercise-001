const fs = require("fs");

const items = [ "Item 1", "Item 2", "Item 3" ];

const appController = (req, res) => {
    if (req.url === '/') {
        fs.readFile("./views/index.html", (error, html) => {
            if (error) throw error;
            res.write(html);
            res.end();
        });
    }
    if (req.url === "/about") {
        fs.readFile("./views/about.html", (error, html) => {
            if (error) throw error;
            res.write(html);
            res.end();
        })
    }
    if (req.url === "/items") {
        fs.readFile("./views/items/index.html", (error, html) => {
            if (error) throw error;
            res.write(html);
            res.write("<ul>");
            for(const item of items) {
                res.write(`<li>${item}</li>`);
            }
            res.write("</ul>");
            res.end();
        })
    }
}

module.exports = appController;
