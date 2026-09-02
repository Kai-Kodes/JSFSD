function card() {

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const aadhar = document.getElementById("adhar").value;
    const city = document.getElementById("city").value;
    const date = document.getElementById("date").value;
    const seats = document.getElementById("seats").value;

    const bus = document.querySelector('input[name="bus"]:checked');

    if (!bus) {
        alert("Please select a bus type");
        return;
    }

    let farePerSeat;

    if (bus.value === "ac") {
        farePerSeat = 2000;
    } else {
        farePerSeat = 1500;
    }

    const totalFare = farePerSeat * seats;


    document.getElementById("displayName").textContent = name;
    document.getElementById("displayAge").textContent = age;
    document.getElementById("displayAadhar").textContent = aadhar;
    document.getElementById("displayCity").textContent = city;
    document.getElementById("displayDate").textContent = date;
    document.getElementById("displaySeats").textContent = seats;
    document.getElementById("displayFare").textContent = totalFare;


    document.getElementById("bookingCard").style.display = "block";
}