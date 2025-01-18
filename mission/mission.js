const themeSelector = document.getElementById("theme");
function changeTheme()
{
    const selectedTheme = themeSelector.value;
    if (selectedTheme === 'dark') {
        // Apply dark theme
        body.classList.add('dark');
        
    } else {
        // Apply light theme
        body.classList.remove('dark');
    }
}
themeSelector.addEventListener('change', changeTheme);