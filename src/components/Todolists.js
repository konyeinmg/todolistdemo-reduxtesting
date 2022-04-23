import React from 'react';

const Todolists =  (props) => {
    return (
        <div>
            <ul>
                {
                    props.lists.map((list) => (
                        <li key={list.id}>{list.name}<input type='button' onClick={() => props.delete(list.id)} value='Delete' /></li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Todolists;