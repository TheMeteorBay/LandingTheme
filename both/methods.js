if (Meteor.isServer) {
	Meteor.methods({
	    // Method for adding Email to the database
	    sendEmail: function(Name, Phone, Email, Subject, Message){
	      this.unblock();

	      Email.send({
	      	to: "no-reply@youremail.com",
	        bcc: Name,
	        from: Email,
	        subject: Subject,
	        text: Message,
	      });

	      console.log("email sent");
	    },		
	});

}