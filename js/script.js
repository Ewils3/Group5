// Redirect after 2 seconds from splash screen
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    window.location.href = "sign_in/login.html"; // ✅ correct flow: splash → login
  }, 2000);
  
  
  });
  