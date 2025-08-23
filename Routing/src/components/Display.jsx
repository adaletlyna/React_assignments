
import { useParams } from "react-router-dom";  

function Display() {
  const { value } = useParams();     /*=> Destructuring:the same as const params = useParams();
                              const value = params.value;*/
                              //useParams() is a React Router that returns an object containing all the params from the URL exp: {word:hello}(in this case with one key=word param)

  if (isNaN(value)) {
    
    return <h1>The word is: {value}</h1>;
  } else {
    
    return <h1>The number is: {value}</h1>;
  }
}

export default Display;
