document.addEventListener("DOMContentLoaded", async () => {

    let data, reviews, mobile, idea;

    data = {
        "_id": "68bc63ce74eaee3eb1317efc",
        "mobile": "8888888888",
        "idea": "I want to start a food delivery app in my city",
        "result": {
            "competitors": {
                "competitors": [
                    {
                        "company_name": "Uber Eats",
                        "established_year": "2014",
                        "estimated_market_share": "25-30%",
                        "founder": "Travis Kalanick, Garrett Camp",
                        "funding_stage": "public (NYSE: UBER)",
                        "his_techniques_for_success": "Aggressive marketing, partnerships with local restaurants, and incentive promotions for users.",
                        "industry_or_niche": "Food Delivery",
                        "location": "San Francisco, CA, USA",
                        "market_position": "leader",
                        "monthly_traffic_or_users": "unknown",
                        "strengths": [
                            "Strong brand recognition",
                            "Extensive logistics network",
                            "Innovative promotional strategies"
                        ],
                        "unique_selling_points": [
                            "Wide restaurant network",
                            "Fast delivery",
                            "User-friendly interface"
                        ],
                        "weaknesses": [
                            "High commission fees for restaurants",
                            "Customer service challenges",
                            "Market saturation in major cities"
                        ],
                        "weaknesses_or_gaps": "High fees could drive restaurants to seek alternatives; potential for improved delivery times.",
                        "website": "www.ubereats.com",
                        "who_is_top_in_that_field": "Uber Eats"
                    },
                    {
                        "company_name": "DoorDash",
                        "established_year": "2013",
                        "estimated_market_share": "20-25%",
                        "founder": "Tony Xu, Andy Fang, Stanley Tang",
                        "funding_stage": "public (NYSE: DASH)",
                        "his_techniques_for_success": "Targeted promotions, expanding service areas rapidly, and leveraging technology for logistics.",
                        "industry_or_niche": "Food Delivery",
                        "location": "San Francisco, CA, USA",
                        "market_position": "challenger",
                        "monthly_traffic_or_users": "unknown",
                        "strengths": [
                            "Strong user base growth",
                            "Good relationship with restaurants",
                            "Technology investment for efficiency"
                        ],
                        "unique_selling_points": [
                            "DashPass subscription service",
                            "Robust logistics technology",
                            "Variety of restaurant options"
                        ],
                        "weaknesses": [
                            "High churn rate among customers",
                            "Profitability challenges",
                            "Local competition in various markets"
                        ],
                        "weaknesses_or_gaps": "Potential over-reliance on subscriptions; could diversify offerings.",
                        "website": "www.doordash.com",
                        "who_is_top_in_that_field": "Uber Eats"
                    },
                    {
                        "company_name": "Gopuff",
                        "established_year": "2013",
                        "estimated_market_share": "unknown",
                        "founder": "Yakir Gola, Rafael Ilishayev",
                        "funding_stage": "latest Series H ($1.5B, notable investors like SoftBank)",
                        "his_techniques_for_success": "Focus on speed of delivery and product variety, leverage local warehousing for efficiency.",
                        "industry_or_niche": "On-demand delivery",
                        "location": "Philadelphia, PA, USA",
                        "market_position": "newcomer",
                        "monthly_traffic_or_users": "unknown",
                        "strengths": [
                            "Fast delivery service",
                            "Focus on convenience",
                            "Strong funding rounds"
                        ],
                        "unique_selling_points": [
                            "Delivery in under 30 minutes",
                            "Owns local warehousing for quick access",
                            "Variety of products beyond food"
                        ],
                        "weaknesses": [
                            "Limited geographic availability",
                            "High operational costs",
                            "Brand recognition compared to bigger players"
                        ],
                        "weaknesses_or_gaps": "Scaling challenges in new markets; reliance on urban centers could limit growth.",
                        "website": "www.gopuff.com",
                        "who_is_top_in_that_field": "Uber Eats"
                    }
                ],
                "insight": "The startup can differentiate by focusing on underserved neighborhoods that existing players overlook, offering lower commission rates to attract restaurant partnerships, and leveraging community-based marketing to build local loyalty. Additionally, superior order tracking capabilities and customer service can enhance user experience and set the app apart from larger competitors."
            },
            "market": {
                "future_projection": [
                    {
                        "market_size": "USD 60B",
                        "year": 2026
                    }
                ],
                "historical_growth": [
                    {
                        "market_size": "USD 25B",
                        "year": 2020
                    },
                    {
                        "market_size": "USD 30B",
                        "year": 2021
                    },
                    {
                        "market_size": "USD 35B",
                        "year": 2022
                    },
                    {
                        "market_size": "USD 40B",
                        "year": 2023
                    },
                    {
                        "market_size": "USD 45B",
                        "year": 2024
                    }
                ],
                "key_trends": [
                    "Increased adoption of contactless delivery services due to health awareness post-pandemic.",
                    "Growing consumer preference for local and organic food options driving demand for diverse delivery choices.",
                    "Regulations supporting gig economy workers are impacting labor costs and operational models for delivery services."
                ],
                "market_overview": {
                    "SAM": "USD 50B",
                    "SOM": "USD 2B",
                    "TAM": "USD 200B",
                    "methodology_note": "TAM calculated based on global food delivery market size; SAM focused on the targeted urban population in the city; SOM estimated based on market share potential within the local food delivery segment.",
                    "stage": "growing"
                },
                "summary": "The food delivery app market presents significant growth opportunities driven by evolving consumer preferences and technological advancements. With the market projected to reach USD 60B by 2026, entrepreneurs can leverage unmet demands within urban areas.",
                "top_regions": [
                    {
                        "region": "North America",
                        "why": "High urban density and consumer willingness to pay for convenience."
                    },
                    {
                        "region": "Europe",
                        "why": "Strong demand for diverse cuisines and established infrastructure."
                    },
                    {
                        "region": "Asia-Pacific",
                        "why": "Rapid urbanization and increasing smartphone penetration among consumers."
                    },
                    {
                        "region": "Latin America",
                        "why": "Emerging middle class drives demand for food delivery services."
                    },
                    {
                        "region": "Middle East",
                        "why": "High disposable income and growing food delivery culture."
                    }
                ]
            },
            "pricing": {
                "competitor_pricing": [
                    {
                        "cheapest_plan_usd": "3.99",
                        "model": "Freemium",
                        "most_expensive_plan_usd": "9.99",
                        "name": "Uber Eats",
                        "tiers": [
                            {
                                "features": [
                                    "Delivery within 30 minutes",
                                    "Access to local restaurants"
                                ],
                                "plan": "Standard Delivery",
                                "price_usd": "3.99–7.99",
                                "target_customer": "Casual diners looking for convenience"
                            },
                            {
                                "features": [
                                    "Free delivery on eligible orders",
                                    "Exclusive promotions"
                                ],
                                "plan": "Uber Eats Pass",
                                "price_usd": "9.99/month",
                                "target_customer": "Frequent users or families looking to save on delivery fees"
                            }
                        ]
                    },
                    {
                        "cheapest_plan_usd": "4.99",
                        "model": "Subscription/Pay-Per-Use",
                        "most_expensive_plan_usd": "9.99",
                        "name": "DoorDash",
                        "tiers": [
                            {
                                "features": [
                                    "Order tracking",
                                    "Access to wide range of restaurants"
                                ],
                                "plan": "Basic Delivery",
                                "price_usd": "4.99–8.99",
                                "target_customer": "Young professionals or college students"
                            },
                            {
                                "features": [
                                    "No delivery fees on eligible restaurants",
                                    "Exclusive offers"
                                ],
                                "plan": "DashPass",
                                "price_usd": "9.99/month",
                                "target_customer": "Regular users or families who order frequently"
                            }
                        ]
                    },
                    {
                        "cheapest_plan_usd": "2.99",
                        "model": "Hybrid",
                        "most_expensive_plan_usd": "10.99",
                        "name": "Grubhub",
                        "tiers": [
                            {
                                "features": [
                                    "User-friendly app interface",
                                    "Loyalty points"
                                ],
                                "plan": "Basic Delivery",
                                "price_usd": "2.99–6.99",
                                "target_customer": "Families and groups ordering meals"
                            },
                            {
                                "features": [
                                    "Free delivery on orders over $12",
                                    "Exclusive meal deals"
                                ],
                                "plan": "Grubhub+",
                                "price_usd": "10.99/month",
                                "target_customer": "Frequent eaters and deals hunters"
                            }
                        ]
                    },
                    {
                        "cheapest_plan_usd": "3.00",
                        "model": "Freemium",
                        "most_expensive_plan_usd": "9.99",
                        "name": "Postmates",
                        "tiers": [
                            {
                                "features": [
                                    "Same hour delivery options",
                                    "Wide food selection"
                                ],
                                "plan": "Standard Delivery",
                                "price_usd": "3.00–6.00",
                                "target_customer": "Busy urban dwellers"
                            },
                            {
                                "features": [
                                    "Free delivery on orders over $12",
                                    "Access to exclusive restaurants"
                                ],
                                "plan": "Postmates Unlimited",
                                "price_usd": "9.99/month",
                                "target_customer": "Frequent users in urban areas"
                            }
                        ]
                    },
                    {
                        "cheapest_plan_usd": "3.49",
                        "model": "Freemium",
                        "most_expensive_plan_usd": "9.99",
                        "name": "Seamless",
                        "tiers": [
                            {
                                "features": [
                                    "Easy app navigation",
                                    "Many restaurant options"
                                ],
                                "plan": "Basic Delivery",
                                "price_usd": "3.49–7.49",
                                "target_customer": "City residents looking for variety"
                            },
                            {
                                "features": [
                                    "No delivery fees on orders over $15",
                                    "Special discounts"
                                ],
                                "plan": "Seamless+ subscription",
                                "price_usd": "9.99/month",
                                "target_customer": "Regular diners and professionals"
                            }
                        ]
                    }
                ],
                "insight": "Focus on a unique niche market, such as health-conscious consumers, by offering a selection of healthy meal options alongside competitive pricing to differentiate from mainstream competitors.",
                "recommendation": "For your food delivery app, consider adopting a freemium pricing model, offering free delivery for the first few orders and then a subscription tier around $9.99/month that includes benefits like waived delivery fees and access to exclusive restaurant promotions. This strategy can attract initial users and convert them into loyal subscribers."
            },
            "success": {
                "go_no_go_guidance": [
                    "Achieve at least 2000 pre-launch sign-ups within 3 weeks",
                    "Secure partnerships with a minimum of 10 restaurants before launch",
                    "Maintain a customer satisfaction score of 4.5 or higher during pilot testing"
                ],
                "mitigations": [
                    "Differentiate through unique offerings or niche markets",
                    "Invest in reliable logistics and delivery management systems",
                    "Employ targeted marketing strategies to reduce acquisition costs",
                    "Implement strict service quality protocols",
                    "Ensure robust tech infrastructure with regular updates",
                    "Consult legal experts for compliance on local regulations"
                ],
                "risks": [
                    "High competition among established players",
                    "Logistical challenges in delivery operations",
                    "Customer acquisition costs may exceed budget",
                    "Quality control and maintaining service standards",
                    "Technology issues impacting user experience",
                    "Regulatory compliance and local laws"
                ],
                "success_assessment": {
                    "justification": "The food delivery app market is growing, indicating market readiness; user pain points such as convenience and time-saving are significant. However, competitive pressure is high with several established players, requiring strong differentiation. Implementing a defensible business model, such as partnerships with local eateries or unique features, could mitigate competition. Go-to-market feasibility is favorable with the availability of digital marketing channels, but execution complexity arises from logistics and restaurant partnerships.",
                    "success_probability": 70
                },
                "validation_plan": [
                    {
                        "experiment": "Conduct surveys to understand user appetite",
                        "metric": "Number of responses",
                        "target": "500",
                        "timeframe_weeks": 2
                    },
                    {
                        "experiment": "Create a landing page for pre-launch sign-ups",
                        "metric": "Email sign-ups",
                        "target": "2000",
                        "timeframe_weeks": 3
                    },
                    {
                        "experiment": "Run a small pilot delivery service",
                        "metric": "Customer satisfaction score",
                        "target": "4.5/5",
                        "timeframe_weeks": 4
                    },
                    {
                        "experiment": "Test delivery offers and discounts",
                        "metric": "Usage rate of promo codes",
                        "target": "20%",
                        "timeframe_weeks": 3
                    },
                    {
                        "experiment": "Collaborate with local restaurants for partnerships",
                        "metric": "Number of signed restaurants",
                        "target": "10",
                        "timeframe_weeks": 6
                    },
                    {
                        "experiment": "Utilize social media ads for engagement",
                        "metric": "Engagement rate",
                        "target": "5%",
                        "timeframe_weeks": 2
                    },
                    {
                        "experiment": "Evaluate user preferences through A/B tests",
                        "metric": "Click-through rate",
                        "target": "10%",
                        "timeframe_weeks": 3
                    },
                    {
                        "experiment": "Monitor competitor services and feedback",
                        "metric": "Competitive analysis report",
                        "target": "1 report",
                        "timeframe_weeks": 4
                    }
                ]
            },
            "audience": {
                "channels": [
                    "Instagram",
                    "Facebook Ads",
                    "Local SEO"
                ],
                "marketing_strategies": [
                    "Offer first-time user discounts through social media promotions",
                    "Collaborate with local restaurants to create exclusive meal deals only available through the app",
                    "Implement a referral program incentivizing current users to bring friends on board",
                    "Leverage influencer partnerships on Instagram to showcase unique meals and delivery experiences",
                    "Host pop-up events in busy urban areas to sample local cuisine and promote app sign-ups"
                ],
                "primary_audience": "Young professionals aged 25-35 who have demanding jobs and prefer the convenience of food delivery over cooking.",
                "secondary_audience": "Families with children looking for convenient and quick meal solutions during busy weekdays."
            },
            "tech": {
                "components": [
                    {
                        "build_vs_buy": "Build",
                        "key_tech_stack": [
                            "Node.js",
                            "Express",
                            "MongoDB"
                        ],
                        "name": "User Management Service",
                        "purpose": "Handles user registration, authentication, and profiles.",
                        "risks": [
                            "Data security breaches",
                            "Service scalability issues"
                        ]
                    },
                    {
                        "build_vs_buy": "Build",
                        "key_tech_stack": [
                            "Python",
                            "Flask",
                            "PostgreSQL"
                        ],
                        "name": "Order Management Service",
                        "purpose": "Processes orders, manages order status and history.",
                        "risks": [
                            "Data inconsistency",
                            "Transaction failures"
                        ]
                    },
                    {
                        "build_vs_buy": "Buy",
                        "key_tech_stack": [
                            "Java",
                            "Spring",
                            "Stripe API"
                        ],
                        "name": "Payment Processing Service",
                        "purpose": "Handles payment transactions and integrates with external payment gateways.",
                        "risks": [
                            "Payment security risks",
                            "Compliance with regulations"
                        ]
                    },
                    {
                        "build_vs_buy": "Build",
                        "key_tech_stack": [
                            "Ruby",
                            "Rails",
                            "Redis"
                        ],
                        "name": "Delivery Tracking Service",
                        "purpose": "Provides real-time tracking of delivery status.",
                        "risks": [
                            "Inaccurate location tracking",
                            "Network connectivity issues"
                        ]
                    },
                    {
                        "build_vs_buy": "Buy",
                        "key_tech_stack": [
                            "Python",
                            "Celery",
                            "Amazon SNS"
                        ],
                        "name": "Notification Service",
                        "purpose": "Sends notifications to users regarding order updates.",
                        "risks": [
                            "Delivery delays of notifications",
                            "Message loss"
                        ]
                    }
                ],
                "cost_estimates": {
                    "dev_env_usd_month": "1500",
                    "prod_env_usd_month": "3000",
                    "staging_env_usd_month": "800"
                },
                "data_model_notes": {
                    "retention_policy": "User data retained for 5 years, order history for 1 year, payment data for 3 years.",
                    "schema_highlights": [
                        "User (ID, Name, Email)",
                        "Order (ID, UserID, Status, TotalAmount)",
                        "Payment (ID, OrderID, Status, PaymentMethod)"
                    ],
                    "sources": [
                        "User input",
                        "Order data",
                        "Payment transactions"
                    ]
                },
                "infra_plan": {
                    "hosting": "AWS with EC2 for web servers, RDS for databases, S3 for file storage.",
                    "observability": [
                        "AWS CloudWatch for monitoring",
                        "ELK stack for logging"
                    ],
                    "scaling": "Auto-scaling groups for dynamic resource allocation based on traffic.",
                    "security": [
                        "HTTPS for secure communication",
                        "IAM policies for access control"
                    ]
                },
                "integration_matrix": [
                    {
                        "auth": "API Key",
                        "notes": "Requires secure storage of API keys.",
                        "rate_limit": "1000 requests/min",
                        "service": "Stripe Payment Gateway"
                    },
                    {
                        "auth": "API Key",
                        "notes": "Use caching for location data to minimize calls.",
                        "rate_limit": "2500 requests/day",
                        "service": "Google Maps API"
                    }
                ],
                "system_architecture": "A microservices architecture to handle different components such as user management, order processing, payment processing, and delivery tracking, utilizing RESTful APIs and a mobile-first approach."
            },
            "time-budget": {
                "acceleration_options": [
                    {
                        "option": "Add more developers to the team during the development phase",
                        "trade_off": "Higher payroll costs, but faster delivery of the MVP."
                    },
                    {
                        "option": "Outsource app development to a third party",
                        "trade_off": "Cost savings but potentially lower quality control."
                    },
                    {
                        "option": "Increase marketing budget for pre-launch activities",
                        "trade_off": "Higher upfront costs, but increased user acquisition and potential revenue."
                    }
                ],
                "budget_estimate": {
                    "by_phase_usd": [
                        {
                            "high": 10000,
                            "low": 5000,
                            "phase": "Market Research and Analysis"
                        },
                        {
                            "high": 25000,
                            "low": 15000,
                            "phase": "App Design and Prototyping"
                        },
                        {
                            "high": 50000,
                            "low": 30000,
                            "phase": "Development Phase"
                        },
                        {
                            "high": 20000,
                            "low": 10000,
                            "phase": "Marketing and Launch"
                        },
                        {
                            "high": 10000,
                            "low": 5000,
                            "phase": "Post-Launch Evaluation and Updates"
                        }
                    ],
                    "total_usd": {
                        "high": 115000,
                        "low": 60000
                    }
                },
                "phases": [
                    {
                        "duration_weeks": 4,
                        "major_deliverables": [
                            "Market Analysis Report",
                            "Competitor Analysis",
                            "Target Customer Identification"
                        ],
                        "name": "Market Research and Analysis",
                        "team_mix": [
                            {
                                "FTE": 1,
                                "role": "Market Research Analyst"
                            },
                            {
                                "FTE": 0.5,
                                "role": "Business Analyst"
                            }
                        ]
                    },
                    {
                        "duration_weeks": 6,
                        "major_deliverables": [
                            "Wireframes",
                            "UI/UX Prototype",
                            "User Flow Documentation"
                        ],
                        "name": "App Design and Prototyping",
                        "team_mix": [
                            {
                                "FTE": 1,
                                "role": "UI/UX Designer"
                            },
                            {
                                "FTE": 0.5,
                                "role": "Product Manager"
                            }
                        ]
                    },
                    {
                        "duration_weeks": 12,
                        "major_deliverables": [
                            "MVP Version of the App",
                            "API Integration",
                            "Testing Reports"
                        ],
                        "name": "Development Phase",
                        "team_mix": [
                            {
                                "FTE": 1,
                                "role": "Frontend Developer"
                            },
                            {
                                "FTE": 1,
                                "role": "Backend Developer"
                            },
                            {
                                "FTE": 0.5,
                                "role": "QA Engineer"
                            }
                        ]
                    },
                    {
                        "duration_weeks": 4,
                        "major_deliverables": [
                            "Marketing Strategy Document",
                            "Launch Plan",
                            "Initial User Acquisition"
                        ],
                        "name": "Marketing and Launch",
                        "team_mix": [
                            {
                                "FTE": 1,
                                "role": "Marketing Specialist"
                            },
                            {
                                "FTE": 0.5,
                                "role": "Community Manager"
                            }
                        ]
                    },
                    {
                        "duration_weeks": 4,
                        "major_deliverables": [
                            "User Feedback Report",
                            "App Updates Plan"
                        ],
                        "name": "Post-Launch Evaluation and Updates",
                        "team_mix": [
                            {
                                "FTE": 1,
                                "role": "Data Analyst"
                            },
                            {
                                "FTE": 0.5,
                                "role": "Developer"
                            }
                        ]
                    }
                ],
                "resource_plan": [
                    {
                        "FTE": 1,
                        "role": "Market Research Analyst",
                        "seniority": "Mid"
                    },
                    {
                        "FTE": 0.5,
                        "role": "Business Analyst",
                        "seniority": "Mid"
                    },
                    {
                        "FTE": 1,
                        "role": "UI/UX Designer",
                        "seniority": "Mid"
                    },
                    {
                        "FTE": 0.5,
                        "role": "Product Manager",
                        "seniority": "Senior"
                    },
                    {
                        "FTE": 1,
                        "role": "Frontend Developer",
                        "seniority": "Mid"
                    },
                    {
                        "FTE": 1,
                        "role": "Backend Developer",
                        "seniority": "Mid"
                    },
                    {
                        "FTE": 0.5,
                        "role": "QA Engineer",
                        "seniority": "Mid"
                    },
                    {
                        "FTE": 1,
                        "role": "Marketing Specialist",
                        "seniority": "Mid"
                    },
                    {
                        "FTE": 0.5,
                        "role": "Community Manager",
                        "seniority": "Mid"
                    },
                    {
                        "FTE": 1,
                        "role": "Data Analyst",
                        "seniority": "Mid"
                    },
                    {
                        "FTE": 0.5,
                        "role": "Developer",
                        "seniority": "Mid"
                    }
                ],
                "schedule_risks": [
                    "Delays in market research leading to extended timelines.",
                    "Potential hiring or resource allocation issues.",
                    "Technical challenges during app development phase.",
                    "Underestimating marketing costs or efforts to acquire users post-launch."
                ]
            },
            "team": {
                "core_team_profile": [
                    {
                        "coverage_gaps": [],
                        "role": "CEO",
                        "skills": [
                            "Leadership",
                            "Strategic Planning",
                            "Business Development"
                        ]
                    },
                    {
                        "coverage_gaps": [],
                        "role": "CTO",
                        "skills": [
                            "Software Development",
                            "Team Management",
                            "Tech Strategy"
                        ]
                    },
                    {
                        "coverage_gaps": [],
                        "role": "CMO",
                        "skills": [
                            "Digital Marketing",
                            "Brand Management",
                            "Market Analysis"
                        ]
                    },
                    {
                        "coverage_gaps": [],
                        "role": "Lead Developer",
                        "skills": [
                            "Coding",
                            "Project Management",
                            "Problem Solving"
                        ]
                    },
                    {
                        "coverage_gaps": [],
                        "role": "Operations Manager",
                        "skills": [
                            "Logistics",
                            "Vendor Management",
                            "Process Optimization"
                        ]
                    }
                ],
                "hiring_plan": [
                    {
                        "quarter": "Q1",
                        "reason": "To establish technical vision and oversee development.",
                        "role": "CTO",
                        "seniority": "Executive"
                    },
                    {
                        "quarter": "Q1",
                        "reason": "To lead marketing strategies and customer acquisition.",
                        "role": "CMO",
                        "seniority": "Executive"
                    },
                    {
                        "quarter": "Q2",
                        "reason": "To start building the app and manage the development team.",
                        "role": "Lead Developer",
                        "seniority": "Mid-level"
                    },
                    {
                        "quarter": "Q2",
                        "reason": "To manage delivery logistics and partnerships.",
                        "role": "Operations Manager",
                        "seniority": "Mid-level"
                    },
                    {
                        "quarter": "Q3",
                        "reason": "To analyze user data for improving services and targeting.",
                        "role": "Data Analyst",
                        "seniority": "Entry-level"
                    },
                    {
                        "quarter": "Q3",
                        "reason": "To provide support and handle customer inquiries.",
                        "role": "Customer Support Representative",
                        "seniority": "Entry-level"
                    },
                    {
                        "quarter": "Q4",
                        "reason": "To improve app design based on user feedback.",
                        "role": "UI/UX Designer",
                        "seniority": "Mid-level"
                    }
                ],
                "interview_rubrics": [
                    {
                        "role": "CTO",
                        "top_signals": [
                            "Technical expertise",
                            "Leadership capabilities",
                            "Strategic thinking",
                            "Problem solving",
                            "Adaptability"
                        ]
                    },
                    {
                        "role": "CMO",
                        "top_signals": [
                            "Marketing experience",
                            "Analytical skills",
                            "Creativity",
                            "Communication skills",
                            "Results driven"
                        ]
                    },
                    {
                        "role": "Lead Developer",
                        "top_signals": [
                            "Coding proficiency",
                            "Team collaboration",
                            "Software design knowledge",
                            "Agile mindset",
                            "Mentorship experience"
                        ]
                    },
                    {
                        "role": "Operations Manager",
                        "top_signals": [
                            "Process optimization skills",
                            "Vendor negotiation experience",
                            "Logistical mindset",
                            "Time management",
                            "Problem solving"
                        ]
                    },
                    {
                        "role": "Data Analyst",
                        "top_signals": [
                            "Analytical skills",
                            "Data visualization expertise",
                            "Attention to detail",
                            "Statistical knowledge",
                            "Communication skills"
                        ]
                    },
                    {
                        "role": "Customer Support Representative",
                        "top_signals": [
                            "Empathy",
                            "Communication skills",
                            "Problem-solving abilities",
                            "Product knowledge",
                            "Adaptability"
                        ]
                    },
                    {
                        "role": "UI/UX Designer",
                        "top_signals": [
                            "Design portfolio",
                            "User-centered design understanding",
                            "Prototyping skills",
                            "Feedback incorporation",
                            "Collaboration skills"
                        ]
                    }
                ],
                "org_design": {
                    "pods": [],
                    "reporting_lines": [
                        {
                            "CEO": [
                                "CTO",
                                "CMO"
                            ]
                        },
                        {
                            "CTO": [
                                "Lead Developer",
                                "Data Analyst"
                            ]
                        },
                        {
                            "CMO": [
                                "Marketing Coordinator",
                                "Customer Support Representative"
                            ]
                        }
                    ],
                    "structure": "Flat structure with focus on collaboration."
                },
                "vendor_vs_inhouse": {
                    "what_to_keep_inhouse": [
                        "Customer Support",
                        "Operations Management"
                    ],
                    "what_to_outsource": [
                        "App Development",
                        "Digital Marketing"
                    ]
                }
            },
            "roadmap": {
                "roadmap": {
                    "critical_path": [
                        {
                            "sprint": 1,
                            "task": "Conduct market research and identify target audience."
                        },
                        {
                            "sprint": 6,
                            "task": "Integrate feedback and finalize app development."
                        },
                        {
                            "sprint": 11,
                            "task": "Launch the food delivery app."
                        }
                    ],
                    "dependencies": [
                        {
                            "from": "sprint 1",
                            "to": "sprint 2"
                        },
                        {
                            "from": "sprint 2",
                            "to": "sprint 3"
                        },
                        {
                            "from": "sprint 3",
                            "to": "sprint 4"
                        },
                        {
                            "from": "sprint 4",
                            "to": "sprint 5"
                        },
                        {
                            "from": "sprint 5",
                            "to": "sprint 6"
                        },
                        {
                            "from": "sprint 6",
                            "to": "sprint 7"
                        },
                        {
                            "from": "sprint 7",
                            "to": "sprint 8"
                        },
                        {
                            "from": "sprint 8",
                            "to": "sprint 9"
                        },
                        {
                            "from": "sprint 9",
                            "to": "sprint 10"
                        },
                        {
                            "from": "sprint 10",
                            "to": "sprint 11"
                        },
                        {
                            "from": "sprint 11",
                            "to": "sprint 12"
                        }
                    ],
                    "launch_checklist": [
                        {
                            "item": "App submitted to app stores"
                        },
                        {
                            "item": "All marketing materials prepared"
                        },
                        {
                            "item": "Customer support team trained"
                        }
                    ],
                    "post_launch_metrics": {
                        "guardrails": [
                            "Maximum churn rate of 15%",
                            "User satisfaction score above 80%"
                        ],
                        "north_star": "Achieve 10,000 active users within the first three months after launch."
                    },
                    "roadmap": [
                        {
                            "key_tasks": [
                                "Survey potential users",
                                "Analyze competitor apps",
                                "Identify local food preferences"
                            ],
                            "owner_role": "Market Research Analyst",
                            "sprint": 1,
                            "sprint_goal": "Conduct market research and identify target audience.",
                            "success_metric": "Completion of surveys from at least 500 potential users",
                            "weeks": "1-2"
                        },
                        {
                            "key_tasks": [
                                "List core app features",
                                "Develop user personas",
                                "Design initial wireframes"
                            ],
                            "owner_role": "Product Manager",
                            "sprint": 2,
                            "sprint_goal": "Define app features and create wireframes.",
                            "success_metric": "Approval of wireframes by stakeholders",
                            "weeks": "3-4"
                        },
                        {
                            "key_tasks": [
                                "Research technology options",
                                "Estimate development costs",
                                "Draft budget plan"
                            ],
                            "owner_role": "Technical Lead",
                            "sprint": 3,
                            "sprint_goal": "Finalize tech stack and initial budget.",
                            "success_metric": "Completed technology specifications document",
                            "weeks": "5-6"
                        },
                        {
                            "key_tasks": [
                                "Set up development environment",
                                "Assign development tasks",
                                "Begin coding core features"
                            ],
                            "owner_role": "Development Team Lead",
                            "sprint": 4,
                            "sprint_goal": "Initiate development of the app MVP.",
                            "success_metric": "Completion of first feature sprint in MVP",
                            "weeks": "7-8"
                        },
                        {
                            "key_tasks": [
                                "Develop additional features",
                                "Recruit initial user testers",
                                "Conduct usability tests"
                            ],
                            "owner_role": "UX/UI Designer",
                            "sprint": 5,
                            "sprint_goal": "Continue MVP development and start user testing.",
                            "success_metric": "Collect feedback from at least 50 testers",
                            "weeks": "9-10"
                        },
                        {
                            "key_tasks": [
                                "Implement user feedback",
                                "Conduct final QA testing",
                                "Prepare marketing materials"
                            ],
                            "owner_role": "Quality Assurance Manager",
                            "sprint": 6,
                            "sprint_goal": "Integrate feedback and finalize app development.",
                            "success_metric": "Achieve 90% bug resolution from testing",
                            "weeks": "11-12"
                        },
                        {
                            "key_tasks": [
                                "Develop social media strategy",
                                "Create promotional content",
                                "Set up partnerships with local restaurants"
                            ],
                            "owner_role": "Marketing Manager",
                            "sprint": 7,
                            "sprint_goal": "Prepare for launch with marketing campaigns.",
                            "success_metric": "Obtain commitment from 10+ restaurants for launch",
                            "weeks": "13-14"
                        },
                        {
                            "key_tasks": [
                                "Launch beta version",
                                "Gather beta user data",
                                "Monitor app performance"
                            ],
                            "owner_role": "Product Manager",
                            "sprint": 8,
                            "sprint_goal": "Conduct beta testing with select users.",
                            "success_metric": "Achieve a NPS (Net Promoter Score) of at least 50",
                            "weeks": "15-16"
                        },
                        {
                            "key_tasks": [
                                "Address reported bugs",
                                "Enhance user experience",
                                "Finalize app features"
                            ],
                            "owner_role": "Development Team Lead",
                            "sprint": 9,
                            "sprint_goal": "Make final adjustments based on beta feedback.",
                            "success_metric": "Achieve less than 5 critical bugs before launch",
                            "weeks": "17-18"
                        },
                        {
                            "key_tasks": [
                                "Prepare app for submission to app stores",
                                "Set up customer support systems",
                                "Create launch plan"
                            ],
                            "owner_role": "Operations Manager",
                            "sprint": 10,
                            "sprint_goal": "Finalize launch logistics and app store setup.",
                            "success_metric": "App submission completed without issues",
                            "weeks": "19-20"
                        },
                        {
                            "key_tasks": [
                                "Launch marketing campaign",
                                "Monitor initial user adoption",
                                "Collect user feedback post-launch"
                            ],
                            "owner_role": "Marketing Manager",
                            "sprint": 11,
                            "sprint_goal": "Launch the food delivery app.",
                            "success_metric": "Achieve 1,000 users in the first week",
                            "weeks": "21-22"
                        },
                        {
                            "key_tasks": [
                                "Analyze user retention data",
                                "Gather user satisfaction surveys",
                                "Plan next features and updates"
                            ],
                            "owner_role": "Product Manager",
                            "sprint": 12,
                            "sprint_goal": "Evaluate launch performance and user metrics.",
                            "success_metric": "Establish a baseline for user retention rate",
                            "weeks": "23-24"
                        }
                    ]
                }
            }
        },
        "createdAt": "2025-09-06T16:39:42.295Z",
        "updatedAt": "2025-09-06T16:39:42.295Z",
        "__v": 0
    }


    const SECRET_KEY = "mySuperSecretKey123";

    function decryptData(ciphertext) {
        const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }

    function getIdeaFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const encryptedData = urlParams.get("data");
        if (encryptedData) {
            return decryptData(encryptedData);
        }
        else {
            initializeDashboard(data, reviews);
            setupPDFDownloader();
        }
        return null;
    }

    idea = getIdeaFromURL();

    async function fetchResearchData(idea) {
        let user = localStorage.getItem("user");
        user = JSON.parse(user);
        mobile = user.mobile;
        idea = idea.idea;
        let request = await fetch(`http://localhost:3000/api/report/report1`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ mobile, idea })
        })
        data = await request.json();
        console.log(data)
        // NOTE: In a real application, you would also fetch review data here
        initializeDashboard(data, reviews); // Pass both static datasets
        setupPDFDownloader();
    }

    // Only fetch if there is an idea from the URL
    if (idea) {
        fetchResearchData(idea);
    }

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

        // Unwrap roadmap object
        const roadmapObj = data.roadmap || {};
        const criticalPath = roadmapObj.critical_path || [];
        const launchChecklist = roadmapObj.launch_checklist || [];
        const postLaunchMetrics = roadmapObj.post_launch_metrics || {};
        const sprints = roadmapObj.roadmap || []; // ✅ The sprint array is inside roadmapObj

        container.innerHTML = `
    <div class="roadmap-container">
        <div class="roadmap-timeline-wrapper card">
            <h3>Critical Path</h3>
            <div class="roadmap-timeline">
                <div class="timeline-line"></div>
                ${criticalPath.map(item => `
                    <div class="timeline-node ${item.sprint ? 'is-critical' : ''}">
                        <div class="node-icon"></div>
                        <div class="node-content">
                            <strong>Sprint ${item.sprint || 'N/A'}</strong>: ${item.task || 'N/A'}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="sprint-accordion card">
            <h3>Roadmap by Sprint</h3>
            ${sprints.map(sprint => `
                <div class="sprint-item">
                    <div class="sprint-header">
                        <h4>Sprint ${sprint.sprint || 'N/A'}: ${sprint.sprint_goal || 'N/A'}</h4>
                    </div>
                    <div class="sprint-content">
                        <p><strong>Owner:</strong> ${sprint.owner_role || 'N/A'}</p>
                        <p><strong>Weeks:</strong> ${sprint.weeks || 'N/A'}</p>
                        <p><strong>Success Metric:</strong> ${sprint.success_metric || 'N/A'}</p>
                        <strong>Key Tasks:</strong>
                        <ul>${(sprint.key_tasks || []).map(task => `<li>${task}</li>`).join('')}</ul>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>

    <div class="card launch-checklist">
        <h3>Launch Checklist</h3>
        <ul>
            ${launchChecklist.map(item => `<li>${item.item || 'N/A'}</li>`).join('')}
        </ul>
    </div>

    <div class="card">
        <h3>Post-Launch Metrics</h3>
        <div class="data-section">
            <h4>Guardrails</h4>
            <ul>${(postLaunchMetrics.guardrails || []).map(m => `<li>${m}</li>`).join('')}</ul>
            <h4>North Star</h4>
            <p>${postLaunchMetrics.north_star || 'N/A'}</p>
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
                        <p class="techniques-text success-data">${data.success_assessment.justification}</p>
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
            <div class="card system-arch-card"><div class="data-section"><h3>System Architecture</h3><p class="techniques-text success-data">${data.system_architecture}</p></div></div>
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
                <h3 class="total-budget-title">Total Budget Estimate</h3>
                <div class="price-range">$${data.budget_estimate.total_usd.low.toLocaleString()} - $${data.budget_estimate.total_usd.high.toLocaleString()}</div>
                <div class="table-wrapper"><table class="data-table">
                    <thead><tr><th>Phase</th><th>Low Estimate</th><th>High Estimate</th></tr></thead>
                    <tbody>${data.budget_estimate.by_phase_usd.map(p => `<tr><td class="budget-td">${p.phase}</td><td class="budget-td">$${p.low.toLocaleString()}</td><td class="budget-td">$${p.high.toLocaleString()}</td></tr>`).join('')}</tbody>
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

    function renderCustomerReviewsPage(data) {
        const container = document.getElementById('customer-reviews-content');
        if (!container || !data || data.length === 0) {
            container.innerHTML = `<p>No customer reviews available at this time.</p>`;
            return;
        }
        console.log(data)
        if (data.message == 'No') {
            container.innerHTML = `<p>No customer reviews available at this time.</p>`;
            return;
        }
        else {
            const reviewsHTML = data.data.map(review => `
            <div class="card review-card">
                <div class="review-header">
                    <h3 class="review-name">${review.name}</h3>
                    <span class="review-age">Age: ${review.age}</span>
                </div>
                <div class="review-body">
                    <div class="review-qa">
                        <strong>What are your biggest frustrations with current food delivery apps?</strong>
                        <p>${review.q1}</p>
                    </div>
                    <div class="review-qa">
                        <strong>What features would make you switch to a new delivery app?</strong>
                        <p>${review.q2}</p>
                    </div>
                    <div class="review-qa">
                        <strong>How much are you willing to pay for a monthly subscription for free delivery?</strong>
                        <p>${review.q3}</p>
                    </div>
                    <div class="review-qa">
                        <strong>What kind of loyalty rewards would you find most appealing?</strong>
                        <p>${review.q4}</p>
                    </div>
                    <div class="review-qa">
                        <strong>How important is supporting local restaurants to you?</strong>
                        <p>${review.q5}</p>
                    </div>
                </div>
            </div>
        `).join('');

            container.innerHTML = `<div class="content-grid-two-col">${reviewsHTML}</div>`;
        }


    }

    if (mobile && idea) {
        reviews = await getCustomerReviews();
    }

    // --- INITIALIZE DASHBOARD ---
    function initializeDashboard(data, reviews) {
        if (!data || !data.result) { console.error("Data structure is incorrect or 'result' object is missing."); return; }
        const resultData = data.result;

        if (resultData.competitors) { renderCompetitorsPage(resultData.competitors); }
        if (resultData.market) { renderMarketTrendsPage(resultData.market); }
        renderPricingPage(resultData.pricing || null);
        if (resultData.audience) { renderAudiencePage(resultData.audience); }
        if (resultData.success) { renderSuccessPage(resultData.success); }
        if (resultData.tech) { renderTechPage(resultData.tech); }
        if (resultData['time-budget']) { renderTimeBudgetPage(resultData['time-budget']); }
        if (resultData.team) { renderTeamPage(resultData.team); }
        if (resultData.roadmap) { renderRoadmapPage(resultData.roadmap); }
        if (reviews) { renderCustomerReviewsPage(reviews); }

    }

    async function getCustomerReviews() {
        let realcusrev = await fetch("http://localhost:3000/api/form/getu", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ mobile, idea: idea.idea })
        });
        console.log(realcusrev)

        if (!realcusrev) return null;
        return await realcusrev.json();
    }


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
        competitors: { title: "Competitor Analysis", subtitle: "An in-depth look at the key players in the food delivery space." },
        'market-trends': { title: "Market Trends", subtitle: "An overview of the food delivery market landscape." },
        'pricing-models': { title: "Industry Pricing", subtitle: "A comparative analysis of pricing strategies in the market." },
        'targeted-audience': { title: "Target Audience", subtitle: "Understanding customer personas and outreach channels." },
        'success-suggestions': { title: "Success Suggestions", subtitle: "Key risks, mitigations, and validation plan for your idea." },
        'tech-stack': { title: "Tech Stack", subtitle: "The technology and infrastructure blueprint for the project." },
        'time-budget': { title: "Time & Budget", subtitle: "Project timeline, budget, and resource planning." },
        'team-plan': { title: "Team Plan", subtitle: "Organizational structure, roles, and hiring strategy." },
        'roadmap': { title: "Roadmap", subtitle: "A detailed project roadmap with critical path and launch checklist." },
        'customer-reviews': { title: "Real Customer Reviews", subtitle: "Direct feedback and insights from potential customers." }
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

function setupPDFDownloader() {
    const downloadBtn = document.getElementById('download-pdf-btn');
    const reportElement = document.getElementById('page-content-wrapper');

    if (!downloadBtn || !reportElement) {
        console.error("Download button or report container not found!");
        return;
    }

    downloadBtn.addEventListener('click', () => {
        downloadBtn.disabled = true;
        downloadBtn.textContent = 'Generating...';

        // ✅ Add "exporting" flag to stop animations
        document.body.classList.add("exporting");

        // ✅ Show all sections for PDF
        const allSections = reportElement.querySelectorAll('.page-content');
        allSections.forEach(section => {
            section.style.display = 'block';
            section.style.opacity = '1';
            section.style.visibility = 'visible';
            section.style.transform = 'translateX(0)'; // force reset
        });

        // ✅ Force background for PDF
        reportElement.style.background = '#ffffff';

        const options = {
            margin: [0.5, 0.5, 0.5, 0.5],
            filename: 'Complete_Business_Report.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, logging: false },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().from(reportElement).set(options).save().then(() => {
            // ✅ Restore normal view
            document.body.classList.remove("exporting");

            allSections.forEach(section => {
                section.style.display = '';
                section.style.opacity = '';
                section.style.visibility = '';
                section.style.transform = '';
            });

            reportElement.style.background = '';

            downloadBtn.disabled = false;
            downloadBtn.textContent = 'Download Report';
        }).catch(err => {
            console.error("Error generating PDF:", err);

            document.body.classList.remove("exporting");

            allSections.forEach(section => {
                section.style.display = '';
                section.style.opacity = '';
                section.style.visibility = '';
                section.style.transform = '';
            });

            reportElement.style.background = '';

            downloadBtn.disabled = false;
            downloadBtn.textContent = 'Download Report';
        });
    });
}

// Show the download button after loading
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById('download-pdf-btn').style.display = 'block';
    }, 1500);
});

// IntersectionObserver for animations
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".page-content");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    // 🔥 If you want animations only once:
                    // observer.unobserve(entry.target);
                } else {
                    entry.target.classList.remove("visible"); // <- remove this if you want one-time
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
});


document.querySelector('.sidebar-title').addEventListener('click', () => {
    window.location.href = 'home.html';
});