var stud = document.getElementById("sidechick");
var stunner = document.getElementById("phone");

if (document.body.clientWidth < 1000) {
    if (document.body.clientWidth > 375) {
        stud.style.width = `${document.body.clientWidth - 125}px`;
    }
    
    else if (document.body.clientWidth < 375) {
        stud.style.width = `${document.body.clientWidth - 125}px`;
    }  
    
    if (document.body.clientWidth > 375) {
        stunner.style.marginLeft = `${document.body.clientWidth - 335}px`;
    }
}




