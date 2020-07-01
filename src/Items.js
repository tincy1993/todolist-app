import React from 'react';

const Items = (props) => {
    
    return (
        <>
            <li className="list">
                {props.text}
                <span className="edit-icon" onClick={()=>{
                    props.onEdit(props.id)
                }}>
                <i className="fa fa-edit"></i>
                </span>
                <span  className="delete-icon" onClick={()=> {
                    props.onDelete(props.id)
                }}>
                    <i className="fa fa-times"></i>
                </span>
            </li>
        </>
    )
}

export default  Items;