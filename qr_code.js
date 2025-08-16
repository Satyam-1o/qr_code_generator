import qr from 'qr-image';
import fs from 'fs';
import url from './index.js';
// let url = 
console.log(url);
var qr_svg = qr.image(url );
qr_svg.pipe(fs.createWriteStream('qr_code.png'));