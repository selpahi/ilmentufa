// // load peg.js and the file system module
var fs = require("fs")
var PEG = require("pegjs")
// // read peg and build a parser
var camxes_peg = fs.readFileSync("\camxes-exp.js.peg").toString();
var camxes = PEG.buildParser(camxes_peg, {cache: true});
// // write to a file
// fs.writeFileSync("\camxes.js", camxes.toSource());
var fd = fs.openSync("\camxes-exp.js", 'w+');
var buffer = new Buffer('var camxes = ');
fs.writeSync(fd, buffer, 0, buffer.length);
buffer = new Buffer(camxes.toSource());
fs.writeSync(fd, buffer, 0, buffer.length);
buffer = new Buffer('\n\nmodule.exports = camxes;');
fs.writeSync(fd, buffer, 0, buffer.length);
fs.close(fd);

