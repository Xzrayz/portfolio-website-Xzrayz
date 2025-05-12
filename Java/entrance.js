window.onload = () => {
    const entrance = document.getElementById("entrance");
    setTimeout(() => {
        entrance.style.display = "none";
        window.location.href = "main.html"; // Change to your main page
    }, 5000); // Adjust time if needed
  
    entrance.addEventListener("click", () => {
        entrance.style.display = "none";
        window.location.href = "main.html"; // Change to your main page
    });
  };
  