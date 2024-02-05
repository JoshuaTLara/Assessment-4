
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

import BookCard from './componets/BookCard'
import AddBookButton from './componets/AddBookButton'
import ModeButtons from './componets/ModeButtons'

function App() {
  const [cards,setCards] = useState('')


useEffect(()=>{
axios.get('/cards').then((res)=>{
  console.log(res)
  setCards(res.data.cards)
})

},[])
const addCard = async () => {
  const response = await axios.post("/card/add", {
    description: "add a row now"
  })
  setCards([...cards, response.data.newCard])

}

const deleteFunc = (id) => {
  console.log("there", id)
  axios.delete(`/card/delete/${id}`)
    .then((res) => {
      if (res.data.status) {
        const filteredList = cards.filter((card) => {
          return card.id !== id
        })
        setCards(filteredList)
      } else {
        console.log('something did not work right')
      }
    })
}


return cards === '' ? <>
<h1>loading</h1>
</> : <>
{cards.map((card)=><BookCard 
  key={card.id} 
  bookData={card} 
  deleteCard={(id)=>deleteFunc(id)}
/>)}

<div>
    <AddBookButton addCard={addCard}/>
    
</div>
</>


}
export default App
