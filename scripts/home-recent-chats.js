const API_BASE_URL = window.API_BASE_URL || '';

async function getRecentChats() {
  let user = JSON.parse(localStorage.getItem('user'));
  if(!user){
    location.href = "index.html";
  }
  let mobile = user.mobile;
  

  const response = await fetch(`${API_BASE_URL}/api/report/reports`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mobile })
  });

  const data = await response.json();
  return data;
}

async function displayRecentChats() {
  const recentChatsContainer = document.getElementById("recent-chats");
  let ideas = await getRecentChats();
  if(!ideas || ideas.length === 0 || ideas.error) {
    recentChatsContainer.innerHTML = "<p>No recent chats found.</p>";
    return;
  }

  ideas.forEach(idea => {
    const chatItem = document.createElement("div");
    chatItem.classList.add("chat-item");
    chatItem.setAttribute("data-idea", idea);

    const icon = document.createElement("i");
    icon.setAttribute("data-lucide", "message-circle");
    const span = document.createElement("span");
    span.className = "chat-title";
    span.textContent = idea;
    chatItem.appendChild(icon);
    chatItem.appendChild(span);

    // Tooltip element
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerText = idea;
    document.body.appendChild(tooltip);

    // Show tooltip on hover
    chatItem.addEventListener("mouseenter", (e) => {
      tooltip.style.display = "block";
      tooltip.style.left = e.pageX + "px";
      tooltip.style.top = (e.pageY - 30) + "px";
    });

    // Move tooltip with mouse
    chatItem.addEventListener("mousemove", (e) => {
      tooltip.style.left = e.pageX + "px";
      tooltip.style.top = (e.pageY - 30) + "px";
    });

    // Hide tooltip
    chatItem.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });

    chatItem.addEventListener("click", () => {
      // Redirect to results page with idea as URL parameter
      const encryptedIdea = encodeURIComponent(encryptData({ idea }));
      window.location.href = `results.html?data=${encryptedIdea}`;
    });

    recentChatsContainer.appendChild(chatItem);
  });

  lucide.createIcons();
}

displayRecentChats();