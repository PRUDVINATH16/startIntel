import os
from flask import Flask, request, jsonify
from crewai import Agent, LLM
from dotenv import load_dotenv
from waitress import serve

load_dotenv()

app = Flask(__name__)

# Setup LLM
llm = LLM(
    model="openrouter/openai/gpt-4o-mini",  
    base_url="https://openrouter.ai/api/v1",
    api_key=os.getenv("OPENROUTER_API_KEY"),
    stream=False,
)

# Create Agent
search_agent = Agent(
    role="Search Bot",
    goal="Answer search queries with accurate and concise results.",
    backstory="You are an AI search assistant who finds and explains the latest information clearly.",
    llm=llm,
)

@app.route("/search", methods=["POST"])
def search():
    data = request.get_json(silent=True) or {}
    query = data.get("q", "")

    if not query:
        return jsonify({"error": "Missing query parameter 'q'"}), 400

    print(f"🔍 Searching: {query}")
    result = search_agent.kickoff(query)
    return jsonify({"query": query, "result": str(result)})

if __name__ == "__main__":
    # Run with Waitress (Windows-friendly WSGI server)
    serve(app, host="0.0.0.0", port=5000)
