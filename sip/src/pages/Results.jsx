import React from 'react';
import { Link } from 'react-router-dom';

// Mock data - in a real app, this would come from the backend
const resultData = {
  soilAnalysis: {
    status: 'Moderately Acidic',
    pH: 5.8,
    nitrogen: 'Low (20 ppm)',
    phosphorus: 'Medium (35 ppm)',
    potassium: 'High (150 ppm)',
  },
  recommendations: [
    {
      name: 'Lime (Calcium Carbonate)',
      amount: '2 lbs per acre',
      purpose: 'Adjust soil pH',
      priority: 'High',
    },
    {
      name: 'Urea (46-0-0)',
      amount: '150 lbs per acre',
      purpose: 'Address nitrogen deficiency',
      priority: 'High',
    },
    {
      name: 'Diammonium Phosphate (18-46-0)',
      amount: '50 lbs per acre',
      purpose: 'Maintain phosphorus levels',
      priority: 'Medium',
    },
    {
      name: 'Muriate of Potash (0-0-60)',
      amount: '100 lbs per acre',
      purpose: 'Improve potassium levels',
      priority: 'Medium',
    },
    {
      name: 'Gypsum (Calcium Sulfate)',
      amount: '500 lbs per acre',
      purpose: 'Improve soil structure and sulfur content',
      priority: 'Medium',
    },
    {
      name: 'Compost',
      amount: '3 lbs per acre',
      purpose: 'Enhance organic matter and microbial activity',
      priority: 'High',
    },
    {
      name: 'Ammonium Sulfate (21-0-0)',
      amount: '120 lbs per acre',
      purpose: 'Provide nitrogen and sulfur',
      priority: 'Medium',
    },
    {
      name: 'Rock Phosphate',
      amount: '200 lbs per acre',
      purpose: 'Slow-release phosphorus source',
      priority: 'Low',
    },
    {
      name: 'Sulfur Pellets',
      amount: '50 lbs per acre',
      purpose: 'Lower soil pH for better nutrient uptake',
      priority: 'Medium',
    },
    {
      name: 'Zinc Sulfate',
      amount: '10 lbs per acre',
      purpose: 'Address zinc deficiency',
      priority: 'Low',
    },
  ],
  applicationSchedule: [
    {
      fertilizer: 'Lime',
      timing: 'Apply immediately',
      method: 'Broadcast application and incorporate into soil',
    },
    {
      fertilizer: 'Urea',
      timing: 'Split application - 50% pre-planting, 25% mid-season, 25% before flowering',
      method: 'Side-dress or broadcast',
    },
    {
      fertilizer: 'Diammonium Phosphate',
      timing: 'Apply pre-planting',
      method: 'Broadcast and incorporate into soil',
    },
    {
      fertilizer: 'Compost',
      timing: 'Apply at the beginning of the growing season',
      method: 'Evenly spread and mix into the topsoil',
    },
    {
      fertilizer: 'Sulfur Pellets',
      timing: 'Apply mid-season if required',
      method: 'Side-dress around plants',
    }
  ],
};

const getRandomRecommendations = (recommendations, count) => {
  const shuffled = [...recommendations].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Results = () => {
  const selectedRecommendations = getRandomRecommendations(resultData.recommendations, 3);

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Fertilizer Recommendations</h1>
          <div className="text-sm text-gray-600">Generated on: Feb 27, 2025</div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-secondary-light p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-primary-dark">Current Soil Status</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="font-medium">{resultData.soilAnalysis.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">pH Level:</span>
                <span className="font-medium">{resultData.soilAnalysis.pH}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Nitrogen:</span>
                <span className="font-medium">{resultData.soilAnalysis.nitrogen}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Phosphorus:</span>
                <span className="font-medium">{resultData.soilAnalysis.phosphorus}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Potassium:</span>
                <span className="font-medium">{resultData.soilAnalysis.potassium}</span>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-xl font-bold mb-4">Selected Fertilizer Recommendations</h2>
        <ul className="space-y-3">
          {selectedRecommendations.map((rec, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">{rec.name}</h3>
              <p><strong>Amount:</strong> {rec.amount}</p>
              <p><strong>Purpose:</strong> {rec.purpose}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Results;