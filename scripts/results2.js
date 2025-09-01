// Sample JSON data (hardcoded for demo)
const data = {
  "competitors": [
    {
      "name": "MyFitnessPal",
      "website": "myfitnesspal.com",
      "industry_or_niche": "Health and Fitness",
      "market_position": "leader",
      "estimated_market_share": "30%",
      "unique_selling_points": [
        "Extensive food database",
        "Community features for support",
        "Integration with multiple devices"
      ],
      "strengths": [
        "Large and active user base",
        "Strong brand recognition",
        "Comprehensive tracking options for diet and exercise"
      ],
      "weaknesses": [
        "Limited advanced fitness tracking features",
        "Subscription model can be expensive",
        "Data privacy concerns"
      ],
      "funding_stage": "acquired (Under Armour)",
      "monthly_traffic_or_users": "30 million"
    },
    {
      "name": "Fitbit",
      "website": "fitbit.com",
      "industry_or_niche": "Wearable Technology",
      "market_position": "leader",
      "estimated_market_share": "25%",
      "unique_selling_points": [
        "Variety of fitness trackers and smartwatches",
        "Sleep tracking analytics",
        "Integration with health apps"
      ],
      "strengths": [
        "Strong hardware integration with mobile app",
        "Large ecosystem of wearables",
        "Health and wellness features like heart rate monitoring"
      ],
      "weaknesses": [
        "Hardware can be expensive",
        "App features can be limited without a device",
        "Dependency on connected devices"
      ],
      "funding_stage": "acquired (Google)",
      "monthly_traffic_or_users": "10 million"
    },
    {
      "name": "Noom",
      "website": "noom.com",
      "industry_or_niche": "Digital Health & Wellness",
      "market_position": "challenger",
      "estimated_market_share": "3%",
      "unique_selling_points": [
        "Psychological approach to weight loss",
        "Personalized coaching",
        "Focus on behavior change"
      ],
      "strengths": [
        "High user engagement and retention rates",
        "Strong coaching element",
        "Evidence-based approach to health"
      ],
      "weaknesses": [
        "Monthly subscription fees",
        "Limited fitness tracking capabilities",
        "Less focus on busy professionals"
      ],
      "funding_stage": "Series C (over $50 million)",
      "monthly_traffic_or_users": "2 million"
    },
    {
      "name": "Lifesum",
      "website": "lifesum.com",
      "industry_or_niche": "Health and Fitness Apps",
      "market_position": "newcomer",
      "estimated_market_share": "unknown",
      "unique_selling_points": [
        "Personalized meal plans",
        "User-friendly interface",
        "Integration with wearables"
      ],
      "strengths": [
        "Appealing design and UX",
        "Offers a broad range of diet plans",
        "Strong focus on healthy eating habits"
      ],
      "weaknesses": [
        "Less recognized brand",
        "Limited social features",
        "Requires a subscription for full functionality"
      ],
      "funding_stage": "unknown",
      "monthly_traffic_or_users": "1.5 million"
    },
    {
      "name": "8fit",
      "website": "8fit.com",
      "industry_or_niche": "Fitness & Nutrition",
      "market_position": "challenger",
      "estimated_market_share": "unknown",
      "unique_selling_points": [
        "Workout and meal planning in one",
        "Personalized nutrition and fitness plans",
        "Focus on short, time-efficient workouts"
      ],
      "strengths": [
        "User-friendly mobile experience",
        "Integration of workouts and meal planning",
        "Strong personalization through AI"
      ],
      "weaknesses": [
        "Less brand awareness compared to leaders",
        "Limited integration with other fitness apps",
        "Subscription can be cost-prohibitive for some users"
      ],
      "funding_stage": "Series B (over $25 million)",
      "monthly_traffic_or_users": "800,000"
    }
  ],
  "insight": "This startup can differentiate itself by integrating AI for personalized training and nutrition solutions specifically tailored for busy professionals, combining sustainable habit formation techniques, gamification elements to boost engagement, and seamless integration with existing devices to enhance convenience and accessibility."
};

