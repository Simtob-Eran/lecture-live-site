const LAST_UPDATE = '28.10.2026 10:46'

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-8">
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          האתר נבנה בלייב...
        </h1>
        <p className="text-xl text-slate-400">
          עדכון אחרון: <span className="font-mono text-emerald-400">{LAST_UPDATE}</span>
        </p>
      </div>
    </main>
  )
}
