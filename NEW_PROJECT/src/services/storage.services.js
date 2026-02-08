const {ImageKit} = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey : " private_ZCfUHE3Fux94n3LJ0cQJz2GAxTg= "   
});

async function uploadImage(buffer){
    console.log(buffer);
    const result = await imagekit.files.upload({
        file : buffer.toString("base64"),
        fileName : `images_${Date.now()}.jpg`
    });
    return result.url;
}


module.exports = { uploadImage };