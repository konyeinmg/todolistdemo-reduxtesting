import React from 'react';

const Todolists = (props) => {
    let lists = props.lists;
    if (lists !== undefined) {
        return (
            <div>
                <ul>
                    {
                        lists.map((list) => (
                            <li key={list.id}>{list.name}<input type='button' onClick={() => props.delete(list.id)} value='Delete' /></li>
                        ))
                    }
                </ul>
            </div>

        );
    }
    else {
        return (
            <div>
                <p>No List</p>
            </div>
        );
    }

};

export default Todolists;