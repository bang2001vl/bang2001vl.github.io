import { exec } from "child_process";
import { copyFileSync, readdirSync, rename, renameSync, rmSync } from "fs";
import minimist from "minimist";
import path from "path";
import { argv } from "process";


async function runCMD(args: string[]): Promise<{stdout: string; stderr:string}> {
    return new Promise((resolve, reject) => {
        exec(args.join(" "), (err, stdout, stderr) => {
            if (err) {
                reject(err);
                return;
            }
            resolve({stdout, stderr});
        });
    })
}

async function build(filePath: string, outDir: string) {
    filePath = path.resolve(filePath);
    outDir = path.resolve(outDir);

    copyFileSync(filePath, "./index.md");

    const o = await runCMD(["npm run","build-reslate"]);
    console.log(o.stdout);

    rmSync(outDir, { recursive: true, force: true });
    renameSync("./_site", outDir);

    console.log("Build successfull");
}

async function main() {
    try {
        const argvParsed = minimist(argv.slice(2));
        const file = argvParsed.file;
        if(typeof file !== "string") {
            console.log("Missing parameters: file");
            return;
        }
        const outDir = argvParsed.outDir ? argvParsed.outDir : path.parse(file).name;
        console.log(`Start: Build with file = ${file}, outDir = ${outDir}`);
        await build(file, outDir);
    }
    catch (ex) {
        console.log("FAILED: Have error");
        console.log(ex)
    }
}

main();