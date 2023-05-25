function authenticateAdmin(event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById("admin-username").value;
    var password = document.getElementById("admin-password").value;
  
    // Read the adminlogin Excel file using the xlsx library
    fetch('adminlogin.xlsx')
      .then(response => response.arrayBuffer())
      .then(data => {
        var workbook = XLSX.read(data, { type: 'array' });
        var loginSheet = workbook.Sheets['Sheet1']; // Assuming the login data is on "Sheet1"
  
        // Convert Excel data to JSON
        var loginData = XLSX.utils.sheet_to_json(loginSheet);
  
        // Check if username and password match
        var isValidUser = loginData.some(function (row) {
          return row.username === username && row.password === password;
        });
  
        if (isValidUser) {
          // Redirect to the admin dashboard page
          window.location.href = 'Admin Dashboard.html';
        } else {
          showError('Invalid admin credentials');
        }
      })
      .catch(error => {
        console.error('Error reading login file:', error);
        showError('An error occurred during authentication.');
      });
  }
  
  function showError(message) {
    var errorMsg = document.getElementById('error-msg');
    errorMsg.textContent = message;
  }
  