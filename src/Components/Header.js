
const Header = ({ onCategoryChange, searchBar, handleSearch }) => {
    return (
        <div>
            <input type="text" className='searchbar-input' value={searchBar} placeholder="Search..." onChange={handleSearch}/> 
            <select name="filter" className="filter-category-btn" onChange={onCategoryChange}> 
                <option value="All">All</option>
                <option value="Necklace">Necklaces</option>
                <option value="Ring">Rings</option>
                <option value="Bracelet">Bracelet</option>
                <option value="Earrings">Earrings</option>
            </select>
        </div>
    )
}

export default Header;