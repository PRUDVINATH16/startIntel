const surveyForm = document.getElementById('survey-form');
const contentWrapper = document.querySelector('.content-wrapper'); // parent to show message

console.log('Survey form script loaded');
let idea = '';
let mobile = '';

surveyForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  const SECRET_KEY = "mySuperSecretKey123";

  function decryptData(ciphertext) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    console.log("Decrypted bytes:", bytes);
    const plain = bytes.toString(CryptoJS.enc.Utf8);
    console.log("Decrypted raw string:", plain);
    return JSON.parse(plain);
  }


  function getDataFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    const encryptedData = urlParams.get("idea");
    const encryptedMobile = urlParams.get("mobile");
    console.log(encryptedData, encryptedMobile);
    if (encryptedData && encryptedMobile) {
      idea = decryptData(encryptedData);
      mobile = decryptData(encryptedMobile);
      console.log(idea, mobile);
      return { idea, mobile };
    }
    return null;
  }
  const urlData = getDataFromURL();
  console.log(urlData);
  if (urlData) {
    console.log(urlData);
    idea = urlData.idea;
    mobile = urlData.mobile;
  }
  console.log(idea, mobile);

  if (!idea || !mobile) {
    alert('Missing idea or mobile number in URL parameters.');
    return;
  }

  let name = document.querySelector('#name').value.trim();
  let age = document.querySelector('#age').value.trim();
  let q1 = document.querySelector('#q1').value.trim();
  let q2 = document.querySelector('#likelihood_percentage').value.trim();
  let q3 = document.querySelector('#q3').value.trim();
  let q4 = document.querySelector('#q4').value.trim();
  let q5 = document.querySelector('#q5').value.trim();

  if (!name || !age || !q1 || !q2 || !q3 || !q4 || !q5) {
    alert('Please fill all fields');
    return;
  } else {
    try {
      const req = await fetch('http://localhost:3000/api/form/send-result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, age, mobile, idea, q1, q2, q3, q4, q5 })
      });

      const res = await req.json();

      // ✅ Clear all fields
      surveyForm.reset();

      // ✅ Show confirmation message (styled div instead of alert)
      const msg = document.createElement('div');
      msg.className = 'form-success';
      msg.textContent = 'Thanks for sharing your thoughts! Your feedback has been recorded.';

      // remove any existing message first
      const oldMsg = document.querySelector('.form-success');
      if (oldMsg) oldMsg.remove();

      contentWrapper.appendChild(msg);
      msg.scrollIntoView({ behavior: 'smooth', block: 'end' });

      // optionally fade out after 5 seconds
      setTimeout(() => msg.remove(), 5000);

    } catch (err) {
      console.error('Error sending survey:', err);
      // you could also show an inline error message here
    }
  }
});