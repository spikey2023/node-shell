const fs = require("fs")

module.exports = function cat (name,fileName){
    
    process.stdin.on ("data", (name) => {
        let cmd = name.toString().trim().split(" ")
        console.log(cmd)
        let fileName = cmd [1]
        fs.readFile
        
        // if (cmd === "cat") {
        //     process.stdout.write 
        // }

    })

}