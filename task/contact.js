document.getElementById('fileUploadForm').addEventListener('submit', function(event) {
    var fileInput = document.getElementById('fileInput');
    var errorMessage = document.getElementById('errorMessage');
  
    // Check if file is selected
    if (!fileInput.files || fileInput.files.length === 0) {
      errorMessage.textContent = 'Please select a file.';
      event.preventDefault();
      return;
    }
  
    var file = fileInput.files[0];
    var fileSizeInMB = file.size / (1024 * 1024);
  
    // Check file size
    if (fileSizeInMB > 4) {
      errorMessage.textContent = 'File size exceeds 4MB limit.';
      event.preventDefault();
      return;
    }
  
    // If all validations pass, clear error message
    errorMessage.textContent = '';
  });
  