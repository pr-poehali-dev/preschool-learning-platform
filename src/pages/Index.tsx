import { useState } from 'react';
import Icon from '@/components/ui/icon';

const MASCOT = 'https://cdn.poehali.dev/projects/ef0c91a6-46a1-4460-b2dc-7c484a9833f0/files/2b18fd7e-445a-47cb-88b9-d546bfda148f.jpg';

const navItems = [
  { label: 'Главная', icon: 'Home' },
  { label: 'Уроки', icon: 'BookOpen' },
  { label: 'Игры', icon: 'Gamepad2' },
  { label: 'Прогресс', icon: 'TrendingUp' },
  { label: 'Профиль', icon: 'Smile' },
  { label: 'Контакты', icon: 'Mail' },
];

const sections = [
  { title: 'Уроки', desc: 'Буквы, цифры и формы', icon: 'BookOpen', color: 'bg-candy-sky', shadow: 'shadow-[0_8px_0_#2196c4]', count: '24 урока' },
  { title: 'Игры', desc: 'Учимся играя', icon: 'Gamepad2', color: 'bg-candy-pink', shadow: 'shadow-[0_8px_0_#d6457f]', count: '15 игр' },
  { title: 'Прогресс', desc: 'Твои успехи', icon: 'TrendingUp', color: 'bg-candy-green', shadow: 'shadow-[0_8px_0_#3da866]', count: '68%' },
  { title: 'Профиль', desc: 'Мой герой', icon: 'Smile', color: 'bg-candy-orange', shadow: 'shadow-[0_8px_0_#d96a22]', count: 'Лёва' },
];

const awards = [
  { icon: 'Star', label: 'Звёздочка', got: true, color: 'text-candy-yellow' },
  { icon: 'Medal', label: 'Медаль', got: true, color: 'text-candy-orange' },
  { icon: 'Trophy', label: 'Кубок', got: true, color: 'text-candy-purple' },
  { icon: 'Crown', label: 'Корона', got: false, color: 'text-candy-pink' },
  { icon: 'Rocket', label: 'Ракета', got: false, color: 'text-candy-sky' },
  { icon: 'Gem', label: 'Алмаз', got: false, color: 'text-candy-green' },
];

