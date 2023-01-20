// create your App component here
import React, {useEffect,useState} from "react";

function App() {

    const [randomDogPic, SetRandomDogPic] = useState(null);
	const [isLoading, SetIsLoading] = useState(false);

	useEffect(() => {
		fetch("https://dog.ceo/api/breeds/image/random")
			.then((res) => res.json())
			.then((data) => {
				SetRandomDogPic(data.message);
				SetIsLoading(true);
			});
	}, []);

    return(
        <div>
			{isLoading ? (
				<img src={randomDogPic} alt="A Random Dog"></img>
			) : (
				<p>Loading...</p>
			)}
		</div>
    )
}

export default App
