// script.js

// GitHub API integration
async function fetchGitHubData() {
    const response = await fetch('https://api.github.com/users/SaiCharanBandaru-FullStackDeveloper/repos');
    const data = await response.json();
    displayRepositories(data);
}

function displayRepositories(repos) {
    const repoList = document.getElementById('repo-list');
    repos.forEach(repo => {
        const repoItem = document.createElement('li');
        repoItem.textContent = repo.name;
        repoList.appendChild(repoItem);
    });
}

// Syntax highlighting setup (using a library like Prism.js)
function setupSyntaxHighlighting() {
    Prism.highlightAll();
}

// Interactive tech stack visualization (using a library like Chart.js)
function setupTechStackVisualization(data) {
    const ctx = document.getElementById('tech-stack-chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Technology Stack',
                data: data.values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Enhanced interactivity
function enhanceInteractivity() {
    const repoLinks = document.querySelectorAll('.repo-link');
    repoLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            alert(`You clicked on ${link.textContent}`);
        });
    });
}

// Initialize functions
window.onload = () => {
    fetchGitHubData();
    setupSyntaxHighlighting();
    // Pass the required data for tech stack visualization here
    setupTechStackVisualization({ labels: ['React', 'Node.js', 'CSS'], values: [20, 30, 50] });
    enhanceInteractivity();
};