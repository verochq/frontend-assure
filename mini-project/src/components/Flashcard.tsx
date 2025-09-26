import '../flashcard.css'
function Flashcard() {

    const handleClickCard = () => {
        const question = document.getElementById("flashcard__contain--question");
        const answer = document.getElementById("flashcard__contain--answer");

        console.log(question);
        if (!question || !answer) {
            return;
        }

        if (answer.style.display === "block") {
            question.style.display = "block";
            answer.style.display = "none";
        } else {
            question.style.display = "none";
            answer.style.display = "block";
        }
        
        console.log("Click");
    };

    return (
        <>
            <div>
                <details>Contents</details>
                <fieldset> 
                    <legend>Details:</legend>
                    Name:<input type="text"></input>
                    Emp_Id:<input type="text"></input>
                    Designation:<input type="text"></input>
                </fieldset>
            </div>
            <div className='flashcard' onClick={handleClickCard}>
                <p className='flashcard__contain' id='flashcard__contain--question'>questuaaaaaquestion</p>
                <p className='flashcard__contain' id='flashcard__contain--answer'>respuest</p>
                <p className='flashcard__topic'>topic</p>
            </div>
           
        </>
    );
}

export default Flashcard;