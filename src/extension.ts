
import * as vscode from 'vscode';
import { AppModel } from "./appModel";

export function activate(context: vscode.ExtensionContext) {
    const appModel = new AppModel();

	console.log('Congratulations, your extension "py-package-utility" is now active!');

	let disposable = vscode.commands.registerCommand('py-package-utility.helloWorld', async(file: vscode.Uri) =>  {
        let relativePath : string | number = await vscode.window.showInputBox({
            prompt: `Create New )`,
            ignoreFocusOut: true,
        });
        vscode.window.showInformationMessage(relativePath.toString() + "123456789");
        // appModel.createFileOrFolder('file', '/test_extension.py');
        // appModel.createFileOrFolder('dir', '/test_extension/');
    });

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
