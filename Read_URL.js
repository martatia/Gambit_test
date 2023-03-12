const http = require('http');
const express = require('express');
const app = express();
app.use(express.json());

let url = "http://tuftuf.gambitlabs.fi/feed.txt";

http.get(url,(res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        try {
            console.log(JSON.stringify(body, null, ' '));
            //console.log(body); //
            //console.log(JSON.parse(body)); -Error: Unexpected number in JSON at position 4//
        } catch (error) {
            console.error(error.message);
        };
    });

}).on("error", (error) => {
    console.error(error.message);
});

app.post('/api/endpoint', (req, res) => {
    const body = req.body;
    res.json(req.body);
  });
  
  app.listen(3000);
