import React, {Component} from 'react';
import './cardsummary.css';
class Cardsummary extends Component
{
    render(){
        return(
            <div className="CS-Container">
                <div className="CS-Image">
                    <img ng-src="https://cdn.anilist.co/img/dir/anime/reg/21127-JDu91CY9kHOI.jpg" 
                        src="https://cdn.anilist.co/img/dir/anime/reg/21127-JDu91CY9kHOI.jpg"/>
                </div>
                <div className="CS-Container-Label">
                    <div className="CS-Label-Title">Autor:</div>
                    <div className="CS-Label">Jack Nickelson</div>
                </div>
                <div className="CS-Container-Label">
                    <div className="CS-Label-Title">Type:</div>
                    <div className="CS-Label">TV</div>
                </div>
                <div className="CS-Container-Label">
                    <div className="CS-Label-Title">Episodes:</div>
                    <div className="CS-Label">23</div>
                </div>
                <div className="CS-Container-Label">
                    <div className="CS-Label-Title">Status:</div>
                    <div className="CS-Label">Not Yet Aired</div>
                </div>
                <div className="CS-Container-Label">
                    <div className="CS-Label-Title">Start:</div>
                    <div className="CS-Label">Apr 12, 2018</div>
                </div>
                <div className="CS-Container-Label">
                    <div className="CS-Label-Title">Season:</div>
                    <div className="CS-Label">Spring 2018</div>
                </div>
                <div className="CS-Container-Label">
                    <div className="CS-Label-Title">Popularity:</div>
                    <div className="CS-Label">4537</div>
                </div>
                <div className="CS-Container-Label">
                    <div className="CS-Label-Title">Main Studio:</div>
                    <div className="CS-Label">White Fox</div>
                </div>
                <div className="CS-Container-Label">
                    <div className="CS-Label-Title">Genres:</div>
                    <div className="CS-Label">Drama, Sci-Fi, Thriller</div>
                </div>
                <div className="CS-Container-Label">
                    <div className="CS-Label-Title">Hashtag:</div>
                    <div className="CS-Label">#RealAnime</div>
                </div>
                <div className="CS-Container-Label">
                    <div className="CS-Label-Title">Romaji:</div>
                    <div className="CS-Label">Stein Gate 0</div>
                </div>
                <div className="CS-Container-Label">
                    <div className="CS-Label-Title">Native:</div>
                    <div className="CS-Label">Japan</div>
                </div>
                <div className="CS-Footer">
                    <div className="CS-Footer-Button">Official Site</div>
                </div>
                <div className="CS-Footer">
                    <div className="CS-Footer-Network">Japan</div>
                </div>
            </div>
        );
    }
}

export default Cardsummary;