import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { stampSeries, stamps } from '../data';
import StampCard from '../components/StampCard';
import { ArrowLeft } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './SeriesDetail.css';

export default function SeriesDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const series = stampSeries.find(s => s.id === id);
  
  useDocumentTitle(series ? series.name : 'Series Not Found');
  
  // Scroll to top when loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!series) {
    return (
      <div className="section container text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 className="font-heading text-primary">Series Not Found</h1>
        <p className="text-muted mb-lg">The collection you are looking for does not exist or has been moved.</p>
        <button className="btn" onClick={() => navigate('/')}>Return Home</button>
      </div>
    );
  }

  const seriesStamps = stamps.filter(stamp => stamp.seriesId === series.id);
  const isAvailable = series.status === 'Available';

  return (
    <div className="series-detail-page">
      {/* Editorial Magazine Hero */}
      <div className="series-editorial-hero" style={{ '--theme-color': series.themeColor || 'var(--color-primary)' }}>
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>

          <div className="editorial-layout no-image">
            {/* Rich Typography */}
            <div className="editorial-text-column">
              <span className="series-status-pill" style={{ backgroundColor: series.themeColor, color: 'white' }}>
                {series.status}
              </span>
              
              <h1 className="font-heading editorial-title" style={{ color: series.themeColor }}>
                {series.name.split('—')[1]?.trim() || series.name}
              </h1>
              
              <div className="editorial-meta">
                <span className="editorial-number font-heading text-muted">
                  {series.name.split('—')[0]?.trim() || ''}
                </span>
                {series.vietnameseName && (
                  <h2 className="font-heading editorial-subtitle">{series.vietnameseName}</h2>
                )}
              </div>
              
              <div className="editorial-intro">
                {series.longDescriptionHtml ? (
                  <div 
                    className="series-long-description" 
                    dangerouslySetInnerHTML={{ __html: series.longDescriptionHtml }} 
                  />
                ) : (
                  <p className="series-description">{series.description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="series-main-content section">
        <div className="container">
          
          {isAvailable ? (
            <>
              <div className="series-stats">
                <h3 className="font-heading" style={{ color: series.themeColor }}>
                  Explore Collection
                </h3>
                <span className="text-muted">{seriesStamps.length} Stamp{seriesStamps.length !== 1 ? 's' : ''}</span>
              </div>
              
              {seriesStamps.length > 0 ? (
                <div className="grid">
                  {seriesStamps.map(stamp => (
                    <StampCard key={stamp.id} stamp={stamp} />
                  ))}
                </div>
              ) : (
                <div className="empty-series text-center py-xl">
                  <p className="text-muted">No stamps have been added to this collection yet.</p>
                </div>
              )}
            </>
          ) : (
            <div className="coming-soon-banner" style={{ borderColor: series.themeColor }}>
              <div className="coming-soon-icon" style={{ color: series.themeColor }}>⏳</div>
              <h3 className="font-heading">Curating This Collection</h3>
              <p className="text-muted">
                Our team is currently preparing the stamps and stories for the <strong>{series.name.split('—')[1]?.trim() || series.name}</strong> series. 
                Please check back soon to explore this beautiful aspect of Vietnamese culture.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
