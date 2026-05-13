"use client";

import { useMemo, useState } from "react";

type DayPlan = {
  id: string;
  label: string;
  city: string;
  mood: string;
  morning: string;
  afternoon: string;
  evening: string;
  tip: string;
};

type KlookOption = {
  id: string;
  title: string;
  day: string;
  category: "view" | "culture" | "relax" | "daytrip" | "theme";
  price: number;
  duration: string;
};

const days: DayPlan[] = [
  {
    id: "day1",
    label: "Day 1",
    city: "Tokyo",
    mood: "抵達和淺草慢步調",
    morning: "抵達、領交通卡、把行李放到飯店",
    afternoon: "淺草寺、雷門、隅田川散步",
    evening: "上野或銀座晚餐，早點休息",
    tip: "第一天保留彈性，航班延誤也不會打亂後面安排。"
  },
  {
    id: "day2",
    label: "Day 2",
    city: "Tokyo",
    mood: "城市觀景和角色周邊",
    morning: "澀谷、原宿、表參道",
    afternoon: "Pokemon Center TOKYO DX 或 teamLab",
    evening: "Shibuya Sky 黃昏場次",
    tip: "觀景台建議預約日落前 45 分鐘左右的時段。"
  },
  {
    id: "day3",
    label: "Day 3",
    city: "Yokohama",
    mood: "皮卡丘遊行主日",
    morning: "移動到港未來，先確認遊行路線",
    afternoon: "提早卡位、拍遊行、補水休息",
    evening: "紅磚倉庫、摩天輪、海邊夜景",
    tip: "遊行日少排室內付費行程，把體力留給等待和移動。"
  },
  {
    id: "day4",
    label: "Day 4",
    city: "Hakone",
    mood: "溫泉或富士山備案",
    morning: "前往箱根或參加富士山一日遊",
    afternoon: "蘆之湖、大涌谷或河口湖景點",
    evening: "溫泉、足湯、回到東京或住宿箱根",
    tip: "如果天氣差，改成豐洲溫泉會比較穩。"
  },
  {
    id: "day5",
    label: "Day 5",
    city: "Tokyo",
    mood: "回程採買和彈性補點",
    morning: "東京車站 Character Street",
    afternoon: "補逛 teamLab、晴空塔或伴手禮",
    evening: "前往機場，保留交通緩衝",
    tip: "最後一天不要排太遠，行李和退稅會吃掉時間。"
  }
];

const klookOptions: KlookOption[] = [
  { id: "shibuya-sky", title: "Shibuya Sky", day: "Day 2", category: "view", price: 531, duration: "1.5 小時" },
  { id: "teamlab", title: "teamLab Borderless", day: "Day 2 / Day 5", category: "culture", price: 1180, duration: "2 小時" },
  { id: "kimono", title: "淺草和服體驗", day: "Day 1", category: "culture", price: 560, duration: "3 小時" },
  { id: "toyosu-onsen", title: "豐洲萬葉俱樂部溫泉", day: "Day 4", category: "relax", price: 396, duration: "2.5 小時" },
  { id: "fuji-tour", title: "富士山一日遊", day: "Day 4", category: "daytrip", price: 1170, duration: "整天" },
  { id: "disney", title: "東京迪士尼度假區", day: "延伸 Day 6", category: "theme", price: 1517, duration: "整天" }
];

const checklist = ["護照", "Suica / 交通卡", "行動電源", "雨具", "遊行卡位小坐墊", "Klook 憑證"];
const categoryLabels = {
  all: "全部",
  view: "觀景",
  culture: "文化拍照",
  relax: "放鬆",
  daytrip: "一日遊",
  theme: "主題樂園"
};

const currency = new Intl.NumberFormat("zh-TW");

export function TripPlanner() {
  const [activeDay, setActiveDay] = useState(days[2].id);
  const [category, setCategory] = useState<keyof typeof categoryLabels>("all");
  const [selectedActivities, setSelectedActivities] = useState<string[]>(["shibuya-sky", "kimono"]);
  const [checkedItems, setCheckedItems] = useState<string[]>(["護照", "行動電源"]);

  const day = days.find((item) => item.id === activeDay) || days[0];
  const filteredOptions = category === "all" ? klookOptions : klookOptions.filter((item) => item.category === category);
  const activityTotal = useMemo(
    () =>
      klookOptions
        .filter((item) => selectedActivities.includes(item.id))
        .reduce((total, item) => total + item.price, 0),
    [selectedActivities]
  );
  const completeCount = checkedItems.length;

  function toggleActivity(id: string) {
    setSelectedActivities((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  function toggleChecklist(item: string) {
    setCheckedItems((current) =>
      current.includes(item) ? current.filter((entry) => entry !== item) : [...current, item]
    );
  }

  return (
    <section className="section planner-section" id="planner">
      <div className="section-heading">
        <span className="section-kicker">Interactive Planner</span>
        <h2>互動規劃工具</h2>
      </div>

      <div className="planner-grid">
        <article className="planner-panel day-panel">
          <div className="panel-head">
            <span>行程切換</span>
            <strong>{day.city}</strong>
          </div>
          <div className="day-tabs" role="tablist" aria-label="選擇行程日">
            {days.map((item) => (
              <button
                aria-selected={item.id === activeDay}
                className={item.id === activeDay ? "is-active" : ""}
                key={item.id}
                onClick={() => setActiveDay(item.id)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="selected-day-card">
            <span>{day.label}</span>
            <h3>{day.mood}</h3>
            <dl>
              <div>
                <dt>上午</dt>
                <dd>{day.morning}</dd>
              </div>
              <div>
                <dt>下午</dt>
                <dd>{day.afternoon}</dd>
              </div>
              <div>
                <dt>晚上</dt>
                <dd>{day.evening}</dd>
              </div>
            </dl>
            <p>{day.tip}</p>
          </div>
        </article>

        <article className="planner-panel booking-panel">
          <div className="panel-head">
            <span>Klook 篩選</span>
            <strong>NT$ {currency.format(activityTotal)}</strong>
          </div>
          <div className="filter-tabs" aria-label="篩選 Klook 推薦">
            {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map((key) => (
              <button
                className={category === key ? "is-active" : ""}
                key={key}
                onClick={() => setCategory(key)}
                type="button"
              >
                {categoryLabels[key]}
              </button>
            ))}
          </div>
          <div className="activity-list">
            {filteredOptions.map((option) => (
              <label className="activity-option" key={option.id}>
                <input
                  checked={selectedActivities.includes(option.id)}
                  onChange={() => toggleActivity(option.id)}
                  type="checkbox"
                />
                <span>
                  <strong>{option.title}</strong>
                  <small>
                    {option.day} · {option.duration} · NT$ {currency.format(option.price)}
                  </small>
                </span>
              </label>
            ))}
          </div>
        </article>

        <article className="planner-panel readiness-panel">
          <div className="panel-head">
            <span>出發清單</span>
            <strong>
              {completeCount}/{checklist.length}
            </strong>
          </div>
          <div className="progress-track" aria-label={`完成 ${completeCount} / ${checklist.length}`}>
            <span style={{ width: `${(completeCount / checklist.length) * 100}%` }} />
          </div>
          <div className="checklist-grid">
            {checklist.map((item) => (
              <label className="check-item" key={item}>
                <input
                  checked={checkedItems.includes(item)}
                  onChange={() => toggleChecklist(item)}
                  type="checkbox"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
