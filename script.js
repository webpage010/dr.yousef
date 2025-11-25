// Wait for DOM and EmailJS to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init("JHWrur4uIupvJt63s");
    } else {
        console.error('EmailJS library not loaded');
        return;
    }
    
    const form = document.getElementById('inquiry-form');
    if (!form) {
        console.error('Form not found');
        return;
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim() || 'לא צוין',
            service: document.getElementById('service').value || 'לא נבחר',
            message: document.getElementById('message').value.trim() || 'אין הודעה'
        };
        
        // Validate required fields
        if (!formData.name || !formData.email) {
            alert('אנא מלא את כל השדות הנדרשים');
            return;
        }
        
        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'שולח...';
        submitButton.disabled = true;
        
        // Send email using EmailJS
        emailjs.send('service_mf3ht7a', 'template_m9knktg', {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
            to_email: 'dr.yousefdurr@gmail.com'
        })
        .then(function(response) {
            console.log('Email sent successfully!', response.status, response.text);
            // Success - show confirmation message
            document.getElementById('confirmation-message').style.display = 'block';
            form.reset();
            
            // Scroll to confirmation message
            document.getElementById('confirmation-message').scrollIntoView({
                behavior: 'smooth'
            });
        }, function(error) {
            // Error - show error message
            console.error('EmailJS error:', error);
            alert('אירעה שגיאה בשליחת ההודעה. אנא נסה שוב או צור קשר ישירות בטלפון: 054-934-1582');
        })
        .finally(function() {
            // Reset button state
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        });
    });
});

        // Simple lightbox functionality
        document.querySelectorAll('.gallery-item img').forEach(img => {
            img.onclick = () => {
                window.open(img.src, '_blank');
            };
        });