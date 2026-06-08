import './About.css';

export default function About() {
  return (
    <div className="about section">
      <div className="container about-container">
        <h1 className="font-heading text-primary text-center about-title">About the Project<br/><span style={{fontSize: '1.5rem', display: 'block', marginTop: '0.5rem', color: 'var(--color-secondary)'}}>Về dự án</span></h1>
        
        <div className="about-content">
          <h2 className="font-heading text-secondary text-center mb-lg" style={{fontSize: '2.5rem', letterSpacing: '2px'}}>Vietnam Through Stamps</h2>
          
          <div className="editorial-content">
            <p>
              Vietnam Through Stamps is an independent cultural illustration project created by <strong>Trần Ngọc Minh Thông</strong>, with the mission of introducing the beauty of Vietnam through a unified collection of illustrated postage stamps.
            </p>
            <p>
              <em>Dự án minh họa văn hóa độc lập với sứ mệnh giới thiệu vẻ đẹp Việt Nam qua bộ sưu tập tem bưu chính minh họa.</em>
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
          
          <div className="about-slogan text-center mt-xl">
            <h3 className="font-heading text-primary" style={{fontSize: '2rem'}}>Discover Vietnam, One Stamp at a Time.</h3>
            <p className="font-heading text-secondary mt-sm" style={{fontSize: '1.4rem'}}>Khám phá Việt Nam qua từng con tem.</p>
          </div>

          <div className="about-author text-center mt-lg">
            <p className="text-muted" style={{fontSize: '1.1rem', fontStyle: 'italic'}}>
              — <strong>Trần Ngọc Minh Thông</strong><br/>
              Creator of Vietnam Through Stamps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
