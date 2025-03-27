---
projectId: 9
featured: true
title: "Chrome Volume Controller"
description: "Chrome Volume Controller allows you to set volume levels per tab and popups in Chrome. You can control the volume and you adjust it using the range slider. Furthermore, it is able to remember the volume levels of each tab and popups."
image:
  url: "/project-images/ChromeVolumeController.png"
  alt: "Chrome Volume Controller"
worksImages: [
  {
    url: "/project-images/ChromeVolumeController-AudioControls.png",
    alt: "Chrome Volume Controller Audio Controls expanded"
  }, 
  {
    url: "/project-images/ChromeVolumeController-AudioControls.png",
    alt: "Chrome Volume Controller Audio Controls expanded but MAX is paused"
  }
]
platform: "Desktop"
stack: "HTML, CSS, JavaScript, TypeScript, Svelte, and Vite"
website: "#"
github: "https://github.com/JM-2001/ChromeVolumeControl"
---

Chrome Volume Controller allows you to set volume levels per tab and popups in Chrome. You can control the volume and you adjust it using the range slider. Furthermore, it is able to remember the volume levels of each tab and popups. You can also pause and play audio as an additional audio control, mute the audio, or reset the volume back to 100%. This project was created in response to the need for independent audio control across tabs and popups. While browsers allow volume control by visiting individual tabs, this extension provides a centralized interface where users can manage all audio sources without leaving their current page, significantly improving the browsing experience when dealing with multiple audio sources.

### My Role:
As the sole developer, I designed and implemented the entire extension ecosystem. My primary responsibilities included:
- Architecting the extension structure including background scripts, content scripts, and UI components
- Developing a responsive user interface with Svelte and TypeScript
- Implementing the Web Audio API to intercept and modify audio streams
- Building cross-context communication between UI, background processes, and content scripts
- Creating persistent storage solutions for volume preferences
- Designing real-time audio detection and control mechanisms
- Implementing automated build and packaging processes for extension distribution

### Technical Details:
The extension leverages several key technologies:
- Svelte framework for reactive UI components:
  - Reactive state management for real-time audio status updates
  - Component-based architecture for maintainable code
  - Custom transitions and animations for enhanced user experience
  - Prop-based communication between components
- Chrome Extension API integration:
  - Background script persistence for managing global state
  - Content script injection for DOM interaction and audio manipulation
  - Message passing between contexts for synchronized operations
  - Storage API for persistent preferences across sessions
- Web Audio API implementation:
  - AudioContext manipulation for precise volume control
  - GainNode utilization for non-destructive audio modification
  - Dynamic audio node connection and management
  - Real-time audio detection and processing
- TypeScript for enhanced development:
  - Strong typing for Chrome API interactions
  - Interface definitions for audio data structures
  - Type safety across extension contexts

<div class="md-chall-div">

### Challenges and Solutions:

<ol>
  <li>
    Using Svelte UI Framework
    <ul>
      <li>Challenge: Learning and using the frontend framework for the first time</li>
      <li>Solution: Read through Svelte Documentation and tutorial to get an understanding of the framework. I picked this framework because
      it was generally favored by experienced users of React. This is because it is easy to understand and use. Furthermore, it reminded me of AstroJS due to the components.</li>
    </ul>
  </li>
<li>
  Audio Capture and Modification
  <ul>
    <li>Challenge: Intercepting audio streams from various page elements without affecting original content</li>
    <li>Solution: Implemented a Web Audio API-based system that dynamically identifies audio/video elements, creates MediaElementSource nodes, and connects them to a central GainNode. When I encountered difficulties understanding the Web Audio API architecture, I used Claude AI as a learning resource to explain concepts and provide guidance on best practices, which helped me design a more robust solution while deepening my understanding of audio processing in the browser.</li>
  </ul>
</li>
<li>
  Cross-Context Communication
  <ul>
    <li>Challenge: Maintaining synchronized state between the popup UI, background script, and multiple content scripts across different tabs</li>
    <li>Solution: Developed a robust message passing architecture with retry logic and queue management for failed communications. When designing this system, I collaborated with Claude AI to explore different architectural approaches and debug communication issues. This interactive learning process helped me implement a background script that acts as a central state manager, ensuring data consistency across contexts and providing volume persistence even when the popup is closed.</li>
  </ul>
</li>
<li>
  Dynamic Audio Element Detection
  <ul>
    <li>Challenge: Detecting and controlling audio elements that are dynamically added to the DOM after page load</li>
    <li>Solution: Created a MutationObserver implementation that watches for DOM changes and automatically connects new audio/video elements to the volume control system. When I ran into edge cases with dynamic content loading, Claude AI served as a technical sounding board, helping me understand the nuances of DOM observation patterns. This guidance led me to implement periodic scanning as a fallback mechanism to ensure robust audio detection across various web application architectures.</li>
  </ul>
</li>
<li>
  Volume Persistence Across Sessions
  <ul>
    <li>Challenge: Remembering user volume preferences for specific websites even after browser restart</li>
    <li>Solution: Designed a dual-persistence system that stores volume settings by both tab ID and URL. When exploring different storage approaches, I used Claude AI to learn about Chrome's Storage API capabilities and limitations. This collaborative learning approach helped me develop a system that allows the extension to maintain consistent volume levels for specific websites across sessions while still enabling per-tab customization when needed.</li>
  </ul>
</li>
</ol>


</div>

### Results and Impact:
The Chrome Volume Controller successfully achieves:
- Independent volume control for each browser tab and popup
- Persistent audio settings that survive browser restarts
- Intuitive visual interface for audio management
- Media playback control directly from the extension
- Real-time audio detection across dynamic web applications
- Reliable performance across various website architectures
- Seamless integration with the Chrome browser environment
- Memory-efficient operation even with multiple tabs open

### Skills Learned and Demonstrated:
- Chrome Extension Architecture and Development
- Web Audio API implementation for audio manipulation
- Svelte component design and state management
- TypeScript for strongly-typed browser extensions
- Cross-context communication in browser environments
- MutationObserver API for DOM change detection
- Extension packaging and deployment workflow
- User interface design for browser extensions

<br>
Want to learn more? Explore the codebase on GitHub!
