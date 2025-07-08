// Update current time every second
function updateTime() {
    const now = new Date();
    document.getElementById('current-time').textContent = 
        now.toLocaleTimeString('en-US', {hour12: false});
}

setInterval(updateTime, 1000);
updateTime(); // Initial call

// You would replace this with actual API calls to your Rust server
async function fetchServerData() {
    // Example - replace with real API calls
    return {
        time: {
            sunrise: "07:21",
            sunset: "19:42",
            dayLength: 741,
            nightLength: 699
        },
        server: {
            name: "SriBull YouTube Test Server 2024",
            map: "Procedural Map",
            size: 1500,
            players: 1,
            maxPlayers: 10,
            queued: 0,
            seed: 9876513
        },
        team: {
            name: "Barack Obama",
            leader: "76561199013312261",
            members: [
                {
                    steamId: "76561199013312261",
                    name: "Barack Obama",
                    status: "Online",
                    alive: "Alive",
                    coordinates: "165.1, -126.6"
                }
            ]
        }
    };
}

// Update the UI with server data
async function updateServerInfo() {
    const data = await fetchServerData();
    
    // Time info
    document.getElementById('sunrise').textContent = data.time.sunrise;
    document.getElementById('sunset').textContent = data.time.sunset;
    document.getElementById('day-length').textContent = data.time.dayLength;
    document.getElementById('night-length').textContent = data.time.nightLength;
    
    // Server info
    document.getElementById('server-name').textContent = data.server.name;
    document.getElementById('map-type').textContent = data.server.map;
    document.getElementById('map-size').textContent = data.server.size;
    document.getElementById('player-count').textContent = data.server.players;
    document.getElementById('max-players').textContent = data.server.maxPlayers;
    document.getElementById('queued').textContent = data.server.queued;
    document.getElementById('seed').textContent = data.server.seed;
    
    // Team info
    document.getElementById('team-name').textContent = data.team.name;
    document.getElementById('leader-id').textContent = data.team.leader;
    
    // Clear existing members
    const membersContainer = document.getElementById('team-members');
    membersContainer.innerHTML = '';
    
    // Add each team member
    data.team.members.forEach(member => {
        const memberElement = document.createElement('p');
        memberElement.innerHTML = `
            [<span class="steam-id">${member.steamId}</span>] 
            <span class="player-name">${member.name}</span> - 
            <span class="status">${member.status}</span>, 
            <span class="alive-status">${member.alive}</span> at
            (<span class="coordinates">${member.coordinates}</span>)
        `;
        membersContainer.appendChild(memberElement);
    });
}

// Update data every 30 seconds (adjust as needed)
updateServerInfo();
setInterval(updateServerInfo, 30000);