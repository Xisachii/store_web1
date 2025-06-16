async function loadUsers() {
  const response = await fetch("http://192.168.100.91:8000/users"); // <-- bu IP-ni o‘zingizga qarab sozlang
  const users = await response.json();

  const userList = document.getElementById("user-list");
  userList.innerHTML = "";

  let row = document.createElement("div");
  row.className = "user-row";

  users.forEach((user, index) => {
    const userDiv = document.createElement("div");
    userDiv.className = "user";
    userDiv.innerText = user.name;
    row.appendChild(userDiv);

    // Har 5 ta foydalanuvchidan keyin yangi qatordan boshlash
    if ((index + 1) % 5 === 0) {
      userList.appendChild(row);
      row = document.createElement("div");
      row.className = "user-row";
    }
  });

  // Oxirgi qatorda foydalanuvchi qolgan bo‘lsa
  if (row.children.length > 0) {
    userList.appendChild(row);
  }
}

loadUsers();
