<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kenyan Pharmacy Blog</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        body {
            font-family: 'Times New Roman', serif;
            margin: 0;
            padding: 0;
            background-image: url('drug.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            color: #fff;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
        header {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 20px;
            text-align: center;
            flex-shrink: 0;
        }
        header h1 {
            margin: 0;
            font-size: 2.5em;
            background: linear-gradient(to right, #006600, #ffffff, #ff0000);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 250px;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            padding-top: 20px;
            color: #fff;
            text-align: left;
            display: flex;
            flex-direction: column;
            display: none; /* Initially hidden */
        }
        .sidebar a {
            color: #00bcd4;
            text-decoration: none;
            font-size: 1.2em;
            padding: 15px;
            border-bottom: 1px solid #444;
            transition: background-color 0.3s;
        }
        .sidebar a:hover {
            background-color: #008c9e;
        }
        main {
            margin-left: 260px;
            padding: 50px 20px;
            background-color: rgba(0, 0, 0, 0.8);
            margin: 20px auto;
            width: 90%;
            max-width: 800px;
            border-radius: 15px;
            flex-grow: 1;
        }
        .button-container {
            margin: 30px 0;
            display: flex;
            flex-direction: column;
            align-items: center; /* Center the buttons horizontally */
        }
        .button-container a {
            display: inline-block;
            margin: 10px;
            padding: 15px 30px;
            background-color: #00bcd4;
            color: #fff;
            text-decoration: none;
            font-size: 1.2em;
            border-radius: 10px;
            transition: background-color 0.3s;
        }
        .button-container a:hover {
            background-color: #008c9e;
        }
        .auth-buttons {
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            align-items: center; /* Center the buttons horizontally */
        }
        .auth-buttons a {
            display: inline-block;
            margin: 10px;
            padding: 10px 20px;
            background-color: #00bcd4;
            color: #fff;
            text-decoration: none;
            border-radius: 10px;
            transition: background-color 0.3s;
            font-size: 1em;
        }
        .auth-buttons a:hover {
            background-color: #008c9e;
        }
        footer {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 10px 0;
            text-align: center;
            flex-shrink: 0;
        }
        footer p {
            margin: 0;
            font-size: 0.9em;
        }
        /* Icon button to toggle the sidebar */
        .sidebar-toggle-btn {
            position: fixed;
            top: 20px;
            left: 20px;
            background-color: transparent;
            border: none;
            color: #fff;
            font-size: 2em;
            cursor: pointer;
            z-index: 1000; /* Ensure it's above other content */
        }
    </style>
</head>
<body>

    <!-- Hamburger Icon to toggle sidebar -->
    <button class="sidebar-toggle-btn" onclick="toggleSidebar()">
        <i class="fas fa-bars"></i> <!-- Font Awesome hamburger icon -->
    </button>

    <div class="sidebar">
        <a href="contacts.html">Contacts</a>
        <a href="signup.html">Sign Up</a>
        <a href="login.html">Login</a>
        <a href="support.html">Support</a>
        <a href="privacy-policy.html">Privacy Policy</a>
    </div>

    <header>
        <img src="logo.jpg" alt="PharmaSmart KE Logo" style="max-width: 150px; height: auto;">
        <h1>Welcome to PharmaSmart KE</h1>
    </header>

    <main>
        <p>Your trusted hub for pharmacy practice in Kenya. Whether you're a student looking for accredited courses, a practitioner seeking trusted learning materials, or an individual eager to learn about healthy living through courses on family planning, nutrition, and more—we’ve got you covered! Gain access to high-quality education, certification, CV and cover letter templates, and seamless healthcare services—all in one place. Sign up today and take the next step in your pharmacy journey!</p>
        
        <div class="button-container">
            <a href="pharm.html">BPharm and Dpharm accredited institutions</a>
            <a href="tips-resources.html">Tips & Resources for BPharm Students</a>
            <a href="specialities.html">Specialties Recognized by PPB</a>
            <a href="updates.html">Updates on latest pharmaceutical research</a>
        </div>

        <div class="auth-buttons">
            <a href="login.html">Login</a>
            <a href="signup.html">Sign Up</a>
        </div>
    </main>

    <footer>
        <p>&copy; 2025 PharmaSmart KE. All rights reserved.</p>
    </footer>

    <script>
        function toggleSidebar() {
            const sidebar = document.querySelector('.sidebar');
            if (sidebar.style.display === 'none' || sidebar.style.display === '') {
                sidebar.style.display = 'flex';  // Show sidebar
            } else {
                sidebar.style.display = 'none';  // Hide sidebar
            }
        }
    </script>

</body>
</html>
