window.onload = function () {

    buttons = {
        "button_ask_question": ['modal_ask_question', 'close-modal-button'],
        "button_send_message": ['modal_send_message', 'close-modal-button']
    }

    window.onclick = function(event) {
        if (event.target.id !="undefined" && event.target.id in buttons) {
            var modalshadow = document.getElementById(buttons[event.target.id][0]);
            var crossbutton = document.getElementById(buttons[event.target.id][1]);
            
            modalshadow.style.display = "block";

            crossbutton.onclick = function() {
                modalshadow.style.display = "none";
            }
            modalshadow.addEventListener('click', function(e){
                if (modalshadow != e.target) {return};
                modalshadow.style.display = "none";
            });
        }
    }
    // how to iterate through all elements of page that have an id
    // var elements = document.getElementsByTagName("*");
    // var len = elements.length;
    // for (var i=0; i<len; i++) {
    //     if (elements[i].id != "undefined") {
    //         console.log("ID is here: " + elements[i].id);
    //     } 
    // }
}
