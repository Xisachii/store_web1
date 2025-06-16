async function loadUsers() {
  const response = await fetch("http://192.168.100.91:8000/users"); // <-- bu IP-ni o‘zingizga qarab sozlang
  const users = await response.json();

  const userList = document.getElementById("user-list");
  userList.innerHTML = "";

  users.forEach((user, index) => {
    const div = document.createElement("div");
    div.className = "user";
    div.innerText = user.name;
    userList.appendChild(div);
  });
}

loadUsers();
