let mockupData = [
    { id: 0, title: 'Eye Of The World', author: 'Robert Jordan', imgSource:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9E6K9JP-hakem2Szf7vfWW5Ssnxw-JQllFA&usqp=CAU', rating: 5, review:`Best damn book I've ever Read!`},

    { id: 1, title: 'The Way of Kings', author: 'Brandon Sanderson', imgSource:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8IiN68vvQdRnS-TKG6kDuApFourwTtip3vnL2XP4BsDhO9jOAasvBGzf9i9v5oiCjyo&usqp=CAU', rating: 4.5, review:`This is a well written book!`},

    { id: 2, title: 'Eragon', author: 'Christopher Paolini', imgSource:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7bC2-EBN8Um9KIv_A_wqEemodEGXXELBKw&usqp=CAU', rating: 4, review:`This is a great book for young readers.`},
]


let globalId = 3


const handlerFunctions = {

    getCards: (req, res) => {
        res.send({
            message: "all card info from mockup Data",
            cards: mockupData,
        })
    },
    addCard: (req, res) => {
        const {title} = req.body
        const newCard = {
            id: globalId,
            title: title,
            author: "",
            imgSource: "",
            rating: 0,
            review: "",
        }
        mockupData.push(newCard)
        globalId++
        res.send({
            newCard: newCard,
        })
    },
    deleteCard: (req, res) => {
        const {id} = req.params
        mockupData = mockupData.filter((card) => {
            return card.id !== +id
        })
        res.send({
            message: "I tried to delete this card",
            status: true,
        })
    },




}




export default handlerFunctions