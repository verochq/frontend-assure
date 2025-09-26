import '../addflashcard.css'
function AddFlashcard() {


    console.log("aa");





    return (
        <>
            <form className='addCardForm'>
                <fieldset className='fieldCardForm'> 
                    <legend>Add a flash card:</legend>
                    Question: <input type="text"></input>
                    Answer: <input type="text"></input>
                    Topic: <select>
                        <option value="">-- Select a topic --</option>
                        <option value="Math" color='red'>Math</option>
                        <option value="Science" color='blue'>Science</option>
                        <option value="Programming" color='green'>Programming</option>
                        <option value="Music" color='yellow'>Music</option>
                        <option value="Philosophy" color='pink'>Philosophy</option>
                    </select>
                    <button className='buttonCardForm' onClick={()=>{console.log("hey")}}>Add</button>
                </fieldset>
                
            </form>
        </>
    );
}

export default AddFlashcard;