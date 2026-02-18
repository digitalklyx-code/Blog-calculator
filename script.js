function calculateProjections(monthlySearchVolume, targetKeywords, ctrPercentage, websiteConversionRate, leadFormResponseRate, avgDealValue, keywordDifficulty) {
    // Calculate monthly visitors
    const monthlyVisitors = monthlySearchVolume * targetKeywords * (ctrPercentage / 100);
    // Calculate monthly leads
    const monthlyLeads = monthlyVisitors * (websiteConversionRate / 100) * (leadFormResponseRate / 100);
    // Calculate monthly revenue
    const monthlyRevenue = monthlyLeads * avgDealValue;
    // Calculate annual revenue
    const annualRevenue = monthlyRevenue * 12;
    // Calculate traffic growth
    const growthFactor = (keywordDifficulty < 30) ? 1.2 : (keywordDifficulty < 70) ? 1.1 : 1.05;
    const sixMonthTraffic = monthlyVisitors * growthFactor * 6;
    const twelveMonthTraffic = monthlyVisitors * growthFactor * 12;
    // Determine lead quality
    let leadQuality;
    if (monthlyVisitors > 1000 && keywordDifficulty < 50) {
        leadQuality = 'High';
    } else if (monthlyVisitors > 500) {
        leadQuality = 'Medium';
    } else {
        leadQuality = 'Low';
    }
    // Calculate ROI multiplier
    const estimatedInvestment = 10000; // Example estimate
    const roiMultiplier = annualRevenue / estimatedInvestment;
    // Display results
    document.getElementById('monthlyVisitors').innerText = monthlyVisitors.toFixed(0);
    document.getElementById('monthlyLeads').innerText = monthlyLeads.toFixed(0);
    document.getElementById('monthlyRevenue').innerText = monthlyRevenue.toFixed(2);
    document.getElementById('annualRevenue').innerText = annualRevenue.toFixed(2);
    document.getElementById('sixMonthTraffic').innerText = sixMonthTraffic.toFixed(0);
    document.getElementById('twelveMonthTraffic').innerText = twelveMonthTraffic.toFixed(0);
    document.getElementById('leadQuality').innerText = leadQuality;
    document.getElementById('roiMultiplier').innerText = roiMultiplier.toFixed(2);
}

function resetForm() {
    document.getElementById('monthlySearchVolume').value = '';
    document.getElementById('targetKeywords').value = '';
    document.getElementById('ctrPercentage').value = '';
    document.getElementById('websiteConversionRate').value = '';
    document.getElementById('leadFormResponseRate').value = '';
    document.getElementById('avgDealValue').value = '';
    document.getElementById('keywordDifficulty').value = '';
    // Clear result elements
    document.getElementById('monthlyVisitors').innerText = '';
    document.getElementById('monthlyLeads').innerText = '';
    document.getElementById('monthlyRevenue').innerText = '';
    document.getElementById('annualRevenue').innerText = '';
    document.getElementById('sixMonthTraffic').innerText = '';
    document.getElementById('twelveMonthTraffic').innerText = '';
    document.getElementById('leadQuality').innerText = '';
    document.getElementById('roiMultiplier').innerText = '';
}