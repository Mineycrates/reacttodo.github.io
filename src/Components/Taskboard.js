import React from 'react';
import 'semantic-ui-css/semantic.min.css';

export default function Todo (props) {
      
    return (
        <>
          <li className='row p-3 hover:bg-gray-100 duration-300'>
          <input type="checkbox" id = {props.id} name={'task_'+props.id} onClick = { (e) => { props.onchange(e) } } onChange = {(e) => {}} className='m-2 flex-start checked:bg-green-500' defaultChecked={props.completed}></input>
          <label htmlFor={props.id}> {props.name} - {props.status} </label>
          </li>
        </>
    );
}