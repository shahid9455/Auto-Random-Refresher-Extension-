chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
     
      const waitTime = Math.floor(Math.random() * 32);
  
      setTimeout(() => {
        chrome.tabs.reload(tabId);
      }, waitTime * 1000);
    }
  });
  