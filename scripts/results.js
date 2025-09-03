const SECRET_KEY = "mySuperSecretKey123";

function decryptData(ciphertext) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

function getIdeaFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const encryptedData = urlParams.get("data");
  console.log(encryptedData)
  if (encryptedData) {
    return decryptData(encryptedData);
  }
  return null;
}

let idea = getIdeaFromURL();

async function fetchResearchData(idea){
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  mobile = user.mobile;
  console.log(idea)
  idea = idea.idea;
  let request = await fetch(`http://localhost:3000/api/report/report1`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ mobile, idea })
  })
  let response = await request.json();
  console.log(response);
}

fetchResearchData(idea);