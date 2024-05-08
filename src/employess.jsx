let sally = 'Sally Smith'
let mark = 'Mark Martin'
let holly = 'Holly Unlikely'
let david = 'David miller'
let john = 'John N'
let steve = 'Steve Maxwell'
const element = (
    <ul style={{'color':'blue', 'fontSize': '24px'}}>
        <li>{sally}</li>
        <li>{mark}</li>
        <li>{holly}</li>
        <li>{david}</li>
        <li>{john}</li>
        <li>{steve}</li>
        <li>{steve}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))