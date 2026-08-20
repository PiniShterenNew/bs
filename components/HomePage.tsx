import Image, { getImageProps } from "next/image";
import {
  ArrowDown,
  ArrowLeft,
  ChatCircle,
  CheckCircle,
  Crosshair,
  FolderSimple,
  Gauge,
  Phone,
  ShieldCheck,
  SlidersHorizontal,
  Waveform,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import logo from "../assets/bs-logo.svg";
import { AccessibilityTools } from "./AccessibilityTools";
import { Faq } from "./Faq";
import { RevealObserver } from "./RevealObserver";
import { SiteNavigation } from "./SiteNavigation";

const phoneDisplay = "052-217-4914";
const phoneHref = "+972522174914";

function HeroArt() {
  const common = { alt: "", sizes: "100vw", fetchPriority: "high" as const };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...common,
    src: "/images/hero-diagnostic-v2.webp",
    width: 1672,
    height: 941,
    quality: 75,
  });
  const {
    props: { srcSet: mobileSrcSet, ...mobileProps },
  } = getImageProps({
    ...common,
    src: "/images/hero-mobile-v4.webp",
    width: 852,
    height: 946,
    quality: 75,
  });

  return (
    <picture>
      <source media="(min-width: 761px)" srcSet={desktopSrcSet} />
      <img {...mobileProps} srcSet={mobileSrcSet} className="hero__photo" />
    </picture>
  );
}

const services = [
  { icon: ArrowDown, title: "התקנה והגדרה", copy: "התקנת Windows נקייה, העברת רישיון והתקנת התוכנות שאתה עובד איתן, מוגדרות ומוכנות לשימוש." },
  { icon: SlidersHorizontal, title: "עדכונים ותקלות תוכנה", copy: "עדכון שנתקע באמצע, תוכנה שקורסת בכל הפעלה או הודעת שגיאה שחוזרת על עצמה — מאתרים את הגורם ומטפלים בו." },
  { icon: Gauge, title: "האטה וניקוי מערכת", copy: "בודקים אילו תהליכים ותוכנות רצות ברקע ומכבידות על ההפעלה, ומסדרים כך שהמחשב חוזר לקצב שהיה לו." },
  { icon: FolderSimple, title: "גיבוי והעברת מידע", copy: "מעבירים קבצים, תמונות והגדרות למחשב חדש או מגבים לפני עדכון משמעותי, כדי שדבר לא יאבד בדרך." },
  { icon: ShieldCheck, title: "וירוסים ואבטחה", copy: "סורקים ומסירים תוכנות זדוניות, סוגרים את נקודת הכניסה שאיפשרה להן להיכנס ומוודאים שהמערכת נקייה." },
] as const;

const tickerWords = ["WINDOWS", "תוכנות", "גיבוי", "שחזור"] as const;

const process = [
  ["01", "שיחה קצרה", "מספרים מה קורה ומה הכי דחוף כרגע."],
  ["02", "אבחון ממוקד", "בודקים את המקור לתקלה ולא רק את מה שרואים על המסך."],
  ["03", "הסבר והחלטה", "מבינים מה מצאנו ומה נכון לעשות לפני שמתקדמים."],
  ["04", "טיפול ובדיקה", "מסדרים ובודקים שוב שהדברים החשובים באמת עובדים."],
] as const;

const questions = [
  ["כמה זמן זה לוקח?", "זה תלוי בתקלה. אחרי אבחון ראשוני אפשר לתת תמונה מדויקת יותר, בלי להבטיח זמן לפני שמבינים מה קורה."],
  ["אפשר להעביר הכול למחשב חדש?", "כן. אפשר לגבות ולהעביר קבצים, תמונות והגדרות חשובות כחלק מהסידור של המחשב החדש."],
  ["אפשר להציל מחשב שנהיה ממש איטי?", "ברוב המקרים כן. בודקים מה עולה עם המחשב, מה מכביד עליו ואילו תוכנות גורמות לבעיה."],
  ["השירות מתאים גם לנייח וגם לנייד?", "כן, כל עוד מדובר ב-Windows ובבעיה של מערכת או תוכנה. תיקון רכיבים אלקטרוניים אינו כלול בשירות."],
  ["מה עושים אם Windows בכלל לא עולה?", "מתחילים באבחון ולא ממהרים לפרמט. אחרי שמבינים מה קרה, מסבירים מה אפשר לשמור ומה הדרך הנכונה להמשיך."],
] as const;

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href="#top" aria-label="בנימין שטרן, חזרה לראש העמוד">
      <Image src={logo} alt="" priority={!compact} />
      <span dir="ltr"><strong>BINYAMIN STERN</strong><small>Windows &amp; Software Support</small></span>
    </a>
  );
}

