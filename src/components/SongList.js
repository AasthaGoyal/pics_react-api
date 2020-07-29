import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectSong} from '../actions';


class SongList extends Component {

    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title} >
                    <div className="right floated content">
                        <button 
                        className="ui button primary"  onClick={() => this.props.selectSong(song)}
                        > 
                            Select
                        </button>
                    </div>

                    <div className="content"> {song.title} </div>
                </div>
            );
        });
    }   

    render() {
        return <div className="ui divided list"> {this.renderList()}</div>;
    }
}

//gets called with all the data inside the redux store
const mapStateToProps = state => {
    return {songs:state.songs} ;
}

//the connection fucntion is gonna take the action creator and automaticaly pass it to the dispatch fucntion
//this is the way to pass the action creater in the component
export default connect(mapStateToProps, {selectSong}) (SongList);
