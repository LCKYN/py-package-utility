import * as vscode from "vscode";

export const moduleAtParent:boolean = vscode.workspace.getConfiguration("py-package-utility").moduleAtParent;
export const innerTest:boolean = vscode.workspace.getConfiguration("py-package-utility").innerTest;
