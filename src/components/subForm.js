import axios from 'axios'
import { useState } from 'react'
import Confetti from 'react-confetti'

const SubForm = () => {

    const [notification, setNotification] = useState("")
    const [confetti, setConfetti] = useState(false)

    const submitFun = (e) => {
        e.preventDefault()

        const formData = Object.fromEntries(new FormData(e.target))

        axios.post('/submitassignment', formData)
            .then(data => {
                setNotification("Form submitted successfully.")
                setConfetti(true)
                setInterval(() => {
                    setConfetti(false)
                }, 10000)
            })
            .catch(error => {
                console.log(error)
                setNotification("Form submission failed.")
            })

    }

    return (
        <div>
            {
                confetti && <Confetti />
            }
            <form id="submission-form" onSubmit={e => submitFun(e)}>
                {notification !== "" && <p className="notification">{notification}</p>}
                <p className="heading">Submit assignment by filling this form</p>
                <div>
                    <label htmlFor="track">Track</label>
                    <select id="track" name="track">
                        <option>ui/ux</option>
                        <option>android</option>
                        <option>web</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" name="name" required></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" required></input>
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" type="number" name="phone" required></input>
                </div>
                <div>
                    <label htmlFor="challenge">Challenge</label>
                    <select id="challenge" name="challenge">
                        <option>challenge 1</option>
                        <option>challenge 2</option>
                        <option>challenge 3</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="link">Link</label>
                    <input id="link" type="url" name="link" required></input>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SubForm