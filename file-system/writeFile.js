const fs = require('fs');

fs.writeFile('./writeme.txt', 'write write', (err) => {
  if (err) {
    throw err;
  }
  fs.readFile('./writeme.txt', (err, data) => {
    if (err) {
      throw err;
    }

    console.log(data);
    console.log(data.toString());
  });
});
