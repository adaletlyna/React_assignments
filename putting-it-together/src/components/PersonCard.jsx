import { useState } from 'react';

function PersonCard({ firstName, lastName, age: initialAge, hairColor }) {
    const [age, setAge] = useState(initialAge);

    const handleBirthdayClick = () => {
        setAge(prevAge => prevAge +1);
    };

    return (
        <div style={{ border: '2px solid gray', padding: '3rem', margin: '1rem' }}>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={handleBirthdayClick}>
                Birthday Button for {firstName} {lastName}
            </button>
        </div>
    );
}

export default PersonCard;
