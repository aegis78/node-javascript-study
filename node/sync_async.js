fs = require('fs');

//sync
const data = fs.readFileSync('data.txt', {encoding: 'utf8'});
console.log(1);
console.log(data);

//async
fs.readFile('data.txt', {encoding: 'utf8'}, function(err, data){
    console.log('2');
    console.log(data);
});

console.log('3');