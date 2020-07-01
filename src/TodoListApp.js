import React, {useState} from 'react';
import Items from './Items';
import './App.css';
import './ListItems.css';
const TodoListApp = () => {

    const [inputSet, setinputState] = useState("");
    const [items, setitems] = useState([]);
    const [activeIndex, setactiveIndex] = useState(null)

    const handleInput = (event) => {
        setinputState(event.target.value)
    }

    const addItems = () => {
        if(inputSet == ""){
            return 
        }
        if (activeIndex == null){
            setitems((oldItems) => {
                return [...oldItems, inputSet]
            })
        }else {
            setitems((oldItems) => {
                oldItems[activeIndex] = inputSet
                return oldItems
            })
        }
        
        setinputState('')
        setactiveIndex(null)
    }

    const deleteItems = (id) => {
        setitems((oldItems)=> {
            return oldItems.filter((arrayElement, index)=>{
                return index!==id
            })
        })
    }

    const editItems = (index) => {
        setinputState(items[index])
        setactiveIndex(index)
    }

    return ( 
        <>
            <div className="app-container">
               <h5>ToDO List</h5>
               <input 
                    type="text" 
                    placeholder="Add item"
                    onChange={handleInput}
                    value={inputSet}
                    />
                <button onClick={addItems}>Add Item</button>
                <ul className="list-items-container">
                        {items.map( ( itemVal, index ) => {
                           return <Items 
                                key={index} 
                                id={index} 
                                text={itemVal}
                                onEdit={editItems}
                                onDelete={deleteItems}
                                />
                        })}
                </ul>
            </div>
        </>
    )

}

export default TodoListApp;