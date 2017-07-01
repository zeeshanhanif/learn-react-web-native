import React from 'react';

const Header = (props) => {
    const { viewStyle } = styles;
    return (
        <div style={viewStyle} >{props.headerText}</div>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        fontSize: 20,
        boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: 60,
        //paddingTop: 15,
        elevation: 2,
        position: 'relative'

    }
};

export default Header;
