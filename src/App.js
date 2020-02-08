import React from 'react';
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import ParentLogForm from "./components/parent-log-form";
import './App.scss';

function App() {
    return (
        <Router>
            <section className="app">
                <header className={'app--header'}>
                    Daily Infant Log
                </header>
                <aside className={'app--aside'}>
                    <ul>
                        <li>
                            <Link to={'/log/parent/create'}>Parent's Log</Link>
                        </li>
                        <li>
                            <Link to={'/log/things-to-bring/create'}>Things to bring</Link>
                        </li>
                        <li>
                            <Link to={'/log/teacher/create'}>Teacher's Log</Link>
                        </li>
                    </ul>
                </aside>
                <main className={'app--main'}>
                    Main Content
                    <ParentLogForm/>
                </main>
                <footer className={'app--footer'}>
                    Copyright, Terms of use, Privacy Policy etc
                </footer>
            </section>
        </Router>
    );
}

export default App;