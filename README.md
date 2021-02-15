# react_studies
npm install -g create-react-app
create-react-app my-app
cd my-app/
npm start

We don't add any more htmls files to this code.

installing eslint:
npm install -g eslint
npx eslint --init
Stopping the no unused variable:
npm install --save-dev eslint-plugin-react


Restrictions in JSX:
<div class="App"> 
it isn't html, class that can be used in normal css, can't be used in JSX, because it's a reserved word in JS 
we have to use "className"
<div className="App">


it will be translated to class in the DOM.
It's a best pratice to wrap everything in one root element, like the div we used in App.js
if you try to use like, a h1 tag outside of it, it won't work.
It's possible with React 16 to use json elements at the end tho.

props and state are CORE concepts of React. Only changes in props and/ or state trigger Reacts to re-render your components
and potentially update the DOM.

Props allow you to pass data from a parent (Wrapping) component to a child (embedded) component and trigger an UI update.

State is used to change the component, well, state from within. Changes to state also trigger an UI update.
Whenever state  changes (taught over the next lectures), the component will re-render and reflect the new state. 
The difference to props  is, that this happens within one and the same component - you don't receive 
new data ( props ) from outside!

Events that you can listen using React: https://reactjs.org/docs/events.html#supported-events