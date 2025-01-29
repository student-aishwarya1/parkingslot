const parkingDetailsDiv = document.getElementById('parking-details');

function parkVehicle() {
    const vehicleNo = document.getElementById('park-vehicle-no').value.trim();
    const ownerName = document.getElementById('owner-name').value.trim();

    if (vehicleNo && ownerName) {
        const vehicleInfo = document.createElement('p');
        vehicleInfo.textContent = `Vehicle No: ${vehicleNo}, Owner: ${ownerName}`;
        parkingDetailsDiv.appendChild(vehicleInfo);

        // Clear the form
        document.getElementById('park-form').reset();
    } else {
        alert('Please fill in both fields.');
    }
}

function unparkVehicle() {
    const vehicleNo = document.getElementById('unpark-vehicle-no').value.trim();

    if (vehicleNo) {
        const paragraphs = parkingDetailsDiv.getElementsByTagName('p');
        for (let i = paragraphs.length - 1; i >= 0; i--) {
            if (paragraphs[i].textContent.includes(vehicleNo)) {
                parkingDetailsDiv.removeChild(paragraphs[i]);
            }
        }

        // Clear the form
        document.getElementById('unpark-form').reset();
    } else {
        alert('Please enter a vehicle number.');
    }
}

