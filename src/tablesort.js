/**
 * Sorts an HTML table
 * 
 * @param {HTMLTableElement} table The table to sort
 * @param {number} column The index of the column to sort 
 * @param {boolean} asc Determines if the sorting will be in ascending order
 */

function sortTableByColumn(table, column, asc = true) {
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));
}