=async function loadUsers() {
  try {
    const response = await fetch("https://mylink.loca.lt/users"); // <-- LocalTunnel linkni shu yerga yozing
    const users = await response.json();

    const userList = document.getElementById("user-list");
    userList.innerHTML = "";

    users.forEach((user, index) => {
      const div = document.createElement("div");
      div.className = "user";
      div.innerText = user.name;
      userList.appendChild(div);
    });
  } catch (error) {
    alert("Ma'lumotlarni olishda xatolik yuz berdi.");
    console.error(error);
  }
}

loadUsers();
