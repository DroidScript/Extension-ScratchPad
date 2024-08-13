//
// Sample (Left Tab) DroiScript extension project.
//

function OnStart()
{
    //Install extension files.
    app.MakeFolder( "/sdcard/DroidScript/Extensions/ScratchPad/Left" )
    app.CopyFolder( "editor", "/sdcard/DroidScript/Extensions/ScratchPad/Left/editor" )
    app.CopyFile( "ScratchPad.html", "/sdcard/DroidScript/Extensions/ScratchPad/Left/ScratchPad.html" )
    app.CopyFile( "ScratchPad.css", "/sdcard/DroidScript/Extensions/ScratchPad/Left/ScratchPad.css" )
    app.CopyFile( "ScratchPad.json", "/sdcard/DroidScript/Extensions/ScratchPad/Left/ScratchPad.json" )
    
    app.ShowPopup( "Refresh your browser/frame" )
    setTimeout( function(){app.Exit()}, 2000 )
}

