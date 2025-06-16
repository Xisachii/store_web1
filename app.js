async function loadUsers() {
  const listElement = document.getElementById('user-list');
  try {
    const res = await fetch('http://192.168.100.91:8000/users');
    const data = await res.json();
    listElement.innerHTML = '';

    for (const id in data) {
      const user = data[id];
      const item = document.createElement('li');
      item.textContent = `${user.name || 'Nomaʼlum'} — ${user.points} ball`;
      listElement.appendChild(item);
    }
  } catch (err) {
    listElement.innerHTML = '❌ Maʼlumot yuklab bo‘lmadi';
    console.error(err);
  }
}

window.addEventListener('load', loadUsers);
