import React from 'react';

const person = (props) => { //object with all the properties (attributes you added at the tag)
    return (
        <div>
            <p> Im {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p> 
        </div>
    )
    /*We are using simple text, but it could really be anything here, even other react objects as children*/
}

export default person;