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

    //this get existing bookmarks from local storage
    let bookmark = getBookmark();

    //adding a new bookmark
    bookmark.push({ title, url });

    //save bookmarks to local storage
    saveBookmark(bookmark);

    //clear input 
    titleInput.value = '';
    urlInput.value= '';

    updateDisplay();
 }

 //function to save bookmarks to local storage
 let saveBookmark = (bookmark) =>{
    localStorage.setItem('bookmark', JSON.stringify(bookmark));
 }

 //function to get saved bookmarks from local storage
 let getBookmark = () => {
    const storedBookmark = localStorage.getItem('bookmark');

    if (storedBookmark){
        return JSON.parse(storedBookmark);
    } else {
        return [];
    }
 }

 //function to remove a bookmark
 let removeBookmark = (index) => {

    //getting existing bookmarks from local storage
    let bookmark = getBookmark();

    //removing bookmarks at specific index
    bookmark.splice(index, 1);

    //save updated bookmark to local storage
    saveBookmark(bookmark);

    updateDisplay()
 }

 //update display function
 let updateDisplay = () => {
    let bookmarkContainer = document.getElementById('bookmarkContainer');
    bookmarkContainer.innerHTML = '';

    //getting existing bookmarks from local storage
    let bookmark = getBookmark();

    //displaying each bookmark
    bookmark.forEach((bookmark, index) => {
        let bookmarkDiv = document.createElement('div');
        bookmarkDiv.classList.add('bookmark');
        bookmarkDiv.innerHTML = `
        <div class="Content">
        <h2>${bookmark.title}</h2>
        <div><a href= "${bookmark.url}" target="_blank">Visit Website</a></div>
        <button onclick="removeBookmark(${index})">Delete</button>
        </div>
        `;
        bookmarkContainer.appendChild(bookmarkDiv);
    });
 }

 //load bookmarks function
 let loadBookmark = () => {
    updateDisplay();
 }