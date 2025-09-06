document.addEventListener("DOMContentLoaded", () => {

    const data = {
        "_id": "68b571836117939ab84c0918",
        "mobile": "9090909090",
        "idea": "I'm planning to launch an e-commerce platform for handmade products",
        "result": {
            "competitors": { "competitors": [ { "company_name": "Etsy", "established_year": "2005", "estimated_market_share": "50–60%", "founder": "Rob Kalin", "funding_stage": "publicly traded, IPO in 2015", "his_techniques_for_success": "Leveraging a strong community, effective marketing campaigns, partnerships with influencers, and a focus on user experience.", "industry_or_niche": "E-commerce for handmade products", "location": "Brooklyn, NY, USA", "market_position": "leader", "monthly_traffic_or_users": "60 million MAU", "strengths": ["Large user base", "Established marketplace", "Strong seller support and resources"], "unique_selling_points": ["Wide selection of handmade and vintage products", "Strong community of sellers and buyers", "Established brand recognition"], "weaknesses": ["High fees for sellers", "Increased competition", "Issues with counterfeit products"], "weaknesses_or_gaps": "Etsy does not cater specifically to niche audiences like eco-friendly or local cultural products.", "website": "www.etsy.com", "who_is_top_in_that_field": "Etsy is currently the top player in this niche by users and mindshare." }, { "company_name": "Artisan", "established_year": "2021", "estimated_market_share": "unknown", "founder": "Jane Smith", "funding_stage": "Seed round, raised $2M from angel investors", "his_techniques_for_success": "Targeting a specific eco-conscious niche, leveraging social media for visibility, and building a strong community-driven marketing approach.", "industry_or_niche": "E-commerce for handmade products", "location": "San Francisco, CA, USA", "market_position": "newcomer", "monthly_traffic_or_users": "20,000 MAU", "strengths": ["Innovative branding", "Strong focus on eco-conscious consumers", "Agile and adaptable business model"], "unique_selling_points": ["Focus on eco-friendly and sustainable handmade products", "Lower fees for sellers compared to incumbents", "Intuitive user interface"], "weaknesses": ["Limited brand recognition", "Lower inventory and product selection compared to incumbents", "Reliant on marketing for growth"], "weaknesses_or_gaps": "The platform lacks advanced features and integrations that more established competitors offer.", "website": "www.artisan.com", "who_is_top_in_that_field": "Etsy remains the leader by a substantial margin." }, { "company_name": "Handmade at Amazon", "established_year": "2015", "estimated_market_share": "15–20%", "founder": "Amazon Team", "funding_stage": "part of Amazon (publicly traded since 1997)", "his_techniques_for_success": "Leveraging Amazon's operational excellence, bundling with Amazon Prime services, and extensive SEO optimization.", "industry_or_niche": "E-commerce for handmade products", "location": "Seattle, WA, USA", "market_position": "challenger", "monthly_traffic_or_users": "100 million MAU", "strengths": ["Huge marketplace exposure", "Efficient logistics", "Ease of use for buyers"], "unique_selling_points": ["Trust and recognition of the Amazon brand", "Efficient shipping and customer service", "Access to Amazon's vast customer base"], "weaknesses": ["Less focus on community and artists compared to Etsy", "Higher fees than other e-commerce platforms", "Less personalized experience for buyers and sellers"], "weaknesses_or_gaps": "Limited niche craftsmanship support, making it harder for specialized sellers to thrive.", "website": "www.amazon.com/handmade", "who_is_top_in_that_field": "Etsy leads in handmade products due to community engagement." } ], "insight": "The startup could differentiate by focusing on underserved niches such as eco-friendly handmade products, offering lower fees, and cultivating a community that encourages seller engagement and transparency. Additionally, creating a superior user experience tailored specifically for artists may enhance appeal against established players." },
            "market": { "future_projection": [{ "market_size": "USD 25B", "year": 2026 }], "historical_growth": [ { "market_size": "USD 10B", "year": 2020 }, { "market_size": "USD 12B", "year": 2021 }, { "market_size": "USD 14B", "year": 2022 }, { "market_size": "USD 16B", "year": 2023 }, { "market_size": "USD 18B", "year": 2024 } ], "key_trends": ["Increase in consumer preference for unique, artisanal products driven by the desire for personalization.", "Growing reliance on social media platforms as marketplaces enhancing visibility for handmade products.", "Sustainability regulations pushing businesses towards eco-friendly practices influencing consumer purchases."], "market_overview": { "SAM": "USD 20B", "SOM": "USD 2B", "TAM": "USD 100B", "methodology_note": "TAM estimated from global e-commerce market size, SAM based on the share of handmade products, and SOM derived from estimated operational market penetration.", "stage": "growing" }, "summary": "The market for handmade products in e-commerce is expanding rapidly as consumer preferences shift towards uniqueness and sustainability. With an estimated market growth rate suggesting potential doubling in size by 2026, significant opportunities exist for careful positioning and marketing in this sector.", "top_regions": [ { "region": "North America", "why": "High disposable income and a strong preference for handmade products." }, { "region": "Europe", "why": "Culturally rich markets with strong trends in artisanal goods." }, { "region": "Asia-Pacific", "why": "Emerging middle class eager to explore diverse e-commerce options." }, { "region": "Latin America", "why": "Growth in internet access and e-commerce adoption." }, { "region": "Middle East", "why": "Increasing investment in online retail platforms." } ] },
            "pricing": { "competitor_pricing": [ { "cheapest_plan_usd": "0.20", "model": "Transaction-based", "most_expensive_plan_usd": "unknown", "name": "Etsy", "tiers": [{ "features": ["Listing products", "Basic shop settings"], "plan": "Seller Fees", "price_usd": "0.20 per listing", "target_customer": "Independent artisans selling handmade goods" }, { "features": ["Discounted shipping rates"], "plan": "Shipping Labels", "price_usd": "Varies", "target_customer": "Sellers looking for cost-effective shipping solutions" }, { "features": ["Promoted listings"], "plan": "Advertising", "price_usd": "Varies", "target_customer": "Sellers wanting increased visibility" }] }, { "cheapest_plan_usd": "0.00", "model": "Subscription + Transaction", "most_expensive_plan_usd": "39.99", "name": "Amazon Handmade", "tiers": [{ "features": ["Unlimited product listings", "Access to promotional tools"], "plan": "Professional Selling Plan", "price_usd": "39.99 per month", "target_customer": "Artisans needing a broad audience" }, { "features": ["Per-item fee for each sale"], "plan": "Individual Plan", "price_usd": "Varies", "target_customer": "Occasional sellers with limited products" }] }, { "cheapest_plan_usd": "20.00", "model": "Subscription", "most_expensive_plan_usd": "40.00", "name": "ArtFire", "tiers": [{ "features": ["Unlimited listings", "Use of marketplace"], "plan": "Basic Plan", "price_usd": "20.00 per month", "target_customer": "Small artisans looking for a budget-friendly platform" }, { "features": ["Enhanced tools, analytics, and marketing", "More promotional tools"], "plan": "Pro Plan", "price_usd": "40.00 per month", "target_customer": "Growing handmade business owners" }] }, { "cheapest_plan_usd": "0.00", "model": "Subscription", "most_expensive_plan_usd": "25.00", "name": "Zibbet", "tiers": [{ "features": ["Limited listings"], "plan": "Free Plan", "price_usd": "0.00", "target_customer": "Starting artisans testing the market" }, { "features": ["Unlimited listings in their marketplace"], "plan": "Marketplace Plan", "price_usd": "5.00 per month", "target_customer": "Artisans needing a low-cost option" }, { "features": ["Multiple storefronts, advanced features"], "plan": "Pro Plan", "price_usd": "25.00 per month", "target_customer": "Established artisans with different types of merchandise" }] } ], "insight": "One strong strategic takeaway is that platforms offering low entry costs combined with performance-based fees (like Etsy and Amazon Handmade) seem to attract a larger crowd, suggesting a focus on accessibility in an entry-level tier could foster growth.", "recommendation": "For the startup, a hybrid pricing strategy that combines a low subscription fee with transaction-based fees would be optimal. It allows for initial affordability that attracts artisans while ensuring revenue through sales. Incorporating premium features for advanced analytics and marketing tools can create value for serious sellers." },
            "audience": { "channels": ["Instagram", "Pinterest", "Facebook Groups"], "marketing_strategies": ["Leverage social media influencers who focus on sustainability and handmade crafts to showcase products.", "Host virtual craft fairs or webinars to connect consumers with artisans and promote unique offerings.", "Utilize content marketing through a blog that highlights stories behind the products and artisans to engage customers."], "primary_audience": "Eco-conscious consumers who value unique, handmade products and are willing to pay a premium for artisanal craftsmanship.", "secondary_audience": "Small-scale artisans looking for a platform to market and sell their handmade goods." },
            "success": { "go_no_go_guidance": [ "Achieve 50+ validated customer interviews with clear pain points", "Obtain 200+ sign-ups on the landing page before launch", "Demonstrate at least 1,000 in sales from pilot testing within craft fairs" ], "mitigations": [ "Develop niche targeting and unique value propositions", "Partner with reliable local artisans and suppliers", "Implement strict quality assurance processes", "Invest in brand marketing and storytelling", "Focus on customer engagement and loyalty programs", "Diversify product offerings to withstand economic shifts" ], "risks": [ "High competition from established platforms", "Logistical challenges in product sourcing", "Quality control issues", "Limited brand recognition", "Customer retention difficulties", "Economic downturn affecting discretionary spending" ], "success_assessment": { "justification": "The market for handmade products is growing, with consumers increasingly seeking unique and personalized items, indicating a readiness for a dedicated e-commerce platform. User pain is moderately severe, as buyers often struggle to find reliable marketplaces for handmade goods. Competitive pressure is present but fragmented, presenting an opportunity to establish a niche. However, defensibility is weak without established branding or unique sourcing solutions. Go-to-market feasibility is strong due to existing online commerce trends, but execution complexity remains high in terms of logistics and quality assurance.", "success_probability": 70 }, "validation_plan": [ { "experiment": "Conduct customer interviews to assess needs", "metric": "Number of interviews completed", "target": "50 interviews", "timeframe_weeks": 2 }, { "experiment": "Launch a landing page with product concepts", "metric": "Email sign-ups", "target": "200 sign-ups", "timeframe_weeks": 3 }, { "experiment": "Run social media ad campaign targeting handmade product buyers", "metric": "Click-through rate", "target": "3% CTR", "timeframe_weeks": 4 }, { "experiment": "Survey potential customers on pricing preferences", "metric": "Response rate", "target": "100 responses", "timeframe_weeks": 2 }, { "experiment": "Pilot a small collection via local craft fairs", "metric": "Sales during event", "target": "$1,000 in sales", "timeframe_weeks": 6 }, { "experiment": "Test product return rates with trial customers", "metric": "Return rate percentage", "target": "5% or lower", "timeframe_weeks": 4 } ] },
            "tech": { "components": [ { "build_vs_buy": "Build", "key_tech_stack": ["React", "Redux", "Bootstrap"], "name": "Frontend Application", "purpose": "User interface for customers to browse, search, and purchase handmade products.", "risks": ["Development delays", "User experience issues"] }, { "build_vs_buy": "Build", "key_tech_stack": ["Node.js", "Express", "GraphQL"], "name": "Backend API", "purpose": "Handles business logic, user authentication, and product management.", "risks": ["Scalability challenges", "Performance issues"] }, { "build_vs_buy": "Buy", "key_tech_stack": ["PostgreSQL", "AWS RDS"], "name": "Database", "purpose": "Data storage for products, users, and transactions.", "risks": ["Data security", "Backup failures"] }, { "build_vs_buy": "Buy", "key_tech_stack": ["Stripe API"], "name": "Payment Gateway", "purpose": "Process payments securely.", "risks": ["Compliance issues", "Transaction failures"] }, { "build_vs_buy": "Buy", "key_tech_stack": ["ShipStation API"], "name": "Shipping Integration", "purpose": "Manage shipping logistics and track packages.", "risks": ["Shipping delays", "Integration issues"] }, { "build_vs_buy": "Buy", "key_tech_stack": ["Auth0"], "name": "Authentication Service", "purpose": "Manages user registration, login, and session management.", "risks": ["Security vulnerabilities", "Service outages"] }, { "build_vs_buy": "Buy", "key_tech_stack": ["AWS CloudFront"], "name": "CDN", "purpose": "Delivers static resources efficiently.", "risks": ["Cache misses", "Latency issues"] } ], "cost_estimates": { "dev_env_usd_month": "1000", "prod_env_usd_month": "2000", "staging_env_usd_month": "500" }, "data_model_notes": { "retention_policy": "User data retained for 5 years; transaction data retained for 7 years.", "schema_highlights": ["Users (id, name, email)", "Products (id, name, description, price)", "Orders (id, user_id, product_ids)"], "sources": ["User Input", "External APIs", "Transaction Logs"] }, "infra_plan": { "hosting": "AWS with EC2 for computing and RDS for database management.", "observability": ["AWS CloudWatch", "ELK Stack"], "scaling": "Auto-scaling on EC2 based on traffic load.", "security": ["HTTPS for all transactions", "IAM roles for resource access control"] }, "integration_matrix": [ { "auth": "API Key", "notes": "Ensure PCI compliance", "rate_limit": "100 requests/minute", "service": "Stripe" }, { "auth": "API Key", "notes": "Handle exceptions during shipment updates", "rate_limit": "60 requests/minute", "service": "ShipStation" }, { "auth": "OAuth 2.0", "notes": "Manage session expiration effectively", "rate_limit": "100 requests/minute", "service": "Auth0" } ], "system_architecture": "The e-commerce platform will utilize a microservices architecture, consisting of front-end and back-end services, a database for data storage, and integration with third-party services for payment processing, shipping, and user authentication. A content delivery network (CDN) will be implemented for faster content delivery." },
            "time-budget": { "acceleration_options": [ { "option": "Hire additional developers", "trade_off": "Increased upfront costs but faster development." }, { "option": "Outsource marketing", "trade_off": "Less control over brand messaging but access to expert marketing resources." } ], "budget_estimate": { "by_phase_usd": [ { "high": 12000, "low": 8000, "phase": "Market Research and Validation" }, { "high": 80000, "low": 60000, "phase": "Platform Development" }, { "high": 10000, "low": 5000, "phase": "Product Sourcing and Onboarding" }, { "high": 25000, "low": 15000, "phase": "Marketing and Launch" } ], "total_usd": { "high": 126000, "low": 80000 } }, "phases": [ { "duration_weeks": 4, "major_deliverables": ["Market Analysis Report", "Product Fit Validation"], "name": "Market Research and Validation", "team_mix": [{ "FTE": 1, "role": "Market Research Analyst" }, { "FTE": 0.5, "role": "Project Manager" }] }, { "duration_weeks": 12, "major_deliverables": ["E-commerce Platform Prototype", "User Testing Results"], "name": "Platform Development", "team_mix": [{ "FTE": 1, "role": "UI/UX Designer" }, { "FTE": 1, "role": "Frontend Developer" }, { "FTE": 1, "role": "Backend Developer" }, { "FTE": 0.7, "role": "Project Manager" }] }, { "duration_weeks": 6, "major_deliverables": ["Supplier Agreements", "Onboarded Products List"], "name": "Product Sourcing and Onboarding", "team_mix": [{ "FTE": 1, "role": "Sourcing Specialist" }, { "FTE": 0.5, "role": "Customer Support" }] }, { "duration_weeks": 8, "major_deliverables": ["Marketing Plan", "Launch Campaign"], "name": "Marketing and Launch", "team_mix": [{ "FTE": 1, "role": "Marketing Manager" }, { "FTE": 0.5, "role": "Content Creator" }, { "FTE": 0.5, "role": "Social Media Specialist" }] } ], "resource_plan": [ { "FTE": 1, "role": "Market Research Analyst", "seniority": "Mid" }, { "FTE": 1.2, "role": "Project Manager", "seniority": "Senior" }, { "FTE": 1, "role": "UI/UX Designer", "seniority": "Mid" }, { "FTE": 1, "role": "Frontend Developer", "seniority": "Mid" }, { "FTE": 1, "role": "Backend Developer", "seniority": "Mid" }, { "FTE": 1, "role": "Sourcing Specialist", "seniority": "Mid" }, { "FTE": 0.5, "role": "Customer Support", "seniority": "Entry" }, { "FTE": 1, "role": "Marketing Manager", "seniority": "Senior" }, { "FTE": 0.5, "role": "Content Creator", "seniority": "Entry" }, { "FTE": 0.5, "role": "Social Media Specialist", "seniority": "Mid" } ], "schedule_risks": ["Delays in supplier onboarding could push launch back by weeks.", "Technical difficulties may arise during platform development.", "Market shifts might necessitate changes in product offerings."] },
            "team": { "core_team_profile": [ { "role": "CEO", "skills": ["Leadership", "Strategic Planning", "Business Development"] }, { "role": "CTO", "skills": ["E-Commerce Technology", "Software Development", "System Architecture"] }, { "role": "CMO", "skills": ["Digital Marketing", "Brand Building", "Customer Acquisition"] }, { "role": "Product Manager", "skills": ["Agile Methodologies", "User Research", "Roadmapping"] }, { "role": "UI/UX Designer", "skills": ["Graphic Design", "User Experience Design", "Prototyping"] }, { "role": "Marketing Specialist", "skills": ["Social Media Marketing", "Content Creation", "Email Campaigns"] }, { "role": "Customer Support", "skills": ["Customer Service", "Communication Skills", "Problem-Solving"] }, { "role": "Operations Manager", "skills": ["Supply Chain Management", "Process Improvement", "Logistics"] }, { "role": "Data Analyst", "skills": ["Data Analysis", "Statistical Analysis", "Data Visualization"] } ], "hiring_plan": [ { "quarter": "Q1", "reason": "Visionary leader to drive the company direction and strategy.", "role": "CEO", "seniority": "C-Level" }, { "quarter": "Q1", "reason": "To develop the technology platform crucial for e-commerce.", "role": "CTO", "seniority": "C-Level" }, { "quarter": "Q1", "reason": "To establish brand presence and marketing strategy.", "role": "CMO", "seniority": "C-Level" }, { "quarter": "Q2", "reason": "To oversee product development and feature prioritization.", "role": "Product Manager", "seniority": "Mid-Level" }, { "quarter": "Q2", "reason": "To design a user-friendly interface and enhance customer experience.", "role": "UI/UX Designer", "seniority": "Mid-Level" }, { "quarter": "Q3", "reason": "To assist in executing marketing campaigns.", "role": "Marketing Specialist", "seniority": "Entry-Level" }, { "quarter": "Q3", "reason": "To handle customer inquiries and provide support.", "role": "Customer Support", "seniority": "Entry-Level" }, { "quarter": "Q4", "reason": "To streamline operations and logistics management.", "role": "Operations Manager", "seniority": "Mid-Level" }, { "quarter": "Q4", "reason": "To analyze data and drive insights from customer behavior.", "role": "Data Analyst", "seniority": "Mid-Level" } ], "interview_rubrics": [ { "role": "CEO", "top_signals": ["Visionary thinking", "Strong business acumen", "Leadership experience", "Ability to drive growth", "Culture fit"] }, { "role": "CTO", "top_signals": ["Technical expertise", "E-Commerce experience", "Problem-solving skills", "Leadership in technology teams", "Innovation mindset"] }, { "role": "CMO", "top_signals": ["Track record in digital marketing", "Brand strategy experience", "Analytical mindset", "Creativity", "Successful campaign executions"] }, { "role": "Product Manager", "top_signals": ["Agile experience", "Customer-focused mindset", "Prioritization skills", "Technical understanding", "Strong communication"] }, { "role": "UI/UX Designer", "top_signals": ["Portfolio of work", "Understanding of user-centered design", "Prototyping skills", "Collaboration skills", "Attention to detail"] } ], "org_design": { "pods": [], "reporting_lines": [{ "CEO": ["CTO", "CMO", "Product Manager", "Operations Manager"] }, { "CTO": ["UI/UX Designer", "Data Analyst"] }, { "CMO": ["Marketing Specialist"] }, { "Operations Manager": ["Customer Support"] }], "structure": "Flat Organizational Structure" }, "vendor_vs_inhouse": { "what_to_keep_inhouse": ["Product Development", "Brand Strategy", "Data Analysis"], "what_to_outsource": ["Logistics", "Customer Service Software", "Digital Marketing Campaigns"] } },
            "roadmap": {
                "critical_path": [ { "sprint": "Sprint 1", "task": "Establish foundational business model" }, { "sprint": "Sprint 2", "task": "Finalize platform requirements" }, { "sprint": "Sprint 3", "task": "Initiate development" }, { "sprint": "Sprint 4", "task": "Complete backend development" }, { "sprint": "Sprint 5", "task": "Develop frontend" }, { "sprint": "Sprint 9", "task": "Complete platform testing" }, { "sprint": "Sprint 11", "task": "Soft launch of platform" }, { "sprint": "Sprint 12", "task": "Full launch" } ],
                "dependencies": [ { "dependent_on": "Establish foundational business model", "task": "Finalize platform requirements" }, { "dependent_on": "Initiate development", "task": "Complete backend development" }, { "dependent_on": "Complete backend development", "task": "Develop frontend" }, { "dependent_on": "Develop frontend", "task": "Conduct user testing" }, { "dependent_on": "Conduct user testing", "task": "Prepare for marketing" }, { "dependent_on": "Develop frontend", "task": "Complete platform testing" }, { "dependent_on": "Soft launch of platform", "task": "Full launch" } ],
                "launch_checklist": [ { "item": "Finalize platform features" }, { "item": "Complete user testing" }, { "item": "Create marketing materials" }, { "item": "Set up payment processing" }, { "item": "Launch beta version" }, { "item": "Engage with initial users" }, { "item": "Monitor platform performance" }, { "item": "Officially launch platform publically" } ],
                "post_launch_metrics": { "guardrails": ["User retention rate above 30%", "Customer satisfaction score above 4/5", "Monthly revenue growth of at least 10%"], "north_star": "Total number of users and engagement metrics (repeat purchases, time spent on site)" },
                "roadmap": [ { "key_tasks": ["Conduct market analysis", "Define target audience", "Outline business model"], "owner_role": "Product Manager", "sprint": 1, "sprint_goal": "Establish foundational business model", "success_metric": "Completed business model canvas", "weeks": "1-2" }, { "key_tasks": ["Determine key features", "Select technology stack", "Create wireframes"], "owner_role": "Technical Lead", "sprint": 2, "sprint_goal": "Finalize platform requirements", "success_metric": "Approved feature list and wireframes", "weeks": "3-4" }, { "key_tasks": ["Set up development environment", "Start backend development"], "owner_role": "Software Engineer", "sprint": 3, "sprint_goal": "Initiate development", "success_metric": "Backend API prototype completed", "weeks": "5-6" }, { "key_tasks": ["Finish backend APIs", "Conduct internal API testing"], "owner_role": "Software Engineer", "sprint": 4, "sprint_goal": "Complete backend development", "success_metric": "Backend fully functional and tested", "weeks": "7-8" }, { "key_tasks": ["Start frontend development", "Integrate frontend with backend"], "owner_role": "Frontend Developer", "sprint": 5, "sprint_goal": "Develop frontend", "success_metric": "Clickable prototype of the platform", "weeks": "9-10" }, { "key_tasks": ["Create user testing plans", "Engage users for feedback"], "owner_role": "UX Researcher", "sprint": 6, "sprint_goal": "Conduct user testing", "success_metric": "User testing completed and feedback collected", "weeks": "11-12" }, { "key_tasks": ["Analyze user feedback", "Implement improvements"], "owner_role": "Product Manager", "sprint": 7, "sprint_goal": "Iterate on feedback", "success_metric": "At least 80% of user feedback addressed", "weeks": "13-14" }, { "key_tasks": ["Develop marketing strategy", "Set up social media accounts"], "owner_role": "Marketing Lead", "sprint": 8, "sprint_goal": "Prepare for marketing", "success_metric": "Marketing strategy finalized and accounts set up", "weeks": "15-16" }, { "key_tasks": ["Conduct load testing", "Fix bugs identified during testing"], "owner_role": "QA Engineer", "sprint": 9, "sprint_goal": "Complete platform testing", "success_metric": "Zero critical bugs remaining", "weeks": "17-18" }, { "key_tasks": ["Create launch plan", "Prepare promotional materials"], "owner_role": "Marketing Lead", "sprint": 10, "sprint_goal": "Finalize go-to-market strategy", "success_metric": "Launch plan signed off", "weeks": "19-20" }, { "key_tasks": ["Launch beta version", "Monitor user engagement"], "owner_role": "Product Manager", "sprint": 11, "sprint_goal": "Soft launch of platform", "success_metric": "Initial user base of at least 100 users", "weeks": "21-22" }, { "key_tasks": ["Execute full marketing plan", "Launch platform publicly"], "owner_role": "Marketing Lead", "sprint": 12, "sprint_goal": "Full launch", "success_metric": "Achieve 500 users in first month post-launch", "weeks": "23-24" } ]
            }
        }
    };

    // --- RENDER FUNCTIONS ---
    function renderCompetitorsPage(data) {
        const insightContainer = document.getElementById("competitor-insight-card");
        const competitorGrid = document.getElementById("competitor-grid");
        if (!insightContainer || !competitorGrid) { console.error("Competitor containers not found!"); return; }
        insightContainer.innerHTML = ''; competitorGrid.innerHTML = '';
        if (data.insight) { insightContainer.innerHTML = `<h3>Key Strategic Insight</h3><p>${data.insight}</p>`; }
        if (data.competitors && data.competitors.length > 0) {
            data.competitors.forEach(comp => {
                const cardWrapper = document.createElement('div');
                cardWrapper.className = 'competitor-card-wrapper';
                cardWrapper.innerHTML = `
                    <div class="card competitor-card">
                        <div class="competitor-header">
                            <div><h2>${comp.company_name}</h2><p class="industry-niche">${comp.industry_or_niche}</p></div>
                            <span class="market-position ${comp.market_position}">${comp.market_position}</span>
                        </div>
                        <div class="competitor-body">
                            <div class="main-details">
                                <div class="data-section"><h3>Techniques for Success</h3><p class="techniques-text">${comp.his_techniques_for_success}</p></div>
                                <div class="sw-container">
                                    <div class="data-section strengths"><h3>Strengths</h3><ul>${comp.strengths.map(item => `<li>${item}</li>`).join('')}</ul></div>
                                    <div class="data-section weaknesses"><h3>Weaknesses</h3><ul>${comp.weaknesses.map(item => `<li>${item}</li>`).join('')}</ul></div>
                                </div>
                                <div class="data-section"><h3>Unique Selling Points</h3><ul>${comp.unique_selling_points.map(item => `<li>${item}</li>`).join('')}</ul></div>
                            </div>
                            <div class="key-metrics">
                                <h3>Key Metrics</h3>
                                <div class="key-metrics-grid">
                                    <div class="metric-item"><strong>Market Share</strong><span>${comp.estimated_market_share}</span></div>
                                    <div class="metric-item"><strong>Monthly Traffic</strong><span>${comp.monthly_traffic_or_users}</span></div>
                                    <div class="metric-item"><strong>Established</strong><span>${comp.established_year}</span></div>
                                    <div class="metric-item"><strong>Location</strong><span>${comp.location}</span></div>
                                    <div class="metric-item"><strong>Founder(s)</strong><span>${comp.founder}</span></div>
                                    <div class="metric-item"><strong>Funding</strong><span>${comp.funding_stage}</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="competitor-footer"><p><strong>Identified Gap:</strong> ${comp.weaknesses_or_gaps}</p><a href="https://${comp.website}" target="_blank" class="website-link">Visit Website →</a></div>
                    </div>`;
                competitorGrid.appendChild(cardWrapper);
            });
        }
    }

    function renderRoadmapPage(data) {
    const container = document.getElementById('roadmap-content');
    if (!container || !data) return;

    container.innerHTML = `
        <div class="roadmap-container">
            <!-- Timeline (Critical Path) -->
            <div class="roadmap-timeline-wrapper card">
                <h3>Critical Path</h3>
                <div class="roadmap-timeline">
                    <div class="timeline-line"></div>
                    ${data.critical_path.map(item => `
                        <div class="timeline-node ${item.sprint ? 'is-critical' : ''}">
                            <div class="node-icon"></div>
                            <div class="node-content">
                                <strong>${item.sprint}</strong>: ${item.task}
                            </div>
                        </div>
                    `).join('')}
                </div>
                <svg id="dependency-svg"></svg>
            </div>

            <!-- Sprint Accordion -->
            <div class="sprint-accordion card">
                <h3>Roadmap by Sprint</h3>
                ${data.roadmap.map(sprint => `
                    <div class="sprint-item">
                        <div class="sprint-header">
                            <h4>Sprint ${sprint.sprint}: ${sprint.sprint_goal}</h4>
                        </div>
                        <div class="sprint-content">
                            <p><strong>Owner:</strong> ${sprint.owner_role}</p>
                            <p><strong>Weeks:</strong> ${sprint.weeks}</p>
                            <p><strong>Success Metric:</strong> ${sprint.success_metric}</p>
                            <strong>Key Tasks:</strong>
                            <ul>${sprint.key_tasks.map(task => `<li>${task}</li>`).join('')}</ul>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Launch Checklist -->
        <div class="card launch-checklist">
            <h3>Launch Checklist</h3>
            <ul>
                ${data.launch_checklist.map(item => `<li>${item.item}</li>`).join('')}
            </ul>
        </div>

        <!-- Post-Launch Metrics -->
        <div class="card">
            <h3>Post-Launch Metrics</h3>
            <div class="data-section">
                <h4>Guardrails</h4>
                <ul>${data.post_launch_metrics.guardrails.map(m => `<li>${m}</li>`).join('')}</ul>
                <h4>North Star</h4>
                <p>${data.post_launch_metrics.north_star}</p>
            </div>
        </div>
    `;

    // Accordion toggle
    container.querySelectorAll('.sprint-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.classList.toggle('is-open');
        });
    });
}


    function renderMarketTrendsPage(data) {
        const container = document.getElementById('market-trends-content');
        if (!container || !data) return;
        const overview = data.market_overview;
        const historical = data.historical_growth;
        const future = data.future_projection[0];
        container.innerHTML = `
            <section id="market-summary-card" class="card"><h3>Market Summary</h3><p>${data.summary}</p></section>
            <div class="market-overview-grid">
                <div class="overview-card"><h4>TAM</h4><div class="value">${overview.TAM}</div></div>
                <div class="overview-card"><h4>SAM</h4><div class="value">${overview.SAM}</div></div>
                <div class="overview-card"><h4>SOM</h4><div class="value">${overview.SOM}</div><div class="stage">${overview.stage}</div></div>
                <p class="methodology-note">${overview.methodology_note}</p>
            </div>
            <div class="market-grid">
                <div class="card timeline-card"><div class="data-section"><h3>Market Growth</h3><div class="timeline">
                    ${historical.map(h => `<div class="timeline-item"><span class="year">${h.year}</span><span class="size">${h.market_size}</span></div>`).join('')}
                    <div class="timeline-item"><span class="year">${future.year} (Projected)</span><span class="size">${future.market_size}</span></div>
                </div></div></div>
                <div class="card"><div class="data-section"><h3>Key Trends</h3><ul>${data.key_trends.map(item => `<li>${item}</li>`).join('')}</ul></div></div>
                <div class="card"><div class="data-section"><h3>Top Regions for Growth</h3><ul>${data.top_regions.map(item => `<li><strong>${item.region}:</strong> ${item.why}</li>`).join('')}</ul></div></div>
            </div>`;
    }

    function renderPricingPage(data) {
        const container = document.getElementById('pricing-models-content');
        if (!container || !data) return;
        let competitorPricingHTML = data.competitor_pricing.map(comp => `
            <div class="card">
                <div class="pricing-header"><h2>${comp.name}</h2><span class="model">${comp.model}</span></div>
                <div class="tier-grid">
                    ${comp.tiers.map(tier => `
                        <div class="tier-card">
                            <h4>${tier.plan}</h4>
                            <div class="price">${tier.price_usd.includes("per") ? tier.price_usd.split(" ")[0] : tier.price_usd}</div>
                            <div class="price-note">${tier.price_usd.includes("per") ? "per " + tier.price_usd.split(" ").slice(1).join(" ") : (tier.price_usd === "Varies" ? "Based on usage" : "One-time or varied fee")}</div>
                            <ul>${tier.features.map(f => `<li>${f}</li>`).join('')}</ul>
                            <div class="target"><strong>Best for:</strong> ${tier.target_customer}</div>
                        </div>`).join('')}
                </div>
            </div>`).join('');
        container.innerHTML = `
            <div class="recommendation-grid">
                <div class="card recommendation-card"><h3>Strategic Insight</h3><p>${data.insight}</p></div>
                <div class="card recommendation-card"><h3>Recommendation</h3><p>${data.recommendation}</p></div>
            </div>
            <div class="pricing-grid">${competitorPricingHTML}</div>`;
    }

    function renderAudiencePage(data) {
        const container = document.getElementById('targeted-audience-content');
        if (!container || !data) return;
        container.innerHTML = `
            <div class="audience-personas">
                <div class="persona-card"><h3>Primary Audience</h3><p>${data.primary_audience}</p></div>
                <div class="persona-card"><h3>Secondary Audience</h3><p>${data.secondary_audience}</p></div>
            </div>
            <div class="audience-grid">
                <div class="card"><div class="data-section"><h3>Effective Channels</h3><ul>${data.channels.map(item => `<li>${item}</li>`).join('')}</ul></div></div>
                <div class="card"><div class="data-section"><h3>Marketing Strategies</h3><ul>${data.marketing_strategies.map(item => `<li>${item}</li>`).join('')}</ul></div></div>
            </div>`;
    }

    function renderSuccessPage(data) {
        const container = document.getElementById('success-suggestions-content');
        if (!container || !data) return;
        container.innerHTML = `
            <div class="success-assessment-grid card">
                <div>
                    <div class="data-section">
                        <h3>Success Assessment</h3>
                        <p class="techniques-text">${data.success_assessment.justification}</p>
                    </div>
                </div>
                <div class="probability-score">
                    <h4>Probability of Success</h4>
                    <div class="probability-circle" data-score="${data.success_assessment.success_probability}" style="--p:${data.success_assessment.success_probability}%"></div>
                </div>
            </div>
            <div class="content-grid-two-col">
                <div class="card">
                    <div class="data-section">
                        <h3>Key Risks</h3>
                        <ul class="risk-list">${data.risks.map(item => `<li>${item}</li>`).join('')}</ul>
                    </div>
                </div>
                 <div class="card">
                    <div class="data-section">
                        <h3>Risk Mitigations</h3>
                        <ul>${data.mitigations.map(item => `<li>${item}</li>`).join('')}</ul>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="data-section">
                    <h3>Go/No-Go Guidance</h3>
                    <p class="techniques-text">Proceed if the following criteria are met:</p>
                    <ul>${data.go_no_go_guidance.map(item => `<li>${item}</li>`).join('')}</ul>
                </div>
            </div>
            <div class="card">
                <div class="data-section">
                    <h3>Validation Plan</h3>
                    <div class="content-grid-three-col">
                        ${data.validation_plan.map(item => `
                            <div class="validation-card">
                                <h4>${item.experiment}</h4>
                                <div class="validation-item">
                                    <strong>Metric:</strong> <span>${item.metric}</span>
                                </div>
                                <div class="validation-item">
                                    <strong>Target:</strong> <span>${item.target}</span>
                                </div>
                                <div class="validation-item">
                                    <strong>Timeframe:</strong> <span>${item.timeframe_weeks} weeks</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    function renderTechPage(data) {
        const container = document.getElementById('tech-stack-content');
        if (!container || !data) return;
        container.innerHTML = `
            <div class="card"><div class="data-section"><h3>System Architecture</h3><p class="techniques-text">${data.system_architecture}</p></div></div>
            <div class="card"><div class="data-section"><h3>Components</h3>
                <div class="content-grid-three-col">
                    ${data.components.map(c => `
                        <div class="tier-card">
                            <div class="pricing-header" style="border-bottom: none; padding-bottom: 0; margin-bottom: 12px;">
                                <h4>${c.name}</h4><span class="build-buy-tag ${c.build_vs_buy.toLowerCase()}">${c.build_vs_buy}</span>
                            </div>
                            <p class="target" style="font-style: normal; margin-bottom: 12px;">${c.purpose}</p>
                            <strong>Key Stack:</strong><ul>${c.key_tech_stack.map(t => `<li>${t}</li>`).join('')}</ul>
                            <strong>Risks:</strong><ul class="risk-list">${c.risks.map(r => `<li>${r}</li>`).join('')}</ul>
                        </div>
                    `).join('')}
                </div>
            </div></div>
            <div class="content-grid-two-col">
                <div class="card"><div class="data-section"><h3>Infrastructure Plan</h3>
                    <div class="key-metrics-grid">
                        <div class="metric-item"><strong>Hosting</strong><span>${data.infra_plan.hosting}</span></div>
                        <div class="metric-item"><strong>Scaling</strong><span>${data.infra_plan.scaling}</span></div>
                        <div class="metric-item"><strong>Security</strong><span>${data.infra_plan.security.join(', ')}</span></div>
                        <div class="metric-item"><strong>Observability</strong><span>${data.infra_plan.observability.join(', ')}</span></div>
                    </div>
                </div></div>
                <div class="card"><div class="data-section"><h3>Data Model Notes</h3>
                    <div class="key-metrics-grid">
                        <div class="metric-item"><strong>Sources</strong><span>${data.data_model_notes.sources.join(', ')}</span></div>
                        <div class="metric-item"><strong>Schema Highlights</strong><span>${data.data_model_notes.schema_highlights.join(', ')}</span></div>
                        <div class="metric-item"><strong>Retention Policy</strong><span>${data.data_model_notes.retention_policy}</span></div>
                    </div>
                </div></div>
            </div>
            <div class="card data-table-wrapper"><div class="data-section"><h3>Integration Matrix</h3>
                <div class="table-wrapper"><table class="data-table">
                    <thead><tr><th>Service</th><th>Auth</th><th>Rate Limit</th><th>Notes</th></tr></thead>
                    <tbody>${data.integration_matrix.map(i => `<tr><td>${i.service}</td><td>${i.auth}</td><td>${i.rate_limit}</td><td>${i.notes}</td></tr>`).join('')}</tbody>
                </table></div>
            </div></div>
             <div class="card"><div class="data-section"><h3>Monthly Cost Estimates</h3>
                <div class="market-overview-grid">
                    <div class="overview-card"><h4>Development</h4><div class="value">$${Number(data.cost_estimates.dev_env_usd_month).toLocaleString()}</div></div>
                    <div class="overview-card"><h4>Staging</h4><div class="value">$${Number(data.cost_estimates.staging_env_usd_month).toLocaleString()}</div></div>
                    <div class="overview-card"><h4>Production</h4><div class="value">$${Number(data.cost_estimates.prod_env_usd_month).toLocaleString()}</div></div>
                </div>
            </div></div>
        `;
    }

     function renderTimeBudgetPage(data) {
        const container = document.getElementById('time-budget-content');
        if (!container || !data) return;
        container.innerHTML = `
            <div class="card total-budget-card">
                <h3>Total Budget Estimate</h3>
                <div class="price-range">$${data.budget_estimate.total_usd.low.toLocaleString()} - $${data.budget_estimate.total_usd.high.toLocaleString()}</div>
                <div class="table-wrapper"><table class="data-table">
                    <thead><tr><th>Phase</th><th>Low Estimate</th><th>High Estimate</th></tr></thead>
                    <tbody>${data.budget_estimate.by_phase_usd.map(p => `<tr><td>${p.phase}</td><td>$${p.low.toLocaleString()}</td><td>$${p.high.toLocaleString()}</td></tr>`).join('')}</tbody>
                </table></div>
            </div>
            <div class="card"><div class="data-section"><h3>Project Phases</h3>
                <div class="content-grid-two-col">
                    ${data.phases.map(p => `
                        <div class="phase-card">
                            <h4>${p.name} <span class="phase-duration">(~${p.duration_weeks} weeks)</span></h4>
                            <strong>Deliverables:</strong><ul>${p.major_deliverables.map(d => `<li>${d}</li>`).join('')}</ul>
                            <strong>Team Mix:</strong><ul>${p.team_mix.map(t => `<li>${t.role} (${t.FTE} FTE)</li>`).join('')}</ul>
                        </div>
                    `).join('')}
                </div>
            </div></div>
             <div class="content-grid-two-col">
                <div class="card"><div class="data-section"><h3>Schedule Risks</h3><ul class="risk-list">${data.schedule_risks.map(r => `<li>${r}</li>`).join('')}</ul></div></div>
                <div class="card"><div class="data-section"><h3>Acceleration Options</h3><ul>${data.acceleration_options.map(o => `<li><strong>${o.option}:</strong> ${o.trade_off}</li>`).join('')}</ul></div></div>
            </div>
            <div class="card data-table-wrapper">
                <div class="data-section"><h3>Resource Plan</h3>
                <div class="table-wrapper"><table class="data-table">
                    <thead><tr><th>Role</th><th>FTE</th><th>Seniority</th></tr></thead>
                    <tbody>${data.resource_plan.map(r => `<tr><td>${r.role}</td><td>${r.FTE}</td><td>${r.seniority}</td></tr>`).join('')}</tbody>
                </table></div>
            </div></div>
        `;
    }

    function renderTeamPage(data) {
        const container = document.getElementById('team-plan-content');
        if (!container || !data) return;
        container.innerHTML = `
            <div class="content-grid-two-col">
                <div class="card">
                    <div class="data-section">
                        <h3>Organizational Design</h3>
                        <div class="metric-item"><strong>Structure</strong><span>${data.org_design.structure}</span></div>
                        <div class="metric-item"><strong>Reporting Lines</strong><ul>${data.org_design.reporting_lines.map(line => {
                            const manager = Object.keys(line)[0];
                            const reports = line[manager].join(', ');
                            return `<li><strong>${manager}</strong> → ${reports}</li>`;
                        }).join('')}</ul></div>
                    </div>
                </div>
                <div class="card">
                    <div class="data-section">
                        <h3>Sourcing Strategy</h3>
                        <strong>To Keep In-House:</strong><ul>${data.vendor_vs_inhouse.what_to_keep_inhouse.map(item => `<li>${item}</li>`).join('')}</ul>
                        <strong>To Outsource:</strong><ul class="risk-list">${data.vendor_vs_inhouse.what_to_outsource.map(item => `<li>${item}</li>`).join('')}</ul>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="data-section"><h3>Core Team Profile</h3>
                    <div class="content-grid-three-col">${data.core_team_profile.map(profile => `
                        <div class="role-card">
                            <h4>${profile.role}</h4>
                            <ul>${profile.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
                        </div>
                    `).join('')}</div>
                </div>
            </div>
            <div class="card data-table-wrapper">
                <div class="data-section"><h3>Hiring Plan</h3>
                    <div class="table-wrapper"><table class="data-table">
                        <thead><tr><th>Role</th><th>Quarter</th><th>Seniority</th><th>Reason</th></tr></thead>
                        <tbody>${data.hiring_plan.map(p => `<tr><td>${p.role}</td><td>${p.quarter}</td><td>${p.seniority}</td><td style="white-space: normal;">${p.reason}</td></tr>`).join('')}</tbody>
                    </table></div>
                </div>
            </div>
             <div class="card">
                <div class="data-section"><h3>Interview Rubrics</h3>
                    <div class="content-grid-three-col">${data.interview_rubrics.map(rubric => `
                        <div class="role-card">
                            <h4>${rubric.role}</h4>
                            <strong>Top Signals to Look For:</strong>
                            <ul>${rubric.top_signals.map(signal => `<li>${signal}</li>`).join('')}</ul>
                        </div>
                    `).join('')}</div>
                </div>
            </div>
        `;
    }


    // --- INITIALIZE DASHBOARD ---
    function initializeDashboard(data) {
        if (!data || !data.result) { console.error("Data structure is incorrect or 'result' object is missing."); return; }
        const resultData = data.result;

        if (resultData.competitors) { renderCompetitorsPage(resultData.competitors); }
        if (resultData.market) { renderMarketTrendsPage(resultData.market); }
        if (resultData.pricing) { renderPricingPage(resultData.pricing); }
        if (resultData.audience) { renderAudiencePage(resultData.audience); }
        if (resultData.success) { renderSuccessPage(resultData.success); }
        if (resultData.tech) { renderTechPage(resultData.tech); }
        if (resultData['time-budget']) { renderTimeBudgetPage(resultData['time-budget']); }
        if (resultData.team) { renderTeamPage(resultData.team);
        }
        if (resultData.roadmap) { renderRoadmapPage(resultData.roadmap); }

    }
    
    initializeDashboard(data);


    // --- SIDEBAR TOGGLE LOGIC ---
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle');
    const closeBtn = document.getElementById('sidebar-close');
    const overlay = document.getElementById('overlay');
    const openSidebar = () => { sidebar.classList.add('is-open'); overlay.classList.add('is-active'); };
    const closeSidebar = () => { sidebar.classList.remove('is-open'); overlay.classList.remove('is-active'); };
    toggleBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // --- TABBING LOGIC ---
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    const pageContents = document.querySelectorAll('.page-content');
    const headerTextContainer = document.getElementById('main-header-text');

    const pageHeaders = {
        competitors: { title: "Competitor Analysis", subtitle: "An in-depth look at the key players in the handmade e-commerce space." },
        'market-trends': { title: "Market Trends", subtitle: "An overview of the handmade e-commerce market landscape." },
        'pricing-models': { title: "Industry Pricing", subtitle: "A comparative analysis of pricing strategies in the market." },
        'targeted-audience': { title: "Target Audience", subtitle: "Understanding customer personas and outreach channels." },
        'success-suggestions': { title: "Success Suggestions", subtitle: "Key risks, mitigations, and validation plan for your idea." },
        'tech-stack': { title: "Tech Stack", subtitle: "The technology and infrastructure blueprint for the project." },
        'time-budget': { title: "Time & Budget", subtitle: "Project timeline, budget, and resource planning." },
        'team-plan': { title: "Team Plan", subtitle: "Organizational structure, roles, and hiring strategy." }
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = link.getAttribute('data-tab');
            if (!targetTab) return;

            const currentActive = document.querySelector('.page-content.is-active');
            const newActive = document.getElementById(`${targetTab}-content`);
            if (currentActive === newActive) {
                closeSidebar();
                return;
            };

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const headerContent = pageHeaders[targetTab];
            if (headerContent) {
                headerTextContainer.innerHTML = `<h1>${headerContent.title}</h1><p>${headerContent.subtitle}</p>`;
            }

            if (currentActive) { currentActive.classList.remove('is-active'); }
            if (newActive) { newActive.classList.add('is-active'); }

            closeSidebar();
        });
    });
});