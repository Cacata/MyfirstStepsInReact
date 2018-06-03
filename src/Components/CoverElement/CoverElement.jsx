import React, {Component} from 'react';
import './CoverElement.css';
class CoverElement extends Component
{
    render(){
        return(
            <div className="Container">
                <div className="Container-Footer">
                    <strong className="Container-Footer-Content">Death Note</strong>
                    <p>Episodie #2</p>
                </div>
            </div>
        );
    }
}

export default CoverElement;