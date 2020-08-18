/// <reference name="MicrosoftAjax.js" /> 
/// <reference path="file://C:/Program Files/Common Files/Microsoft Shared/Web Server Extensions/14/TEMPLATE/LAYOUTS/SP.core.debug.js" /> 
/// <reference path="file://C:/Program Files/Common Files/Microsoft Shared/Web Server Extensions/14/TEMPLATE/LAYOUTS/SP.debug.js" />
function ListImportEnable() {
    //    var items = SP.ListOperation.Selection.getSelectedItems();
    //    var ci_enableButton = CountDictionary(items);
    //    return (ci_enableButton != 0);
    return true;
}
function ShowListImport() {
    var options = SP.UI.$create_DialogOptions();
    options.width = 700;
    options.height = 650;
    options.allowMaximize = false;
    options.title = 'Import from Excel';
    options.url = L_Menu_BaseUrl + "/_layouts/ListImport/ListImportSL.aspx?ListId=" + SP.ListOperation.Selection.getSelectedList();
    options.dialogReturnValueCallback = Function.createDelegate(null, listImport_modalDialogClosedCallback);

    SP.UI.ModalDialog.showModalDialog(options);

}
function listImport_modalDialogClosedCallback(result, value) {
    SP.UI.ModalDialog.RefreshPage(result);
}