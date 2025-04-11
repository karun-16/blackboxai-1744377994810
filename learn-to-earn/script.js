// JavaScript for interactivity
document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');

    // Example tasks
    const tasks = [
        { id: 1, title: 'Complete Quiz 1', reward: '10 Aptos' },
        { id: 2, title: 'Finish Task 2', reward: '15 Aptos' },
        { id: 3, title: 'Participate in Survey', reward: '5 Aptos' },
    ];

    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = 'bg-white text-black p-4 rounded-lg shadow-lg';
        taskItem.innerHTML = `
            <h2 class="font-bold">${task.title}</h2>
            <p>Reward: ${task.reward}</p>
            <button class="mt-2 bg-blue-500 text-white py-1 px-3 rounded">Complete</button>
        `;
        taskList.appendChild(taskItem);
    });
});
