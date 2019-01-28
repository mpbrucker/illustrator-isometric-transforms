// #target Illustrator;
// #targetengine main;
const folderName = (new File($.fileName)).parent.toString();
var iconFile = File(folderName + '/assets/test.png');


var shearRight = app.getIdentityMatrix();
shearRight.mValueC = 0.5774;

var shearLeft = app.getIdentityMatrix();
shearLeft.mValueC = -0.5774;


function isoTransform(mode) {
    alert(app.activeDocument);
    var curDoc = activeDocument;
    var selectedObjs = app.activeDocument.selection;
    var i = 0;
    alert('test');
    alert(selectedObjs);
    // alert('test');
    for (i=0; i < selectedObjs.length; i++) {
        curObj = selectedObjs[i];
        curObj.resize(100,86.062);
        switch(mode) {
            case 0: 
                // Right panel
                curObj.transform(shearRight);
                curObj.rotate(30);
            break;
            case 1:
                // Left panel
                curObj.transform(shearLeft);
                curObj.rotate(-30);
            break;
            case 2:
                // Top panel, rotate right
                curObj.transform(shearRight);
                curObj.rotate(-30);
            break;
            case 3:
                // Top panel, rotate left
                curObj.transform(shearleft);
                curObj.rotate(30);
            break;
        }
    }
    // // TODO make panel floating
    // dlg.close();
};


var dlg = new Window( "palette", "Isometric Transform" );
dlg.center();
dlg.group = dlg.add('group', undefined, 'Isometric tools');
dlg.group.testBtn = dlg.group.add('iconbutton', undefined, iconFile);
dlg.group.testBtn.onClick = function () { isoTransform(0)};


dlg.show();

