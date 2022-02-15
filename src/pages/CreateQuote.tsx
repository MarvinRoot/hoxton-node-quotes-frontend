export function CreateQuote() {
    
    function addAuthor(firstNamee: string, lastNamee:string, imagee: string, agee:string|number ) {
        fetch('http://localhost:3001/quotes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName: firstNamee, lastName: lastNamee, image: imagee, age: agee})
        })
    }

    function addQuote(quotee: string) {
        fetch('http://localhost:3001/quotes', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({quote: quotee})
        })
    }
    return (
        <header className="App-header">
            <h1>Hey there! Add your quote<br></br></h1>
            <form style={{ display: "grid", gap: "1rem" }} onSubmit={(e) => {
                e.preventDefault()
                addAuthor(e.target.firstName.value, e.target.lastName.value, e.target.img.value, e.target.age.value)
                addQuote(e.target.quote.value)
            }}>
                <label style={{ display: "grid", gap: "1rem" }}>
                    <span>Quote</span>
                    <input required name="quote" type="text" placeholder="Enter a quote" />
                </label>

                <label style={{ display: "grid", gap: "1rem" }}>
                    <span>Author First Name</span>
                    <input required name="firstName" type="text" placeholder="Enter author's first name" />
                </label>

                <label style={{ display: "grid", gap: "1rem" }}>
                    <span>Author Last Name</span>
                    <input required name="lastName" type="text" placeholder="Enter author's last name" />
                </label>

                <label style={{ display: "grid", gap: "1rem" }}>
                    <span>Author Image</span>
                    <input required name="img" type="text" placeholder="Enter author's image url" />
                </label>

                <label style={{ display: "grid", gap: "1rem" }}>
                    <span>Author Age</span>
                    <input required name="age" type="text" placeholder="Enter author's age" />
                </label>

                <button style={{color: "#282c34", padding: "10px", borderRadius: "25px", border: "none"}} type="submit" value="Submit">
                    Submit
                </button>
            </form>
            <ul >
                <li><a style={{ textDecoration: "none", color: "unset" }} href="/welcome"> /welcomePage </a></li>
            </ul>
        </header>
    )
}