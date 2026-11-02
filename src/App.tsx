import { useState, type ReactNode } from 'react'

type IconName =
  | 'shield' | 'home' | 'calendar' | 'lock' | 'settings' | 'bell' | 'zap'
  | 'plus' | 'activity' | 'wallet' | 'box' | 'brain' | 'arrow' | 'check'
  | 'sun' | 'moon' | 'coffee' | 'heart' | 'edit' | 'info' | 'x'

const paths: Record<IconName, ReactNode> = {
  shield: <path d="M12 2 4.5 5v5.2c0 4.7 3.2 9.1 7.5 10.4 4.3-1.3 7.5-5.7 7.5-10.4V5L12 2Zm0 3.1 4.6 1.8v3.3c0 3.2-1.9 6.3-4.6 7.5-2.7-1.2-4.6-4.3-4.6-7.5V6.9L12 5.1Z" />,
  home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9M9 20v-7h6v7" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
  lock: <><rect x="4" y="10" width="16" height="11" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
  zap: <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />,
  plus: <path d="M12 5v14M5 12h14" />,
  activity: <path d="M3 12h4l2-7 4 14 2-7h6" />,
  wallet: <><path d="M3 6h15a3 3 0 0 1 3 3v10H5a2 2 0 0 1-2-2V6Z" /><path d="M3 6a3 3 0 0 1 3-3h11v3M16 11h5v4h-5a2 2 0 0 1 0-4Z" /></>,
  box: <><path d="m4 7 8-4 8 4-8 4-8-4Z" /><path d="M4 7v10l8 4 8-4V7M12 11v10" /></>,
  brain: <><path d="M9.5 4.5A3.5 3.5 0 0 0 6 8v.5A3.5 3.5 0 0 0 4.5 15 3.5 3.5 0 0 0 9 19.5V4.5Z" /><path d="M14.5 4.5A3.5 3.5 0 0 1 18 8v.5a3.5 3.5 0 0 1 1.5 6.5 3.5 3.5 0 0 1-4.5 4.5v-15ZM9 9H6M15 9h3M9 15H6.5M15 15h2.5" /></>,
  arrow: <path d="m9 18 6-6-6-6" />,
  check: <path d="m5 12 4 4L19 6" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  moon: <path d="M20 15.5A9 9 0 0 1 8.5 4 9 9 0 1 0 20 15.5Z" />,
  coffee: <><path d="M4 8h12v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" /><path d="M16 10h2a3 3 0 0 1 0 6h-3M8 2v3M12 2v3" /></>,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
  edit: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5Z" /></>,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>,
  x: <path d="m6 6 12 12M18 6 6 18" />,
}

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={name === 'shield' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function Pill({ children, tone = 'green' }: { children: ReactNode; tone?: 'green' | 'gold' | 'muted' | 'red' }) {
  return <span className={`pill pill-${tone}`}>{children}</span>
}

function SectionTitle({ icon, title, action }: { icon: IconName; title: string; action?: ReactNode }) {
  return <div className="section-title"><div className="section-icon"><Icon name={icon} size={17} /></div><h2>{title}</h2>{action}</div>
}

const navItems: { id: 'home' | 'planner' | 'guard'; label: string; sub: string; icon: IconName }[] = [
  { id: 'home', label: 'Tỉnh thức', sub: 'Trung tâm chỉ huy', icon: 'home' },
  { id: 'planner', label: 'Tái thiết', sub: 'Thể chất & tài chính', icon: 'calendar' },
  { id: 'guard', label: 'Lá chắn', sub: 'Bảo vệ thiết bị', icon: 'lock' },
]

function App() {
  const [tab, setTab] = useState<'home' | 'planner' | 'guard'>('home')
  const [pushups, setPushups] = useState(25)
  const [pullups, setPullups] = useState(5)
  const [spent, setSpent] = useState(30000)
  const [sos, setSos] = useState(false)
  const [toast, setToast] = useState('')
  const [checked, setChecked] = useState([true, true, false, false, true, false, false, false, true])
  const [protections, setProtections] = useState([true, true, true, false])

  const notify = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(''), 2200)
  }

  const addPushups = (amount = 25) => {
    setPushups((value) => value + amount)
    notify(`Đã ghi nhận +${amount} hít đất`)
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark"><Icon name="shield" size={24} /><span className="brand-pulse" /></div>
          <div><strong>MINDSHIELD</strong><small>Survival OS · v2.4</small></div>
        </div>
        <nav className="main-nav" aria-label="Điều hướng chính">
          <p className="nav-label">Hệ điều hành</p>
          {navItems.map((item) => (
            <button key={item.id} className={`nav-item ${tab === item.id ? 'active' : ''}`} onClick={() => setTab(item.id)}>
              <span className="nav-icon"><Icon name={item.icon} /></span>
              <span><strong>{item.label}</strong><small>{item.sub}</small></span>
              {tab === item.id && <Icon name="arrow" size={15} />}
            </button>
          ))}
        </nav>
        <div className="sidebar-status">
          <div className="status-top"><span className="live-dot" /><span>HỆ THỐNG ỔN ĐỊNH</span><strong>99.9%</strong></div>
          <div className="micro-bars"><i /><i /><i /><i /><i /></div>
          <p>Lá chắn hoạt động liên tục</p>
          <small>Độ trễ trung bình 0.06ms</small>
        </div>
        <button className="profile">
          <span className="avatar">N</span>
          <span><strong>Người kiến tạo</strong><small>Ngày thứ 3 · Cấp 02</small></span>
          <Icon name="settings" size={17} />
        </button>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">THỨ TƯ · 24 THÁNG 7 · 16:38</p>
            <h1>{tab === 'home' ? 'Trung tâm tỉnh thức' : tab === 'planner' ? 'Kế hoạch tái thiết' : 'Lá chắn bảo vệ'}</h1>
          </div>
          <div className="top-actions">
            <div className="protection-badge"><span className="live-dot" /><span>Bảo vệ</span><strong>BẬT</strong><small>0.06ms</small></div>
            <button className="icon-button" aria-label="Thông báo"><Icon name="bell" /><span className="notification-dot" /></button>
            <button className="icon-button" aria-label="Cài đặt"><Icon name="settings" /></button>
          </div>
        </header>

        {tab === 'home' && <Home pushups={pushups} pullups={pullups} spent={spent} addPushups={addPushups} setPullups={setPullups} setSpent={setSpent} setSos={setSos} notify={notify} />}
        {tab === 'planner' && <Planner pushups={pushups} pullups={pullups} addPushups={addPushups} setPullups={setPullups} spent={spent} setSpent={setSpent} checked={checked} setChecked={setChecked} setSos={setSos} notify={notify} />}
        {tab === 'guard' && <Guard values={protections} setValues={setProtections} notify={notify} />}
      </main>

      <nav className="mobile-nav" aria-label="Điều hướng di động">
        {navItems.map((item) => <button key={item.id} className={tab === item.id ? 'active' : ''} onClick={() => setTab(item.id)}><Icon name={item.icon} /><span>{item.label}</span></button>)}
      </nav>

      {sos && <SosModal close={() => setSos(false)} action={() => { setSos(false); addPushups(25) }} />}
      {toast && <div className="toast"><span><Icon name="check" size={15} /></span>{toast}</div>}
    </div>
  )
}

