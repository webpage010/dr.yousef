document.getElementById('inquiry-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you would typically send the form data to your server
    // For demonstration, we'll just show the confirmation message
    document.getElementById('confirmation-message').style.display = 'block';
    document.getElementById('inquiry-form').reset();
    
    // Scroll to confirmation message
    document.getElementById('confirmation-message').scrollIntoView({
        behavior: 'smooth'
    });
    
    // In a real implementation, you would:
    // 1. Collect form data
    // 2. Send to server (e.g., via Fetch API)
    // 3. Handle response
    // Example:
    /*
    const formData = new FormData(this);
    fetch('your-server-endpoint', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('confirmation-message').style.display = 'block';
            this.reset();
        }
    });
    */
});

        // Simple lightbox functionality
        document.querySelectorAll('.gallery-item img').forEach(img => {
            img.onclick = () => {
                window.open(img.src, '_blank');
            };
        });