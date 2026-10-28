import { Grid3x3, Brain, Sparkles, Trophy, MessageCircle, ArrowDown } from 'lucide-react'
import { BRAND, SLOGAN, WHATSAPP_NUMBER } from './data.js'

const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  `היי ${BRAND}! אשמח לשמוע עוד על חידות הסודוקו והקורסים שלכם.`,
)}`

const benefits = [
  {
    icon: Brain,
    title: 'אימון למוח, בלי תחושת אימון',
    text: 'כל חידה מפעילה זיכרון עבודה, ריכוז וחשיבה לוגית. עשר דקות ביום, והראש מרגיש חד יותר.',
  },
  {
    icon: Sparkles,
    title: 'חידה חדשה כל יום',
    text: 'מקל ועד מטורף: בכל בוקר מחכה לכם לוח טרי, עם רמז חכם לרגע שבו נתקעים.',
  },
  {
    icon: Trophy,
    title: 'ליגה ישראלית',
    text: 'פותרים על הזמן, עולים בטבלה, ומתחרים מול חברים. בלי פרסומות ובלי הסחות דעת.',
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-ink-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-2 text-xl font-black">
            <Grid3x3 className="size-7 text-sun-400" />
            {BRAND}
          </a>
          <div className="hidden gap-8 text-sm font-medium text-ink-200 md:flex">
            <a href="#about" className="hover:text-white">על סודוקו</a>
            <a href="#benefits" className="hover:text-white">מה מקבלים</a>
            <a href="#contact" className="hover:text-white">דברו איתנו</a>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-sun-500 px-4 py-2 text-sm font-bold text-ink-950 transition hover:bg-sun-400"
          >
            התחילו לפתור
          </a>
        </nav>
      </header>

      <main>
        <section className="grid-bg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/40 to-ink-950" />
          <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 py-24 text-center md:py-36">
            <span className="mb-6 rounded-full border border-sun-500/40 bg-sun-500/10 px-4 py-1 text-sm font-medium text-sun-300">
              9 ספרות. 81 משבצות. אינסוף הנאה.
            </span>
            <h1 className="max-w-3xl text-5xl font-black leading-tight md:text-7xl">
              {SLOGAN}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-200 md:text-xl">
              {BRAND} היא הבית הישראלי של הסודוקו: חידות יומיות, מדריכים בעברית פשוטה וקהילה שאוהבת
              לחשוב. בלי מתמטיקה, רק היגיון.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-sun-500 px-8 py-4 text-lg font-bold text-ink-950 shadow-lg shadow-sun-500/20 transition hover:-translate-y-0.5 hover:bg-sun-400"
              >
                אני רוצה חידה ראשונה
              </a>
              <a
                href="#about"
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-lg font-medium transition hover:bg-white/5"
              >
                רגע, מה זה בכלל?
                <ArrowDown className="size-5" />
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black md:text-4xl">חידה שנולדה באינדיאנה, גדלה ביפן וכבשה את העולם</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-200">
                ב-1979 פרסם אדריכל בדימוס בשם הווארד גארנס חידת מספרים במגזין אמריקאי, תחת השם Number Place.
                ב-1984 הוצאת החידות היפנית Nikoli אימצה אותה, ומנהלה מאקי קאג'י העניק לה את השם המקוצר
                "סודוקו": "הספרה חייבת להופיע פעם אחת בלבד".
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-200">
                בנובמבר 2004 הופיעה החידה בעיתון "טיימס" הלונדוני, ותוך שנה הפכה לתופעה עולמית.
                היום פותרים אותה מיליונים בכל יום, ואנחנו כאן כדי שגם אתם תתמכרו, בכיף.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-ink-900 p-8">
              <h3 className="text-xl font-bold">הכלל היחיד</h3>
              <p className="mt-3 text-ink-200">
                ממלאים את הלוח בספרות 1 עד 9, כך שבכל שורה, בכל עמודה ובכל ריבוע של 3×3 כל ספרה מופיעה
                פעם אחת בדיוק. זהו. בלי חישובים, רק היגיון.
              </p>
            </div>
          </div>
        </section>

        <section id="benefits" className="bg-ink-900/60 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-center text-3xl font-black md:text-4xl">למה דווקא איתנו?</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {benefits.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-3xl border border-white/10 bg-ink-950 p-8 transition hover:-translate-y-1 hover:border-sun-500/40"
                >
                  <Icon className="size-10 text-sun-400" />
                  <h3 className="mt-5 text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-200">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-20 text-center">
          <h2 className="text-3xl font-black md:text-4xl">מוכנים להתחיל?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-200">
            שלחו לנו הודעה בוואטסאפ ונחזיר לכם חידה ראשונה מותאמת לרמה שלכם, בחינם.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-lg font-bold text-ink-950 transition hover:bg-emerald-400"
          >
            <MessageCircle className="size-6" />
            דברו איתנו בוואטסאפ
          </a>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-ink-200">
        © {new Date().getFullYear()} {BRAND}. כל הזכויות שמורות.
      </footer>
    </div>
  )
}
