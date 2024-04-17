import React, { useState, useMemo } from 'react';

const HeavyComputationComponent = ({ items }) => {
  const [filter, setFilter] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  // Memoized computation using useMemo
  const filteredResult = useMemo(() => {
    if (!items || items.length === 0) {
      return [];
    }
    console.log('Performing expensive computation...');
    return items.filter((item) => item.includes(filter));
  }, [items, filter]);

  // Handler for filter input change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Update filtered items when filter or items change
  useState(() => {
    setFilteredItems(filteredResult);
  }, [filteredResult]);

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Enter filter term"
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HeavyComputationComponent;
