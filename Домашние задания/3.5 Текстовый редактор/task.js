const editor = document.getElementById('editor');
const STORAGE_KEY = 'editor-content';

const saved = localStorage.getItem(STORAGE_KEY);
if (saved !== null) {
  editor.value = saved;
}

editor.addEventListener('input', () => {
  localStorage.setItem(STORAGE_KEY, editor.value);
});