function Home({ pushups, pullups, spent, addPushups, setPullups, setSpent, setSos, notify }: {
  pushups: number; pullups: number; spent: number; addPushups: (n?: number) => void
  setPullups: React.Dispatch<React.SetStateAction<number>>; setSpent: React.Dispatch<React.SetStateAction<number>>
  setSos: (v: boolean) => void; notify: (s: string) => void
}) {
  return <div className="dashboard">
    <section className="hero-card">
      <div className="hero-copy">
        <Pill><span className="live-dot" /> CHUỖI ĐANG HOẠT ĐỘNG</Pill>
        <h2>Giữ tâm trí vững,<br /><em>tái thiết từng ngày.</em></h2>
        <p>Bạn đã vượt qua 72 giờ đầu tiên. Hệ thần kinh đang bắt đầu cân bằng và năng lượng nền đang trở lại.</p>
        <div className="next-gate"><span><Icon name="zap" /></span><div><small>CỬA ẢI TIẾP THEO</small><strong>7 ngày · Đỉnh Testosterone</strong></div><Pill tone="gold">CÒN 4 NGÀY</Pill></div>
      </div>
      <div className="chrono-wrap">
        <div className="chrono-orbit orbit-one" />
        <div className="chrono-orbit orbit-two" />
        <div className="chrono">
          <svg viewBox="0 0 220 220"><circle className="ring-track" cx="110" cy="110" r="94" /><circle className="ring-progress" cx="110" cy="110" r="94" /></svg>
          <div className="chrono-core"><span>NGÀY</span><strong>03</strong><small>TỈNH THỨC</small><Pill><Icon name="zap" size={11} /> TÂN BINH</Pill></div>
        </div>
        <div className="ring-label label-a">72H <span>ỔN ĐỊNH</span></div>
        <div className="ring-label label-b">43% <span>TIẾN ĐỘ</span></div>
      </div>
    </section>

    <section className="quick-grid">
      <Quick icon="activity" label="+25 HÍT ĐẤT" value={`${pushups}/50 hôm nay`} onClick={() => addPushups(25)} />
      <Quick icon="zap" label="+5 KÉO XÀ" value={`${pullups}/15 hôm nay`} onClick={() => { setPullups(v => v + 5); notify('Đã ghi nhận +5 kéo xà') }} />
      <Quick icon="wallet" label="ĂN CƠM 30K" value={`${Math.max(0, 50000 - spent).toLocaleString('vi-VN')}đ còn lại`} gold onClick={() => { setSpent(v => v + 30000); notify('Đã trừ 30.000đ quỹ ăn') }} />
      <Quick icon="brain" label="BẾ TẮC / SOS" value="Cắt cơn trong 2 phút" danger onClick={() => setSos(true)} />
    </section>

    <div className="content-grid">
      <section className="card telemetry-card">
        <SectionTitle icon="activity" title="Phân tích sống" action={<Pill>TRỰC TUYẾN</Pill>} />
        <div className="telemetry-meta">
          <span><i className="meta-dot" /> Tại phòng</span><span>65kg / 170cm</span><span>BMI 22.5</span><span className="accent">Quyết tâm</span>
        </div>
        <div className="directive">
          <div className="directive-time"><small>VIỆC TIẾP THEO</small><strong>16:38</strong><span>TRONG 22 PHÚT</span></div>
          <div className="directive-main"><div className="directive-icon"><Icon name="activity" size={24} /></div><div><small>ƯU TIÊN THỂ CHẤT · 17:00</small><h3>Calisthenics — Vai, ngực & lưng</h3><p>2 hiệp hít đất, 2 hiệp kéo xà. Tập vừa sức, ưu tiên form chuẩn.</p></div></div>
          <button className="round-action" aria-label="Xem chi tiết"><Icon name="arrow" /></button>
        </div>
        <div className="ai-input"><span><Icon name="brain" /></span><input aria-label="Nhập hoạt động" placeholder="Bạn vừa ăn, uống hoặc làm gì?" /><button onClick={() => notify('AI đang phân tích nhật ký của bạn')}>PHÂN TÍCH <Icon name="arrow" size={14} /></button></div>
      </section>

      <section className="card vitals-card">
        <SectionTitle icon="heart" title="Chỉ số hôm nay" action={<span className="updated">CẬP NHẬT 2P TRƯỚC</span>} />
        <div className="vital-row"><div className="vital-icon green"><Icon name="activity" /></div><div><small>CALISTHENICS</small><strong>{pushups + pullups} <em>lần</em></strong></div><div className="spark-bars">{[3,5,4,7,5,8,6,9].map((n,i) => <i key={i} style={{height: `${n * 4}px`}} />)}</div></div>
        <div className="vital-row"><div className="vital-icon gold"><Icon name="wallet" /></div><div><small>CHI TIÊU HÔM NAY</small><strong>{spent.toLocaleString('vi-VN')}<em>đ</em></strong></div><Pill tone="gold">CÒN {(50000-spent).toLocaleString('vi-VN')}Đ</Pill></div>
        <div className="vital-row"><div className="vital-icon mint"><Icon name="check" /></div><div><small>CHECKLIST KỶ LUẬT</small><strong>6/9 <em>mục</em></strong></div><div className="mini-progress"><i /></div></div>
      </section>
    </div>

    <section className="insight-strip">
      <div className="insight-icon"><Icon name="brain" /></div><div><small>STOIC INSIGHT · 16:38</small><p>“Đừng đòi hỏi mọi việc xảy ra như bạn muốn. Hãy muốn chúng xảy ra như chúng vốn có — và bạn sẽ bình an.”</p><span>— Epictetus</span></div><button onClick={() => notify('Đã lưu insight hôm nay')}>LƯU LẠI <Icon name="arrow" size={14} /></button>
    </section>
  </div>
}

