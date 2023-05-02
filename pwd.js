module.exports = () => {
process.stdin.on('data', (data) => {
    let cmd = data.toString().trim(); //remove the newline
    if (cmd === "pwd") {
      cmd = process.cwd()
      process.stdout.write(cmd)
      process.stdout.write('\nprompt > ')
    }
  
    // process.stdout.write(cmd)
    // process.stdout.write('\nprompt > ');
  })
}