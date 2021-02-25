import { getTrendsFromAPI } from "../infra/Movies/Trends"

export const fetchInitial = data => {
    return { type: 'initialTrends', data };
}

export const displayTrends = async () => {
    const data = await getTrendsFromAPI();
    return data;
}

export const mapTrends = async () => {
    const data = await getTrendsFromAPI();
    return data;
}