function Quick({ icon, label, value, onClick, gold, danger }: { icon: IconName; label: string; value: string; onClick: () => void; gold?: boolean; danger?: boolean }) {
  return <button className={`quick ${gold ? 'gold' : ''} ${danger ? 'danger' : ''}`} onClick={onClick}><span className="quick-icon"><Icon name={icon} /></span><span><strong>{label}</strong><small>{value}</small></span><span className="quick-plus"><Icon name="plus" size={15} /></span></button>
}

function Planner({ pushups, pullups, addPushups, setPullups, spent, setSpent, checked, setChecked, setSos, notify }: any) {
  const inventory = ['Sữa tươi · 8 bịch', 'Chuối · 1 trái', 'Cà phê · 19 gói', 'Trứng · 4 quả']
  return <div className="page-stack">
    <div className="page-intro"><div><Pill>PHỤC HỒI CHỦ ĐỘNG</Pill><h2>Xây lại nền móng sống</h2><p>Một hệ thống tối giản cho thể chất, dòng tiền và nhịp sinh học của bạn.</p></div><div className="score-block"><span>ĐIỂM KỶ LUẬT</span><strong>68</strong><small>/ 100</small></div></div>
    <div className="planner-grid">
      <section className="card body-card">
        <SectionTitle icon="heart" title="Thể trạng & cảm xúc" action={<button className="text-action"><Icon name="edit" size={14} /> Cập nhật</button>} />
        <div className="metric-trio"><div><small>CÂN NẶNG</small><strong>65 <em>kg</em></strong></div><div><small>CHIỀU CAO</small><strong>170 <em>cm</em></strong></div><div><small>BMI</small><strong>22.5</strong><Pill>TIÊU CHUẨN</Pill></div></div>
        <div className="mood-line"><Icon name="brain" /><div><small>TÂM LÝ HIỆN TẠI</small><strong>Quyết tâm · Hơi áp lực tài chính</strong></div></div>
      </section>
      <section className="card training-card">
        <SectionTitle icon="activity" title="Calisthenics hôm nay" action={<Pill tone="gold">17:00</Pill>} />
        <Exercise label="Hít đất" value={pushups} max={50} onClick={() => addPushups(25)} add="+25" />
        <Exercise label="Kéo xà" value={pullups} max={15} onClick={() => { setPullups((v:number) => v+5); notify('Đã cộng 5 kéo xà') }} add="+5" />
        <Exercise label="Squat" value={30} max={50} onClick={() => notify('Đã cộng 20 squat')} add="+20" />
        <button className="sos-button" onClick={() => setSos(true)}><Icon name="brain" /> CẮT CƠN BẾ TẮC / SO SÁNH BẢN THÂN</button>
      </section>
      <section className="card finance-card">
        <SectionTitle icon="wallet" title="Quỹ sinh tồn" action={<button className="text-action"><Icon name="edit" size={14} /> Cài đặt</button>} />
        <div className="finance-hero"><small>KHẢ DỤNG SAU TIỀN TRỌ</small><strong>1.500.000<em>đ</em></strong><span>30 ngày còn lại</span></div>
        <div className="budget-row"><div><span>Hạn mức hôm nay</span><strong>50.000đ</strong></div><div><span>Đã chi</span><strong>{spent.toLocaleString('vi-VN')}đ</strong></div><div className="remaining"><span>Còn lại</span><strong>{Math.max(0, 50000-spent).toLocaleString('vi-VN')}đ</strong></div></div>
        <button className="outline-button" onClick={() => {setSpent((v:number)=>v+30000);notify('Đã ghi chi tiêu 30.000đ')}}><Icon name="plus" /> Ghi bữa ăn 30.000đ</button>
      </section>
      <section className="card inventory-card">
        <SectionTitle icon="box" title="Kho đồ ăn trong phòng" />
        <div className="inventory-list">{inventory.map((item, i) => <span key={item}><i>{i + 1}</i>{item}</span>)}</div>
        <div className="add-row"><input aria-label="Thêm đồ ăn" placeholder="Ví dụ: 5 bịch sữa, 2 quả trứng" /><button onClick={() => notify('Đã cập nhật kho đồ ăn')}><Icon name="plus" /> THÊM</button></div>
      </section>
    </div>
    <section className="card routine-card">
      <SectionTitle icon="calendar" title="Lộ trình trong ngày" action={<span className="updated">{checked.filter(Boolean).length}/9 HOÀN THÀNH</span>} />
      <div className="routine-timeline">
        <Routine icon="sun" time="08:00 — 11:30" title="Khởi động hệ thần kinh" text="Đón nắng · Chuối & cà phê · Deep work" active />
        <Routine icon="activity" time="16:30 — 18:00" title="Tái tạo thể chất" text="Sữa phụ · Calisthenics · Ăn tối giàu kẽm" />
        <Routine icon="moon" time="21:30 — 23:30" title="Hạ nhịp & phục hồi" text="Sữa ấm · Điện thoại xa giường · Ngủ sâu" />
      </div>
      <div className="check-grid">{['Đắp khăn mắt 15p','Dùng đồ ăn sáng','Ăn món giàu Kẽm','Rời phòng buổi chiều','Sữa ấm ban đêm','Để máy xa giường','Tập Calisthenics','Ngủ trước 23h30','Kỷ luật tiền ăn'].map((item,i)=><button key={item} className={checked[i]?'done':''} onClick={()=>setChecked((v:boolean[])=>v.map((x,n)=>n===i?!x:x))}><span>{checked[i]&&<Icon name="check" size={13}/>}</span>{item}</button>)}</div>
    </section>
  </div>
}

