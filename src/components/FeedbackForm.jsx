import React, { useState } from 'react';
import '../styles/FeedbackForm.css';
import FeedbackList from './FeedbackList';

const FeedbackForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

    // Lista de feedbacks falsos
    const [feedbacks, setFeedbacks] = useState([
        { name: 'Maria', rating: 5, comment: 'Excelente serviço!' },
        { name: 'João', rating: 4, comment: 'Muito bom, mas poderia melhorar em alguns pontos.' },
        { name: 'Ana', rating: 3, comment: 'Foi razoável, esperava mais.' },
        { name: 'Carlos', rating: 5, comment: 'Serviço impecável, super recomendo!' },
        { name: 'Roberta', rating: 4, comment: 'Gostei bastante, mas o atendimento poderia ser mais rápido.' },
        { name: 'Pedro', rating: 2, comment: 'Não fiquei satisfeito, houve muitos atrasos no serviço.' },
        { name: 'Juliana', rating: 3, comment: 'Foi razoável, poderia melhorar em alguns aspectos.' },
        { name: 'Lucas', rating: 5, comment: 'Atendimento excelente, tudo perfeito!' },
        { name: 'Marta', rating: 1, comment: 'Muito insatisfeita, não atendeu minhas expectativas.' },
        { name: 'Valentina', rating: 5, comment: 'Achei incrível!' }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && rating && comment) {
            const feedback = { name, rating, comment };
            setFeedbacks([feedback, ...feedbacks]); 
            onSubmit(feedback);
            setName('');
            setRating(0);
            setComment('');
            setFeedbackSubmitted(true); 
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    return (
        <>
            {feedbackSubmitted ? (
                <div className="thank-you-message">
                    <h2>Obrigado pela sua avaliação!</h2>
                    <p>Agradecemos por compartilhar sua opinião. Sua avaliação é muito importante para nós.</p>
                    <button onClick={() => setFeedbackSubmitted(false)}>Enviar nova avaliação</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="feedback-form">
                    <div>
                        <label htmlFor="name">Nome:</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Insira seu nome" 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="rating">Avaliação:</label>
                        <div className="star-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star 
                                    key={star} 
                                    index={star} 
                                    rating={rating} 
                                    handleRating={setRating} 
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="comment">Comentário:</label>
                        <textarea 
                            id="comment" 
                            value={comment} 
                            onChange={(e) => setComment(e.target.value)} 
                            placeholder="Nos conte sua opinião..." 
                            required 
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            )}

            {}
            <FeedbackList feedbacks={feedbacks} />
        </>
    );
};

const Star = ({ index, rating, handleRating }) => {
    const isFilled = index <= rating;

    return (
        <span 
            className={`star ${isFilled ? 'filled' : ''}`} 
            onClick={() => handleRating(index)}
            role="button"
        >
            ★
        </span>
    );
    
};

export default FeedbackForm;
