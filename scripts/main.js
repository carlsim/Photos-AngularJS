function getChar(event) {
    if (event.which === null) {
        return String.fromCharCode(event.keyCode);
    } else if (event.which !== 0 && event.charCode !== 0) {
        return String.fromCharCode(event.which);
    } else {
        return null;
    }
}

function init(){
}

/**
 *
 *  When the "Submit" id (usually a button) is clicked
 *
 **/
$(function(){
    console.log("document loaded!");
    $('.recents__photo-box img').click(function(){
        console.log('clicked');
    });
});