function sendsms() {
            alert ("try to sensd message ....");
            var msg = {
            phoneNumber:"33651583235",
            textMessage:"Hello world !!!";
        };

        sms.sendMessage(msg, function(message) {
            alert("success: " + message); 
        }, function(error) {
           alert("error: " + error.code + " " + error.message);       
        });

}
