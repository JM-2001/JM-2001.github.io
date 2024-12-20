---
projectId: 2
featured: false
title: "Java Work Pay Calculator"
description: "A simple Java Swing application that calculates the pay for a worker based on the number of hours worked and the hourly rate. Users can input the number of hours worked and the hourly rate and the application will display the total pay for the worker."
image:
  url: "/project-images/Work-pay.png"
  alt: "Work Pay Calculator Application"
worksImages: [
  {
    url: "/project-images/Work-pay-calculated.png",
    alt: "The calculated pay for that time"
  }, 
  {
    url: "/project-images/Work-pay-grandtotal.png",
    alt: "The grand total for three entries"
  }
]
platform: Desktop/PC
stack: Java
website: N/A
github: https://github.com/JM-2001/Java-Work-Pay-Calculator
---

A simple Java Swing application that further explores the Java Swing environment. In this application, the user can calculate their daily or weekly net income by inputting the number of hours worked and workly wage. Furthermore, the user can add or remove the worked timeslots from the list box.

### My Role:
As an application developer, I created and implemented core functionalities using Java and Java Swing for the UI. My primary responsibilities included:
- Designing an intuitive user interface using Java Swing components
- Implementing pay calculation logic with Java
- Creating data validation for user inputs
- Developing list management functionality
- Ensuring proper error handling
- Building a responsive GUI layout

### Technical Details:
The application leverages several key technologies:
- Java Swing UI Components:
 - JFrame for main window
 - JPanel for layout organization
 - JTextField for user input
 - JButton for actions
 - JList for entry management
 - JLabel for displaying results
- Java Core Features:
 - Event handling
 - Input validation
 - Number formatting
 - List management
 - Exception handling

Development Environment:
- IntelliJ IDEA for development
- Git for version control
- Java Development Kit (JDK)

<div class="md-chall-div">

### Challenges and Solutions:

<ol>
 <li>
   Data Format Implementation
   <ul>
     <li>Challenge: Ensuring proper formatting of numerical inputs and calculations</li>
     <li>Solution: Implemented DecimalFormat class for consistent money formatting and input validation to prevent invalid entries</li>
   </ul>
 </li>
 <li>
   Data Input Validation
   <ul>
     <li>Challenge: Handling various types of user input while preventing errors</li>
     <li>Solution: Created comprehensive input validation system using try-catch blocks and regular expressions to ensure only valid numerical inputs are processed</li>
   </ul>
 </li>
 <li>
   List Management
   <ul>
     <li>Challenge: Managing multiple entries while maintaining accurate totals</li>
     <li>Solution: Implemented DefaultListModel for dynamic list management and created methods to recalculate totals when entries are added or removed</li>
   </ul>
 </li>
</ol>

</div>

### Results and Impact:
The application successfully achieves:
- Accurate pay calculations for multiple time entries
- Dynamic list management for work sessions
- Real-time total calculations
- Input validation and error prevention
- User-friendly interface
- Responsive GUI layout
The application serves as a practical tool for workers to track and calculate their earnings efficiently.

### Skills Learned and Demonstrated:
- Java Swing GUI development
- Event-driven programming
- Input validation and error handling
- Data structure management
- Number formatting and calculations
- User interface design principles
- Object-oriented programming concepts
- Version control with Git

<br>

Want to see how it works? Explore the codebase on GitHub! ***Note: This project was built on my older github account (EchoBlu) and the repo was moved to this new account!***
