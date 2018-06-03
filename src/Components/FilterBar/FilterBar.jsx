import React, {Component} from 'react';
import './FilterBar.css';
class FilterBar extends Component
{
    render(){
        return(
            <div className="Container">
                <div className="Filter-Container">
                    <span>Sort By: </span>
                    <select>
                        <option>Number #1</option>
                        <option>Number #2</option>
                        <option>Number #3</option>
                    </select>
                </div>
                <div className="Filter-Container">
                    <span>Year: </span>
                    <input type="date"></input>
                </div>
                <div className="Filter-Container">
                    <span>Status: </span>
                    <select>
                        <option>Number #1</option>
                        <option>Number #2</option>
                        <option>Number #3</option>
                    </select>
                </div>
                <div className="Filter-Container">
                    <span>Gener: </span>
                    <select>
                        <option>Number #1</option>
                        <option>Number #2</option>
                        <option>Number #3</option>
                    </select>
                </div>
                <div className="Filter-Search-Container">
                    <input placeholder="Search" type="text"></input>
                    <image className="Search-Image-Format" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png"></image>
                </div>
            </div>
        );
    }
}

export default FilterBar;