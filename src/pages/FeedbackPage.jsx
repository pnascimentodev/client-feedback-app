import React, { useState } from 'react';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';
import feedbackData from '../data/feedbackData';

const FeedbackPage = () => {
    const [feedbacks, setFeedbacks] = useState(feedbackData);

    const addFeedback = (newFeedback) => {
        setFeedbacks([...feedbacks, newFeedback]);
    };

    return (
        <div>
            <FeedbackForm onSubmit={addFeedback} />
            <FeedbackList feedbacks={feedbacks} />
        </div>
    );
};

export default FeedbackPage;
