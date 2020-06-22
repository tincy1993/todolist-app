import React from 'react'
import './ListItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return (
            <div className="list" key={item.key}>
                <p>
                    <input type="text" 
                           value={item.text} 
                           id={item.key}
                           onChange={
                            (e) => {
                                props.setUpdate(e.target.value, item.key)
                            }
                           }/>
                    <span>
                        <FontAwesomeIcon className="faicons" icon='trash' 
                        onClick={ () => props.deleteItem(item.key)}/>
                    </span>
                </p>
            </div>        
        )
    })
    return (
    <>
        <FlipMove duration={300} easing="ease-in-out">
            {listItems}
        </FlipMove>
    </>
    )
}

export default ListItems
