async function loadUsers() {
  try {
    const response = await fetch('http://http://192.168.100.91:8000/users');
    const data = await response.json();

    const list = document.getElementById('user-list');
    const sorted = Object.entries(data).sort((a, b) => b[1].points - a[1].points);

    sorted.forEach(([id, user], index) => {
      const item = document.createElement('li');
      item.textContent = `${index + 1}. ${user.name} - ${user.points} ball`;
      list.appendChild(item);
    });
  } catch (err) {
    alert("Ma'lumot yuklanmadi: " + err);
  }
}

loadUsers();
