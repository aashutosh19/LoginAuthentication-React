import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const test = <div> Hello!</div> // jsx can be a variable

const App = () => {
  //pass in default value into useState
  const [note, setNote] = React.useState(''); //create state variable + setter
  const [notes,setNotes] = React.useState([]); //display array of notes entered by user.

  const fetchNotes = () =>{
    //utility function to fetch all the notes
    axios.get('/api/getAllNotes')
    .then((res) => {
      console.log(res);
      setNotes(res.data.notes);

    })
    .catch(console.log);

  };
  
  const submitNote = () =>{
    console.log(note);

    //axios is used to connect frontend to spark(backend)
    //post is used to send larger data to server
    const body = {
      note: note
    };
    axios.post('/api/addNote', body)
    .then(() => setNote(''))
    .then(() => fetchNotes()) //fetch after submit
    .catch(console.log);
  };

  // //To avoid data loss during refresh or tab close
  // React.useEffect(() => {
  //   fetchNotes();
  // }, []); //Passing empty array

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>
           <input value = {note} onChange = {(e => setNote(e.target.value))}/>
          </div>
          <div>
            <button onClick = {submitNote}> Add note</button>
            <Switch>
       <Route path = "/login">
         <Home />
       </Route>
       <Route path = "/">
         <Login />
       </Route>
     </Switch>

     <nav>
       <Link to = "/">Home</Link> <br />
       <Link to = "/Login">Login</Link>
       </nav>
          </div>
          <div>
            { notes.map((item)=>{
              //convert array item to an element
              return (
                <div>
                  {item}
                  </div>
              );
            }) }
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
