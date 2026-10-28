# lecture-live-site — הנחיות ל-Claude

## מה זה הפרויקט
הדגמה חיה בהרצאה: Claude בונה אתר שלם לבד מול הקהל, וכל push עולה לאוויר אוטומטית ב-Render.
התשתית הוקמה ונבדקה מקצה לקצה ב-28.10.2026. **בפגישה הבאה המשימה היא לבנות את האתר המלא.**

## כתובות
- Repo (ציבורי): https://github.com/Simtob-Eran/lecture-live-site
- אתר חי: https://lecture-live-site.onrender.com
- Render dashboard (Static Site): https://dashboard.render.com/static/srv-dbgrcj7f3r2c73ag500g
- Render Blueprint: https://dashboard.render.com/blueprint/exs-dbgrcenb9u1s7392vs0g

## Stack (לא להוסיף ספריות בלי צורך)
- Vite 8 + React 19 (JavaScript, לא TypeScript)
- Tailwind CSS v4 דרך הפלאגין `@tailwindcss/vite` (אין tailwind.config.js, הגדרות ב-`src/index.css` תחת `@theme`)
- גופן Heebo מ-Google Fonts (נטען ב-`index.html`)
- עברית, RTL: `<html lang="he" dir="rtl">` ב-`index.html`
- לינטר: oxlint (`npm run lint`)

## קבצים חשובים
- `index.html` — lang/dir, גופן, title
- `src/App.jsx` — כרגע דף זמני אחד: כותרת "האתר נבנה בלייב..." + קבוע `LAST_UPDATE` עם שעה
- `src/index.css` — `@import "tailwindcss"` + `@theme` עם `--font-sans: "Heebo"`
- `vite.config.js` — פלאגינים react + tailwindcss
- `render.yaml` — Static Site, build: `npm install && npm run build`, publish: `dist`, rewrite של כל נתיב ל-index.html (מתאים ל-SPA)

## איך ה-deploy עובד
- Render מחובר ל-GitHub דרך Blueprint. **כל push ל-`main` מפעיל deploy אוטומטי.** לא צריך לגעת ב-dashboard.
- זמנים שנמדדו: deploy ראשון ~29 שניות, שינוי אחרי push היה חי אחרי **37 שניות**.
- בדיקה שהשינוי עלה (מהטרמינל):
  ```bash
  JS=$(curl -s https://lecture-live-site.onrender.com/ | grep -o 'src="/assets/[^"]*"' | sed 's/src="//;s/"//')
  curl -s "https://lecture-live-site.onrender.com$JS" | grep -o 'מחרוזת שמחפשים'
  ```
  (התוכן נמצא ב-JS bundle, לא ב-index.html; שם הקובץ משתנה בכל build.)

## תהליך עבודה בהרצאה
1. `npm run build` לפני כל commit כדי לוודא שה-build עובר (Render ייכשל על אותה שגיאה).
2. commit עם הודעה קצרה וברורה, `git push origin main`.
3. לבדוק עם curl שהשינוי חי (ראה למעלה), או להציג את עמוד ה-Deploys ב-Render dashboard.
4. commits קטנים ותכופים: הקהל רואה כל שינוי עולה בתוך פחות מדקה.

## דברים לדעת
- ההתקנה הראשונה של npm יצאה פגומה (קבצים חסרים בתוך חבילות) כי הדיסק היה ב-99%. התיקון: למחוק node_modules ו-package-lock.json ולהריץ `npm install` מחדש. אם build נכשל על `Cannot find module` בתוך node_modules, זו הסיבה.
- git user: Eran Simtob, gh מחובר כ-Simtob-Eran.
- לשמור על RTL בכל קומפוננטה חדשה: Tailwind v4 תומך ב-`ms-`/`me-`/`ps-`/`pe-`/`start`/`end` (logical properties). להעדיף אותם על `ml-`/`mr-`.
- `dist/` ב-.gitignore, Render בונה בעצמו.
