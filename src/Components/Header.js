
const Header = ({ onCategoryChange, searchBar, handleSearch }) => {
    return (
        <div>
            <input type="text" value={searchBar} placeholder="Search..." onChange={handleSearch}/> 
            <select name="filter" onChange={onCategoryChange}> 
                <option value="All">All</option>
                <option value="Necklace">Necklaces</option>
                <option value="Ring">Rings</option>
            </select>
        </div>
    )
}

export default Header;