var tableData = data;

var tbody = d3.select("tbody");

function handleSubmit() {
  d3.event.preventDefault();
  var date = d3.select("#datetime").node().value;
  var filteredData = tableData.filter(entry => entry.datetime === date);
  d3.select("#datetime").node().value = "";
  buildTable(filteredData);
}

function buildTable (alienData) {
    alienData.forEach((alien) => {
        var row = tbody.append("tr");
        Object.entries(alien).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
    });
};

d3.select("#submit").on("click", handleSubmit);