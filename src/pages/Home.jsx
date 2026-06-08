import { Link } from 'react-router-dom';
import SeriesCard from '../components/SeriesCard';
import { stampSeries } from '../data';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-stamp-wrapper">
             {/* Centerpiece: A large beautifully displayed postage stamp. */}
             <div className="hero-stamp">
               <img src="/images/stamps/001-aodai.jpg" alt="Vietnam Through Stamps" />
             </div>
          </div>
          
          <h1 className="hero-title">Vietnam Through Stamps</h1>
          <p className="hero-subtitle">
            Explore the stories, traditions, heritage, and everyday beauty of Vietnam through illustrated stamps.
          </p>
          <div className="hero-buttons">
            <Link to="/collection" className="btn hero-btn">Explore Collection</Link>
            <Link to="/about" className="btn btn-secondary hero-btn">About The Project</Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro section">
        <div className="container text-center intro-container">
          <h2 className="font-heading text-primary intro-title">What is Vietnam Through Stamps?</h2>
          <h3 className="font-heading text-secondary" style={{fontSize: '1.6rem', marginTop: '-1rem', marginBottom: '2rem'}}>Việt Nam Qua Những Con Tem là gì?</h3>
          <div className="intro-text text-muted">
            <p>Vietnam Through Stamps is an ongoing cultural storytelling project that presents Vietnam through a growing collection of illustrated stamps.</p>
            <p>Each stamp highlights a symbol, tradition, festival, place, food, or cultural practice that helps shape Vietnamese identity.</p>
            <p className="intro-slogan font-heading">
              <strong>Every stamp tells a story.</strong><br/>
              <strong>Every story reveals a piece of Vietnam.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Series Section */}
      <section className="series section bg-light">
        <div className="container">
          <h2 className="text-center font-heading text-primary section-title" style={{marginBottom: '0.5rem'}}>Explore by Series</h2>
          <h3 className="text-center font-heading text-secondary" style={{fontSize: '1.5rem', marginBottom: '4rem'}}>Khám phá theo Chủ đề</h3>
          <div className="grid">
            {stampSeries.map(series => (
              <SeriesCard key={series.id} series={series} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
