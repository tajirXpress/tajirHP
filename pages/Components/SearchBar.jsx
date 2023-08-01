const SearchBar = () => {
  return (
    <div className="searchbar">
      <input
        type="search"
        name="searchbar"
        id="searchbar"
        placeholder="Unleash the power of search and find what you’re looking for...."
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            console.log(e.key);
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
