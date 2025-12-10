import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import BookList from "../components/BookList";
import { useSelector } from "react-redux";

// const dummyBooks = [
//   {
//     id: 1,
//     title: "The Pragmatic Programmer",
//     author: "Andrew Hunt",
//     image:
//       "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg",
//   },
//   {
//     id: 2,
//     title: "Clean Code",
//     author: "Robert C. Martin",
//     image: "https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg",
//   },
//   {
//     id: 3,
//     title: "You Don't Know JS",
//     author: "Kyle Simpson",
//     image: "https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg",
//   },
//   {
//     id: 4,
//     title: "Refactoring",
//     author: "Martin Fowler",
//     image: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg",
//   },
// ];

const HomePage = () => {
  const { pubbooks } = useSelector((state) => state.bookStore);

  return (
    <>
      <HeroSection />
      <BookList books={pubbooks} />
    </>
  );
};

export default HomePage;
