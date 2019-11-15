import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'
import './App.css';
import Home from './components/Home'
import TopicForm from './components/TopicForm'
import TopicList from './components/TopicList'

function App() {
  return (
    <Router>
      <div>
        <h2 className='header'>Study Journal</h2>
        <Nav className="justify-content-center" activeKey="/">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" href="/topiclist">Topic List</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" href="/topicform">Topic Form</Nav.Link>
          </Nav.Item>

        </Nav>
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/topiclist' component={TopicList} />
          <Route path='/topicform' component={TopicForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
