import React, { useState, useEffect, useCallback } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Books from "./Components/Books/Books";
import Layout from "./Components/layout/Layout";
import BookItem from "./Components/Books/BookItem";
import NewBook from "./Components/NewBook/NewBook";
import { bookData } from "./Components/NewBook/BookForm";

const App = () => {
  const [books, setBooks] = useState([]);

  // const addBookHandler = (book) => {
  //   setBooks((prevBooks) => {
  //     return [book, ...prevBooks];
  //   });
  // };

  const fetchBooksHandler = useCallback(async () => {
    try {
      const response = await fetch("https://localhost:44345/api/Book", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedBooks = [];

      for (const key in data.response) {
        loadedBooks.push({
          id: data.response[key].id,
          title: data.response[key].name,
          author: data.response[key].author,
          ISBN: data.response[key].isbn
        });
      }

      console.log(loadedBooks);
      
      setBooks(loadedBooks);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    fetchBooksHandler();
  }, [fetchBooksHandler]);

  const addBookHandler = useCallback(async () => {
    try {
      const response = await fetch("https://localhost:44345/api/Book", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: bookData.title,
          author: bookData.author,
          year: bookData.year,
          publisher: bookData.publisher,
          numberOfPages: bookData.numberOfPages,
          ISBN: bookData.isbn
        }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <div className="App">
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/books" />
        </Route>
        <Route path="/books" exact>
          <Books items={books} />
        </Route>
        <Route path="/books/:bookId">
          <BookItem />
        </Route>
        <Route path="/new-book">
          <NewBook onAddBook={addBookHandler} />
        </Route>
      </Switch>
    </Layout>
    </div>
  );
};

export default App;
