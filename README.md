# Search Books.

A front-end web application to search and know the details of thousands of books.

## Features

- Light/dark mode toggle.
- You can search with the name of the book, and that will fetch and display the top 16 results as provided from the Google Books API and the Open Library API.
- Each search result is a book card. Each book card would contain the name of the book, the cover of the book, the author/authors, the language, a brief description, name of the publisher, page count and rating.
- Upon clicking on the book cover, it redirects the user to the Google Play Books where they can choose to take further action (i.e., to purchase or to read the preview or to read the free E-book, if available).
- Users can also search from a list of 31 different categories (Cooking, Self-Help, Anthropology, Romance to name some). If they happen to use this feature, they will be redirected to the Open Library page of the respective book, where again they can choose to take further action.

## Installation

Follow these steps to run the Search Books Application on your local system.

1. After cloning it from GitHub, open the terminal in the root directory.
2. You need to make sure that you have node.js installed. If you don't have it installed, then you can download it from this link :https://nodejs.org/en/ and then install it.
3. Then, you need to install all the neccessary packages/dependencies. For that, run :

```bash
  npm install

```

4. Since the Search Books App makes use of the JSON server, which is a kind of a fake back-end, you need to run another command :

   ```bash
   npm run server

   ```

5. That's it! Now you are all set to run the application! In the terminal, type :

```bash
    npm start
```

This would spin up the development server on https://localhost:3000. Now you can enjoy the application! I hope you like it!

## Screenshots

![App Screenshot]('/src/components/images/ProjectIntro.png')
