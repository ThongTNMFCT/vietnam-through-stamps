import { Link } from 'react-router-dom';
import './StampCard.css';

export default function StampCard({ stamp }) {
  const isAvailable = stamp.status === 'Available';

  const content = (
    <>
      <div className="stamp-card-image">
        {stamp.image ? (
          <img src={stamp.image} alt={stamp.title} className={!isAvailable ? 'grayscale' : ''} />
        ) : (
          <div className="image-placeholder">{isAvailable ? 'Illustration' : 'TBA'}</div>
        )}
        {!isAvailable && (
          <div className="stamp-status-overlay">
            <span>Coming Soon</span>
          </div>
        )}
      </div>
      <div className="stamp-card-content">
        <span className="stamp-number font-heading text-secondary">{stamp.number}</span>
        <h3 className="stamp-title font-heading">{stamp.title}</h3>
      </div>
    </>
  );

  if (isAvailable) {
    return (
      <Link to={`/stamp/${stamp.id}`} className="card stamp-card">
        {content}
      </Link>
    );
  }

  return (
    <div className="card stamp-card disabled">
      {content}
    </div>
  );
}
