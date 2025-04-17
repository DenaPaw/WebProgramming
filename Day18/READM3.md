    Setup instructions

Backend
1. Open a terminal.
2. Navigate to blog-backend folder
3. Run:
   npm install
   node server.js
Frontend 
1. Open another terminal.
2. Navigate to blog-Frontend folder
3. Run:
   npm install
   npm start

Run these link in your browser
http://localhost:3000 Frontend 
http://localhost:5000 Backend

    Description of each new feature I added
Backend
On server.js file
Backend
I added a delete route so I can delete a post by its ID.

I added a put route so I can update a post’s title and body.

Frontend
on Apps.js
I added a delete button next to each post inside the map.

I made a function called handleDelete() that sends a delete request to the backend and removes the post from the UI.

I added an edit button next to each post.

When you click edit, the form will fill with that post’s title and body so you can update it using the same form.

I used axios.put() to send the updated data to the backend and refresh the UI after editing.

I also added a confirmation popup when you click delete, so it will ask you before deleting a post.

