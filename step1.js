const fs = require('fs');
const process = require('process');

/** read file at path and print it out. */

function cat(argv) {
  console.log(argv)
  const path = argv[2]
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    } else {
      const text = data;
      console.log(text)
      fs.writeFile('newfile.txt', text, function(err) {
        if (err){
          console.log(err)
        }
        console.log("Done")
      })
    }
  });
}

cat(process.argv);