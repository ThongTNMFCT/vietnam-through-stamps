import { Link } from 'react-router-dom';
import './SeriesCard.css';

export default function SeriesCard({ series }) {
  const isAvailable = series.status === 'Available';
  
  const content = (
    <>
      <div className="series-card-image">
        {series.coverImage ? (
          <img src={series.coverImage} alt={series.name} className={!isAvailable ? 'grayscale' : ''} />
        ) : (
          <div className="image-placeholder">Series Cover</div>
        )}
        <div className={`status-badge ${isAvailable ? 'status-available' : 'status-coming-soon'}`}>
          {series.status}
        </div>
      </div>
      <div className="series-card-content">
        <h3 className="font-heading text-primary">{series.name}</h3>
        {series.vietnameseName && (
          <h4 className="font-heading text-secondary series-vietnamese-name" style={{ fontSize: '1.1rem', marginTop: '-0.3rem', marginBottom: '0.5rem', opacity: 0.9 }}>
            {series.vietnameseName}
          </h4>
        )}
        <p className="text-muted series-desc">{series.description}</p>
        {isAvailable && (
          <span className="series-count text-secondary font-heading">Explore Series</span>
        )}
      </div>
    </>
  );

  if (isAvailable) {
    return (
      <Link to={`/collection?series=${series.id}`} className="card series-card">
        {content}
      </Link>
    );
  }

  // Non-clickable if coming soon
  return (
    <div className="card series-card disabled">
      {content}
    </div>
  );
}
