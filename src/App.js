import React, {useState} from 'react';
import AddList from './components/AddList';
import Todolists from './components/Todolists';

function App() {
  const [list, setList] = useState();
  const [lists, setLists] = useState([]);

  const addList = (event) => {
    event.preventDefault();
    setList(list);
    const newList = {
      id: lists.length + 1,
      name: list
    }
    setLists(lists.concat(newList));
    setList('');
  }

  const handleChange = (event) => {
    setList(event.target.value);
  }

  const deleteList = (index) => {
    const a = lists.filter(list => list.id !== index);
    setLists(a);
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
