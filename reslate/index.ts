import { rename } from "fs";

rename("./_site", "./site", ()=>{
    console.log("Build successfull");
});
