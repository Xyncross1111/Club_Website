import React, { useState } from "react";
import styles from "../Stylesheets/Registration.module.css";
import upi from "D:/Repos/Webdev/tcb/Club_Website/src/Assets/UPI.jpg";

const RegistrationForm = () => {

    const [teamData, setTeamData] = useState({
        'teamName': '',
        'leader': {
            'name': '',
            'email': '',
            'contact': '',
            'year': ''
        },
        'members': [
            {
                'name': '',
                'email': ''
            },
            {
                'name': '',
                'email': ''
            },
            {
                'name': '',
                'email': ''
            }
        ],
        'payment': {
            'transactionId': ''
        }
    })

    const [page, setPage] = useState(0);

    const handleFormSwitch = (e) => {
        if (e.target.name === "next") setPage((prev) => prev + 1)
        else if (e.target.name === "prev") setPage((prev) => prev - 1)
    }

    // const handleChange = (e) => {
    //     setFormData((prev) => ({
    //         ...prev,
    //         [e.target.name]: e.target.value,
    //     }));
    // }

    const handleLeaderChange = (e) => {
        const { name, value } = e.target;
        setTeamData((prev) => ({
            ...prev,
            leader: {
                ...prev.leader,
                [name]: value,
            },
        }));
    }

    const handleMemberChange = (e) => {
        const { name, value } = e.target;
        setTeamData((prev) => {
            const updatedMembers = [...prev.members];
            updatedMembers[page - 1] = { ...updatedMembers[page - 1], [name]: value };
            return {
                ...prev,
                members: updatedMembers
            };
        });
    }

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setTeamData((prev) => ({
            ...prev,
            payment: {
                ...prev.payment,
                [name]: value,
            },
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    // const postTeamData = async () => {
    //     const scriptURL = 'https://script.google.com/macros/s/AKfycbwQvHCKqlUGn0A6O6W1yhlvLmvrb4Ey0cCMfEfTywFHey3-SLqQ6DYqP5D-8wRgMXS2/exec';

    //     try {
    //         const response = await fetch(scriptURL, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(teamData),
    //             mode: 'no-cors'
    //         });

    //         const result = await response.text(); // You can parse JSON if you send it in the Apps Script
    //         alert(result);
    //     } catch (error) {
    //         console.error('Error!', error);
    //         alert('Error: Unable to send data to Google Sheets.');
    //     }
    // }
    
    return (
        <div className={styles.timelineContainer}>
            <h1>Registration Form</h1>
            <p color="white">{JSON.stringify(teamData)}</p>
            {page}
            <form onSubmit={handleSubmit}>

                {page === 0 && <TeamInfoForm handleChange={handleLeaderChange} />}

                {page === 1 && <MemberInfoForm handleChange={handleMemberChange} />}
                {page === 2 && <MemberInfoForm handleChange={handleMemberChange} />}
                {page === 3 && <MemberInfoForm handleChange={handleMemberChange} />}

                {page === 4 && <PaymentInfoForm handleChange={handlePaymentChange} />}

                <button name="prev" onClick={handleFormSwitch} disabled={page === 0}>Previous</button>
                <button name="next" onClick={handleFormSwitch} disabled={page === 4} >Next</button>

                <button type="submit" disabled={page !== 4} >Submit</button>
            </form>

        </div>
    )
}

// const PersonalInfoForm = ({ handleChange }) => {
//     return (
//         <div>
//             <label>Name:  </label>
//             <input type="text" placeholder="Name" name="name" onChange={handleChange} />

//             <label>Email: </label>
//             <input type="email" placeholder="Email" name="email" onChange={handleChange} />

//             <label>Branch: </label>
//             <input type="text" placeholder="Branch" name="branch" onChange={handleChange} />

//             <label>Contact: </label>
//             <input type="phone" placeholder="Contact" name="contact" onChange={handleChange} />

//             <label>Year: </label>
//             <input type="text" placeholder="Year" name="year" onChange={handleChange} />
//         </div>
//     )
// }

// add multiple team member option

const TeamInfoForm = ({ handleChange }) => {
    return (
        <div>
            <label>Name:  </label>
            <input type="text" placeholder="Team Name" name="teamName" onChange={handleChange} />

            <label>Leader Details</label>

            <label>Name:  </label>
            <input type="text" placeholder="Name" name="name" onChange={handleChange} />

            <label>Email: </label>
            <input type="email" placeholder="Email" name="email" onChange={handleChange} />

            <label>Contact: </label>
            <input type="phone" placeholder="Contact" name="contact" onChange={handleChange} />

        </div>
    )
}

const MemberInfoForm = ({ handleChange }) => {

    return (
        <div>
            <label>Member Details</label>
            <label>Name:  </label>
            <input type="text" placeholder="Name" name="name" onChange={handleChange} />

            <label>Email: </label>
            <input type="email" placeholder="Email" name="email" onChange={handleChange} />

        </div>
    )
}

const PaymentInfoForm = ({ handleChange }) => {
    return (
        <div>
            <label>Account Details:</label>
            <img src={upi} alt="UPI QR Code" />

            <label>Transaction ID: </label>
            <input type="text" placeholder="Transaction ID" name="transactionId" onChange={handleChange} />
        </div>
    )
}

export default RegistrationForm;