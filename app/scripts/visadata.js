import fetch from 'node-fetch';

const csvURL = 'https://raw.githubusercontent.com/ilyankou/passport-index-dataset/master/passport-index-tidy.csv'

export async function getVisaRequirements(){
    const response = await fetch(csvURL)
    const text = await response.text();
    
    const rows = text.split('\n');
    const visaRequirements = new Map();

    rows.forEach(row => {
        const [searchPassport, searchDestination, requirement] = row.split(',');
        const keyNationPair = JSON.stringify({searchPassport, searchDestination});
        visaRequirements.set(keyNationPair, requirement);
    })
    return visaRequirements;
}
