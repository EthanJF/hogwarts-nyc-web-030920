import React from "react"

const FilterHogs = (props) => {
    return(
        <div>
            <h3>Filter By:</h3>
            <h4>Greased?</h4>
            <button onClick={props.changeGreasedFilter}>{props.isGreased ? "true" : "false"}</button>
            <h4>Name/Weight?</h4>
            <select onChange={props.changeSortFilter}>
                <option value="">None</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    )
}

export default FilterHogs