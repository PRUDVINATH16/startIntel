# test_runner.py

import os, json, re
from crewai import Agent, LLM
from dotenv import load_dotenv

from prompts import (
    COMPETITOR_PROMPT, MARKET_PROMPT, PRICING_PROMPT,
    SUCCESS_PROMPT, AUDIENCE_PROMPT, TECH_REQS_PROMPT,
    TIME_BUDGET_PROMPT, TEAM_BUILD_PROMPT, ROADMAP_PROMPT, ANALYZE_PROMPT
)

load_dotenv()

API_KEY = os.getenv("OPENROUTER_API_KEY")
BASE_URL = os.getenv("OPENROUTER_BASE_URL", "https://openrouter.ai/api/v1")
MODEL_ID = os.getenv("OPENROUTER_MODEL", "openrouter/openai/gpt-4o-mini")

def extract_json(text: str):
    try:
        return json.loads(text)
    except Exception:
        m = re.search(r'(\{.*\}|\[.*\])', str(text), flags=re.DOTALL)
        if m:
            try: return json.loads(m.group(1))
            except Exception: pass
    return {"raw": str(text)}

llm = LLM(
    model=MODEL_ID,
    base_url=BASE_URL,
    api_key=API_KEY,
    stream=False,
)

agent = Agent(
    role="Startup Research Agent",
    goal="Deliver accurate, structured competitor, market, pricing, and execution research for startup founders.",
    backstory="You are a research analyst specializing in startup strategy, competitor intelligence, market analysis, pricing models, and execution planning.",
    llm=llm,
)

def run(name, idea, prompt):
    print(f"\n=== {name} ===")
    print(f"Idea: {idea}\n")
    result = agent.kickoff(f"Startup idea:\n{idea}\n\n{prompt}")
    parsed = extract_json(str(result))
    print(json.dumps(parsed, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    idea = "AI-powered fitness tracking app for busy professionals (mobile + wearable + nutrition coach)."

    run("🔥 COMPETITOR ANALYSIS", idea, COMPETITOR_PROMPT)
    run("Analyze idea: ", idea, ANALYZE_PROMPT)
    run("📈 MARKET TRENDS", idea, MARKET_PROMPT)
    run("💰 PRICING STRATEGY", idea, PRICING_PROMPT)
    run("✅ IDEA SUCCESS PREDICTION", idea, SUCCESS_PROMPT)
    run("🎯 TARGETED AUDIENCE", idea, AUDIENCE_PROMPT)
    run("🧩 TECHNICAL REQUIREMENTS", idea, TECH_REQS_PROMPT)
    run("⏱️ TIME + BUDGET PLANNING", idea, TIME_BUDGET_PROMPT)
    run("👥 TEAM BUILDING STRATEGY", idea, TEAM_BUILD_PROMPT)
    run("🗺️ IMPLEMENTATION ROADMAP", idea, ROADMAP_PROMPT)