import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { stamps, stampSeries } from '../data';
import StampCard from '../components/StampCard';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import useDocumentTitle from '../hooks/useDocumentTitle';
import './StampDetail.css';
import '../pages/About.css'; // Re-use the editorial drop-cap and divider

export default function StampDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const stamp = stamps.find(s => s.id === id);
  const [index, setIndex] = useState(-1);
  
  useDocumentTitle(stamp ? stamp.title : 'Stamp Not Found');

  if (!stamp) {
    return (
      <div className="container section text-center">
        <h1 className="font-heading text-primary">Stamp not found</h1>
        <Link to="/collection" className="btn mt-md">Back to Collection</Link>
      </div>
    );
  }

  const related = stamp.relatedStamps 
    ? stamps.filter(s => stamp.relatedStamps.includes(s.id))
    : [];

  return (
    <div className="stamp-detail pb-section">
      {/* Top Banner / Header Section */}
      <section className="stamp-focus">
        <div className="container stamp-focus-container">
          <div className="stamp-large-image-wrapper">
            {stamp.image ? (
              <img src={stamp.image} alt={stamp.title} className="stamp-large-image" />
            ) : (
              <div className="stamp-large-placeholder">Illustration</div>
            )}
          </div>
          <div className="stamp-header text-center mt-md">
            <span className="stamp-number-large text-secondary font-heading">{stamp.number}</span>
            <span className="stamp-series-link text-muted d-block mb-sm" style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>{stamp.seriesName}</span>
            <h1 className="stamp-title-large text-primary">{stamp.title}</h1>
            <p className="stamp-short-intro text-muted">{stamp.shortIntro}</p>
          </div>
        </div>
      </section>

      <div className="decorative-divider"></div>

      {/* Main Content: Story and Quick Facts */}
      <section className="container section stamp-content-layout border-top">
        <aside className="stamp-sidebar">
          <div className="quick-facts-card">
            <h3 className="font-heading text-secondary text-center" style={{marginBottom: '1.5rem', borderBottom: '1px dashed var(--color-border)', paddingBottom: '1rem'}}>Quick Facts</h3>
            <ul className="facts-list">
              <li><span className="fact-label text-muted">Category</span> <span className="fact-value font-heading">{stamp.quickFacts.Category}</span></li>
              <li><span className="fact-label text-muted">Country</span> <span className="fact-value font-heading">{stamp.quickFacts.Country}</span></li>
              <li><span className="fact-label text-muted">Significance</span> <span className="fact-value font-heading">{stamp.quickFacts.CulturalSignificance}</span></li>
              <li><span className="fact-label text-muted">Period</span> <span className="fact-value font-heading">{stamp.quickFacts.Period}</span></li>
              <li><span className="fact-label text-muted">Used For</span> <span className="fact-value font-heading">{stamp.quickFacts.UsedFor}</span></li>
            </ul>
          </div>
        </aside>

        <div className="stamp-story">
          {stamp.heroImage && (
            <div className="story-hero-image">
              <img src={stamp.heroImage} alt="Hero" className="img-fluid" />
            </div>
          )}
          <h2 className="font-heading text-primary story-main-title" style={{marginBottom: '0'}}>The Story Behind The Stamp</h2>
          <h3 className="font-heading text-secondary" style={{fontSize: '1.5rem', marginBottom: '2rem'}}>Câu chuyện phía sau con tem</h3>
          
          <div className="story-text editorial-content">
            {stamp.storySections.map((section, idx) => (
              <div key={idx} className="story-section">
                <h3 className="font-heading text-secondary">{section.title}</h3>
                {section.content.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
                
                {section.images && section.images.length > 0 && (
                  <div className="story-inline-images">
                    {section.images.map((imgUrl, imgIdx) => (
                      <div key={imgIdx} className="inline-image-wrapper">
                        <img src={imgUrl} alt={`Illustration for ${section.title}`} className="img-fluid" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="decorative-divider" style={{ marginTop: '4rem' }}></div>
        </div>
      </section>

      {/* Gallery Section */}
      {stamp.gallery && stamp.gallery.length > 0 && (
        <section className="container section gallery-section border-top">
          <h2 className="font-heading text-primary text-center gallery-title">Image Gallery</h2>
          <div className="gallery-grid">
            {stamp.gallery.map((img, idx) => (
              <div key={idx} className="gallery-item" onClick={() => setIndex(idx)}>
                <img src={img.src} alt={img.alt} className="gallery-img" />
              </div>
            ))}
          </div>
          
          <Lightbox
            index={index}
            open={index >= 0}
            close={() => setIndex(-1)}
            slides={stamp.gallery}
          />
        </section>
      )}

      {/* Related Stamps */}
      {related.length > 0 && (
        <section className="container section related-section border-top bg-light">
          <h2 className="font-heading text-primary text-center">More Stories From Vietnam</h2>
          <div className="grid mt-md">
            {related.map(rStamp => (
              <StampCard key={rStamp.id} stamp={rStamp} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
