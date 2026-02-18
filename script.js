// script.js

// Function to calculate traffic forecasts
function calculateTrafficForecast(currentTraffic, growthRate, months) {
    return currentTraffic * Math.pow((1 + growthRate), months);
}

// Function to calculate lead forecasts
function calculateLeadForecast(currentLeads, conversionRate, months) {
    return currentLeads * conversionRate * months;
}

// Function to calculate revenue projections
function calculateRevenueProjection(currentRevenue, growthRate, months) {
    return currentRevenue * Math.pow((1 + growthRate), months);
}

// Example usage
console.log('Traffic Forecast:', calculateTrafficForecast(1000, 0.1, 6));
console.log('Lead Forecast:', calculateLeadForecast(500, 0.05, 6));
console.log('Revenue Projection:', calculateRevenueProjection(10000, 0.1, 6));
