let isPrimary = true;

function toggleColorScheme() {
    const body = document.body;
    const ficons = document.querySelectorAll('.ficons');
    const formtext = document.querySelectorAll('.formtext'); // Add this line to select elements with the class .formtext

    if (isPrimary) {
        body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
        body.style.color = '#fff';
        
        // Change ficon color to red
        ficons.forEach(ficon => {
            ficon.style.color = 'red';
        });

        // Change formtext color to red
        formtext.forEach(text => {
            text.style.color = 'red';
        });
    } else {
        body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
        body.style.color = '#333';

        // Reset ficon color
        ficons.forEach(ficon => {
            ficon.style.color = '#fff'; // Set to the default color or adjust as needed
        });

        // Change formtext color to red
        formtext.forEach(text => {
            text.style.color = 'red';
        });
    }

    isPrimary = !isPrimary;
}
