import { useState } from "react";

function UserForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [users, setUsers] = useState([]); 
    const [submitted, setSubmitted] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault();

        //  add user to the list
        const newUser = { firstName:firstName, lastName:lastName, email:email };
        console.log("Welcome", newUser);
        setUsers([...users, newUser]);

        //  Clear inputs
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        setSubmitted(true);
    };

    return (
        <div >
            <h1>{submitted ? "Thank you for submitting!" : "Welcome! Please submit the form"}</h1>

            <form onSubmit={handleSubmit}>
                
                <div>
                    <label>First Name: </label>
                    <input 
                        type="text" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} 
                    />
                    {firstName.length > 0 && firstName.length < 2 && 
                        <p >First Name must be at least 2 characters</p>
                    }
                </div>

               
                <div>
                    <label>Last Name: </label>
                    <input 
                        type="text" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} 
                    />
                    {lastName.length > 0 && lastName.length < 2 && 
                        <p >Last Name must be at least 2 characters</p>
                    }
                </div>

                
                <div>
                    <label>Email: </label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    {email.length > 0 && email.length < 8 && 
                        <p >Email must be at least 8 characters</p>
                    }
                </div>

                
                <div>
                    <label>Password: </label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    {password.length > 0 && password.length < 8 && (
                        <p style={{ color: "red" }}>Password must be at least 8 characters</p>
                    )}
                </div>

                
                <div>
                    <label>Confirm Password: </label>
                    <input 
                        type="password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                    />
                    {confirmPassword.length > 0 && confirmPassword !== password && (
                        <p>Passwords must match</p>
                    )}
                </div>

                <button type="submit" style={{marginTop:'10px'}}>Create User</button>
            </form>

            
            <h2>Users List</h2>
            {users.map((user, index) => (
                <p key={index}>{user.firstName} {user.lastName} - {user.email}</p>
            ))}
        </div>
    );
}
export default UserForm