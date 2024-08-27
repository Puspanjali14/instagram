// Add any basic interaction if needed here
// For example, handling the follow button click in suggestions
document.querySelectorAll('.suggestion button').forEach(button => {
    button.addEventListener('click', () => {
        button.textContent = 'Following';
        button.style.color = '#262626';
    });
});