function Exercise({label,value,max,onClick,add}:{label:string;value:number;max:number;onClick:()=>void;add:string}) {
  const percent = Math.min(100, value/max*100)
  return <div className="exercise"><div><span>{label}</span><strong>{value}<em> / {max}</em></strong></div><div className="exercise-bar"><i style={{width:`${percent}%`}} /></div><button onClick={onClick}>{add}</button></div>
}

function Routine({icon,time,title,text,active}:{icon:IconName;time:string;title:string;text:string;active?:boolean}) {
  return <div className={`routine ${active?'active':''}`}><span className="routine-icon"><Icon name={icon}/></span><div><small>{time}</small><strong>{title}</strong><p>{text}</p></div></div>
}

function Guard({values,setValues,notify}:{values:boolean[];setValues:React.Dispatch<React.SetStateAction<boolean[]>>;notify:(s:string)=>void}) {
  const guards = [
    ['Lọc nội dung tiếp cận','Tự động phát hiện và thoát khỏi nội dung nhạy cảm trước khi kích hoạt dopamine.'],
    ['Quản trị viên chống gỡ','Ngăn gỡ cài đặt trong những thời điểm ý chí suy yếu.'],
    ['Kháng xóa RAM hệ thống','Duy trì lá chắn chạy nền với mức tiêu thụ tối thiểu.'],
    ['Lọc mạng DNS cấp thấp','Chặn domain rủi ro trực tiếp từ tầng kết nối mạng.'],
  ]
  return <div className="page-stack guard-page">
    <section className="guard-hero">
      <div className="guard-shield"><Icon name="shield" size={56}/><span/></div>
      <div><Pill><span className="live-dot"/> LÁ CHẮN ĐANG HOẠT ĐỘNG</Pill><h2>Thiết bị của bạn đang an toàn.</h2><p>MindShield đang giám sát các tín hiệu rủi ro theo thời gian thực mà không làm chậm thiết bị.</p></div>
      <div className="guard-score"><strong>100</strong><span>%</span><small>ĐỘ PHỦ</small></div>
    </section>
    <section className="diagnostics">
      <div><span>RAM THIẾT BỊ</span><strong>5.1 / 7.5 GB</strong><small>68% đang sử dụng</small></div>
      <div><span>MINDSHIELD</span><strong>19 MB</strong><small>Tác động tối thiểu</small></div>
      <div><span>ĐỘ TRỄ QUÉT</span><strong className="green-text">0.06 ms</strong><small>Thời gian thực</small></div>
      <div><span>BỎ QUA APP SẠCH</span><strong className="green-text">100%</strong><small>Không gián đoạn</small></div>
    </section>
    <div className="guard-list">
      {guards.map((item,i)=><section className="card guard-row" key={item[0]}><div className="guard-number">0{i+1}</div><div className="guard-row-icon"><Icon name={i===0?'shield':i===1?'lock':i===2?'activity':'zap'}/></div><div><h3>{item[0]}</h3><p>{item[1]}</p><Pill tone={values[i]?'green':'muted'}>{values[i]?'ĐANG BẢO VỆ':'CHƯA BẬT'}</Pill></div><button className={`toggle ${values[i]?'on':''}`} onClick={()=>setValues(v=>v.map((x,n)=>n===i?!x:x))} aria-label={`Bật tắt ${item[0]}`}><i/></button></section>)}
    </div>
    <div className="pause-panel"><div><Icon name="info"/><span><strong>Cần truy cập tạm thời?</strong><small>Bảo vệ sẽ tự động bật lại sau thời gian đã chọn.</small></span></div><button onClick={()=>notify('Bảo vệ vẫn đang bật — yêu cầu cần xác nhận')}>TẠM DỪNG 15 PHÚT</button></div>
  </div>
}

