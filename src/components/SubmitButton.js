import React from 'react';

export default function SubmitButton(props) {
  //console.log('filter', props)
  return (
    <div className='submit-button'>
      <button onClick={props.onClick}>Submit</button>
    </div>
  );
}