function ContactActions({ noteId, compact = false }: { noteId?: string; compact?: boolean }) {
  return (
    <div className={`contact-actions ${compact ? "contact-actions--compact" : ""}`} aria-describedby={noteId}>
      <a
        className="contact-btn contact-btn--primary"
        href={`https://wa.me/${phoneHref.replace("+", "")}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`פתיחת שיחת WhatsApp עם בנימין במספר ${phoneDisplay}`}
      >
        <WhatsappLogo size={20} weight="fill" aria-hidden="true" />
        WhatsApp
      </a>
      <a
        className="contact-btn contact-btn--secondary"
        href={`tel:${phoneHref}`}
        aria-label={`חיוג לבנימין במספר ${phoneDisplay}`}
      >
        <Phone size={19} aria-hidden="true" />
        טלפון
      </a>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <RevealObserver />
      <a className="skip-link" href="#main-content">דילוג לתוכן</a>

      <SiteNavigation brand={<Brand />} contact={<ContactActions compact />} />

      <header className="hero" id="top">
        <HeroArt />
        <div className="hero__veil" aria-hidden="true" />

        <div className="hero__content page-shell">
          <div className="hero__copy">
            <div className="hero__message">
            <h1>המחשב לא צריך להיות <em>תעלומה.</em></h1>
            <p>אבחון מדויק ל-Windows ולתוכנות. הסבר ברור, החלטה שקולה וטיפול שמחזיר את המחשב לעבודה.</p>
            </div>
            <div className="hero__actions">
            <ContactActions noteId="hero-contact-note" />
            <p id="hero-contact-note" className="contact-note">עונה בעצמי, בלי מוקד ובלי המתנה מיותרת.</p>
            </div>
          </div>
        </div>

        <div className="hero__footer" aria-hidden="true">
          <div className="hero__footer__track">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((set) => (
              <span className="hero__footer__set" key={set}>
                {tickerWords.map((word) => <span key={word}>{word}<i /></span>)}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="manifesto" aria-labelledby="manifesto-title">
          <div className="page-shell manifesto__layout" data-reveal data-motion="manifesto">
            <p className="manifesto__side">לא רצים לפרמט. לא מחליפים חצי מחשב. לא מנחשים.</p>
            <div>
              <h2 id="manifesto-title">התקלה היא סימן.<br /><em>לא תשובה.</em></h2>
              <p>המחשב האיטי, התוכנה שנתקעת והודעת השגיאה הם נקודת ההתחלה. בודקים מה יצר אותם לפני שנוגעים במה שחשוב.</p>
            </div>
          </div>
        </section>

        <section className="services" id="services" aria-labelledby="services-title">
          <div className="page-shell services__head">
            <h2 id="services-title">מה אפשר לסדר</h2>
            <p>לא צריך לדעת את השם הטכני של התקלה. מספיק לדעת מה הפסיק לעבוד.</p>
          </div>

          <div className="services__viewport" role="region" aria-label="רשימת השירותים, ניתן לגלול אופקית במובייל" tabIndex={0}>
            <div className="page-shell services__track" data-reveal data-motion="services">
              {services.map(({ icon: Icon, title, copy }, index) => (
                <article className={index === 0 ? "service service--lead" : "service"} key={title}>
                  <span className="service__index" aria-hidden="true">0{index + 1}</span>
                  <Icon size={34} weight="light" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <ArrowLeft className="service__arrow" size={22} aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>

          <p className="page-shell services__scope">השירות מתמקד ב-Windows, בתוכנות, בגיבוי ובהעברת מידע. תיקון רכיבים אלקטרוניים אינו כלול.</p>
        </section>

        <section className="diagnosis" aria-labelledby="diagnosis-title">
          <div className="diagnosis__media" data-reveal data-motion="image">
            <Image src="/images/diagnosis-session-v3.webp" alt="איש מקצוע בוחן מחשב ומתעד את ממצאי האבחון" fill sizes="(max-width: 820px) 100vw, 46vw" />
          </div>

          <div className="diagnosis__content" data-reveal data-motion="diagnostic">
            <div className="diagnosis__signal" aria-hidden="true">
              <svg viewBox="0 0 180 180" fill="none">
                <circle className="diagnosis__signal__ring" cx="90" cy="90" r="86" />
                <circle className="diagnosis__signal__dial" cx="90" cy="90" r="70" strokeDasharray="1 9" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                  <line
                    key={deg}
                    className="diagnosis__signal__tick"
                    x1="90" y1="14" x2="90" y2="22"
                    transform={`rotate(${deg} 90 90)`}
                  />
                ))}
                <path
                  className="diagnosis__signal__trace"
                  d="M136 90 L124 90 L119 74 L114 106 L109 66 L104 114 L99 90 L92 90 Q86 90 80 90 T44 90"
                />
                <circle className="diagnosis__signal__dot" cx="44" cy="90" r="3" />
              </svg>
              <span className="diagnosis__signal__label">
                <b>נקי</b>
                <i />
                תוצאה יציבה
              </span>
            </div>
            <h2 id="diagnosis-title">בין<br />“משהו לא עובד”<br />לבין<br />פתרון יש אבחון.</h2>
            <p>זה הרגע שבו רעש הופך למידע. בודקים, ממקדים ומבינים מה באמת דורש טיפול.</p>
            <div className="diagnosis__states">
              <div><span>לפני</span><strong>תקלות חוזרות<br />חוסר ודאות<br />חשש לקבצים</strong></div>
              <ArrowLeft size={30} aria-hidden="true" />
              <div><span>אחרי</span><strong>מערכת יציבה<br />תוכנות עובדות<br />דרך ברורה להמשך</strong></div>
            </div>
          </div>
        </section>

        <section className="process" id="process" aria-labelledby="process-title">
          <div className="page-shell process__layout">
            <div className="process__intro">
              <h2 id="process-title">מה קורה מהרגע שפונים</h2>
              <p>ארבע תחנות. בכל אחת ברור מה עושים ולמה.</p>
              <div className="process__media" data-reveal data-motion="image">
                <Image src="/images/process-workflow-v2.webp" alt="" fill sizes="(max-width: 760px) calc(100vw - 36px), 360px" />
                <span aria-hidden="true"><CheckCircle size={38} weight="thin" /></span>
              </div>
            </div>

            <ol className="process__steps" data-reveal data-motion="process">
              {process.map(([number, title, copy]) => (
                <li key={number}>
                  <span aria-hidden="true">{number}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="page-shell about__layout">
            <div className="about__portrait" data-reveal data-motion="image">
              <Image src="/images/about-workspace-v3.webp" alt="סביבת עבודה מסודרת עם מחשב, מחברת ועט" fill sizes="(max-width: 820px) 100vw, 42vw" />
              <div className="about__mark" aria-hidden="true"><Image src={logo} alt="" /></div>
            </div>

            <div className="about__copy" data-reveal data-motion="copy">
              <h2 id="about-title">טכניקה טובה מרגישה כמו שיחה ברורה.</h2>
              <p>אני בנימין שטרן. אני מטפל בבעיות Windows ותוכנה, במחשבים איטיים, בעדכונים, בגיבויים ובהעברת קבצים.</p>
              <blockquote>“קודם בודקים. אחר כך מחליטים.”</blockquote>
            </div>
          </div>
        </section>

        <section className="knowledge" aria-label="עקרונות ושאלות נפוצות">
          <div className="page-shell principles" data-reveal data-motion="principles">
            <article><ChatCircle size={30} weight="light" aria-hidden="true" /><h3>מדברים ברור</h3><p>בלי מילים מפוצצות ובלי להסתיר מה עושים.</p></article>
            <article><Crosshair size={30} weight="light" aria-hidden="true" /><h3>מוצאים את המקור</h3><p>מטפלים בבעיה עצמה, לא רק משתיקים את הסימן.</p></article>
            <article><Waveform size={30} weight="light" aria-hidden="true" /><h3>בודקים שוב</h3><p>מסיימים אחרי שהדברים החשובים באמת עובדים.</p></article>
          </div>
          <div className="page-shell faq-wrap"><Faq items={questions} /></div>
        </section>
      </main>

      <footer className="footer">
        <div className="page-shell footer__hero" data-reveal data-motion="footer">
          <h2>בוא נבין<br />מה קרה.</h2>
          <div><p>מתחילים בשיחה קצרה ומחליטים מה הצעד הבא.</p><ContactActions noteId="footer-contact-note" /></div>
        </div>
        <p id="footer-contact-note" className="page-shell footer__note">לשיחה או להודעת WhatsApp: <bdi dir="ltr">{phoneDisplay}</bdi></p>
        <div className="page-shell footer__bottom">
          <Brand compact />
          <nav aria-label="ניווט תחתון"><a href="#services">שירותים</a><a href="#process">תהליך</a><a href="#faq">שאלות</a><a href="#about">אודות</a></nav>
          <span dir="ltr">© BINYAMIN STERN</span>
        </div>
      </footer>
      <AccessibilityTools />
    </>
  );
}
