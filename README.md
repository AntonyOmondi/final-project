# Kenya Athletes Association Website

This project provides a **Kenya Athletes Association (KAA)** website consisting of various pages such as registration, login, members dashboard, and a responsive layout optimized for different screen sizes. The website includes pages for registration/login, a dashboard view, and other content related to the association. The pages are built using **HTML**, **CSS**, and **JavaScript** for a complete user experience.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

## Project Overview

The website serves as a portal for the **Kenya Athletes Association**, providing users with access to registration, login, and their personal dashboards. The website includes a simple form for registration and login that saves user data in the browser’s local storage, allowing them to log in easily. The dashboard page is accessible after successful login.

The website features a navigation bar, a responsive design, and modern UI elements like forms, buttons, and navigation menus. 

## Features

- **Navigation Bar**: Includes links to home, members, registration/login, and contact sections.
- **User Registration and Login**: Users can register with their details and log in with an email and password.
- **Dashboard**: After login, users are redirected to a personalized dashboard page with a welcoming message.
- **Responsive Layout**: The site is mobile-friendly and adapts to different screen sizes (mobile, tablet, desktop).
- **LocalStorage**: User data (such as registration details) is stored in the browser’s local storage for simple login functionality.
- **Footer**: The footer displays copyright information for the Kenya Athletes Association.

## Installation

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/kenya-athletes-association.git
    ```

2. Navigate to the project directory:
    ```bash
    cd kenya-athletes-association
    ```

3. Open the HTML files (`reg.html` or `hello.html`) in a modern web browser to view the pages.

## Usage

- **Registration/Login Page**:
    - Users can register by providing their first name, second name, surname, email, gender, and sport.
    - After successful registration, users can log in with their email and password.
  
- **Dashboard Page**:
    - After logging in, users are redirected to the dashboard page, where a personalized welcome message is displayed.
    - The dashboard features a background image and a navigation menu.

- **Responsive Design**:
    - The pages are fully responsive and adjust for mobile, tablet, and desktop screen sizes.

## File Structure

The project has the following file structure:

```
final-project
├── images                      # Folder for image assets 
│   ├── athletics.jpg           # Image for the members page
│   ├── contentPhoto.jpg        # Image for the dashboard
│   ├── cricket.jpg             # Image for the members page
│   ├── favicon.jpg             # Favicon for the site
│   ├── fireworks.jpg           # Image for the dashboard
│   ├── football.jpg            # Image for the members page
│   ├── rugby.jpg               # Image for the members page 
│   ├── sportsbg.jpg            # Background image for the header 
│   └── swimming.jpg            # Image for the members page 
├── css                         # Folder for CSS styles 
│   ├── hello.css               # CSS for dashboard page   
│   ├── members.css             # CSS for members page
│   ├── reg.css                 # CSS for registration/login page
│   └── style.css               # CSS for landing page
├── src                         # Folder for JavaScript files   
│   └── script.js               # JavaScript for form functionality (login, registration) 
├── reg.html                    # Registration/Login page HTML file 
├── hello.html                  # Dashboard page HTML file
├── index.html                  # Landing page HTML file
├── members.html                # Members page HTML file
├── reg.html                    # Registration/Login page HTML file 
└── README.md                   # Project documentation

```


## Technologies Used

- **HTML**: For creating the structure of the webpage, including the registration/login form, dashboard, and navigation bar.
- **CSS**: For styling the website, including layout, fonts, colors, and responsiveness.
- **JavaScript**: For handling form functionality, including user registration, login, and toggling between forms.
- **Google Fonts**: For the "Roboto" font used in the webpage.
- **LocalStorage**: For storing user registration data in the browser’s local storage.

### JavaScript Functions
- **`toggleForms()`**: Toggles between the registration and login forms.
- **`registerUser()`**: Handles user registration by storing the user data in `localStorage`.
- **`loginUser()`**: Handles user login by verifying credentials stored in `localStorage`.

### CSS Styles
- The website uses a **linear gradient** background for the header with a sports-themed image overlay.
- **Flexbox** is used for aligning content in the navigation bar and the main content area.
- The website includes **media queries** for responsiveness:
  - Mobile devices (up to 600px) have stacked navigation links, adjusted text sizes, and smaller padding.
  - Tablets (601px to 1024px) feature larger text and more padding.
  - Desktop screens (1025px and above) utilize a more spacious layout with larger elements and content areas.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
