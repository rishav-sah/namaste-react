const SearchBarComponent = ({ searchHandler }) => {

  const handleInput = (e) => searchHandler(e.target.value);

  return (
    <div className="searchbar-wrapper">
      <div className="searchbar-component">
        <form>
          <input className="searchbar-field" type="text" placeholder="Type here to search" onKeyUp={handleInput} />
        </form>
      </div>
    </div>
  );
};

export default SearchBarComponent;