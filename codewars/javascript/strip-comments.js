function solution(input, markers) {
    const lines = input.split("\n");
    const stripped = [];
    lines.forEach(line => {
        let firstIndexOfMarker;
        markers.forEach(marker => {
            line.indexOf(marker) > -1 && (!firstIndexOfMarker || firstIndexOfMarker > line.indexOf(marker)) ? firstIndexOfMarker = line.indexOf(marker) : null;
        })
        const subString = line.substring(0, firstIndexOfMarker);
        stripped.push(subString.trim());
    });
    return stripped.join("\n");
};