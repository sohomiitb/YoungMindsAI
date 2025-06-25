// Play video function
function playVideo(videoType) {
  const messages = {
    intro: "🎬 Loading: Introduction to AI for Kids...",
    coding: "🎬 Loading: Python Coding Workshop...",
    projects: "🎬 Loading: Student Project Showcase...",
    testimonials: "🎬 Loading: Parent & Student Reviews..."
  };
  
  alert(messages[videoType] + "\n\n📝 Note: In a real implementation, this would open the actual video player or redirect to the video URL.");
}

// Interactive About Me functionality
function initializeAboutMe() {
  const aboutText = `Hello! I'm Sohom Mandal, an experienced AI educator and data science professional with a strong academic and industry background. I am an IIT Bombay alumnus with a PhD in Civil Engineering and currently pursuing my MBA at the Rotman School of Management, University of Toronto. I am also a Data Analytics Professor at Northeastern University.

With over decades of experience in teaching and industry, I blend advanced academic expertise with engaging teaching methods to make AI and coding fun, practical, and inspiring for students from Grade 7 to 12. My mission is to help young minds unlock their creativity and build confidence in this AI-driven world — transforming curiosity into real-world skills and innovative projects.`;

  const typingElement = document.getElementById('about-typing-text');
  let i = 0;
  
  function typeText() {
    if (i < aboutText.length) {
      if (aboutText.charAt(i) === '\n') {
        typingElement.innerHTML += '<br><br>';
      } else {
        typingElement.innerHTML += aboutText.charAt(i);
      }
      i++;
      setTimeout(typeText, 30);
    }
  }
  
  // Start typing animation when section comes into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && i === 0) {
        typeText();
      }
    });
  });
  
  observer.observe(document.getElementById('about-typing-text'));
}

// Button interactions
function downloadCV() {
  alert('📄 CV download feature would be implemented here!\n\nThis would typically:\n• Generate a PDF of your CV\n• Download it to the user\'s device\n• Or redirect to a hosted CV file');
}

function scheduleCall() {
  alert('📞 Schedule call feature would be implemented here!\n\nThis would typically:\n• Open a calendar booking system\n• Connect to Calendly or similar service\n• Allow users to book consultation calls');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializeAboutMe);