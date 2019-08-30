const fs = require('fs');
const infoFile = require('./info.json');
//holder = '';


try {
    
    var contents = fs.readdirSync(infoFile.FolderDir);
    console.log(contents);

} catch (error) {
    
    console.log("File does not exist. Create File");
    fs.mkdirSync("e:\\" + infoFile.FolderName);
}


