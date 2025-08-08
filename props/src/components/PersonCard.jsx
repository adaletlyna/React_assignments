function PersonCard({ firstName, lastName, age, hairColor }) {
    return (
        <div style={{ border: '2px solid gray', padding: '3rem', margin: '1rem' }}>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    );
}

export default PersonCard;