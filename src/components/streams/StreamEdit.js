import React from 'react';
import { connect } from 'react-redux';

 
class StreamEdit extends React.Component {
    render (){
        return(
            <div>
                Stream Edit
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return { 
        stream: null
    };
};

export default StreamEdit;
