import React, { useState, useEffect } from 'react';

const FlowerAnimation = ({ recipientName }) => {
  const [showFlower, setShowFlower] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFlower(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!showFlower) return null;

  return (
    <div className="flower-overlay">
      <div className="flower-container">
        <svg className="flower" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {/* Petals */}
          <circle className="petal petal1" cx="100" cy="40" r="25" fill="#FF69B4" />
          <circle className="petal petal2" cx="140" cy="60" r="25" fill="#FF1493" />
          <circle className="petal petal3" cx="160" cy="100" r="25" fill="#FF69B4" />
          <circle className="petal petal4" cx="140" cy="140" r="25" fill="#FF1493" />
          <circle className="petal petal5" cx="100" cy="160" r="25" fill="#FF69B4" />
          <circle className="petal petal6" cx="60" cy="140" r="25" fill="#FF1493" />
          <circle className="petal petal7" cx="40" cy="100" r="25" fill="#FF69B4" />
          <circle className="petal petal8" cx="60" cy="60" r="25" fill="#FF1493" />
          
          {/* Center */}
          <circle cx="100" cy="100" r="20" fill="#FFD700" />
        </svg>
        
        <h2 className="flower-text">Happy Birthday {recipientName}!</h2>
        <p className="flower-subtext">🎉 Mubbara 🎉</p>
      </div>
    </div>
  );
};

export default function App() {
  const [wishes, setWishes] = useState([]);
  const [recipientName, setRecipientName] = useState('');
  const [senderName, setSenderName] = useState('');
  const [wishMessage, setWishMessage] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [showFlowerAnimation, setShowFlowerAnimation] = useState(false);
  const [lastRecipient, setLastRecipient] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (recipientName.trim() && senderName.trim() && wishMessage.trim()) {
      const newWish = {
        id: Date.now(),
        recipient: recipientName,
        sender: senderName,
        message: wishMessage,
        date: new Date().toLocaleDateString(),
      };
      
      setWishes([newWish, ...wishes]);
      setLastRecipient(recipientName);
      setShowFlowerAnimation(true);
      
      setTimeout(() => {
        setRecipientName('');
        setSenderName('');
        setWishMessage('');
        setShowForm(false);
      }, 500);
    }
  };

  const handleAddNew = () => {
    setRecipientName('');
    setSenderName('');
    setWishMessage('');
    setShowForm(true);
  };

  const deleteWish = (id) => {
    setWishes(wishes.filter(wish => wish.id !== id));
  };

  return (
    <>
      {showFlowerAnimation && <FlowerAnimation recipientName={lastRecipient} />}
      <div className="container">
        <div className="header">
          <h1>🎂 Birthday Wishes 🎉</h1>
          <p>Share birthday wishes with your loved ones</p>
        </div>

      {showForm ? (
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="recipient">Birthday Person's Name:</label>
            <input
              id="recipient"
              type="text"
              placeholder="Enter recipient's name"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="sender">Your Name:</label>
            <input
              id="sender"
              type="text"
              placeholder="Enter your name"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Birthday Wish:</label>
            <textarea
              id="message"
              placeholder="Write your birthday wish here..."
              value={wishMessage}
              onChange={(e) => setWishMessage(e.target.value)}
              rows="5"
              required
            ></textarea>
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn btn-primary">
              Send Wish 💌
            </button>
            {wishes.length > 0 && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowForm(false)}
              >
                View Wishes
              </button>
            )}
          </div>
        </form>
      ) : (
        <div className="wishes-container">
          {wishes.length === 0 ? (
            <p className="no-wishes">No wishes yet. Start by creating one!</p>
          ) : (
            <div>
              <h2>Birthday Wishes ({wishes.length})</h2>
              <div className="wishes-list">
                {wishes.map((wish) => (
                  <div key={wish.id} className="wish-card">
                    <div className="wish-header">
                      <h3>🎈 Happy Birthday {wish.recipient}! 🎈</h3>
                    </div>
                    <p className="wish-message">{wish.message}</p>
                    <div className="wish-footer">
                      <span className="wish-from">- {wish.sender}</span>
                      <span className="wish-date">{wish.date}</span>
                    </div>
                    <button
                      className="btn-delete"
                      onClick={() => deleteWish(wish.id)}
                      title="Delete this wish"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="view-buttons">
            <button className="btn btn-primary" onClick={handleAddNew}>
              Add New Wish ➕
            </button>
          </div>
        </div>
      )}
      </div>
    </>
  );
}
