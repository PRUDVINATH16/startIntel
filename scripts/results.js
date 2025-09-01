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
  return null;
}

let idea = getIdeaFromURL();
console.log(idea);