

function BookTitle() {
  return (
    <div>
        <h2><input type="text" value={value} onChange={(event) => onValueChange(event.target.value)} /></h2>
    </div>
  )
}

export default BookTitle
