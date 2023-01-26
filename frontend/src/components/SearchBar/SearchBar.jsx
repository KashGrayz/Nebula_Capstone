// fetch images by search keyword
import {useNavigate} from 'react-router-dom'
import './SearchBar.css'
function SearchBar({search, setSearch, getImages, image}) {
    const navigate = useNavigate();
    

    function handleSubmit(event){
        event.preventDefault();
        getImages(search);
        console.log(`Search:`, search)
        console.log('Searched Images:', image)

        

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder="Search..." 
                    onChange={(event) => setSearch(event.target.value)} 
                    value={search}/>
                <button type="submit">Launch</button>
            </form>
        </div>
    )
}

export default SearchBar;