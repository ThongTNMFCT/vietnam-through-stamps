import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import StampCard from '../components/StampCard';
import { stamps, stampSeries } from '../data';
import { Search } from 'lucide-react';
import './Collection.css';

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSeries = searchParams.get('series') || 'all';
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeries, setSelectedSeries] = useState(initialSeries);
  const [filteredStamps, setFilteredStamps] = useState(stamps);

  useEffect(() => {
    let result = stamps;
    
    if (selectedSeries !== 'all') {
      result = result.filter(stamp => stamp.seriesId === selectedSeries);
    }
    
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      result = result.filter(stamp => 
        stamp.title.toLowerCase().includes(lowercasedTerm) || 
        stamp.number.includes(lowercasedTerm)
      );
    }
    
    setFilteredStamps(result);
  }, [searchTerm, selectedSeries]);

  const handleSeriesChange = (e) => {
    const value = e.target.value;
    setSelectedSeries(value);
    
    if (value === 'all') {
      searchParams.delete('series');
    } else {
      searchParams.set('series', value);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="collection section">
      <div className="container">
        <h1 className="text-center font-heading text-primary page-title">The Collection</h1>
        
        <div className="filters-container">
          <div className="search-box">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search by keyword or number..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-box">
            <select 
              value={selectedSeries} 
              onChange={handleSeriesChange}
              className="filter-select font-heading"
            >
              <option value="all">All Series</option>
              {stampSeries.map(series => (
                <option key={series.id} value={series.id}>{series.name}</option>
              ))}
            </select>
          </div>
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
            <button className="btn mt-md" onClick={() => {setSearchTerm(''); setSelectedSeries('all');}}>Clear Filters</button>
          </div>
        )}
      </div>
    </div>
  );
}
