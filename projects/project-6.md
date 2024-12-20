---
projectId: 6
featured: true
title: "Neptune's Nook"
description: "A simple e-commerce website for a fictional store that sells aquarium products. Users can create an account, add items to their cart, and checkout. Admins can add, update, and delete products."
image:
  url: "/project-images/Neptune-s-Nook.png"
  alt: "Neptune's Nook Homepage"
worksImages: [
  {
    url: "/project-images/Neptune-s-Nook-CartView.png",
    alt: "A user has items in their cart"
  }, 
  {
    url: "/project-images/Neptune-s-Nook-AdminView.png",
    alt: "An admin viewing the bulk upload page"
  }
]
platform: Web
stack: HTML, Vanilla CSS, JavaScript, Node.JS, Express.JS, SQLite3, EJS
website: N/A
github: https://github.com/JM-2001/Neptune-s-Nook
---

This project was created as a semester long, team-based project to demonstrate our learned skills for the class. This full-stack application is a simple e-commerce website for a fictional store that sells aquarium products. Users can create an account, add items to their cart, and checkout. Admins can add multiple products in bulk by uploading a json file. Furthermore, admins can edit, update, and delete products. 

### My Role:
As team leader and full-stack developer, I created and implemented core server-side functionalities using Node.JS, Express.JS, and various node modules. My primary responsibilities included:
- Developing a custom authentication system with PassportJS for secure user management
- Designing and implementing the SQLite3 database schema
- Creating and documenting RESTful APIs for product and user management
- Implementing shopping cart functionality and checkout process
- Building responsive frontend interfaces using HTML, CSS, and JavaScript
- Managing the team's development process and task delegation

### Technical Details:
The backend infrastructure leverages several key technologies:
- PassportJS for secure authentication with:
  - Role-based access control (Admin/User)
  - Session management and persistence
  - Local strategy implementation
  - Password encryption and security
- SQLite3 for data management:
  - User account storage
  - Product inventory tracking
  - Shopping cart persistence
  - Order history
- Multer for file processing:
  - Bulk product upload handling
  - JSON file validation
  - Data sanitization

The frontend infrastructure implements:
- Vanilla CSS with media queries:
  - Mobile-first responsive design
  - Custom component styling
  - Breakpoint management for different screen sizes
  - Flexbox and Grid layouts
- HTML5 elements and best practices:
  - Semantic markup structure
  - Accessibility considerations
  - Form validation
  - Modern HTML5 input types
- JavaScript functionalities:
  - Dynamic cart updates
  - Form validation and submission
  - DOM manipulation for UI updates
  - Event handling and user interactions
  - AJAX calls for seamless data updates

<div class="md-chall-div">

### Challenges and Solutions:

<ol>
  <li>
    Custom Local Authentication
    <ul>
      <li>Challenge: Implementing a secure authentication system beyond class material scope</li>
      <li>Solution: Developed a comprehensive PassportJS implementation with local strategy, including password encryption, session management, and role-based access control</li>
    </ul>
  </li>
  <li>
    File Processing
    <ul>
      <li>Challenge: Handling bulk product uploads efficiently while ensuring data integrity</li>
      <li>Solution: Implemented Multer middleware for file handling, with custom validation and processing logic for JSON data, including error handling and duplicate checking</li>
    </ul>
  </li>
  <li>
    Shopping Cart Implementation
    <ul>
      <li>Challenge: Maintaining cart state across sessions while handling concurrent users</li>
      <li>Solution: Designed a robust cart system using session storage and database persistence, ensuring data consistency across user sessions</li>
    </ul>
  </li>
</ol>

</div>

### Results and Impact:
The platform successfully demonstrates several key achievements:
- Secure user authentication and authorization system
- Efficient bulk product management for administrators
- Responsive design supporting various device sizes
- Intuitive shopping cart experience
- Streamlined checkout process
The project received positive feedback for its functionality and user experience, serving as a practical demonstration of e-commerce website development.

### Skills Learned and Demonstrated:
- Custom authentication system development using PassportJS
- File processing and validation with Multer
- Database design and management with SQLite3
- RESTful API development
- Session management and state persistence
- Responsive web design
- Team leadership and project management

<br>
Want to learn more? Explore the codebase on GitHub!