document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Validation logic
    var username = document.getElementById('Username').value;
    var password = document.getElementById('password').value;
    
    // Example validation - replace with your own logic
    if (username === 'Username' && password === 'password') {
      showImage(); // Show image on successful login
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });
  
  function showImage() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('imageContainer').style.display = 'block';
    // Example of setting image source after successful login
    document.getElementById('profileImage').src  = 'https://cdn.pixabay.com/photo/2017/03/30/17/41/javascript-2189147_1280.png' ;
  }
  