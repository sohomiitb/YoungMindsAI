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