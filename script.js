function highlight_content(value, data) {
    const first = data.indexOf(value);
    if (first === -1) {
        return data;
    }

    const  second= first + value.length;
    const marking = data.slice(0, first);
    const marked_up = data.substring(first, second);
    const last = data.slice(second);

    return `${marking}<mark>${marked_up}</mark>${last}`;
}
function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    let ans = htmlContent;
    const indexing= plainTextPositions.map(({ start, end }) => ({
        start: htmlContent.indexOf(plainText.slice(start, end)),
        end: htmlContent.indexOf(plainText.slice(start, end)) + (end - start),
    }));
    indexing.forEach(({ start, end }) => {
        ans = highlight_content(htmlContent.substring(start, end), ans);
    });

    return ans;
}
