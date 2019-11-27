export default (entry) => {
    return (entry < 10) ? '0' + entry.toString() : entry.toString();
}