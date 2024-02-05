import BookTitle from "./BookTitle";
import BookImg from "./BookImg";
import BookRating from "./BookRating";
import { useState } from "react";
import axios from "axios";
import AddBookButton from "./AddBookButton";
import App from "../App"




function BookCard({bookData, deleteCard}) {
  const {id, title, author, imgSource, rating, review} = bookData

  return (
<>
  <div id={"basicCard"} >
    <div id="div1">
      <h2>
      {title}
      </h2>
    </div>
    <div id="div2">
      <h4>
      {author}
      </h4>
    </div>
    <div id="div3">
      <img src={imgSource} />
    </div>
    <div id="div3">
      <h5>
      {rating} : Stars
      </h5>
    </div>
    <div id="div4">
      <p>{review}</p>
    </div>
    <div id="div5">
        <button>Edit</button>
        <button onClick={() => deleteCard(id)}>Delete</button>
        
    </div>
    <div id="div6">
        <button>Save</button>
    </div>
 
  </div>
  
</>
  )
}

export default BookCard
