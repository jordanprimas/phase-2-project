import react, {useState} from "react";

const Header = ({onCategoryChange}) => {
    return (
        <div>
            <select name="filter" onChange={onCategoryChange}> 
                <option value="All">Filter by Category:</option>
                <option value="Necklaces">Necklaces</option>
                <option value="Rings">Rings</option>
            </select>
        </div>
    )
}

export default Header;