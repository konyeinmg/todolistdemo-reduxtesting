import React, {useState} from 'react';
import AddList from './components/AddList';
import Todolists from './components/Todolists';
import { useSelector, useDispatch } from 'react-redux';
import { addList, deleteList } from './redux/listSlice';

function App() {
  const [list, setList] = useState('');
  //const [lists, setLists] = useState([]);
  const lists = useSelector(state => state.lists);
  const dispatch = useDispatch();

  const generateId = () => Number((Math.random() * 100000).toFixed(0))

  const addingList = (event) => {
    event.preventDefault();
    const newList = {
      id: generateId(),
      name: list
    }
    dispatch(addList(newList));
    setList('');
  }

  const handleChange = (event) => {
    setList(event.target.value);
  }

  const deletingList = (index) => {
    const a = lists.filter(list => list.id !== index);
    dispatch(deleteList(a))
    //console.log(index);
  }

  return (
    <div className="App">
      <AddList add={addingList} list={list} onChange={handleChange}/>
      <Todolists lists = {lists} delete={deletingList}/>
    </div>
  );
}

export default App;
