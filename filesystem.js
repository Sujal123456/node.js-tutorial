const fs = require("fs");
fs.readFile(__dirname + "/hello.txt", "utf8", (error, data) => {
    if (error) throw error;
    console.log(data);
});

//Delete a File
fs.unlink(__dirname + "/hello.txt", (error, data) => {
    if (error) throw error;
    console.log("File deleted" + data);
});