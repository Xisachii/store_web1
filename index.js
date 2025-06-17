const API_BASE = "https://flask-users-api.onrender.com/"; // Masalan: https://users-api.onrender.com

fetch(`${API_BASE}/users`)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("users");
    container.innerHTML = "";

    let row = "";
    data.forEach((user, index) => {
      row += `${user.name} `;
      if ((index + 1) % 5 === 0) {
        container.innerHTML += `<div>${row}</div>`;
        row = "";
      }
    });

    if (row) {
      container.innerHTML += `<div>${row}</div>`;
    }
  })
  .catch(err => {
    document.getElementById("users").innerText = "Ma'lumotlarni olishda xatolik yuz berdi.";
    console.error(err);
  });
