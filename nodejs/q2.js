
import fs from 'fs';

fs.readFile('./database.txt', (err, data) => {
  // rest of the code
 if (err) throw err;
  fs.writeFile('output.txt', data, (err) => {
    if (err) throw err;
    console.log('File written successfully');
  });
});