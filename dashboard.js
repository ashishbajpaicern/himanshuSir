// Get the username from the query string
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var username = urlParams.get("username");

// Display the username on the page
var usernameElement = document.getElementById("username");
usernameElement.textContent = "Welcome, " + username + "!";

// Read the attendance Excel file using the xlsx library
var attendanceFile = "attendance.xlsx";
var attendanceWorkbook = XLSX.readFile(attendanceFile);
var attendanceSheet = attendanceWorkbook.Sheets["Sheet_number"]; // Assuming the attendance data is on "Sheet1"

// Convert Excel data to JSON
var attendanceData = XLSX.utils.sheet_to_json(attendanceSheet);

// Display the attendance data on the page
var attendanceDataElement = document.getElementById("attendance-data");
attendanceDataElement.innerHTML = "<h3>Attendance Data:</h3>";

attendanceData.forEach(function(row) {
  var attendanceRow = document.createElement("p");
  attendanceRow.textContent = "Date: " + row.date + ", Status: " + row.status;
  attendanceDataElement.appendChild(attendanceRow);
});