/* let data;
let idea = "What is AI?";
async function fetchData() {
  const response = await fetch('http://localhost:3000/api/research/competitors', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idea })
    });
  data = await response.json();

   initializeApp();
} */

//fetchData();
// DOM Elements
const loadingElement = document.getElementById("loading");
const competitorsDashboard = document.getElementById("competitors-dashboard");
const insightText = document.getElementById("insight-text");

// Utility Functions
function formatMarketShare(share) {
  return share === "unknown" ? "N/A" : share;
}

function formatUsers(users) {
  if (!users || users === "unknown") return "N/A";
  return users;
}

function parseUserCount(users) {
  if (!users || users === "unknown") return 0;
  const numStr = users.toLowerCase().replace(/[^0-9.]/g, "");
  const num = parseFloat(numStr);
  if (users.includes("million")) return num;
  if (users.includes("thousand") || users.includes("k")) return num / 1000;
  return num;
}

function parseMarketShare(share) {
  if (!share || share === "unknown") return 0;
  return parseFloat(share.replace("%", ""));
}

function getPositionClass(position) {
  return `position-${position.toLowerCase()}`;
}

function getPositionColor(position) {
  const colors = {
    leader: ["#ffd700", "#ffed4e"],
    challenger: ["#CBAD8D", "#D1C7BD"],
    newcomer: ["#EBE3DB", "#F1EDE6"],
  };
  return colors[position.toLowerCase()] || colors["newcomer"];
}

// Create dashboard card HTML - MODIFIED TO REMOVE QUICK STATS
function createDashboardCard(competitor, index) {
  const websiteUrl = competitor.website.startsWith("http")
    ? competitor.website
    : `https://${competitor.website}`;

  const [color1, color2] = getPositionColor(competitor.market_position);

  return `
    <div class="dashboard-card" data-index="${index}">
      <!-- Header -->
      <div class="dashboard-header">
        <div class="competitor-info">
          <h3 class="competitor-name">${competitor.name}</h3>
          <a href="${websiteUrl}" target="_blank" rel="noopener noreferrer" class="competitor-website">
            🌐 ${competitor.website}
          </a>
        </div>
        <span class="market-position ${getPositionClass(
    competitor.market_position
  )}" 
              style="background: linear-gradient(135deg, ${color1}, ${color2});">
          ${competitor.market_position}
        </span>
      </div>

      <!-- Left Panel: Details -->
      <div class="dashboard-left">
        <!-- Key Metrics -->
        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-label">Market Share</div>
            <div class="metric-value">${formatMarketShare(
    competitor.estimated_market_share
  )}</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Monthly Users</div>
            <div class="metric-value">${formatUsers(
    competitor.monthly_traffic_or_users
  )}</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Industry</div>
            <div class="metric-value" style="font-size: 1.4rem;">${competitor.industry_or_niche
    }</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Funding</div>
            <div class="metric-value" style="font-size: 1.4rem;">${competitor.funding_stage
    }</div>
          </div>
        </div>

        <!-- Strengths -->
        <div class="details-section">
          <h4 class="section-title-small strengths-title">Strengths</h4>
          <ul class="details-list">
            ${competitor.strengths
      .map((strength) => `<li>${strength}</li>`)
      .join("")}
          </ul>
        </div>
      </div>

      <!-- Right Panel: Data Display -->
      <div class="dashboard-right">
        <div class="data-container">
          <h4 class="data-title">Key Metrics Overview</h4>
          <div class="data-display">
            <div class="data-item">
              <span class="data-label">Market Position</span>
              <span class="data-value">${competitor.market_position.toUpperCase()}</span>
            </div>
            <div class="data-item">
              <span class="data-label">Market Share</span>
              <span class="data-value">${formatMarketShare(competitor.estimated_market_share)}</span>
            </div>
            <div class="data-item">
              <span class="data-label">Monthly Users</span>
              <span class="data-value">${formatUsers(competitor.monthly_traffic_or_users)}</span>
            </div>
            <div class="data-item">
              <span class="data-label">Funding Stage</span>
              <span class="data-value">${competitor.funding_stage}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Panel: USPs and Weaknesses -->
      <div class="dashboard-bottom">
        <div class="details-section">
          <h4 class="section-title-small usp-title">Unique Selling Points</h4>
          <ul class="details-list">
            ${competitor.unique_selling_points
      .map((usp) => `<li>${usp}</li>`)
      .join("")}
          </ul>
        </div>
        
        <div class="details-section">
          <h4 class="section-title-small weaknesses-title">Weaknesses</h4>
          <ul class="details-list">
            ${competitor.weaknesses
      .map((weakness) => `<li>${weakness}</li>`)
      .join("")}
          </ul>
        </div>
      </div>
    </div>
  `;
}

