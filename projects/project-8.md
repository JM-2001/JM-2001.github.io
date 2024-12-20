---
projectId: 8
featured: true
title: "Shelter Safe"
description: "Shelter Safe is a Disaster Response Management System is a centralized platform designed to streamline emergency response coordination by enabling real-time communication between responders, facilitating resource allocation, and improving information sharing during crisis situations to ultimately reduce response times and save lives."
image:
  url: "/project-images/ShelterSafe.png"
  alt: "Shelter Safe Dashboard"
worksImages: [
  {
    url: "/project-images/ShelterSafe-Shelters.png",
    alt: "Shelter Safe Shelters Page"
  }, 
  {
    url: "/project-images/ShelterSafe-Admin.png",
    alt: "Shelter Safe Admin Dashboard"
  }
]
platform: "Web and Android"
stack: "HTML, CSS, JavaScript, Kotlin, Sqlite3, Node.JS, Express.JS, and EJS"
website: "#"
github: "https://github.com/ployphemus/DisasterResp"
---

Shelter Safe is a Disaster Response Management System is a centralized platform designed to streamline emergency response coordination by enabling real-time communication between responders, facilitating resource allocation, and improving information sharing during crisis situations to ultimately reduce response times and save lives. This project aims to address the challenges of effective disaster response by developing a comprehensive system to assist emergency personnel and affected individuals during a disaster. Many existing systems lack centralized coordination or fail to effectively integrate various stakeholders involved in a disaster response. This project seeks to fill this gap by utilizing modern technology to improve preparedness and facilitate efficient disaster response. The goal of the project is to create an effective Disaster Response Management system that serves as a central platform for coordinating, managing, and responding to disaster events. The system will facilitate communication among emergency responders, enable information sharing, and ensure that resources are delivered to the right location at the right time. By enhancing the efficiency of disaster response through effective coordination and decision-making tools, the platform aims to reduce response times and ultimately save lives.

### My Role:
As the lead backend developer, I architected and implemented core server-side functionalities using Node.JS, Express.JS, and many different node modules. My primary responsibilities included:
- Developing a custom authentication system with PassportJS for secure user management
- Implementing real-time location tracking using Socket.IO
- Creating a comprehensive notification system using Socket.IO by sending notifications to the website via JS alerts, registered users' email, and Android push notifications
- Integrating Google Maps API for geographical visualization such as disaster zones and shelters
- Designing and documenting RESTful APIs
- Managing database operations with SQLite3

### Technical Details:
The backend infrastructure leverages several key technologies:
- Socket.IO for real-time bidirectional communication, enabling:
  - Live location tracking with minimal latency
  - Instant notifications across platforms
  - Room-based event broadcasting
  - Automatic connection management
- PassportJS for secure authentication with:
  - Role-based access control
  - Session management
  - Local strategy implementation
- Google Maps API integration featuring:
  - Custom marker management
  - Dynamic geofencing
  - Real-time location updates
  - Interactive information displays

<div class="md-chall-div">

### Challenges and Solutions:

<ol>
  <li>
    Real-time Location Tracking
    <ul>
      <li>Challenge: Maintaining accurate user positions with minimal latency while handling multiple concurrent connections</li>
      <li>Solution: Implemented Socket.IO for persistent connections and optimized database operations for efficient updates. The system maintains continuous WebSocket connections to ensure real-time position updates while using efficient database write patterns to prevent system overload.</li>
    </ul>
  </li>
  <li>
    Cross-Platform Notifications
    <ul>
      <li>Challenge: Ensuring reliable delivery across multiple platforms and handling offline scenarios</li>
      <li>Solution: Developed a multi-channel system using Socket.IO for browser alerts, email integration for persistent communications, and native Android notifications. Implemented a queueing system for offline users to ensure notification delivery upon reconnection.</li>
    </ul>
  </li>
  <li>
    Data Privacy and Security
    <ul>
      <li>Challenge: Protecting sensitive emergency information while maintaining quick access for authorized personnel</li>
      <li>Solution: Implemented comprehensive security measures including end-to-end encryption, secure sessions, and role-based access control. Created an efficient caching system to maintain fast access while ensuring data security.</li>
    </ul>
  </li>
</ol>

</div>

### Results and Impact:
The platform successfully demonstrates how modern web technologies can enhance disaster response efforts through:
- Improved coordination between emergency responders
- Reduced response times through real-time tracking
- Enhanced resource allocation efficiency
- Better situational awareness for emergency coordinators
- Reliable multi-channel communication
  The system was successfully tested with a simulation of 100 concurrent users and demonstrated reliable performance under high-load scenarios.

### Skills Learned and Demonstrated:
- Real-time application development using Socket.IO
- Google Maps API integration and geofencing
- Cross-platform notification systems

<br>
Want to learn more? Explore the codebase on GitHub! Or send an email for the SRS documentation.
