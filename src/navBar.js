const navBar = (() => {
    const createNavCointainer = (containerStyle, tabStyle, numTabs) => {
        const navContainer = document.createElement('div');
        navContainer.classList.add(containerStyle);
        for(let i=0; i<numTabs; i++) {
            const tab = document.createElement('div');
            tab.classList.add(tabStyle);
            tab.id = `tab-${i+1}`
            navContainer.appendChild(tab);
        }
        return navContainer;
    }

    const setTabText = (tabId, text) => {
        const tab = document.getElementById(tabId);
        tab.innerText = text;
    }

    const addClickListenerToTab = (func, tabId) => {
        const tab = document.getElementById(tabId);
        tab.addEventListener('click', func);
    }

    const addTabStyleOnMouseover = (style, tabId) => {
        const tab = document.getElementById(tabId);
        tab.addEventListener('mouseover', (tab) => {
            tab.classList.add(style);
        });
    }

    const helloWorld = () => console.log('Hello World!')

    return {
        createNavCointainer,
        addClickListenerToTab,
        addTabStyleOnMouseover,
        setTabText,
        helloWorld
    }
})();

export default navBar;