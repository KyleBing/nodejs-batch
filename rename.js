const fs = require('fs')
const path = require("path")

const ext = ['txt', 'json', 'yaml', 'js', 'html', 'css', 'mp4']
const DEST_FOLDER_NAME = 'test'

function generateFileNames() {
    ext.forEach(item => {
        let tempFilePath = path.join(DEST_FOLDER_NAME, `test.${item}`)
        writeFile(tempFilePath, item)
    })
}


function writeFile(fileName, fileContent){
    fs.writeFile(
        fileName,
        fileContent,
        {encoding: 'utf-8'},
        err => {
            if (err) {
                log(err)
            } else {
                console.log(`save file ${fileName} success`)
            }
        })
}




function renameFiles(){
    fs.readdir(DEST_FOLDER_NAME, (err, filePaths) => {
        if (err) {
            console.log(err)
        } else {
            filePaths.forEach(item => {
                let pathObj = path.parse(item)
                fs.rename(path.join(DEST_FOLDER_NAME, item), path.join(DEST_FOLDER_NAME, `${pathObj.name}.txt`), err => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(`rename [ ${item} ] to [ ${pathObj.name}.txt ] success`)
                    }
                })
            })
        }
    })
}

// generateFileNames()
renameFiles()
