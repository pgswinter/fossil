import twoNumber from './twoNumber';

export default (entry) => {
    const setDate = new Date(entry);
    const date = setDate.getDate();
    const month = setDate.getMonth();
    const year = setDate.getFullYear();
    const newDate = `${twoNumber(date)}.${twoNumber(month+1)}.${year}`;
    
    return newDate;
}