// Render insight section
function renderInsight() {
  if (data.insight) {
    insightText.textContent = data.insight;
  }
}

// Render competitors dashboard
function renderCompetitorsDashboard() {
  if (!data.competitors || data.competitors.length === 0) {
    competitorsDashboard.innerHTML =
      `<p class="text-center text-muted">No competitor data available.</p>`;
    return;
  }

  const dashboardCards = data.competitors
    .map((competitor, index) => createDashboardCard(competitor, index))
    .join("");

  competitorsDashboard.innerHTML = dashboardCards;
}

// Simulate loading and render content
function initializeApp() {
  // Show loading state initially
  loadingElement.classList.remove("hidden");

  // Simulate loading delay for better UX
  setTimeout(() => {
    // Hide loading
    loadingElement.classList.add("hidden");

    // Render content
    renderInsight();
    renderCompetitorsDashboard();

    // Add entrance animations
    animateCardsEntrance();
  }, 1500);
}

// Enhanced entrance animations
function animateCardsEntrance() {
  const cards = document.querySelectorAll(".dashboard-card");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(60px) scale(0.8)";

    setTimeout(() => {
      card.style.transition = "opacity 1s ease, transform 1s cubic-bezier(0.4, 0, 0.2, 1)";
      card.style.opacity = "1";
      card.style.transform = "translateY(0) scale(1)";
    }, index * 200);
  });

  // Animate insight card
  const insightCard = document.querySelector(".insight-card");
  if (insightCard) {
    insightCard.style.opacity = "0";
    insightCard.style.transform = "translateY(30px)";

    setTimeout(() => {
      insightCard.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      insightCard.style.opacity = "1";
      insightCard.style.transform = "translateY(0)";
    }, 100);
  }
}

// Smooth scroll functionality
function addSmoothScroll() {
  let scrollButton = null;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      if (!scrollButton) {
        scrollButton = document.createElement("button");
        scrollButton.innerHTML = "↑";
        scrollButton.style.cssText = `
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--gradient-3);
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          box-shadow: var(--shadow-medium);
          transition: all 0.3s ease;
          z-index: 1000;
        `;

        scrollButton.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });

        scrollButton.addEventListener("mouseenter", () => {
          scrollButton.style.transform = "scale(1.1)";
          scrollButton.style.boxShadow = "var(--shadow-heavy)";
        });

        scrollButton.addEventListener("mouseleave", () => {
          scrollButton.style.transform = "";
          scrollButton.style.boxShadow = "var(--shadow-medium)";
        });

        document.body.appendChild(scrollButton);
      }
    } else if (scrollButton) {
      scrollButton.remove();
      scrollButton = null;
    }
  });
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
  addSmoothScroll();
});

// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Remove focus from any focused element
    document.activeElement.blur();
  }
});

// Add resize handler for responsive behavior
window.addEventListener("resize", () => {
  // Recalculate any dynamic layouts if needed
  const cards = document.querySelectorAll(".dashboard-card");
  cards.forEach(card => {
    // Reset any transforms on resize
    card.style.transform = "";
  });
});
