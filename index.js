$(document).ready(function() {
    // Create the logo element
    var logo = $('<a href="https://aiwithshrey.github.io"><img src="assets/logo.png" alt="Logo"></a>');
    
    // Set the logo position and style
    logo.css({
        position: 'fixed',
        top: '10px',
        right: '10px',
        width: '100px',
        height: '100px',
        transition: 'transform 0.3s ease',
        transform: 'scale(1)'
    });
    
    // Add hover effect to the logo
    logo.hover(
        function() {
            $(this).css('transform', 'scale(1.2)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );
    
    // Append the logo to the body
    $('body').append(logo);
});
