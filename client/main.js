Template.main_layout.rendered = function() {

(function($) {
	"use strict"; // Start of use strict

	// jQuery for page scrolling feature - requires jQuery Easing package
	$('a.page-scroll').bind('click', function(event) {
	    var $anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: ($($anchor.attr('href')).offset().top - 50)
	    }, 1250, 'easeInOutExpo');
	    event.preventDefault();
	});

	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
	    target: '.navbar-fixed-top',
	    offset: 51
	});

	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function(){ 
	    $('.navbar-toggle:visible').click();
	});

	// Offset for Main Navigation
	$('#mainNav').affix({
	    offset: {
	        top: 100
	    }
	})

})(jQuery); // End of use strict

}

Template.main_layout.events({
    "submit #contactForm": function(event){
      var Name = event.target.Name.value;
      var Phone = event.target.Phone.value;
      var Subject = event.target.Subject.value;
      var Email = event.target.Email.value;
      var Message = event.target.Message.value;

      Meteor.call('sendEmail', Name, Phone, Email, Subject, Message);

      event.target.Name.value="";
      event.target.Phone.value="";
      event.target.Email.value="";
      event.target.Subject.value="";
      event.target.Message.value="";

      alert("Thanks we will reach out to you asap!");

      // Prevent Submit
      return false
    },

});