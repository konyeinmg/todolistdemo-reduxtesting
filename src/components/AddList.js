import React from 'react';

const AddList = (props) => {
    return (
        <div>
            <form onSubmit={props.add}>
                <input type='text' name='listname' value={props.list} onChange={props.onChange}/>
                <input type='submit' value='Add' />
            </form>
        </div>
    )
}

export default AddList;