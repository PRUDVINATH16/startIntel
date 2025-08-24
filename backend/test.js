// Make sure you're using Node 18+ (native fetch support)

async function getSearchResult() {
  try {
    const response = await fetch("http://localhost:5000/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: "When the whole space is dark why the stars alone spark??"
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ Result from Python API:");
    console.log(data);
  } catch (err) {
    console.error("❌ Error fetching data:", err.message);
  }
}

getSearchResult();
