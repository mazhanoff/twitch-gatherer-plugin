(function() {
    document.addEventListener("DOMContentLoaded", () => {
        console.log("init");
        const switcher = document.getElementById('switcher');

        if (switcher) {
            chrome.storage.local.get(['isActive'], res => {
                switcher.checked = res.isActive || false;
            })
            switcher.addEventListener('change', (e) => {
                chrome.storage.local.set({isActive: e.target.checked});
            })
        }
    })
})()
