/**
 * Base-22 Modulo Reduction & Octagram Vertex Solver
 * Reference implementation for AstroGuru (RU) & AstrologyCalc (EN/IT/ES)
 */
function reduceArcana22(n) {
  let val = Math.abs(Math.trunc(Number(n) || 0));
  if (val === 0) return 22;
  while (val > 22) {
    val = String(val).split('').reduce((acc, d) => acc + Number(d), 0);
  }
  return val;
}

function computeDestinyMatrix(day, month, year) {
  const A = reduceArcana22(day);
  const B = reduceArcana22(month);
  const yearSum = String(year).split('').reduce((acc, d) => acc + Number(d), 0);
  const C = reduceArcana22(yearSum);
  const D = reduceArcana22(A + B + C);
  const E = reduceArcana22(A + B + C + D);
  const karmicTail = [reduceArcana22(D + E), reduceArcana22(D + reduceArcana22(D + E)), D];
  return { A, B, C, D, center: E, karmicTail };
}

module.exports = { reduceArcana22, computeDestinyMatrix };
