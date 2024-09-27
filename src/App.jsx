import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import './styles/FeedbackForm.css';

const App = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    const addFeedback = (feedback) => {
        setFeedbacks([...feedbacks, feedback]);
    };

    return (
        <div className="App">
            <h1>Avaliação</h1>
            <FeedbackForm onSubmit={addFeedback} />
            <FeedbackList feedbacks={feedbacks} />
        </div>
    );
};

export default App;