const Index = () => {
  const [active, setActive] = useState('Главная');
  const progress = 68;

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-[#FFF6E5] via-[#FFEAF4] to-[#E8F4FF]">
      {/* floating decorations */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[18%] h-24 w-24 rounded-full bg-candy-yellow/40 animate-float" />
        <div className="absolute right-[10%] top-[30%] h-16 w-16 rounded-full bg-candy-pink/40 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[12%] left-[18%] h-20 w-20 rounded-full bg-candy-sky/40 animate-float" style={{ animationDelay: '2s' }} />
        <Icon name="Cloud" size={90} className="absolute right-[6%] top-[12%] text-white/70 animate-float" />
        <Icon name="Sun" size={70} className="absolute left-[4%] bottom-[20%] text-candy-yellow/60 animate-spin-slow" />
      </div>

      {/* Navbar */}
      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <div className="flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-candy-purple text-white shadow-[0_5px_0_#6d44c0]">
            <Icon name="Sparkles" size={26} />
          </div>
          <span className="font-display text-2xl font-extrabold text-candy-purple">УмняшкиЛенд</span>
        </div>
        <nav className="hidden items-center gap-1 rounded-full bg-white/70 p-1.5 backdrop-blur md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 font-display text-sm font-bold transition-all ${
                active === item.label ? 'bg-candy-purple text-white' : 'text-candy-purple/70 hover:bg-candy-purple/10'
              }`}
            >
              <Icon name={item.icon} size={16} />
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-8 px-5 pb-10 pt-6 md:grid-cols-2">
        <div className="animate-pop-in">
          <span className="inline-flex items-center gap-2 rounded-full bg-candy-green px-4 py-1.5 font-display text-sm font-bold text-white shadow-[0_4px_0_#3da866]">
            <Icon name="PartyPopper" size={16} /> Для детей 3–7 лет
          </span>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight text-candy-purple md:text-6xl">
            Учиться — это <span className="text-candy-pink">весело!</span>
          </h1>
          <p className="mt-4 max-w-md font-body text-lg font-semibold text-foreground/70">
            Яркие уроки, добрые игры и крутые награды. Знакомься с лисёнком Рыжиком — он покажет дорогу в мир знаний!
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-2xl bg-candy-pink px-7 py-4 font-display text-lg font-extrabold text-white shadow-[0_7px_0_#d6457f] transition-transform hover:-translate-y-1 active:translate-y-0 active:shadow-[0_2px_0_#d6457f]">
              <Icon name="Play" size={22} /> Начать играть
            </button>
            <button className="flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-display text-lg font-extrabold text-candy-purple shadow-[0_7px_0_#d0c4ef] transition-transform hover:-translate-y-1 active:translate-y-0">
              <Icon name="BookOpen" size={22} /> Уроки
            </button>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute h-64 w-64 rounded-full bg-candy-yellow/50 blur-2xl" />
          <img src={MASCOT} alt="Лисёнок Рыжик" className="relative w-72 animate-float drop-shadow-2xl md:w-80" />
        </div>
      </section>

      {/* Sections */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 py-8">
        <h2 className="mb-6 text-center font-display text-3xl font-extrabold text-candy-purple">Куда отправимся? 🚀</h2>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {sections.map((s, i) => (
            <button
              key={s.title}
              className={`${s.color} ${s.shadow} group flex flex-col items-start rounded-3xl p-5 text-left text-white transition-transform hover:-translate-y-1.5 active:translate-y-0 animate-pop-in`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/30 group-hover:animate-wiggle">
                <Icon name={s.icon} size={30} />
              </div>
              <span className="font-display text-2xl font-extrabold">{s.title}</span>
              <span className="font-body text-sm font-semibold opacity-90">{s.desc}</span>
              <span className="mt-3 rounded-full bg-white/30 px-3 py-1 font-display text-xs font-bold">{s.count}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Rewards */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 py-10">
        <div className="rounded-[2rem] bg-white/80 p-7 backdrop-blur md:p-10">
          <div className="mb-7 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-3xl font-extrabold text-candy-purple">Мои награды 🏆</h2>
              <p className="font-body font-semibold text-foreground/60">Собирай звёздочки за каждый пройденный урок!</p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-candy-yellow px-5 py-3 font-display text-xl font-extrabold text-white shadow-[0_5px_0_#d9b020]">
              <Icon name="Star" size={24} className="fill-white" /> 124 звезды
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="mb-2 flex justify-between font-display font-bold text-candy-purple">
              <span>Уровень 5 — Любознайка</span>
              <span>{progress}%</span>
            </div>
            <div className="relative h-7 w-full overflow-hidden rounded-full bg-candy-purple/15">
              <div
                className="flex h-full items-center justify-end rounded-full bg-gradient-to-r from-candy-pink to-candy-orange pr-2 transition-all duration-700"
                style={{ width: `${progress}%` }}
              >
                <Icon name="Star" size={18} className="fill-white text-white" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
            {awards.map((a, i) => (
              <div
                key={a.label}
                className={`flex flex-col items-center gap-2 rounded-2xl p-4 text-center transition-transform hover:-translate-y-1 ${
                  a.got ? 'bg-white shadow-[0_6px_0_#eee]' : 'bg-foreground/5'
                }`}
              >
                <div className={`relative ${a.got ? 'animate-pop-in' : 'opacity-40 grayscale'}`} style={{ animationDelay: `${i * 0.08}s` }}>
                  <Icon name={a.icon} size={42} className={a.color} fallback="Star" />
                  {!a.got && (
                    <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-foreground/30 text-white">
                      <Icon name="Lock" size={12} />
                    </div>
                  )}
                </div>
                <span className="font-display text-xs font-bold text-foreground/70">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contacts */}
      <footer className="relative z-10 mx-auto max-w-6xl px-5 pb-10 pt-4">
        <div className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-candy-purple p-7 text-white md:flex-row">
          <div className="flex items-center gap-3">
            <Icon name="Sparkles" size={28} />
            <span className="font-display text-xl font-extrabold">УмняшкиЛенд</span>
          </div>
          <p className="font-body font-semibold opacity-80">© 2026 · Учимся с улыбкой</p>
          <div className="flex gap-3">
            {['Send', 'Phone', 'Mail'].map((ic) => (
              <button key={ic} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/40">
                <Icon name={ic} size={20} />
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
