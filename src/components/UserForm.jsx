import React, { useState } from 'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        setFirstNameError(e.target.value.length < 2 ? "First Name must be at least 2 characters" : "");
    }

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        if (newPassword.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
            setConfirmPasswordError(newPassword !== confirmPassword ? "Passwords must match" : "");
        }
    }

    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        setConfirmPasswordError(newConfirmPassword !== password ? "Passwords must match" : "");
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        setLastNameError(e.target.value.length < 2 ? "Last Name must be at least 2 characters" : "");
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(e.target.value.length < 2 ? "Email must be at least 2 characters" : "");
    }

    const createUser = (e) => {
        e.preventDefault();

        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <form onSubmit={createUser}>
            <div>
                <label>FirstName: </label>
                <input type="text" value={firstName} onChange={handleFirstNameChange} />
                {firstNameError && <p>{firstNameError}</p>}
            </div>
            <div>
                <label>LastName: </label>
                <input type="text" value={lastName} onChange={handleLastNameChange} />
                {lastNameError && <p>{lastNameError}</p>}
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" value={email} onChange={handleEmailChange} />
                {emailError && <p>{emailError}</p>}
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={handlePasswordChange} />
                {passwordError && <p>{passwordError}</p>}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                {confirmPasswordError && <p>{confirmPasswordError}</p>}
            </div>
            <input type="submit" value="Create User" />
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </form>
    );
};

export default UserForm;
