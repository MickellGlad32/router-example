
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionRemoveMovie } from "../redux/actions/favorites";


export default function FavoritesPage() {
    const movies = useSelector(state => state.movies)
    const dispatch= useDispatch()

    const handleDelete =(movie)=>{
        dispatch(actionRemoveMovie(movie))
    }
    return (
        
        
        <div>
            {movies.map((movie) => {

                return (
                    <div >
                        <p>{movie.Title}</p>
                        <img src={movie.Poster} alt="poster"></img>
                        <p>{movie.Year}</p>
                        <button onClick={()=> handleDelete(movie)} >Delete</button>
                    </div>

                )
            })}

        </div>


    )
}
