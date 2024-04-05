const createResponsivePopup = (url) => {
    // Create the popup container
    const popupContainer = document.createElement('div');
    Object.assign(popupContainer.style, {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid #000',
        backgroundColor: '#fff',
        zIndex: '1000',
        display: 'none', // Initially hidden
    });

    // Create the iframe
    const iframe = document.createElement('iframe');
    Object.assign(iframe.style, {
        width: '100%',
        height: '100%',
        border: 'none',
    });
    iframe.src = url;
    popupContainer.appendChild(iframe);

    // Create the close button
    const closeButton = document.createElement('div');
    closeButton.innerText = 'X';
    Object.assign(closeButton.style, {
        position: 'absolute',
        top: '0',
        right: '0',
        cursor: 'pointer',
        padding: '0.5em',
        backgroundColor: '#f00',
        color: '#fff',
    });
    popupContainer.appendChild(closeButton);

    // Append the popup to the body
    document.body.appendChild(popupContainer);

    // Function to update size
    const updatePopupSize = () => {
        const width = window.innerWidth > 768 ? window.innerWidth * 0.6 : window.innerWidth;
        popupContainer.style.width = `${width}px`;
        popupContainer.style.height = `${width}px`; // Height equals width
        popupContainer.style.display = 'block'; // Make visible
    };

    // Close button functionality
    closeButton.addEventListener('click', () => {
        popupContainer.style.display = 'none';
    });

    // Adjust the popup size on window resize
    window.addEventListener('resize', updatePopupSize);

    // Initial size adjustment
    updatePopupSize();
};

//function call for popup, just add url
//createResponsivePopup('https://example.com');