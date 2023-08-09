const apiEndpoint = "./jsonfile.json";
const display = document.querySelector("#display_data");

const getData = async () => {
  const res = await fetch(apiEndpoint);
  const data = await res.json();
  return data;
};

let dataJson;
let header = null;

const displayUsers = async () => {
  const payload = await getData();
  dataJson = payload;
  header = Object.keys(dataJson[0]);
  console.log(payload);
};

displayUsers();
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // Set Data
  const data = google.visualization.arrayToDataTable([
    ["Điểm số", "Số lượng"],
    ["ĐIỂM 0", parseInt(dataJson[0]["ĐIỂM 0"]["SL"])],
    ["ĐIỂM 1", parseInt(dataJson[0]["ĐIỂM 1"]["SL"])],
    ["ĐIỂM 2", parseInt(dataJson[0]["ĐIỂM 2"]["SL"])],
    ["ĐIỂM 3", parseInt(dataJson[0]["ĐIỂM 3"]["SL"])],
    ["ĐIỂM 4", parseInt(dataJson[0]["ĐIỂM 4"]["SL"])],
    ["ĐIỂM 5", parseInt(dataJson[0]["ĐIỂM 5"]["SL"])],
    ["ĐIỂM 6", parseInt(dataJson[0]["ĐIỂM 6"]["SL"])],
    ["ĐIỂM 7", parseInt(dataJson[0]["ĐIỂM 7"]["SL"])],
    ["ĐIỂM 8", parseInt(dataJson[0]["ĐIỂM 8"]["SL"])],
    ["ĐIỂM 9", parseInt(dataJson[0]["ĐIỂM 9"]["SL"])],
    ["ĐIỂM 10", parseInt(dataJson[0]["ĐIỂM 10"]["SL"])],
  ]);

  // Set Options
  const options = {
    title: "Phân tích điểm số",
    // is3D: true,
  };

  // Draw
  const chart = new google.visualization.PieChart(
    document.getElementById("display_data")
  );
  chart.draw(data, options);
}
