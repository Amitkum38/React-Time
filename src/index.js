import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

let crentDate = new Date();
 crentDate = crentDate.getHours();
 let greeting = "";
 const stylecolor = { };

    if (crentDate >= 1 && crentDate < 11) {
        greeting ="Good morning";
        stylecolor.color= "Green"
      } else if (crentDate >=12 && crentDate < 19) {
        greeting ="Good Afternoon";
        stylecolor.color= "orange"
      } else {
        greeting ="Good Night";
        stylecolor.color= "black"
      }


ReactDom.render(
    <>
    <div className="greeting-main">
    <h1>Hello Sir, <span style={stylecolor}>{greeting}</span></h1>
    </div>
    </>,
    
document.getElementById('root')
);