function SosModal({close,action}:{close:()=>void;action:()=>void}) {
  const steps = [
    ['01','Bóc trần so sánh','Bạn đang đi con đường khó hơn gấp nhiều lần. Thất bại tạm thời không định nghĩa năng lực của bạn.'],
    ['02','Nhìn lại tài sản','4 năm dev và 3 năm thương trường là năng lực thật, không ai có thể lấy khỏi bạn.'],
    ['03','Hành động ngay','Ngắt suy nghĩ bằng vận động: xỏ giày, hít đất 25 cái hoặc đi bộ 10 phút.'],
  ]
  return <div className="modal-backdrop" role="presentation" onMouseDown={close}><section className="modal" role="dialog" aria-modal="true" aria-label="Cắt cơn bế tắc" onMouseDown={e=>e.stopPropagation()}><button className="modal-close" onClick={close}><Icon name="x"/></button><div className="modal-symbol"><Icon name="brain" size={30}/></div><Pill tone="red">SOS · STOIC PROTOCOL</Pill><h2>Dừng lại. Bạn không hề kém cỏi.</h2><p className="modal-lead">Hít sâu. Chúng ta chỉ cần đưa tâm trí về một hành động vật lý duy nhất.</p><div className="modal-steps">{steps.map(s=><div key={s[0]}><span>{s[0]}</span><div><strong>{s[1]}</strong><p>{s[2]}</p></div></div>)}</div><div className="modal-actions"><button className="primary-button" onClick={action}><Icon name="activity"/> HÍT ĐẤT 25 CÁI NGAY</button><button className="secondary-button" onClick={close}>TÔI ĐÃ TỈNH THỨC</button></div></section></div>
}

export default App
