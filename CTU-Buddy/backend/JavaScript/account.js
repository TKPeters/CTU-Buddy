// Select all the tabs
const tabs = document.querySelectorAll('[data-tab-target]')

// Select all the tab contents
const tabContents = document.querySelectorAll('[data-tab-content]')


// Loop through each tab
tabs.forEach(tab => {
    // Add event listener for each tab on click
    tab.addEventListener('click', () => {
        // Select the target tab
        const target = document.querySelector(tab.dataset.tabTarget)

        // For each tab content, remove "actives" class
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('actives')
        })

        // For each tab, remove "actives" class
        tabs.forEach(tab => {
            tab.classList.remove('actives')
        })

        // Add "actives" class to clicked tab
        tab.classList.add('actives')

        // Add "actives" class to target tab
        target.classList.add('actives')
    })
})
