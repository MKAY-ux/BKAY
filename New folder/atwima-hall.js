document.addEventListener("DOMContentLoaded", function() {
    const blockSelect = document.getElementById("block");
    const roomSelect = document.getElementById("room");
    const priceInput = document.getElementById("price");

    const roomsByBlock = {
        "A": ["A1", "A2", "A3"],
        "B": ["B1", "B2", "B3"],
        "C": ["C1", "C2", "C3"],
        "D": ["D1", "D2", "D3"] // Added Block D with its rooms
    };

    const pricesByRoom = {
        "A1": "$500",
        "A2": "$450",
        "A3": "$400",
        "B1": "$550",
        "B2": "$500",
        "B3": "$450",
        "C1": "$600",
        "C2": "$550",
        "C3": "$500",
        "D1": "$650", // Added prices for Block D
        "D2": "$600",
        "D3": "$550"
    };

    // When a block is selected, populate the corresponding rooms
    blockSelect.addEventListener("change", function() {
        const selectedBlock = blockSelect.value;
        roomSelect.innerHTML = '<option value="" disabled selected>Select Room</option>';

        if (roomsByBlock[selectedBlock]) {
            roomsByBlock[selectedBlock].forEach(function(room) {
                const option = document.createElement("option");
                option.value = room;
                option.textContent = room;
                roomSelect.appendChild(option);
            });
        }

        // Reset price when block changes
        priceInput.value = "";
    });

    // When a room is selected, display the corresponding price
    roomSelect.addEventListener("change", function() {
        const selectedRoom = roomSelect.value;
        priceInput.value = pricesByRoom[selectedRoom] || "";
    });
});

