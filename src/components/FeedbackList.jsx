import React from 'react';
import '../styles/FeedbackList.css';

const FeedbackList = ({ feedbacks }) => {
    if (feedbacks.length === 0) {
        return null;
    }
    

    return (
        <div className="feedback-list-container">
            <h2>Feedbacks:</h2>
            <ul className="feedback-list">
                {feedbacks.map((feedback, index) => (
                    <li key={index} className="feedback-item">
                        <p>
                            <strong>{feedback.name}</strong>
                            <span className="star-rating">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <Star 
                                        key={i} 
                                        index={i + 1} 
                                        rating={feedback.rating} 
                                    />
                                ))}
                            </span>
                        </p>
                        <p>{feedback.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Star = ({ index, rating }) => {
    const isFilled = index <= rating;

    return (
        <span className={`star ${isFilled ? 'filled' : ''}`}>
            ★
        </span>
    );
};

export default FeedbackList;
