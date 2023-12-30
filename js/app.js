 // Retrieve bookmarks from localStorage on page load
 document.addEventListener('DOMContentLoaded', () => {
    loadBookmark();
 });

 //function to add a bookmark
 let addBookmark = () => {
    let titleInput = document.getElementById('title');
    let urlInput = document.getElementById('url');

    let title = titleInput.value;
    let url = urlInput.value;

    if (!title || !url){
        alert('Please enter both title and url');
        return;
    }
 }