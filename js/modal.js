window.onload = function () {
        // Get the modal
    
    var choices = {
        'button_ask_question': ['modalAskQuestion', 'close-modal-button'],
        'button_send_message': ['modalSendMessage', 'close-send-message-modal']
    }
    var modal = document.getElementById('modalAskQuestion');
    
    // Get the button that opens the modal
    var btn = document.getElementById('button_ask_question');

    // Get the <span> element that closes the modal
    var cross = document.getElementById('close-modal-button');

    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    cross.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
