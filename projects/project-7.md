---
projectId: 7
featured: true
title: "Homelab"
description: "A homelab was created to meet the needs of a smart home by using a mini pc that has Proxmox installed."
image:
  url: "/project-images/Homelab.png"
  alt: "Homelab Proxmox Dashboard"
worksImages: [
  {
    url: "/project-images/Homelab-ScryptedContainer.png",
    alt: "Scrypted running on Proxmox"
  }, 
  {
    url: "/project-images/Homelab-HomeAssistant.png",
    alt: "HomeAssistant OS running on Proxmox"
  }
]
platform: "N/A"
stack: "N/A"
website: "#"
github: "#"
---

This homelab was created to meet the needs of of a smart home, which is powered by a Beelink Mini S12 Pro with an Intel N100 processor. The system leverages Proxmox VE as its foundation - a powerful bare-metal hypervisor that enables flexible management of both virtual machines and containers.
The infrastructure includes a fully integrated Reolink POE security system, requiring extensive network planning and hands-on implementation. The setup process involved meticulous POE cable termination, testing, and deployment to ensure robust connectivity throughout the space.
A significant technical achievement of this project is the seamless integration between traditional security cameras and the Apple ecosystem. Through strategic implementation of Scrypted on Proxmox, the Reolink cameras were transformed into HomeKit-compatible devices. This enhancement enables HomeKit Secure Video functionality, providing secure iCloud storage and streamlined viewing through the HomeKit app - eliminating dependence on Reolink's proprietary solutions.
The system's capabilities are further extended through Home Assistant OS, deployed as a virtual machine on Proxmox. This addition provides comprehensive control over the entire home automation infrastructure, expanding functionality well beyond the capabilities of Scrypted and HomeKit alone. The resulting architecture creates a robust, secure, and highly customizable smart home environment that prioritizes both functionality and data privacy.

### My Role:
As the sole developer and system administrator, I designed and implemented the entire homelab infrastructure. My responsibilities included:
- Planning and deploying the Proxmox VE hypervisor environment
- Installing and configuring physical network infrastructure
- Implementing POE security camera systems
- Integrating multiple smart home platforms
- Managing system virtualization and containerization
- Ensuring system security and data privacy

### Technical Details:
The infrastructure leverages several key technologies:
- Proxmox VE for virtualization management:
  - Virtual machine deployment
  - Container orchestration
  - Resource allocation
  - System monitoring
- Network Infrastructure:
  - POE camera system deployment
  - Cable termination and testing
  - Network segmentation and security
- Smart Home Integration:
  - HomeKit compatibility layer
  - Home Assistant automation
  - Scrypted media management
  - Cross-platform device control

<div class="md-chall-div">

### Challenges and Solutions:

<ol>
  <li>
    Camera System Integration
    <ul>
      <li>Challenge: Bridging proprietary Reolink cameras with Apple HomeKit ecosystem</li>
      <li>Solution: Implemented Scrypted in a dedicated container to create a compatibility layer, enabling HomeKit Secure Video support and eliminating dependence on vendor-specific apps</li>
    </ul>
  </li>
  <li>
    Network Infrastructure
    <ul>
      <li>Challenge: Establishing reliable connectivity for POE cameras throughout the space</li>
      <li>Solution: Carefully planned cable routing, performed professional-grade termination, and conducted thorough testing to ensure robust connections</li>
    </ul>
  </li>
  <li>
    System Reliability
    <ul>
      <li>Challenge: Maintaining stable operation of multiple virtual machines and containers</li>
      <li>Solution: Implemented proper resource allocation through Proxmox VE, ensuring each service has dedicated resources while maintaining system efficiency</li>
    </ul>
  </li>
</ol>

</div>

### Results and Impact:
The homelab successfully achieves:
- Seamless integration of multiple smart home platforms
- Enhanced security through professional-grade camera system
- Improved privacy by eliminating reliance on cloud services
- Flexible automation through Home Assistant
- Reliable operation through proper virtualization

### Skills Learned and Demonstrated:
- Network infrastructure design and implementation
- System virtualization and container management
- Smart home integration and automation
- Network security and data privacy
- Physical infrastructure installation (POE cabling)
- Cross-platform system integration
