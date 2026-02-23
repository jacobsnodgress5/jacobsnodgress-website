const path = window.location.pathname;

// Check which page we are on and add the 'active-link' class
if (path.includes("index.html") || path === "/" || path.includes("jacobsnodgress-website")) {
    
    // Using an if statement checks if the ID exists on the page before adding the class, 
    // preventing console errors on pages where these IDs don't exist.
    const aboutEl = document.getElementById("about");
    if (aboutEl) aboutEl.classList.add("active-link");

} else if (path.includes("contact.html")) {
    
    const contactEl = document.getElementById("contact");
    const contact1El = document.getElementById("contact1");
    
    if (contactEl) contactEl.classList.add("active-link");
    if (contact1El) contact1El.classList.add("active-link");

} else if (path.includes("projects.html")) {
    
    const projectsEl = document.getElementById("projects");
    if (projectsEl) projectsEl.classList.add("active-link");
}
