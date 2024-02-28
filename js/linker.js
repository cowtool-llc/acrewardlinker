function generateLinks() {
    const pax = document.getElementById("pax").value;
    const origins = document.getElementById("origins").value.split(",");
    const destinations = document.getElementById("destinations").value.split(",");
    const rawDates = document.getElementById("dates").value.split(",");

    const dates = rawDates; // TODO: Colons

    var results = "<table border=\"1\">";
    results += "<tr><th>Origin</th><th>Destination</th><th>Date</th><th>Link</th></tr>"

    origins.forEach((origin) => {
        destinations.forEach((destination) => {
            dates.forEach((date) => {
                const row = `<tr><td>${origin}</td><td>${destination}</td><td>${date}</td><td><a href="https://www.aircanada.com/aeroplan/redeem/availability/outbound?tripType=O&org0=${origin}&dest0=${destination}&departureDate0=${date}&ADT=pax">AC.com</a></td></tr>`;
                results += row;
            });
        });
    });

    results += "</table>";

    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = results;
}
