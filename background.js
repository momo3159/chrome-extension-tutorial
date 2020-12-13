// インストールした時に実行
chrome.runtime.onInstalled.addListener(function() {
    // storageにcolor="3aa757"をセット -> コールバックの実行
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("The color is green");
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'developer.chrome.com'}
            })],
                actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

