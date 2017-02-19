 searchVisageCloud = function(linkUrl){
    var query = linkUrl.srcUrl;

    chrome.tabs.create({url: "http://visagecloud.com/?look=" + encodeURIComponent(query)});
 };

chrome.contextMenus.create({
 title: "Search in VisageCloud",
 contexts:["image"],  // ContextType
 onclick: searchVisageCloud // A callback function
});