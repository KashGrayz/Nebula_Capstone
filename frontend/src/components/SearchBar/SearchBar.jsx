// fetch images by search keyword

import {useNavigate} from 'react-router-dom'

function SearchBar({search, setSearch, getImages}) {

    function handleSubmit(event){
        event.preventDefault();
        getImages(search);
        console.log(`Search:`, search)
        setSearch('')

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