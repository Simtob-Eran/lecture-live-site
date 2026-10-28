import { useState } from 'react'
import {
  Grid3x3,
  Brain,
  Sparkles,
  Trophy,
  MessageCircle,
  ArrowDown,
  ChevronDown,
  BookOpen,
  Users,
  Smartphone,
  Search,
  PencilLine,
  CheckCircle2,
} from 'lucide-react'
import { BRAND, SLOGAN, WHATSAPP_NUMBER, stats, faqs } from './data.js'
import Reveal from './components/Reveal.jsx'
import HeroBoard from './components/HeroBoard.jsx'
import PlayBoard from './components/PlayBoard.jsx'

const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  `היי ${BRAND}! אשמח לקבל חידה ראשונה ולשמוע עוד על הקורסים והליגה.`,
)}`

const YEAR = new Date().getFullYear()

const steps = [
  {
    icon: Search,
    title: 'סורקים',
    text: 'מחפשים שורה, עמודה או ריבוע שכמעט מלאים. שם מסתתרת הספרה הראשונה.',
  },
  {
    icon: PencilLine,
    title: 'ממלאים רק מה שבטוח',
    text: 'אם יש יותר מאפשרות אחת, עוברים הלאה. ניחושים הם הדרך הכי מהירה להסתבך.',
  },
  {
    icon: CheckCircle2,
    title: 'ממשיכים עד הסוף',
    text: 'כל ספרה שמילאתם פותחת ספרה נוספת. כשהלוח מתמלא נכון, המסגרת תהפוך ירוקה.',
  },
]

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
    icon: BookOpen,
    title: 'מדריכים בעברית פשוטה',
    text: 'מהכלל הבסיסי ועד טכניקות מתקדמות כמו X-Wing. סרטונים קצרים, דוגמאות ותרגול מודרך.',
  },
  {
    icon: Trophy,
    title: 'ליגה ישראלית',
    text: 'פותרים על הזמן, עולים בטבלה, ומתחרים מול חברים. בלי פרסומות ובלי הסחות דעת.',
  },
  {
    icon: Users,
    title: 'קהילה שאוהבת לחשוב',
    text: 'קבוצת וואטסאפ פעילה, מפגשי פתרון משותפים וטורנירים חודשיים לכל הרמות.',
  },
  {
    icon: Smartphone,
    title: 'בכל מקום, בלי אינטרנט',
    text: 'הורידו חבילת חידות מראש ופתרו ברכבת, בטיסה או בחוף. ההתקדמות נשמרת.',
  },
]

function Faq({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl border border-white/10 bg-ink-900">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-5 text-start text-lg font-bold"
      >
        {q}
        <ChevronDown
          className={`size-5 shrink-0 text-sun-400 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 leading-relaxed text-ink-200">{a}</p>
        </div>
      </div>
    </div>
  )
}

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
            <a href="#about" className="transition hover:text-white">על סודוקו</a>
            <a href="#play" className="transition hover:text-white">נסו עכשיו</a>
            <a href="#benefits" className="transition hover:text-white">מה מקבלים</a>
            <a href="#facts" className="transition hover:text-white">מספרים</a>
            <a href="#faq" className="transition hover:text-white">שאלות</a>
            <a href="#contact" className="transition hover:text-white">דברו איתנו</a>
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
        {/* Hero */}
        <section className="grid-bg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/40 to-ink-950" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
            <div className="text-center md:text-start">
              <span className="mb-6 inline-block rounded-full border border-sun-500/40 bg-sun-500/10 px-4 py-1 text-sm font-medium text-sun-300">
                9 ספרות. 81 משבצות. אינסוף הנאה.
              </span>
              <h1 className="text-5xl font-black leading-tight md:text-6xl lg:text-7xl">{SLOGAN}</h1>
              <p className="mt-6 text-lg text-ink-200 md:text-xl">
                {BRAND} היא הבית הישראלי של הסודוקו: חידות יומיות, מדריכים בעברית פשוטה וקהילה
                שאוהבת לחשוב. בלי מתמטיקה, רק היגיון.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row md:justify-start sm:justify-center">
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
            <HeroBoard />
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <h2 className="text-3xl font-black md:text-4xl">
                חידה שנולדה באינדיאנה, גדלה ביפן וכבשה את העולם
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-200">
                ב-1979 פרסם אדריכל בדימוס בשם הווארד גארנס חידת מספרים במגזין אמריקאי, תחת השם Number
                Place. ב-1984 הוצאת החידות היפנית Nikoli אימצה אותה, ומנהלה מאקי קאג'י העניק לה את
                השם המקוצר "סודוקו": "הספרה חייבת להופיע פעם אחת בלבד".
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-200">
                בנובמבר 2004 הופיעה החידה בעיתון "טיימס" הלונדוני, ותוך שנה הפכה לתופעה עולמית. היום
                פותרים אותה מיליונים בכל יום, ואנחנו כאן כדי שגם אתם תתמכרו, בכיף.
              </p>
              <div className="mt-8 rounded-3xl border border-sun-500/30 bg-sun-500/5 p-6">
                <h3 className="text-xl font-bold text-sun-300">הכלל היחיד</h3>
                <p className="mt-2 text-ink-200">
                  ממלאים את הלוח בספרות 1 עד 9, כך שבכל שורה, בכל עמודה ובכל ריבוע של 3×3 כל ספרה
                  מופיעה פעם אחת בדיוק. זהו. בלי חישובים, רק היגיון.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150} className="order-first md:order-none">
              <img
                src="https://images.unsplash.com/photo-1586030301401-54386553db94?w=900&q=75&auto=format&fit=crop"
                alt="חוברת חידות יפנית ועיפרון על אדן חלון"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl md:aspect-[3/4]"
              />
            </Reveal>
          </div>
        </section>


        {/* How + Play */}
        <section id="play" className="scroll-mt-20 bg-ink-900/60 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-3xl font-black md:text-4xl">נסו עכשיו. בלי הרשמה, בלי הורדה.</h2>
              <p className="mt-4 text-lg text-ink-200">
                לוח ברמה בינונית, ישר מהמחולל שלנו. לחצו על משבצת, בחרו ספרה, ותנו להיגיון לעבוד.
              </p>
              <ol className="mt-8 space-y-5">
                {steps.map(({ icon: Icon, title, text }, i) => (
                  <li key={title} className="flex gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sun-500/10 text-sun-400">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">
                        <span className="me-2 text-sun-400">{i + 1}.</span>
                        {title}
                      </h3>
                      <p className="mt-1 text-ink-200">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={150}>
              <PlayBoard />
            </Reveal>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="scroll-mt-20 bg-ink-900/60 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <h2 className="text-center text-3xl font-black md:text-4xl">למה דווקא איתנו?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-ink-200">
                כל מה שצריך כדי להתחיל, להשתפר, ולהתמכר. במקום אחד, בעברית.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, title, text }, i) => (
                <Reveal key={title} delay={i * 80}>
                  <article className="group h-full rounded-3xl border border-white/10 bg-ink-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-sun-500/40 hover:shadow-xl hover:shadow-sun-500/5">
                    <div className="inline-flex rounded-2xl bg-sun-500/10 p-3 transition group-hover:bg-sun-500/20">
                      <Icon className="size-8 text-sun-400" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold">{title}</h3>
                    <p className="mt-3 leading-relaxed text-ink-200">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Facts */}
        <section id="facts" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <Reveal>
            <h2 className="text-center text-3xl font-black md:text-4xl">סודוקו במספרים</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-ink-200">
              עובדות אמיתיות מהמחקר והמתמטיקה שמאחורי 81 המשבצות.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map(({ value, label, note }, i) => (
              <Reveal key={label} delay={i * 100}>
                <div className="h-full rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 to-ink-950 p-8">
                  <div dir="ltr" className="text-end text-4xl font-black text-sun-400 md:text-5xl">
                    {value}
                  </div>
                  <div className="mt-3 text-lg font-bold">{label}</div>
                  <p className="mt-2 leading-relaxed text-ink-200">{note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 bg-ink-900/60 py-20">
          <div className="mx-auto max-w-3xl px-5">
            <Reveal>
              <h2 className="text-center text-3xl font-black md:text-4xl">שאלות שכולם שואלים</h2>
            </Reveal>
            <div className="mt-12 space-y-4">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 60}>
                  <Faq {...f} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <Reveal>
            <div className="grid-bg relative overflow-hidden rounded-3xl border border-sun-500/30 bg-ink-900 p-10 text-center md:p-16">
              <div className="absolute inset-0 bg-gradient-to-br from-sun-500/10 via-transparent to-transparent" />
              <div className="relative">
                <h2 className="text-3xl font-black md:text-4xl">מוכנים לחידה הראשונה?</h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-ink-200">
                  שלחו לנו הודעה בוואטסאפ, ספרו באיזו רמה אתם, ונחזיר לכם חידה מותאמת תוך דקות. בחינם,
                  בלי התחייבות.
                </p>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-lg font-bold text-ink-950 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-400"
                >
                  <MessageCircle className="size-6" />
                  דברו איתנו בוואטסאפ
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        aria-label="פתיחת שיחה בוואטסאפ"
        className="fixed bottom-5 start-5 z-50 flex size-14 items-center justify-center rounded-full bg-emerald-500 text-ink-950 shadow-lg shadow-emerald-500/30 transition hover:scale-105 hover:bg-emerald-400 md:hidden"
      >
        <MessageCircle className="size-7" />
      </a>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-ink-200 md:flex-row">
          <div className="flex items-center gap-2 font-bold text-ink-100">
            <Grid3x3 className="size-5 text-sun-400" />
            {BRAND}
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-white">על סודוקו</a>
            <a href="#faq" className="hover:text-white">שאלות נפוצות</a>
            <a href="#contact" className="hover:text-white">יצירת קשר</a>
          </div>
          <div>© {YEAR} {BRAND}. כל הזכויות שמורות.</div>
        </div>
      </footer>
    </div>
  )
}
