export const getDistance = (lat1, long1, lat2, long2) => {
    const raduis = 6371;
    const degreeLat = deg2Rad(lat2 - lat1);
    const degreeLon = deg2Rad(long2 - long1);
    const result = Math.sin(degreeLat / 2) * Math.sin(degreeLat / 2) +
        Math.cos(deg2Rad(lat1)) * Math.cos(deg2Rad(lat2)) *
        Math.sin(degreeLon / 2) * Math.sin(degreeLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(result), Math.sqrt(1 - result));
    const distnace = raduis * c;
    return distnace;
}
function deg2Rad(deg) {
    return deg * (Math.PI / 180)
}