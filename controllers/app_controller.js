const fs = require("fs");

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
}

module.exports = appController;
