import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

export class FileManagment {
    createFileOrFolder(taskType: "file" | "folder", relativePath?: string) {
        const basepath = vscode.workspace.workspaceFolders[0].uri.fsPath;
        const fullpath = path.join(basepath, relativePath);

        if (taskType === "file") { this.makefiles([fullpath]); }
        else if (taskType === "folder") { this.makefolders([fullpath]); }
    }

    makefiles(filepaths: string[]) {
        filepaths.forEach((filepath) => this.makeFileSync(filepath));
    }

    makefolders(files: string[]) {
        files.forEach((file) => this.makeDirSync(file));
    }

    makeDirSync(dir: string) {
        if (fs.existsSync(dir)) return;
        if (!fs.existsSync(path.dirname(dir))) {
            this.makeDirSync(path.dirname(dir));
        }
        fs.mkdirSync(dir);
    }

    makeFileSync(filename: string) {
        if (!fs.existsSync(filename)) {
            this.makeDirSync(path.dirname(filename));
            fs.createWriteStream(filename).close();
        }
    }

    findDir(filePath: string) {
        if (!filePath) return null;
        if (fs.statSync(filePath).isFile()) return path.dirname(filePath);

        return filePath;
    }

    logError(error) {
        console.log("==============Error===============");
        console.log(error);
        console.log("===================================");
    }
}
