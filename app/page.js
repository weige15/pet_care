import BookingDateTimeInput from "./BookingDateTimeInput";

const services = [
  {
    icon: "🛁",
    title: "溫和洗澡",
    description: "低刺激洗劑、耳朵清潔、肛門腺處理、吹整梳毛，適合例行清潔。",
  },
  {
    icon: "✂️",
    title: "造型修剪",
    description: "基礎剃腳底毛、腹毛、局部修整，或依季節與生活習慣打造清爽造型。",
  },
  {
    icon: "🌿",
    title: "深層護毛",
    description: "針對乾燥、打結與換毛期加強護理，提升毛髮光澤與皮膚舒適度。",
  },
];

const steps = [
  {
    number: "01",
    title: "到店評估",
    description: "先確認毛孩膚況、毛結、情緒與飼主需求，避免直接進入高壓清潔。",
  },
  {
    number: "02",
    title: "分段洗護",
    description: "以溫水與低噪音吹整進行，必要時安排短暫休息，降低緊張反應。",
  },
  {
    number: "03",
    title: "完成回報",
    description: "提供照片、照護提醒與下次建議週期，讓居家保養更容易接上。",
  },
];

const prices = [
  {
    title: "基礎清潔",
    description: "適合固定保養與短毛犬貓。",
    price: "NT$700",
    items: ["全身洗澡與吹整", "耳朵與指甲整理", "肛門腺清潔"],
  },
  {
    title: "精緻洗護",
    description: "最受歡迎，適合中長毛與換毛期。",
    price: "NT$1,100",
    featured: true,
    items: ["基礎清潔全項目", "護毛素與開結梳理", "局部修剪整理"],
  },
  {
    title: "造型美容",
    description: "適合需要整體修剪與造型的毛孩。",
    price: "NT$1,600",
    items: ["全身造型修剪", "足部與臉部細修", "美容後照片回傳"],
  },
];

const reviews = [
  {
    body: "第一次遇到會主動回報皮膚狀況的店，洗完毛很蓬鬆，也沒有一直抓癢。",
    initial: "米",
    name: "米露的媽媽",
    pet: "瑪爾濟斯｜敏感肌",
  },
  {
    body: "我家狗很怕吹風，美容師很有耐心，還分段讓牠休息，回家精神很好。",
    initial: "豆",
    name: "豆豆的爸爸",
    pet: "柴犬｜怕吹風",
  },
  {
    body: "價格透明，預約時間準，造型也會先溝通，修完真的乾淨又可愛。",
    initial: "花",
    name: "花生的姊姊",
    pet: "貴賓｜造型修剪",
  },
  {
    body: "貓咪本來很緊張，店員先讓牠熟悉環境，沒有硬抓硬洗，這點讓我很放心。",
    initial: "橘",
    name: "橘子的主人",
    pet: "米克斯貓｜初次洗護",
  },
  {
    body: "換毛期來做深層護毛，回家少掉很多飛毛，梳起來也不再一直卡住。",
    initial: "球",
    name: "球球的媽媽",
    pet: "柯基｜換毛護理",
  },
  {
    body: "美容後會傳照片和提醒，連耳朵有點紅都幫忙標註，照顧得很細。",
    initial: "奶",
    name: "奶茶的哥哥",
    pet: "博美｜例行保養",
  },
  {
    body: "之前在別家修得太短，這次有先確認長度和臉型，成品自然很多。",
    initial: "露",
    name: "露露的姊姊",
    pet: "比熊｜精緻修剪",
  },
  {
    body: "環境乾淨沒有刺鼻香味，接毛孩時精神很好，毛也柔順到一直想摸。",
    initial: "黑",
    name: "黑糖的爸爸",
    pet: "臘腸｜基礎清潔",
  },
];

const contactItems = [
  "📍 桃園市新屋區頭洲里新榮路 58 號",
  "☎ 02-2345-6789",
  "🕒 週二至週日 10:00 - 19:00",
  "💬 LINE：@pawlish",
];

const inputClass =
  "min-h-[46px] w-full rounded-lg border border-line bg-[#f9fbfa] px-3 py-2.5 text-ink outline-none transition focus:border-deep focus:ring-2 focus:ring-mint/40";

