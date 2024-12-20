---
projectId: 5
featured: false
title: "SQL Web App"
description: "This is a web app that allows the modification of the sqlite database through the web app. This is for CSC-471."
image:
  url: "/project-images/SQL-Webapp.png"
  alt: "SQL Web App homepage"
worksImages: [
  {
    url: "/project-images/SQL-Webapp-Employee.png",
    alt: "The employee table"
  }, 
  {
    url: "/project-images/SQL-Webapp-Departments.png",
    alt: "The departments table"
  }
]
platform: Web
stack: HTML, Bulma CSS, JavaScript, Node.js, Express.js, SQLite3, EJS
website: N/A
github: https://github.com/JM-2001/SQL-Web-app
---

In this web application, I created it for my database class to demonstrate our skills and knowledge. In this application, the user can create/delete workers in a fictional company.

### My Role:
As a full-stack developer, I created and implemented core server-side functionalities using Node.JS, Express.JS, and various node modules. My primary responsibilities included:
- Designing and implementing the database schema
- Creating RESTful APIs for data operations
- Implementing CRUD functionality for employee and department management
- Building a responsive frontend interface
- Ensuring data integrity and validation
- Documentation of API endpoints and database structure

### Technical Details:
The backend infrastructure leverages several key technologies:
- SQLite3 for data management:
  - Employee record storage and retrieval
  - Department management
  - Data relationships and constraints
  - Transaction management
- Express.js for server operations:
  - RESTful API endpoints
  - Request validation
  - Error handling
  - Route management

The frontend infrastructure implements:
- Bulma CSS Framework:
  - Mobile-first responsive design
  - Component styling
  - Grid system
  - Form layouts and validation
- JavaScript functionalities:
  - Dynamic data updates
  - Form handling
  - API interactions
  - Error message display

<div class="md-chall-div">

### Challenges and Solutions:

<ol>
  <li>
    Database Relationships
    <ul>
      <li>Challenge: Implementing proper relationships between employees and departments</li>
      <li>Solution: Designed a schema with foreign key constraints and cascading updates/deletes to maintain data integrity</li>
    </ul>
  </li>
  <li>
    Data Validation
    <ul>
      <li>Challenge: Ensuring data consistency and validity across all operations</li>
      <li>Solution: Implemented server-side validation and database constraints to maintain data quality</li>
    </ul>
  </li>
  <li>
    User Interface
    <ul>
      <li>Challenge: Creating an intuitive interface for database operations</li>
      <li>Solution: Utilized Bulma CSS components and custom JavaScript to create a user-friendly experience</li>
    </ul>
  </li>
</ol>

</div>

### Results and Impact:
The platform successfully demonstrates several key achievements:
- Complete employee and department management system
- Intuitive user interface for database operations
- Robust data validation and error handling
- Responsive design for various device sizes
- Efficient database querying and management
The project received full marks and demonstrated practical implementation of database concepts.

### Skills Learned and Demonstrated:
- Database design and implementation
- RESTful API development
- CRUD operations implementation
- Frontend development with Bulma CSS
- Form validation and error handling
- Data relationship management
- SQL query optimization
- Responsive web design

<br>
Want to learn more? Explore the codebase on GitHub!