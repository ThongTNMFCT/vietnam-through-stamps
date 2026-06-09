import './About.css';
import useSEO from '../hooks/useSEO';

export default function About() {
  useSEO({ title: 'About' });
  return (
    <div className="about section" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")' }}>
      <div className="container about-container">
        <h1 className="font-heading text-primary text-center about-title">
          About the Project
          <span style={{fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', display: 'block', marginTop: '0.5rem', color: 'var(--color-secondary)'}}>Về dự án</span>
        </h1>
        
        <div className="about-card">
          <h2 className="font-heading text-secondary text-center">Vietnam Through Stamps</h2>
          <div className="decorative-divider"></div>
          
          <div className="editorial-content">
            <p>
              Vietnam Through Stamps is an independent cultural illustration project created by <strong>Trần Ngọc Minh Thông</strong>, with the mission of introducing the beauty of Vietnam through a unified collection of illustrated postage stamps.
            </p>
            <p className="text-muted" style={{ fontStyle: 'italic', marginBottom: '2.5rem' }}>
              Dự án minh họa văn hóa độc lập với sứ mệnh giới thiệu vẻ đẹp Việt Nam qua bộ sưu tập tem bưu chính minh họa.
            </p>
            
            <p>
              Every stamp in the collection represents a story. Some tell the stories of people and traditions, while others celebrate landscapes, festivals, beliefs, cuisine, architecture, and everyday life. Together, they form a visual archive that invites audiences to discover Vietnam through art, one stamp at a time.
            </p>

            <p>
              Inspired by the timeless appeal of postage stamps, the project combines cultural storytelling with modern illustration. Each design follows a consistent visual language, transforming cultural heritage into collectible digital artworks that are accessible to audiences around the world.
            </p>

            <p>
              The collection is organized into thematic series, including Symbols of Vietnam, Living Heritage, Sacred Vietnam, Festivals of Vietnam, Vietnamese Cuisine, Traditional Crafts, Wonders of Vietnam, and Daily Life. Through these series, Vietnam Through Stamps seeks to document both the iconic and the ordinary elements that shape Vietnamese identity.
            </p>

            <p>
              This project is not affiliated with any postal authority. It is a personal cultural initiative dedicated to education, preservation, and appreciation of Vietnamese heritage.
            </p>

            <p>
              Whether you are discovering Vietnam for the first time or reconnecting with familiar memories, each stamp offers a small window into the country's rich history, traditions, and culture.
            </p>
          </div>
          
          <div className="about-slogan">
            <h3 className="font-heading text-primary">Discover Vietnam, One Stamp at a Time.</h3>
            <p className="font-heading text-secondary mt-sm" style={{fontSize: '1.2rem'}}>Khám phá Việt Nam qua từng con tem.</p>
          </div>

          <div className="about-author">
            <p className="font-heading text-primary" style={{fontSize: '1.5rem'}}>Trần Ngọc Minh Thông</p>
            <p className="text-muted" style={{fontSize: '1rem', fontStyle: 'italic', marginTop: '0.2rem'}}>
              Creator of Vietnam Through Stamps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
