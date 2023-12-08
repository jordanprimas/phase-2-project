
const Header = ({onCategoryChange}) => {
    return (
        <div>
            <select name="filter" onChange={onCategoryChange}> 
                <option value="All">Filter by Category:</option>
                <option value="Necklace">Necklaces</option>
                <option value="Ring">Rings</option>
            </select>
        </div>
    )
}

export default Header;