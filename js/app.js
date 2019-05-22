var tableData = data;

var tbody = d3.select("tbody");

function sentenceCase(str) {
  return str.split(' ').map(function(word){
    return word.replace(word[0],word[0].toUpperCase());
  }).join(' ');
};


function handleSubmit() {
  d3.event.preventDefault();
  var date = d3.select("#datetime").node().value;
  var filteredData = tableData.filter(entry => entry.datetime === date);
  d3.select("#datetime").node().value = "";
  buildTable(filteredData);
};

function buildTable (alienData) {
    alienData.forEach((alien) => {
        var row = tbody.append("tr");
        Object.entries(alien).forEach(([key, value]) => {
          if (key === "state" || key === "country") {
            value = value.toUpperCase();
          } else if (key === "city") {
            value = sentenceCase(value);
          };
          var cell = tbody.append("td");
          cell.text(value);
        });
    });
};


d3.select("#submit").on("click", handleSubmit);
