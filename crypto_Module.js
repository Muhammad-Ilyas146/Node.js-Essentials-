

// here we will be using crypto module

import crypto from 'crypto';

// createHash()
const hash = crypto.createHash('sha256');  // it takes the algorithm as input
// to hash something we use update method
hash.update('ilyas');
console.log(hash.digest('hex')); // to get that created hash we use digest method


// randomBytes() here we are creating a random 16 byte string 
crypto.randomBytes(16,(err,buf)=>{
    if (err) throw err;
    console.log(buf.toString('hex'))
});


// Encryption (plain to cifer text)

// createCiferiv 
const algorithm='aes-256-cbc';
const key =crypto.randomBytes(32);
const iv=crypto.randomBytes(16);

// Encryption  // createCiferiv()
const cifer = crypto.createCipheriv(algorithm,key,iv);
let encrypted=cifer.update('This is encrypted message by ilyas','utf-8','hex');
encrypted +=cifer.final('hex'); // thi is necessory to encrypt the complete text 
console.log(encrypted);

// Decryption // createDecipheriv()
const decifer = crypto.createDecipheriv(algorithm,key,iv);
let decrypted=decifer.update(encrypted,'hex','utf-8');
decrypted +=decifer.final('utf-8');  // thi is necessory to decrypt the complete text 
console.log(decrypted);
