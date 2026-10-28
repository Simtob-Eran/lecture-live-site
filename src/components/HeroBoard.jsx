// לוח סודוקו מאויר: ספרות שמופיעות אחת-אחת
const GIVENS = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
]
const SOLVED = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
]

export default function HeroBoard() {
  let fillIndex = 0
  return (
    <div
      dir="ltr"
      className="mx-auto grid aspect-square w-full max-w-md grid-cols-9 overflow-hidden rounded-2xl border-2 border-sun-400/70 bg-ink-900 shadow-2xl shadow-sun-500/10"
      aria-hidden="true"
    >
      {SOLVED.flatMap((row, r) =>
        row.map((n, c) => {
          const given = GIVENS[r][c] !== 0
          const delay = given ? 0 : 600 + fillIndex++ * 90
          const thickR = c % 3 === 2 && c !== 8
          const thickB = r % 3 === 2 && r !== 8
          return (
            <div
              key={`${r}-${c}`}
              style={{ animationDelay: `${delay}ms` }}
              className={`flex items-center justify-center border-white/10 text-sm font-bold sm:text-lg ${
                thickR ? 'border-r-2 border-r-sun-400/60' : 'border-r'
              } ${thickB ? 'border-b-2 border-b-sun-400/60' : 'border-b'} ${
                given ? 'text-ink-100' : 'cell-pop text-sun-400'
              }`}
            >
              {n}
            </div>
          )
        }),
      )}
    </div>
  )
}
