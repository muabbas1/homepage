function performSearch() {
    const searchInput = document.getElementById('search-input').value.trim(); // Trim whitespace
    
    // Check if the search input is not empty
    if (searchInput !== '') {
        // Open Google search results in a new tab
        window.open(`https://www.google.com/search?q=${encodeURIComponent(searchInput)}`, '_blank');
    } else {
        // Display a message if search input is empty
        alert('Please enter a search query.');
    }
    
    // Prevent form submission (to avoid page reload)
    return false;
}
   

   