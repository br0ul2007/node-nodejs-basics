const { callbackify } = require('util');

const copy = async() => {
    // Write your code here 
    const fs = require('fs')
    const path = require('path')
    const dest = '/files_copy'
    const src = '/files'
    const dirPath = path.join(__dirname, src);
    let entries = await fs.readdir(dirPath, { withFileTypes: true }, (err, content) => {
        callback(null, content)
        if (err) throw 'FS operation failed'

    });
    await fs.mkdir(dirPath, { recursive: true },
        (err) => {
            if (err) throw 'FS operation failed'
        });


    console.log(entries)
    for (let entry of entries) {
        let srcPath = path.join(src, entry.name);
        let destPath = path.join(dest, entry.name);
        await fs.copyFile(srcPath, destPath, fs.constants.COPYFILE_EXCL, (err) => {
            if (err) throw 'FS operation failed'
        });
    }
};

await copy();
