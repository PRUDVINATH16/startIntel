# server.py

import os, json, re
from flask import Flask, request, jsonify
from crewai import Agent, LLM
from dotenv import load_dotenv
from waitress import serve

from prompts import (
    COMPETITOR_PROMPT, MARKET_PROMPT, PRICING_PROMPT,
    SUCCESS_PROMPT, AUDIENCE_PROMPT, TECH_REQS_PROMPT,
    TIME_BUDGET_PROMPT, TEAM_BUILD_PROMPT, ROADMAP_PROMPT, ANALYZE_PROMPT
)

load_dotenv()

def get_env(var: str, default: str = None):
    val = os.getenv(var, default)
    if not val:
        raise RuntimeError(f"Missing environment variable: {var}")
    return val

API_KEY = get_env("OPENROUTER_API_KEY")
BASE_URL = os.getenv("OPENROUTER_BASE_URL", "https://openrouter.ai/api/v1")
MODEL_ID = os.getenv("OPENROUTER_MODEL", "openrouter/openai/gpt-4o-mini")

app = Flask(__name__)

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

def extract_json(text: str):
    """Return the first valid JSON object or array found in text; else return raw text."""
    if isinstance(text, dict) or isinstance(text, list):
        return text
    s = str(text)
    # Try direct JSON
    try:
        return json.loads(s)
    except Exception:
        pass
    # Greedy bracket match
    m = re.search(r'(\{.*\}|\[.*\])', s, flags=re.DOTALL)
    if m:
        try:
            return json.loads(m.group(1))
        except Exception:
            pass
    return {"raw": s}

def run_prompt(idea: str, prompt: str):
    full_prompt = f"Startup idea:\n{idea}\n\n{prompt}"
    result = agent.kickoff(full_prompt)
    return extract_json(str(result))

@app.post("/analyze")
def analyze():
    idea = (request.get_json() or {}).get("idea", "").strip()
    if not idea:
        return jsonify({"error": "Missing 'idea' field"}), 400
    return jsonify(run_prompt(idea, ANALYZE_PROMPT))

@app.post("/competitors")
def competitors():
    idea = (request.get_json() or {}).get("idea", "").strip()
    if not idea:
        return jsonify({"error": "Missing 'idea' field"}), 400
    return jsonify(run_prompt(idea, COMPETITOR_PROMPT))

@app.post("/market")
def market():
    idea = (request.get_json() or {}).get("idea", "").strip()
    if not idea:
        return jsonify({"error": "Missing 'idea' field"}), 400
    return jsonify(run_prompt(idea, MARKET_PROMPT))

@app.post("/pricing")
def pricing():
    idea = (request.get_json() or {}).get("idea", "").strip()
    if not idea:
        return jsonify({"error": "Missing 'idea' field"}), 400
    return jsonify(run_prompt(idea, PRICING_PROMPT))

@app.post("/success")
def success():
    idea = (request.get_json() or {}).get("idea", "").strip()
    if not idea:
        return jsonify({"error": "Missing 'idea' field"}), 400
    return jsonify(run_prompt(idea, SUCCESS_PROMPT))

@app.post("/audience")
def audience():
    idea = (request.get_json() or {}).get("idea", "").strip()
    if not idea:
        return jsonify({"error": "Missing 'idea' field"}), 400
    return jsonify(run_prompt(idea, AUDIENCE_PROMPT))

@app.post("/tech")
def tech():
    idea = (request.get_json() or {}).get("idea", "").strip()
    if not idea:
        return jsonify({"error": "Missing 'idea' field"}), 400
    return jsonify(run_prompt(idea, TECH_REQS_PROMPT))

@app.post("/time-budget")
def time_budget():
    idea = (request.get_json() or {}).get("idea", "").strip()
    if not idea:
        return jsonify({"error": "Missing 'idea' field"}), 400
    res = jsonify(run_prompt(idea, TIME_BUDGET_PROMPT))
    print(res)
    return res

@app.post("/team")
def team():
    idea = (request.get_json() or {}).get("idea", "").strip()
    if not idea:
        return jsonify({"error": "Missing 'idea' field"}), 400
    return jsonify(run_prompt(idea, TEAM_BUILD_PROMPT))

@app.post("/roadmap")
def roadmap():
    idea = (request.get_json() or {}).get("idea", "").strip()
    if not idea:
        return jsonify({"error": "Missing 'idea' field"}), 400
    return jsonify(run_prompt(idea, ROADMAP_PROMPT))

if __name__ == "__main__":
    # Tip: set OPENROUTER_API_KEY in your .env first
    serve(app, host="0.0.0.0", port=5000)
