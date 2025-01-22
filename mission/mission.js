const themeSelector = document.getElementById('themeSelector');
const body = document.body;
const logo = document.getElementById('logo');
function changeTheme()
{
    const selectedTheme = themeSelector.value;
    if (selectedTheme === 'dark') {
        // Apply dark theme
        body.classList.add('dark');
        logo.src = 'byui-logo_white.png';
        
    } else {
        // Apply light theme
        body.classList.remove('dark');
        logo.src = 'byui-logo_blue.wedp';
    }
}
themeSelector.addEventListener('change', changeTheme);