function ButtonLink({ href, variant = "primary", children }) {
  const classes =
    variant === "primary"
      ? "bg-deep text-white shadow-[0_12px_24px_rgba(35,84,93,0.2)]"
      : "border border-line bg-white text-deep";

  return (
    <a
      className={`${classes} inline-flex min-h-11 items-center justify-center rounded-lg px-[18px] font-bold transition duration-200 hover:-translate-y-0.5`}
      href={href}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 flex items-center justify-between gap-6 border-b border-line/90 bg-paper/90 px-[clamp(18px,4vw,64px)] py-3.5 backdrop-blur-[14px] max-[860px]:items-start">
        <a className="flex items-center gap-2.5 font-extrabold" href="#home" aria-label="毛毛沐場寵物沙龍首頁">
          <span className="grid h-[38px] w-[38px] place-items-center rounded-lg bg-deep text-xl text-white">🐾</span>
          <span className="max-[520px]:max-w-40 max-[520px]:leading-tight">毛毛沐場寵物沙龍</span>
        </a>
        <nav className="flex items-center gap-[clamp(12px,2vw,28px)] whitespace-nowrap text-[15px] text-muted max-[860px]:hidden" aria-label="主選單">
          <a className="hover:text-deep" href="#services">服務</a>
          <a className="hover:text-deep" href="#process">流程</a>
          <a className="hover:text-deep" href="#pricing">價格</a>
          <a className="hover:text-deep" href="#reviews">評價</a>
          <a className="inline-flex min-h-11 items-center justify-center rounded-lg bg-deep px-[18px] font-bold text-white shadow-[0_12px_24px_rgba(35,84,93,0.2)] transition duration-200 hover:-translate-y-0.5" href="#booking">
            立即預約
          </a>
        </nav>
      </header>

      <main id="home">
        <section className="relative isolate grid min-h-[calc(100vh-68px)] items-center overflow-hidden bg-[#f7fbf9] px-[clamp(18px,4vw,64px)] pb-11 pt-[clamp(28px,5vw,74px)] after:absolute after:inset-0 after:-z-[1] after:bg-[linear-gradient(90deg,rgba(255,253,249,0.97)_0%,rgba(255,253,249,0.86)_42%,rgba(255,253,249,0.14)_100%)] after:content-[''] max-[860px]:min-h-0 max-[860px]:pt-[70px] max-[860px]:after:bg-[linear-gradient(180deg,rgba(255,253,249,0.97),rgba(255,253,249,0.78))]" aria-label="寵物洗護店主視覺">
          <div className="absolute inset-0 -z-[2]" aria-hidden="true">
            <div className="absolute inset-0 bg-[url('/assets/carousel-reception.png')] bg-cover bg-right opacity-0 [animation:heroFade_15s_infinite] max-[860px]:bg-center" />
            <div className="absolute inset-0 bg-[url('/assets/carousel-spa.png')] bg-cover bg-right opacity-0 [animation:heroFade_15s_infinite_5s] max-[860px]:bg-center" />
            <div className="absolute inset-0 bg-[url('/assets/carousel-styling.png')] bg-cover bg-right opacity-0 [animation:heroFade_15s_infinite_10s] max-[860px]:bg-center" />
          </div>
          <div className="w-[min(660px,100%)]">
            <div className="mb-[18px] inline-flex items-center gap-2 text-sm font-extrabold text-deep">桃園新屋精緻寵物洗護沙龍</div>
            <h1 className="mb-[18px] text-[clamp(42px,7vw,82px)] font-bold leading-[1.02]">讓毛孩洗完澡，也像被好好疼愛過。</h1>
            <p className="mb-7 max-w-[560px] text-[clamp(17px,2vw,21px)] text-[#415056]">
              毛毛沐場提供毛孩洗澡、基礎美容、深層護毛與皮膚敏感照護。每一位毛孩都採預約制服務，降低等待與壓力。
            </p>
            <div className="mb-[34px] flex flex-wrap gap-3 max-[520px]:grid">
              <ButtonLink href="#booking">預約洗護</ButtonLink>
              <ButtonLink href="#services" variant="secondary">查看服務</ButtonLink>
            </div>
            <div className="grid max-w-[600px] grid-cols-3 gap-3 max-[860px]:grid-cols-1" aria-label="店鋪特色">
              {[
                ["1 對 1", "專人照護不混籠"],
                ["98%", "回訪客戶滿意度"],
                ["12 年", "寵物美容經驗"],
              ].map(([value, label]) => (
                <div className="rounded-lg border border-line/80 bg-white/80 p-4 shadow-[0_10px_30px_rgba(31,42,46,0.08)]" key={value}>
                  <strong className="block text-2xl leading-tight text-deep">{value}</strong>
                  <span className="text-[13px] text-muted">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-mist px-[clamp(18px,4vw,64px)] py-[clamp(58px,8vw,96px)]">
          <SectionHead title="從日常清潔到皮毛照護，一次整理好。" description="依照毛孩品種、毛量、膚況與性格調整洗護節奏，讓服務有效，也讓牠安心。" />
          <div className="mx-auto grid max-w-[1160px] grid-cols-3 gap-[18px] max-[860px]:grid-cols-1">
            {services.map((service) => (
              <article className="rounded-lg border border-line bg-white p-6 shadow-card" key={service.title}>
                <div className="mb-4 grid h-[50px] w-[50px] place-items-center rounded-lg bg-[#fdf4ee] text-2xl" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-[22px] font-bold">{service.title}</h3>
                <p className="text-muted">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="px-[clamp(18px,4vw,64px)] py-[clamp(58px,8vw,96px)]">
          <div className="mx-auto grid max-w-[1160px] grid-cols-[0.9fr_1.1fr] items-center gap-[clamp(26px,5vw,68px)] max-[860px]:grid-cols-1">
            <div
              className="min-h-[540px] rounded-lg bg-[linear-gradient(180deg,rgba(35,84,93,0.02),rgba(35,84,93,0.2)),url('https://images.unsplash.com/photo-1601758177266-bc599de87707?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center shadow-soft max-[860px]:min-h-[340px]"
              role="img"
              aria-label="美容師替寵物整理毛髮"
            />
            <div>
              <div className="mb-[18px] inline-flex items-center gap-2 text-sm font-extrabold text-deep">安心流程</div>
              <h2 className="mb-8 text-[clamp(30px,4vw,48px)] font-bold leading-[1.12]">每一步都讓你知道，毛孩正在被怎麼照顧。</h2>
              <div className="grid gap-4">
                {steps.map((step) => (
                  <div className="grid grid-cols-[50px_1fr] items-start gap-4 border-b border-line pb-[18px] max-[520px]:grid-cols-1" key={step.number}>
                    <div className="grid h-[46px] w-[46px] place-items-center rounded-lg bg-coral font-extrabold text-white">{step.number}</div>
                    <div>
                      <h3 className="mb-1 text-xl font-bold">{step.title}</h3>
                      <p className="mb-0 text-muted">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-[#fff8ec] px-[clamp(18px,4vw,64px)] py-[clamp(58px,8vw,96px)]">
          <SectionHead title="清楚價格，依毛孩狀況現場確認。" description="以下為小型犬參考價，實際費用會依體型、毛量、打結程度與特殊照護需求調整。" />
          <div className="mx-auto grid max-w-[1160px] grid-cols-3 gap-[18px] max-[860px]:grid-cols-1">
            {prices.map((item) => (
              <article className={`rounded-lg bg-white p-6 shadow-card ${item.featured ? "border-2 border-gold -translate-y-2.5 max-[860px]:translate-y-0" : "border border-line"}`} key={item.title}>
                <h3 className="mb-2 text-[22px] font-bold">{item.title}</h3>
                <p className="text-muted">{item.description}</p>
                <div className="my-3 flex items-baseline gap-1.5 text-[34px] font-black text-deep">
                  {item.price} <span className="text-sm font-semibold text-muted">起</span>
                </div>
                <ul className="grid gap-2.5 p-0 text-[#46585e]">
                  {item.items.map((feature) => (
                    <li className="list-none before:mr-2 before:font-black before:text-coral before:content-['✓']" key={feature}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="reviews" className="bg-paper px-[clamp(18px,4vw,64px)] py-[clamp(58px,8vw,96px)]">
          <SectionHead title="飼主放心，毛孩願意再來。" description="我們重視漂亮的成果，也重視牠每一次進門時的心情。" />
          <div className="review-carousel mx-auto max-w-[1160px] overflow-hidden" aria-label="客戶評價輪播">
            <div className="review-track flex w-max gap-[18px] py-2">
              {[...reviews, ...reviews].map((review, index) => (
                <article
                  className="grid min-h-[260px] w-[min(360px,82vw)] shrink-0 content-between gap-5 rounded-lg border border-line bg-white p-6 shadow-card"
                  key={`${review.name}-${index}`}
                  aria-hidden={index >= reviews.length ? "true" : undefined}
                >
                  <div>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div className="text-lg tracking-[2px] text-gold" aria-label="五星評價">★★★★★</div>
                      <span className="rounded-full bg-mist px-3 py-1 text-xs font-bold text-deep">{review.pet}</span>
                    </div>
                    <p className="text-[17px] leading-relaxed text-[#46585e]">「{review.body}」</p>
                  </div>
                  <div className="flex items-center gap-3 font-extrabold">
                    <span className="grid h-[46px] w-[46px] place-items-center rounded-full bg-deep text-white">{review.initial}</span>
                    <div>
                      <div>{review.name}</div>
                      <div className="text-sm font-semibold text-muted">固定回訪飼主</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="bg-deep px-[clamp(18px,4vw,64px)] py-[clamp(58px,8vw,96px)] text-white">
          <div className="mx-auto grid max-w-[1160px] gap-[clamp(26px,5vw,54px)]">
            <div className="grid gap-6">
              <div className="max-w-[760px]">
                <div className="mb-[18px] inline-flex items-center gap-2 text-sm font-extrabold text-mint">預約與聯絡</div>
                <h2 className="mb-3.5 text-[clamp(32px,5vw,56px)] font-bold leading-[1.08]">把洗澡日變成毛孩舒服的一天。</h2>
                <p className="text-white/75">填寫預約需求後，我們會在營業時間內聯繫你確認時段與毛孩狀況。</p>
              </div>
              <div className="grid gap-3 rounded-lg border border-white/15 bg-white/8 p-[clamp(18px,3vw,26px)]" aria-label="店鋪資訊">
                {contactItems.map((item) => (
                  <div className="flex items-center gap-3 text-white/90" key={item}>{item}</div>
                ))}
              </div>
              <div className="overflow-hidden rounded-lg border border-mint/50 bg-[#f5fffb] text-ink shadow-[0_18px_42px_rgba(12,47,54,0.2)]" role="img" aria-label="毛毛沐場寵物沙龍位於桃園市新屋區頭洲里新榮路 58 號的可愛風格地圖">
                <img className="block aspect-[4/3] h-auto w-full object-contain" src="/assets/store-map-ai.png" alt="毛毛沐場寵物沙龍位於桃園市新屋區頭洲里新榮路 58 號的清新可愛風格地圖" />
              </div>
            </div>
            <form className="grid gap-3.5 rounded-lg bg-white p-[clamp(20px,4vw,34px)] text-ink shadow-soft">
              <div className="grid grid-cols-2 gap-3.5 max-[860px]:grid-cols-1">
                <FormLabel label="飼主姓名">
                  <input className={inputClass} type="text" name="owner" placeholder="王小美" />
                </FormLabel>
                <FormLabel label="聯絡電話">
                  <input className={inputClass} type="tel" name="phone" placeholder="0912-345-678" />
                </FormLabel>
              </div>
              <div className="grid grid-cols-2 gap-3.5 max-[860px]:grid-cols-1">
                <FormLabel label="寵物種類">
                  <select className={inputClass} name="pet" defaultValue="小型犬">
                    <option>小型犬</option>
                    <option>中大型犬</option>
                    <option>貓咪</option>
                    <option>其他</option>
                  </select>
                </FormLabel>
                <FormLabel label="希望服務">
                  <select className={inputClass} name="service" defaultValue="基礎清潔">
                    <option>基礎清潔</option>
                    <option>精緻洗護</option>
                    <option>造型美容</option>
                    <option>皮膚敏感照護</option>
                  </select>
                </FormLabel>
              </div>
              <FormLabel label="期望到店日期">
                <BookingDateTimeInput className={inputClass} />
              </FormLabel>
              <FormLabel label="備註">
                <textarea className={`${inputClass} min-h-24 resize-y`} name="note" placeholder="例如：容易緊張、皮膚敏感、毛結位置、偏好的造型" />
              </FormLabel>
              <button className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg border-0 bg-deep px-[18px] font-bold text-white shadow-[0_12px_24px_rgba(35,84,93,0.2)] transition duration-200 hover:-translate-y-0.5" type="button">
                送出預約需求
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="flex justify-between gap-[18px] border-t border-line bg-white px-[clamp(18px,4vw,64px)] py-[26px] text-sm text-muted max-[860px]:grid">
        <span>© 2026 毛毛沐場寵物沙龍</span>
        <span>專業犬貓洗澡｜造型美容｜深層護毛</span>
      </footer>
    </>
  );
}

function SectionHead({ title, description }) {
  return (
    <div className="mx-auto mb-8 flex max-w-[1160px] items-end justify-between gap-7 max-[860px]:grid">
      <h2 className="mb-0 max-w-[620px] text-[clamp(30px,4vw,48px)] font-bold leading-[1.12]">{title}</h2>
      <p className="mb-0 max-w-[430px] text-muted">{description}</p>
    </div>
  );
}

function FormLabel({ label, children }) {
  return (
    <label className="grid gap-[7px] text-sm font-bold text-[#3f4e52]">
      {label}
      {children}
    </label>
  );
}
