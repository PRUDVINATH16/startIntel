async function getRecentChats() {
  let user = JSON.parse(localStorage.getItem('user'));
  if(!user){
    location.href = "index.html";
  }
  let mobile = user.mobile;
  

  const response = await fetch('http://localhost:3000/api/report/reports', {
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
  console.log(ideas);
  if(!ideas || ideas.length === 0 || ideas.error) {
    recentChatsContainer.innerHTML = "<p>No recent chats found.</p>";
    return;
  }

  ideas.forEach(idea => {
    const chatItem = document.createElement("div");
    chatItem.classList.add("chat-item");
    chatItem.setAttribute("data-idea", idea);

    chatItem.innerHTML = `
      <i data-lucide="message-circle"></i>
      <span class="chat-title">${idea}</span>
    `;

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