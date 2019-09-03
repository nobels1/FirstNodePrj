const fs = require('fs');
const path = require('path');
const infoFile = require('./info.json');
var readContent;

//Read a directory
function readInput(readme){
    try {
        
        let contents = fs.readdirSync(readme); 
        return contents; 
        
       
    } catch (error) {
        
    }
}

//Check to see if passing argument is a folder/directory.
function isaDir(dir){
    //dirResult = fs.lstatSync(dir).isDirectory();
    return fs.lstatSync(dir).isDirectory();
}


function makePath(temp){

    let passer = path.join(infoFile.FolderDir +'\\' + temp);

    return passer;
}

function putIttogether(receiver){
    let btemp = [];

    let atemp = readInput(receiver);
    atemp.forEach(element => {
        
        btemp.push(makePath(element));
                
    });

    console.log(btemp.every(isaDir));
    //console.log(btemp);
}

//start here
readContent = putIttogether(infoFile.FolderDir);


//console.log(readContent);






/* 
try {
    
    //var contents = fs.readdirSync(infoFile.FolderDir);

    contents.forEach(element => {
        
        passer = path.join(infoFile.FolderDir +'\\' + element);

        if (isaDir(passer)) {
            innerContents = fs.readdirSync(infoFile.FolderDir +'\\' + element);
            console.log(innerContents);
        }else{
            console.log('File name: ' + passer);
        }

    });
    
    let anothertest = isaDir(infoFile.FolderDir);

    //var somethingelse = fs.existsSync(infoFile.FolderDir);
    console.log(contents);
   
    console.log(anothertest);

} catch (error) {
    
    console.log("File does not exist. Create File");
    //fs.mkdirSync("e:\\" + infoFile.FolderName);
} */




