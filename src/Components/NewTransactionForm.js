import {useState} from 'react'

function NewTransactionForm({ onSubmission }) {
    const [formData, setFormData] = useState({
        date: "",
        category: "",
        description: "",
        amount: 0
        
    })
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault()
    onSubmission(formData)
    }
    return (
        <form onChange={handleChange} onSubmit={handleSubmit}>
            <div className="input">
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                
                />
                <input value= {formData.description} name="description"type="text" placeholder="description..."  onChange={handleChange}/>
                <input  value={formData.category} name="category" type="text" placeholder="category..." onChange={handleChange}/>
                <input  value={formData.amount}   name="amount" type="number" placeholder="amount..." onChange={handleChange} />
            </div>
            <button>add Transaction</button>
            

        </form>
        
        

    )
    
}export default NewTransactionForm