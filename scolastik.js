function sendsms() {
            alert ("try to sensd message ....");
var msg = {
            
            phoneNumber:"0033651583235",
            textMessage:"Hello world !!!";
        };

        sms.sendMessage(msg, function(message) {
            console.log("success: " + message);
            navigator.notification.alert(
                'Message to ' + number + ' has been sent.',
                null,
                'Message Sent',
                'Done'
            );

        }, function(error) {
            console.log("error: " + error.code + " " + error.message);
            navigator.notification.alert(
                'Sorry, message not sent: ' + error.message,
                null,
                'Error',
                'Done'
            );
        });
}
