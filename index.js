async function loadUsers() {
  try {
    const response = await fetch("http://192.168.100.91:8000/users");
    const users = await response.json();

    const userList = document.getElementById("user-list");
    userList.innerHTML = "";

    for (let i = 0; i < users.length; i += 5) {
      const row = document.createElement("div");
      row.className = "user-row";

      users.slice(i, i + 5).forEach(user => {
        const div = document.createElement("div");
        div.className = "user";
        div.innerText = user.name;
        row.appendChild(div);
      });

      userList.appendChild(row);
    }
  } catch (error) {
    console.error("Xatolik:", error);
    document.getElementById("user-list").innerText = "Ma'lumotlarni olishda xatolik yuz berdi.";
  }
}

loadUsers();
