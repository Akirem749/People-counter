let counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment-btn');
const saveBtn = document.getElementById('save-btn');
const preEntry = document.getElementById('pre-entry');
const deleteBtn = document.getElementById('delete-btn');
let count = 0

window.addEventListener('DOMContentLoaded', getPreviousEntries);
incrementBtn.addEventListener('click', startCount);
saveBtn.addEventListener('click', saveCount);
deleteBtn.addEventListener('click', deletePreEntries);



function startCount() {
    
   count = count + 1
    counter.innerText = count
}

function saveCount() {
    
    preEntry.textContent += `${count} - `;
    localStorage.setItem("previous", preEntry.textContent);
    count = 0;
    counter.innerText = count;
    
}
function getPreviousEntries() {
    const initial = localStorage.getItem("previous");
    preEntry.textContent = initial;

}

function deletePreEntries() {
    preEntry.textContent = 'Previous Entries: '
    localStorage.clear('preious')
}
