
import * as path from "path";
import * as vscode from 'vscode';
import { FileManagment } from "./appModel";

const fileManagment = new FileManagment();


export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "py-package-utility" is now active!');

    let disposable = vscode.commands.registerCommand('py-package-utility.createEmptyPackage', (file: vscode.Uri) => {

        // vscode.window.showInformationMessage(relativePath.toString() + "123456789");

        // fileManagment.createFileOrFolder('folder', '/test_extension/');
        // vscode.workspace.getConfiguration("py-package-utility").moduleAtParent







        create_pyproject_toml();

        create_setup_py();
        create_setup_cfg();

        create_gitignore();
        create_LICENSE();
        create_README();
        create_requirements();

        create_precommit();

        create_module();
        create_scripts();
    });

    context.subscriptions.push(disposable);
}

async function create_module(): void {
    let prefixPath =  false ? "/src" : "/";
    let moduleName : string = await vscode.window.showInputBox({
            prompt: `Module Name : `,
            ignoreFocusOut: true,
        });

    let targetPath = path.join(prefixPath, moduleName);
    fileManagment.createFileOrFolder('folder', targetPath);

    let initFilePath = path.join(targetPath, '__init__.py');
    fileManagment.createFileOrFolder('file', initFilePath);

    let mainFilePath = path.join(targetPath, '__main__.py');
    fileManagment.createFileOrFolder('file', mainFilePath);

    let testPath = path.join(targetPath, "tests");
    fileManagment.createFileOrFolder('folder', testPath);
}

function create_scripts(): void {
    fileManagment.createFileOrFolder('folder', '/scripts');
}

function create_precommit(): void {
    fileManagment.createFileOrFolder('file', '.pre-commit-config.yaml');
}

function create_setup_py(): void {
    fileManagment.createFileOrFolder('file', '/setup.py');
}

function create_setup_cfg(): void {
    fileManagment.createFileOrFolder('file', '/setup.cfg');
}

function create_pyproject_toml(): void {
    fileManagment.createFileOrFolder('file', '/pyproject.toml');
}

function create_gitignore(): void {
    fileManagment.createFileOrFolder('file', '/.gitignore');
}

function create_LICENSE(): void {
    fileManagment.createFileOrFolder('file', '/LICENSE');
}

function create_README(): void {
    fileManagment.createFileOrFolder('file', '/README.md');
}

function create_requirements(): void {
    fileManagment.createFileOrFolder('file', '/requirements.txt');
}

export function deactivate(): void { }
