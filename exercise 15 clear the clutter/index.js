import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const bsp = "C:\\btech programs\\sigma web development\\exercise 15 clear the clutter"
let files = await fs.readdir(bsp)
console.log(files)


for(const ele of files)
{
    let ext = ele.split(".")[ele.split(".").length-1]
    if(ext!="js"&&ext!="json"&&ele.split(".").length>1)
    {
        if(fsn.existsSync(path.join(bsp,ext))){
            //move the file to directory
            await fs.rename(path.join(bsp,ele),path.join(bsp,ext,ele))
        }
        else{
            await fs.mkdir(path.join(bsp,ext))
            await fs.rename(path.join(bsp,ele),path.join(bsp,ext,ele))
        }
    }
    // console.log(ele)
    console.log(ext)
}

