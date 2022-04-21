const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <form action="/timeline" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search post title"
            name="s" 
        />
        <button class="btn btn-primary" type="submit">Search</button>
    </form>
);

export default SearchBar;