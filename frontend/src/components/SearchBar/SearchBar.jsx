// fetch images by search keyword

function SearchBar({search, setSearch, getImages}) {

    function handleSubmit(event){
        event.preventDefault();
        getImages(search);
        setSearch('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder="Search..." 
                    onChange={(event) => setSearch(event.target.value)} 
                    value={search}>
                </input>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;