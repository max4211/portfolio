window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('[role="tab"]');
  
    // Add a click event handler to each tab
    tabs.forEach(tab => {
      tab.addEventListener("click", changeTabs);
    });
  
  });
  
  function changeTabs(e) {
    const target = e.target;
    const parent = target.parentNode;
    const grandparent = parent.parentNode;
  
    // Remove all current selected tabs
    parent
      .querySelectorAll('[aria-selected="true"]')
      .forEach(t => t.setAttribute("aria-selected", false));
  
    // Set this tab as selected
    target.setAttribute("aria-selected", true);
  
    // Hide all tab panels
    grandparent
      .querySelectorAll('[role="tabpanel"]')
      .forEach(p => p.setAttribute("hidden", true));
  
    // Show the selected panel
    grandparent.parentNode
      .querySelector(`#${target.getAttribute("aria-controls")}`)
      .removeAttribute("hidden");
  }