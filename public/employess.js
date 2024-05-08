let sally = 'Sally Smith';
let mark = 'Mark Martin';
let holly = 'Holly Unlikely';
let david = 'David miller';
let john = 'John N';
let steve = 'Steve Maxwell';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, david), /*#__PURE__*/React.createElement("li", null, john), /*#__PURE__*/React.createElement("li", null, steve), /*#__PURE__*/React.createElement("li", null, steve));
ReactDOM.render(element, document.getElementById('content'));