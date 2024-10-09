// Check if user is authenticated (handled by login.js)
if (!localStorage.getItem('authenticated')) {
  alert("You must log in first.");
}

// Add event listeners for button clicks
document.getElementById('extractUrls').addEventListener('click', () => {
  if (localStorage.getItem('authenticated')) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.scripting.executeScript({
              target: { tabId: tabs[0].id },
              files: ['links.js']
          });
          logButtonClick('Link Extract'); // Call tracking.js to log the action
      });
  }
});

document.getElementById('extractWhatsapp').addEventListener('click', () => {
  if (localStorage.getItem('authenticated')) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.scripting.executeScript({
              target: { tabId: tabs[0].id },
              files: ['whatsapp.js']
          });
          logButtonClick('WhatsApp'); // Call tracking.js to log the action
      });
  }
});

document.getElementById('extractFacebook').addEventListener('click', () => {
  if (localStorage.getItem('authenticated')) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.scripting.executeScript({
              target: { tabId: tabs[0].id },
              files: ['facebook.js']
          });
          logButtonClick('Facebook'); // Call tracking.js to log the action
      });
  }
});

document.getElementById('extractInstagram').addEventListener('click', () => {
  if (localStorage.getItem('authenticated')) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.scripting.executeScript({
              target: { tabId: tabs[0].id },
              files: ['instagram.js']
          });
          logButtonClick('Instagram'); // Call tracking.js to log the action
      });
  }
});
