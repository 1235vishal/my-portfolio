
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get values from the form
        const form = this;
        const formData = {
            cf_name: form.cf_name.value,
            cf_email: form.cf_email.value,
            cf_message: form.cf_message.value
        };

        // Send the email
        emailjs.send('service_dp4temc', 'template_jbwcdq1', formData)
            .then(function(response) {
                console.log('Email sent successfully:', response);
                // Handle success - You can display a success message or redirect to a thank you page
            }, function(error) {
                console.error('Error sending email:', error);
                // Handle error - You can display an error message to the user
            });
    });

