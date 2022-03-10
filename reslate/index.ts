import { rename, renameSync, rmSync } from "fs";

try{
    rmSync("./site", {recursive: true, force: true});
renameSync("./_site", "./site");

console.log("Build successfull");
}
catch(ex){
    console.log("FAILED: Have error");
    console.log(ex)
}
