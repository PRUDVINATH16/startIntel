Description
A security vulnerability has been identified in
the frontend logic where user-provided data and
API responses are injected into the DOM using
the .innerHTML property. Because this method
parses strings as HTML, it allows for
Cross-Site Scripting (XSS).

An attacker could potentially input a malicious
script (e.g., "<"img src=x onerror=alert(1)">")
that would execute in the browser of any user
viewing that content.

Vulnerable Locations
The issue is prevalent in scripts that handle
dynamic UI updates, specifically:

scripts/home.js: Inside notification and
chat rendering logic.
scripts/results.js: Multiple instances
(Lines 1215–1731) where AI-generated
insights, competitor cards, and market data
are rendered using template literals.
scripts/idea-form.js: Where the user's idea
is mirrored back to the UI (Line 24).
scripts/signup-login.js: Error message
displays.
How to Reproduce

Project Setup:
Clone the repository.
Open index.html or host the project on a
local server (e.g., XAMPP or Live
Server).
Steps:
Navigate to the Idea Form or Chat
section.
Enter the following payload into an
input field: "<"img src=x
onerror="alert('XSS Vulnerability
Found!')"">".
Submit the form or trigger the rendering
logic.
An alert box will appear, confirming
that the script was executed.
Impact

Session Hijacking: Attackers can steal
session cookies or local storage data.
Phishing: Malicious forms can be injected to
steal user credentials.
Unauthorized Actions: The script can perform
actions on behalf of the user without their
consent.
