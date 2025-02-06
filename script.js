// function createStars() {
//     const container = document.querySelector("body");
//     for (let i = 0; i < 1000; i++) {
//       // Increase the number of stars to 1000
//       const star = document.createElement("div");
//       star.className = "star";
//       star.style.width = ".1px";
//       star.style.height = ".1px";
//       star.style.top = Math.random() * 100 + "%";
//       star.style.left = Math.random() * 100 + "%";
//       container.appendChild(star);
//     }
//   }
//   createStars();
function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
        const star = document.createElement("div");
        star.className = "star";
        
        // Randomize size for variation
        const size = Math.random() * 2 + 0.5 + "px"; // Between 0.5px and 2.5px
        star.style.width = size;
        star.style.height = size;
        
        // Random position
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        
        // Random brightness (opacity)
        star.style.opacity = Math.random() * 0.8 + 0.2; // Between 0.2 and 1
        
        // Random color variation (white, blue, yellowish stars)
        const colors = ["#ffffff", "#ffd700", "#add8e6", "#f8f8ff"];
        star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        container.appendChild(star);
    }
}

// Call function to create stars when the page loads
window.onload = createStars;



// document.addEventListener("DOMContentLoaded", () => {
//     const planets = document.querySelectorAll(".container div");
//     const planetInfos = document.querySelectorAll(".planet-info");
//     const scrollBtn = document.getElementById("scrollBtn");

//     planets.forEach(planet => {
//         planet.addEventListener("click", () => {
//             const planetId = planet.classList[0]; 
            
//             planetInfos.forEach(info => {
//                 if (info.id === planetId) {
//                     info.classList.add("active");
//                 } else {
//                     info.classList.remove("active");
//                 }
//             });
//         });
//     });

//     // Show scroll button when user scrolls down
//     window.addEventListener("scroll", () => {
//         if (window.scrollY > 200) {
//             scrollBtn.style.display = "block";
//         } else {
//             scrollBtn.style.display = "none";
//         }
//     });

//     // Scroll back to top when button is clicked
//     scrollBtn.addEventListener("click", () => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     });
// });

// function createStars() {
//     const container = document.querySelector("body");
//     for (let i = 0; i < 1000; i++) {
//         const star = document.createElement("div");
//         star.className = "star";

//         // Randomize size for variation
//         const size = Math.random() * 2 + 0.5 + "px"; // Between 0.5px and 2.5px
//         star.style.width = size;
//         star.style.height = size;

//         // Random position
//         star.style.top = Math.random() * 100 + "%";
//         star.style.left = Math.random() * 100 + "%";

//         // Random brightness (opacity)
//         star.style.opacity = Math.random() * 0.8 + 0.2; // Between 0.2 and 1

//         // Random color variation (white, blue, yellowish stars)
//         const colors = ["#ffffff", "#ffd700", "#add8e6", "#f8f8ff"];
//         star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

//         container.appendChild(star);
//     }
// }

// // Call function to create stars when the page loads
// window.onload = createStars;

// document.addEventListener("DOMContentLoaded", () => {
//     const planets = document.querySelectorAll(".container div");
//     const planetInfos = document.querySelectorAll(".planet-info");

//     planets.forEach(planet => {
//         planet.addEventListener("click", () => {
//             const planetId = planet.classList[0]; 
            
//             planetInfos.forEach(info => {
//                 if (info.id === planetId) {
//                     info.classList.add("active");
//                 } else {
//                     info.classList.remove("active");
//                 }
//             });
//         });
//     });
// });