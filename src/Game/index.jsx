import React, { useState } from 'react';
import {Plan} from '../Plan.jsx'
import {Sidebar} from '../Sidebar/index.jsx'

export const Game = ({state, setState}) => {

  return (<>
   <Plan state={state} />
   <Sidebar state={state} setState={setState}/>
  </>)
} 