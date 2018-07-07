var tabs = document.querySelectorAll("a[data-tab-for]");
var contents = document.querySelectorAll(".content>p");

tabs.forEach(tab => tab.addEventListener('click', tabClicked));
window.onpopstate = checkState;
history.pushState({
    tabForId: tabs[0].dataset.tabFor
}, null, "tab-"+tabs[0].dataset.tabFor);

function hideContent() {
    contents.forEach(content => content.classList.add('hide'));
}

function showContent(id) {
    contents.forEach(content => {
        if (content.getAttribute('id') === id) content.classList.remove('hide');
        else content.classList.add('hide');
    });
    tabs.forEach(tab => {
        if (tab.dataset.tabFor === id) tab.classList.add("active");
        else tab.classList.remove("active");
    });
}

function tabClicked(e) {
    var contentId = e.target.dataset.tabFor;
    e.preventDefault();
    showContent(contentId);
    history.pushState({
        tabForId: contentId
    }, null, "tab-"+contentId);
}

function checkState(e) {
    // page reload
    if(e.state) {
        console.log(history.state.tabForId);
        showContent(history.state.tabForId);
    }
}