let currentFontSize = 16;
let currentFontIndex = 0;
const fontStyles = ['poppins, sans-serif','Times New Roman, serif',
    'monospace','Roboto, sans-serif'];
    function addTask() {
        const input = document.getElementById('taskInput');
        const text = input.value.trim();
        
        if (text === '') return;
        
        const li = document.createElement('li');
        
        li.innerHTML = `
        <span class="task-text">${text}</span>
        <button onclick="this.parentElement.remove()">X</button>
        `;

        const taskText = li.querySelector('.task-text');
            taskText.addEventListener('click', () => {
                taskText.classList.toggle('completed');
            });

        li.addEventListener('dblclick', () => {
            const span = li.querySelector('.task-text');
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            span.replaceWith(input);
            input.focus();

            input.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    const newSpan = document.createElement('span');
                    newSpan.className = 'task-text';
                    newSpan.textContent = input.value;
                    input.replaceWith(newSpan);
                }
            });
        });
        
        document.getElementById('taskList').appendChild(li);
        input.value = '';
    }
    
    function changeBackgroundColor() {
        const color = document.getElementById('bgColor').value;
        document.body.style.backgroundColor = color;
        document.body.classList.remove('dark-mode');
    }
    
    function changeFontSize(change) {
        currentFontSize += change;
        document.body.style.fontSize = currentFontSize + 'px';
    }
    
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        document.getElementById('bgColor').value = '';
        if (document.body.classList.contains('dark-mode')) {
            document.body.style.backgroundColor = '';
        } 
        else {
            document.body.style.backgroundColor = '';
        }
    }
    
    function changeFontStyle() {
        currentFontIndex = (currentFontIndex + 1) % fontStyles.length;
        document.body.style.fontFamily = fontStyles[currentFontIndex];
    }
    
    document.getElementById('taskInput').addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });