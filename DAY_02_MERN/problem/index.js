// Import necessary modules
const fs = require('fs').promises;
const fetch = require('node-fetch')

// Function to read a file asynchronously
async function readFile(filename) {
  try {
    const data = await fs.readFile(filename, 'utf8');
    return data;
  } catch (error) {
    throw error;
  }
}

// Function to aggregate data from multiple files asynchronously
async function aggregateData(files) {
  let aggregatedData = '';

  for (const file of files) {
    try {
      const data = await readFile(file);
      aggregatedData += data;
    } catch (error) {
      throw error;
    }
  }

  return aggregatedData;
}

// Function to fetch data from a public API asynchronously
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

// Example usage of aggregateData function
const files = ['file1.txt', 'file2.txt', 'file3.txt'];
aggregateData(files)
  .then((data) => {
    console.log('Aggregated data:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// Example usage of fetchData function
fetchData()
  .then((data) => {
    console.log('API Response:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
