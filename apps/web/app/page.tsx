const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const route = [
  {
    day: "Day 1",
    city: "Tokyo",
    title: "抵達東京，先把節奏調慢",
    items: ["成田或羽田抵達", "淺草寺與隅田川散步", "上野或銀座晚餐"]
  },
  {
    day: "Day 2",
    city: "Tokyo",
    title: "城市經典和角色周邊巡禮",
    items: ["澀谷 Scramble Square", "原宿與表參道", "Pokemon Center TOKYO DX"]
  },
  {
    day: "Day 3",
    city: "Yokohama",
    title: "皮卡丘遊行主日",
    items: ["上午移動到橫濱港未來", "提早卡位遊行路線", "紅磚倉庫與海邊夜景"]
  },
  {
    day: "Day 4",
    city: "Hakone",
    title: "箱根溫泉和富士山視野",
    items: ["浪漫特快或 JR 轉乘", "蘆之湖和大涌谷", "溫泉旅館放空"]
  },
  {
    day: "Day 5",
    city: "Tokyo",
    title: "伴手禮和彈性回程",
    items: ["東京車站 Character Street", "機場退稅與伴手禮", "預留航班緩衝"]
  }
];

const budget = [
  ["機票", "NT$ 12,000 - 18,000", "早鳥或淡季可再壓低"],
  ["住宿", "NT$ 15,000 - 24,000", "東京 3 晚加箱根 1 晚"],
  ["交通", "NT$ 5,000 - 8,000", "Suica、橫濱來回、箱根交通"],
  ["餐食", "NT$ 8,000 - 12,000", "含咖啡、甜點與一餐好料"],
  ["活動購物", "NT$ 6,000+", "Pokemon Center 和遊行周邊"]
];

const watchTips = [
  "皮卡丘遊行通常人潮密集，建議活動前 90 到 120 分鐘抵達預定觀賞點。",
  "實際日期、路線和規範每年可能調整，出發前以 Pokemon 官方活動公告和橫濱觀光資訊為準。",
  "帶輕便坐墊、行動電源、瓶裝水，夏季加上防曬和小毛巾。",
  "拍照時先設定連拍或錄影，角色經過的時間比想像中短。"
];

const imageCredits = [
  {
    src: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1600&q=80",
    alt: "Tokyo street at night",
    label: "東京夜景"
  },
  {
    src: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1200&q=80",
    alt: "Mount Fuji view",
    label: "富士山視野"
  },
  {
    src: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1200&q=80",
    alt: "Japanese shrine path",
    label: "城市散步"
  }
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Japan Travel Plan</span>
          <h1>東京到橫濱，追一場皮卡丘遊行。</h1>
          <p>
            一份 5 天 4 夜的日本旅遊規劃，把東京經典景點、橫濱港未來的皮卡丘遊行、
            箱根溫泉和回程採買排進同一條舒服路線。
          </p>
          <div className="hero-actions" aria-label="主要行程資訊">
            <a className="primary-link" href="#route">
              看行程
            </a>
            <a className="ghost-link" href="#budget">
              估預算
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="旅遊重點照片">
          <img src={imageCredits[0].src} alt={imageCredits[0].alt} />
          <div className="mascot-card">
            <span>Parade Goal</span>
            <strong>皮卡丘遊行</strong>
            <small>橫濱港未來周邊</small>
          </div>
        </div>
      </section>

      <section className="quick-panel" aria-label="旅程摘要">
        <article>
          <span>天數</span>
          <strong>5 天 4 夜</strong>
        </article>
        <article>
          <span>路線</span>
          <strong>東京 / 橫濱 / 箱根</strong>
        </article>
        <article>
          <span>重點</span>
          <strong>遊行卡位和周邊採買</strong>
        </article>
        <article>
          <span>風格</span>
          <strong>自由行、交通簡單</strong>
        </article>
      </section>

      <section className="section intro-grid">
        <div>
          <span className="section-kicker">Trip Mood</span>
          <h2>白天看城市，傍晚看海，主日留給黃色電力。</h2>
        </div>
        <p>
          這份規劃刻意把橫濱排在第 3 天，前兩天先適應交通和步調，遊行當天不用拖著行李奔波。
          箱根放在後段，讓旅程從熱鬧活動收束到溫泉和山景。
        </p>
      </section>

      <section className="media-strip" aria-label="日本旅遊照片">
        {imageCredits.slice(1).map((image) => (
          <figure key={image.label}>
            <img src={image.src} alt={image.alt} />
            <figcaption>{image.label}</figcaption>
          </figure>
        ))}
      </section>

      <section className="section" id="route">
        <div className="section-heading">
          <span className="section-kicker">Itinerary</span>
          <h2>每日行程</h2>
        </div>
        <div className="timeline">
          {route.map((day) => (
            <article className="day-card" key={day.day}>
              <div className="day-label">
                <span>{day.day}</span>
                <strong>{day.city}</strong>
              </div>
              <div>
                <h3>{day.title}</h3>
                <ul>
                  {day.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <span className="section-kicker">Parade Notes</span>
          <h2>看皮卡丘遊行的重點</h2>
        </div>
        <div className="tips-list">
          {watchTips.map((tip) => (
            <p key={tip}>{tip}</p>
          ))}
        </div>
      </section>

      <section className="section" id="budget">
        <div className="section-heading">
          <span className="section-kicker">Budget</span>
          <h2>粗估預算</h2>
        </div>
        <div className="budget-table">
          {budget.map(([name, amount, note]) => (
            <article key={name}>
              <span>{name}</span>
              <strong>{amount}</strong>
              <small>{note}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>出發前檢查</h2>
        <p>
          訂房時優先選東京站、銀座、新橋或橫濱港未來周邊，遊行日會省下很多移動壓力。
          活動資訊請在出發前再次確認官方公告，並把雨天備案留在同一區域。
        </p>
        <a href={`${basePath}/`} aria-label="回到頁首">
          回到頁首
        </a>
      </section>
    </main>
  );
}
