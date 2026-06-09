import { useState, useEffect } from 'react';
import StampCard from '../components/StampCard';
import { stamps } from '../data';
import { Search } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import './Collection.css';

export default function Collection() {
  useSEO({ title: 'The Collection' });
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStamps, setFilteredStamps] = useState(stamps);

  useEffect(() => {
    let result = stamps;
    
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      result = result.filter(stamp => 
        stamp.title.toLowerCase().includes(lowercasedTerm) || 
        stamp.number.includes(lowercasedTerm) ||
        stamp.seriesName.toLowerCase().includes(lowercasedTerm)
      );
    }
    
    setFilteredStamps(result);
  }, [searchTerm]);

  return (
    <div className="collection section">
      <div className="container">
        <h1 className="text-center font-heading text-primary page-title">The Collection</h1>
        
        <div className="search-box" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Search className="search-icon" size={20} />
          <input 
            type="text" 
            placeholder="Search by keyword, number, or series..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="results-count text-muted">
          Showing {filteredStamps.length} stamp{filteredStamps.length !== 1 ? 's' : ''}
        </div>

        {filteredStamps.length > 0 ? (
          <div className="grid">
            {filteredStamps.map(stamp => (
              <StampCard key={stamp.id} stamp={stamp} />
            ))}
          </div>
        ) : (
          <div className="no-results text-center">
            <h3 className="font-heading text-primary">No stamps found</h3>
            <p className="text-muted">Try adjusting your search or filters.</p>
            <button className="btn mt-md" onClick={() => setSearchTerm('')}>Clear Search</button>
          </div>
        )}
      </div>
    </div>
  );
}
