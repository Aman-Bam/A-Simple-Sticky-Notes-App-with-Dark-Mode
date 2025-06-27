let notes = JSON.parse(localStorage.getItem("notes")) || [];

function showNotes() {
  let container = document.getElementById("notesContainer");
  container.innerHTML = "";

  if (notes.length === 0) {
    container.innerHTML = "<p>No notes yet. Start by adding one!</p>";
    return;
  }

  notes.forEach((note, index) => {
    let div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `
      ${note.text}
      <small>📅 ${note.date}</small>
      <button onclick="removeNote(${index})">Delete</button>
    `;
    container.appendChild(div);
  });
}

function addNote() {
  let input = document.getElementById("noteInput");
  let text = input.value.trim();

  if (text !== "") {
    const date = new Date().toLocaleString();
    notes.push({ text, date });
    input.value = "";
    saveNotes();
    showNotes();
  }
}

function removeNote(index) {
  notes.splice(index, 1);
  saveNotes();
  showNotes();
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

window.onload = showNotes;
