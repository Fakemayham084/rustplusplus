// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Update current time every second
    updateTime();
    setInterval(updateTime, 1000);
    
    // Load server information
    loadServerInfo();
    
    // Load team information
    loadTeamInfo();
});

function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('current-time');
    timeElement.textContent = now.toLocaleTimeString();
}

function loadServerInfo() {
    // In a real app, you might fetch this from an API
    const serverInfoElement = document.getElementById('server-info');
    
    // Simulate server information
    const serverInfo = {
        status: 'Online',
        version: '1.2.3',
        lastUpdated: new Date().toLocaleDateString(),
        uptime: '5 days, 3 hours'
    };
    
    // Format the server info for display
    serverInfoElement.innerHTML = `
        <p><strong>Status:</strong> <span style="color: green;">${serverInfo.status}</span></p>
        <p><strong>Version:</strong> ${serverInfo.version}</p>
        <p><strong>Last Updated:</strong> ${serverInfo.lastUpdated}</p>
        <p><strong>Uptime:</strong> ${serverInfo.uptime}</p>
    `;
}

function loadTeamInfo() {
    // In a real app, you might fetch this from an API
    const teamInfoElement = document.getElementById('team-info');
    
    // Simulate team information
    const teamInfo = {
        name: 'Awesome Developers',
        members: 8,
        projects: 3,
        location: 'Remote',
        founded: '2022'
    };
    
    // Format the team info for display
    teamInfoElement.innerHTML = `
        <p><strong>Team Name:</strong> ${teamInfo.name}</p>
        <p><strong>Members:</strong> ${teamInfo.members}</p>
        <p><strong>Active Projects:</strong> ${teamInfo.projects}</p>
        <p><strong>Location:</strong> ${teamInfo.location}</p>
        <p><strong>Founded:</strong> ${teamInfo.founded}</p>
    `;
}