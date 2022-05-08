const http = require("http");
const os = require("os");
const path = require("path");

const username = os.userInfo().username;
const os_type = os.type();

const os_time = String(os.uptime());
const dir_name = path.dirname(require.main.filename);

const file_name = path.basename(__filename);


http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(`<h1>System information</h1>`)
    res.write(`<p>Current user name: ${username}\n</p>`);
    res.write(`<p>OS type: ${os_type}\n</p>`);
    res.write(`<p>System work time: ${os_time} minutes\n</p>`);
    res.write(`<p>Current work directory: ${dir_name}\n</p>`);
    res.write(`<p>Server file name: ${file_name}\n</p>`);

    res.end("Server working!\n");
}).listen(5000);

console.log("Server running at http://127.0.0.1:5000/");