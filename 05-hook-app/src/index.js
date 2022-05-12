import React from 'react';
import {createRoot} from 'react-dom/client';
//import { CounterApp } from './components/01-useState/CounterApp';
//import { CounterWithCustomHooks } from './components/01-useState/CounterWithCustomHooks';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import '../src/components/02-useEffect/effects.css'
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { Layout } from './components/05-useLayoutEffect/Layout';
//import { MemoHook } from './components/06-memo/MemoHooks';
// import { CallbackHook } from './components/06-memo/CallbackHook';
import { Padre } from './components/07-tarea-memo/Padre';
//import { HookApp } from './HookApp';




const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Padre/>);
