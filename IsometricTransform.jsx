const folderName = (new File($.fileName)).parent.toString();
var iconRight = File(folderName + '/assets/icon1.png');
var iconLeft = File(folderName + '/assets/icon2.png');
var iconTopLeft = File(folderName + '/assets/icon3.png');
var iconTopRight = File(folderName + '/assets/icon4.png');


var shearRight = app.getIdentityMatrix();
shearRight.mValueC = 0.5774;

var shearLeft = app.getIdentityMatrix();
shearLeft.mValueC = -0.5774;


function isoTransform(mode) {
    var curDoc = activeDocument;
    var selectedObjs = app.activeDocument.selection;
    var i = 0;
    for (i=0; i < selectedObjs.length; i++) {
        curObj = selectedObjs[i];
        curObj.resize(100,86.062);
        switch(mode) {
            case 0: 
                // Right panel
                curObj.transform(shearRight, true, false, false, false, 1);
                curObj.rotate(30);
            break;
            case 1:
                // Left panel
                curObj.transform(shearLeft, true, false, false, false, 1);
                curObj.rotate(-30);
            break;
            case 2:
                // Top panel, rotate right
                curObj.transform(shearRight, true, false, false, false, 1);
                curObj.rotate(-30);
            break;
            case 3:
                // Top panel, rotate left
                curObj.transform(shearLeft, true, false, false, false, 1);
                curObj.rotate(30);
            break;
        }
    }
    dlg.close();
};


var dlg = new Window( "dialog", "Isometric Transform" );
dlg.center();
dlg.group = dlg.add('group', undefined, 'Isometric tools');

dlg.group.rightBtn = dlg.group.add('iconbutton', undefined, iconRight);
dlg.group.rightBtn.onClick = function () { isoTransform(0)};

dlg.group.leftBtn = dlg.group.add('iconbutton', undefined, iconLeft);
dlg.group.leftBtn.onClick = function () { isoTransform(1)};

dlg.group.topLeftBtn = dlg.group.add('iconbutton', undefined, iconTopLeft);
dlg.group.topLeftBtn.onClick = function () { isoTransform(2)};

dlg.group.topRightBtn = dlg.group.add('iconbutton', undefined, iconTopRight);
dlg.group.topRightBtn.onClick = function () { isoTransform(3)};

dlg.show();

