const fs = require("fs");
const qs = require("querystring");

const items = [];

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
        });
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
        });
    }
    if (req.url === "/items/new") {
        if (req.method === "POST") {
            let body = '';
            req.on("data", chunk => {
                body += chunk.toString();
            });
            req.on("end", () => {
                const parsedBody = qs.parse(body);
                items.push(parsedBody.item);
            });
            res.writeHead(301, { Location: "/items" });
            res.end();
        }
        else {
            fs.readFile("./views/items/new.html", (error, html) => {
                if (error) throw error;
                res.write(html);
                res.end();
            });
        }
    }
}

module.exports = appController;
