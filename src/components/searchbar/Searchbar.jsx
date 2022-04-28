const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <form action="/timeline" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search posts</span>
        </label>
        <input style={{display: "block", margin: "auto", marginBottom: 20}}
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search post title"
            name="s" 
        />
        <button style={{display: "block", margin: "auto"}} class="btn btn-primary" type="submit">Search</button>
    </form>
);

export default SearchBar;