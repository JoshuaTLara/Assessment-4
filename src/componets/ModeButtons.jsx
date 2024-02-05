

function ModeButtons({deleteFunc}) {
  return (
    <div>
       <div>
        <button>Edit</button>
        <button onClick={deleteFunc}>Delete</button>
    </div>
    <div>
        <button>Save</button>
    </div>
    </div>
  )
}

export default ModeButtons
