import React from 'react';  
import './Header.css';  
import DisplayDropdown from '../Dropdowns/Dropdown';

function Header({ grouping, setGrouping, ordering, setOrdering }) {  
    return (  
        <header>  
            <DisplayDropdown   
                grouping={grouping}   
                setGrouping={setGrouping}   
                ordering={ordering}   
                setOrdering={setOrdering}   
            />  
        </header>  
    );  
}  

export default Header;