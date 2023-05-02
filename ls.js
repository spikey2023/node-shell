const fs = require('fs');

module.exports = () => {
    process.stdin.on('data', (data) => {
        let ls = data.toString().trim(); //remove the newline
        if (ls === "ls") {
            fs.readdir('./', 'utf8', (err, files) => {
                if (err) {
                  throw err;
                } else {
                  process.stdout.write(files.join('\n'));
                  process.stdout.write('\nprompt > ');
                }
              });
        }
    })
}

