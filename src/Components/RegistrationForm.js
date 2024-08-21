import React, {useState} from "react";
import styles from "../Stylesheets/Registration.module.css";

const RegistrationForm = () => {

    const [formData, setFormData] = useState({
        'name' : '',

    })

    const handleSubmit = (e) => {
        e.preventDefault();
      };

    return (
        <div className={styles.timelineContainer}>
            <h1>Registration Form</h1>

            <form onSubmit={handleSubmit}>
            </form>

        </div>
    )
}

export default RegistrationForm;