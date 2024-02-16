/**
 * 
 * @param {string} html 
 * @returns decoded html escape strings eg &lt; to '<'
 */
export function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}
