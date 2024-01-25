$(document).ready(function() {
    // Define the logo
    var logo = $('<img>', { 
        id: 'logo',
        src: 'assets/Logo.png', // replace with the correct path to your logo
        alt: 'Site Logo',
        href: "https://aiwithshrey.github.io"
    });
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

    