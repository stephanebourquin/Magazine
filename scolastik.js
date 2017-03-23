document.addEventListener("deviceready", init, false);
function init() {

    document.querySelector("#sendMessage").addEventListener("click", function() {
        alert("click");
        var number = document.querySelector("#number").value;
        var message = document.querySelector("#message").value;
        console.log("going to send "+message+" to "+number);

        //simple validation for now
        if(number === '' || message === '') return;

        var msg = {
            phoneNumber:number,
            textMessage:message
        };

        sms.sendMessage(msg, function(message) {
            alert("success: " + message);
            navigator.notification.alert(
                'Message to ' + number + ' has been sent.',
                null,
                'Message Sent',
                'Done'
            );

        }, function(error) {
            alert("error: " + error.code + " " + error.message);
            navigator.notification.alert(
                'Sorry, message not sent: ' + error.message,
                null,
                'Error',
                'Done'
            );
        });

    }, false);

}
