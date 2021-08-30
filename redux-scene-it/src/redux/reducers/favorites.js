

// make a favorites reducer function that takes state parameter and action parameter
export const favorites =(state = [], action)=>{
    switch(action.type){
        case 'SAVE_MOVIE':
            // save_movie action
            return [...state,action.movie]
            
        case 'REMOVE_MOVIE':
            return state.filter((movie) => movie.imdbID !== action.movie.imdbID)

            default:
                return state
    }
}