import React, {useState} from 'react';
import AddList from './components/AddList';
import Todolists from './components/Todolists';

function App() {
  const [list, setList] = useState();
  const [lists, setLists] = useState([]);

  const addList = (event) => {
    event.preventDefault();
    setList(list);
    setLists(lists.concat(list));
    setList('');
  }

  const handleChange = (event) => {
    setList(event.target.value);
  }

  const deleteList = (index) => {
    console.log(index);
  }

  return (
    <div className="App">
      <AddList add={addList} list={list} onChange={handleChange}/>
      <Todolists lists = {lists} delete={deleteList}/>
    </div>
  );
}

export default App;
