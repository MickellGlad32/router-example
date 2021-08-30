import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { actionSaveMovie} from '../redux/actions/favorites';
import { actionSetSearch } from '../redux/actions/search';



function SearchPage() {
    const dispatch = useDispatch()
    const search = useSelector((state) => state.search);
    const [results, setResults] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${search}`)
            .then(res => res.json())
            .then((data) => {
                // console.log(data)
                alert("Your favorite has been saved")
                setResults(data.Search)
            })
    }
    const handleSave = (movie)=> {
        dispatch(actionSaveMovie(movie))

    }
    return (


        <div className="container">
            <div className="row">
                <div className="col-12 header text-center">
                    <h2 className="display-2">Reel 'Em In</h2>
                    <p>Search for movies you want to watch.</p>
                    <p>Save them to your list</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 search">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group input-group-lg">
                            <input onChange={(e) => dispatch(actionSetSearch(e.target.value)) }
                                type="text"
                                value={search}
                            />
                            <button type="submit">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-12 results">
                    { results.map((result) => {
                        return(
                            <div>
                                <p>{result.Title}</p>
                                <img src={result.Poster} alt="poster"></img>
                                <p>{result.Year}</p>
                                <button onClick={()=> handleSave(result)}>Save</button>

                            </div>

                        )
                        })
                                
                    }
                </div>
            </div>
        </div>



    )
}

export default SearchPage;