const fs = require('fs');

/* ========= WRITE FILE ========= */
fs.writeFile('example.txt', 'Hey there!', (err) => {
    if (err) console.log(err);
    else console.log('write done');
});

/* ========= APPEND FILE ========= */
fs.appendFile('example.txt', ' Thanks for reading...', (err) => {
    if (err) console.log(err);
    else console.log('append done');
});

/* ========= RENAME FILE ========= */
fs.rename('example.txt', 'example2.txt', (err) => {
    if (err) console.log(err);
    else console.log('rename done');
});

/* ========= COPY FILE ========= */
/* make sure ./copy folder exists */
fs.copyFile('example2.txt', './copy/copied.txt', (err) => {
    if (err) console.log(err);
    else console.log('copy done');
});

/* ========= DELETE FILE ========= */
fs.unlink('example2.txt', (err) => {
    if (err) console.log(err);
    else console.log('delete done');
});
