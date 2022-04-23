import React from 'react';

const Todolists =  (props) => {
    return (
        <div>
            <ul>
                {
                    props.lists.map((list,index) => (
                        <li key={index}>{list}<input type='button' onClick={() => props.delete(index)} value='Delete' /></li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Todolists;