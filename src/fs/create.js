const create = async() => {
    // Write your code here 
    const fs =
        require('fs')
    const path =
        require('path')
    fs.writeFile(
        path.join(__dirname, 'files', 'fresh.txt'),
        'I am fresh and young', {
            encoding: "utf8",
            flag: "wx"
        },
        (err) => {
            if (err) throw 'FS operation failed'
        })
};

create();