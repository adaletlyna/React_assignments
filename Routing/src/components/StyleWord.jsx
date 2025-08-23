import { useParams } from "react-router-dom";
const StyleWord=()=> {
    const {word,textColor,backgroundColor}=useParams();
    return(
        <h1 style={{ color: textColor, backgroundColor: backgroundColor, padding: "10px" }}>The word is: {word}</h1>

    );
};
export default StyleWord;