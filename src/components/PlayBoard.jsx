import { useEffect, useState } from 'react'
import { Eraser, Lightbulb, RotateCcw, PartyPopper } from 'lucide-react'
import { PUZZLE, SOLUTION } from '../puzzle.js'

const clone = (g) => g.map((row) => [...row])

function hasConflict(grid, r, c) {
  const v = grid[r][c]
  if (!v) return false
  for (let k = 0; k < 9; k++) {
    if (k !== c && grid[r][k] === v) return true
    if (k !== r && grid[k][c] === v) return true
  }
  const br = Math.floor(r / 3) * 3
  const bc = Math.floor(c / 3) * 3
  for (let i = br; i < br + 3; i++)
    for (let j = bc; j < bc + 3; j++)
      if ((i !== r || j !== c) && grid[i][j] === v) return true
  return false
}

export default function PlayBoard() {
  const [grid, setGrid] = useState(() => clone(PUZZLE))
  const [sel, setSel] = useState(null)
  const [hints, setHints] = useState(0)

  const solved = grid.every((row, r) => row.every((v, c) => v === SOLUTION[r][c]))
  const filled = grid.flat().filter(Boolean).length

  const setCell = (r, c, v) => {
    if (PUZZLE[r][c]) return
    setGrid((g) => {
      const n = clone(g)
      n[r][c] = v
      return n
    })
  }

  useEffect(() => {
    if (!sel) return
    const onKey = (e) => {
      const [r, c] = sel
      if (/^[1-9]$/.test(e.key)) setCell(r, c, Number(e.key))
      else if (e.key === 'Backspace' || e.key === 'Delete' || e.key === '0') setCell(r, c, 0)
      else if (e.key === 'ArrowUp') setSel([Math.max(0, r - 1), c])
      else if (e.key === 'ArrowDown') setSel([Math.min(8, r + 1), c])
      else if (e.key === 'ArrowLeft') setSel([r, Math.max(0, c - 1)])
      else if (e.key === 'ArrowRight') setSel([r, Math.min(8, c + 1)])
      else return
      e.preventDefault()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [sel])

  const hint = () => {
    const empty = []
    grid.forEach((row, r) =>
      row.forEach((v, c) => {
        if (v !== SOLUTION[r][c]) empty.push([r, c])
      }),
    )
    if (!empty.length) return
    const [r, c] = sel && grid[sel[0]][sel[1]] !== SOLUTION[sel[0]][sel[1]] ? sel : empty[Math.floor(Math.random() * empty.length)]
    setCell(r, c, SOLUTION[r][c])
    setSel([r, c])
    setHints((h) => h + 1)
  }

  const reset = () => {
    setGrid(clone(PUZZLE))
    setSel(null)
    setHints(0)
  }

  const selVal = sel ? grid[sel[0]][sel[1]] : 0

  return (
    <div className="mx-auto w-full max-w-md">
      <div
        dir="ltr"
        role="grid"
        aria-label="לוח סודוקו"
        className={`grid aspect-square grid-cols-9 overflow-hidden rounded-2xl border-2 bg-ink-900 shadow-2xl transition ${
          solved ? 'border-emerald-400 shadow-emerald-500/20' : 'border-sun-400/70 shadow-sun-500/10'
        }`}
      >
        {grid.map((row, r) =>
          row.map((v, c) => {
            const given = PUZZLE[r][c] !== 0
            const isSel = sel && sel[0] === r && sel[1] === c
            const related =
              sel &&
              !isSel &&
              (sel[0] === r ||
                sel[1] === c ||
                (Math.floor(sel[0] / 3) === Math.floor(r / 3) &&
                  Math.floor(sel[1] / 3) === Math.floor(c / 3)))
            const same = selVal && v === selVal && !isSel
            const bad = hasConflict(grid, r, c)
            const thickR = c % 3 === 2 && c !== 8
            const thickB = r % 3 === 2 && r !== 8
            return (
              <button
                type="button"
                key={`${r}-${c}`}
                onClick={() => setSel([r, c])}
                aria-label={`שורה ${r + 1} עמודה ${c + 1}${v ? `, ${v}` : ', ריק'}`}
                className={`flex items-center justify-center border-white/10 text-base font-bold transition-colors sm:text-xl ${
                  thickR ? 'border-r-2 border-r-sun-400/60' : 'border-r'
                } ${thickB ? 'border-b-2 border-b-sun-400/60' : 'border-b'} ${
                  isSel
                    ? 'bg-sun-500/40'
                    : same
                      ? 'bg-sun-500/20'
                      : related
                        ? 'bg-white/5'
                        : ''
                } ${bad ? 'text-red-400' : given ? 'text-ink-100' : 'text-sun-300'}`}
              >
                {v || ''}
              </button>
            )
          }),
        )}
      </div>

      <div className="mt-4 grid grid-cols-9 gap-1" dir="ltr">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <button
            type="button"
            key={n}
            onClick={() => sel && setCell(sel[0], sel[1], n)}
            disabled={!sel || solved}
            className="aspect-square rounded-lg bg-ink-800 text-lg font-bold text-ink-100 transition hover:bg-ink-700 disabled:opacity-40 sm:text-xl"
          >
            {n}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => sel && setCell(sel[0], sel[1], 0)}
            disabled={!sel || solved}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:bg-white/5 disabled:opacity-40"
          >
            <Eraser className="size-4" /> מחק
          </button>
          <button
            type="button"
            onClick={hint}
            disabled={solved}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:bg-white/5 disabled:opacity-40"
          >
            <Lightbulb className="size-4 text-sun-400" /> רמז
          </button>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:bg-white/5"
          >
            <RotateCcw className="size-4" /> מחדש
          </button>
        </div>
        <div className="text-sm text-ink-200">
          {filled}/81 משבצות{hints ? ` · ${hints} רמזים` : ''}
        </div>
      </div>

      {solved && (
        <div className="mt-5 flex items-center gap-3 rounded-2xl border border-emerald-400/40 bg-emerald-500/10 p-4 text-emerald-200">
          <PartyPopper className="size-6 shrink-0 text-emerald-400" />
          <p className="font-medium">
            פתרתם! {hints ? `עם ${hints} רמזים, ` : 'בלי אף רמז, '}וזה רק הלוח הראשון. שלחו לנו הודעה
            ונעלה רמה.
          </p>
        </div>
      )}
    </div>
  )
}
