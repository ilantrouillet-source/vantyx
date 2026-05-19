export default function VantyxPinkHomepage() {
  const brands = ["REPRESENT", "AMIRI", "RHUDE", "BALENCIAGA", "GALLERY DEPT.", "FEAR OF GOD", "TRAPSTAR"];
  const categories = ["NEW IN", "T-SHIRTS", "HOODIES", "JACKETS", "PANTS", "SNEAKERS", "ACCESSORIES", "SALE"];

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden font-sans">
      {/* TOP BAR */}
      <div className="h-9 bg-[#ff4fa3] text-black text-[11px] font-black tracking-wide flex items-center overflow-hidden whitespace-nowrap">
        <div className="flex gap-12 px-6">
          {[
            "✺ FREE SHIPPING ON ALL ORDERS OVER €150",
            "+ EXCLUSIVE DROPS. LIMITED STOCK.",
            "+ JOIN THE CULTURE.",
            "↻ 14 DAYS RETURNS",
            "✺ FREE SHIPPING ON ALL ORDERS OVER €150",
          ].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="relative min-h-[540px] border-b border-[#ff4fa3]/30 bg-[#060606]">
        {/* background texture without images */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_25%,rgba(255,79,163,0.24),transparent_28%),radial-gradient(circle_at_18%_58%,rgba(255,79,163,0.12),transparent_30%),linear-gradient(90deg,#050505_0%,#070707_48%,#050505_100%)]" />
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(90deg,transparent_0%,rgba(255,79,163,0.15)_50%,transparent_100%)]" />
        <div className="absolute right-0 top-0 w-[480px] h-[480px] border border-[#ff4fa3]/20 rounded-full blur-[1px] opacity-40" />

        {/* HUGE BRAND OUTLINE */}
        <h1 className="absolute top-[72px] left-[6%] text-[165px] md:text-[250px] lg:text-[310px] font-black tracking-tighter leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,79,163,0.28)] select-none">
          VANTYX
        </h1>

        {/* NAV */}
        <header className="relative z-20 flex items-center justify-between px-8 md:px-16 py-7">
          <div className="text-3xl font-black tracking-tight">VANTYX</div>

          <nav className="hidden md:flex items-center gap-10 text-xs font-black tracking-wide">
            <a className="hover:text-[#ff4fa3] transition">SHOP⌄</a>
            <a className="hover:text-[#ff4fa3] transition">DROPS</a>
            <a className="hover:text-[#ff4fa3] transition">BRANDS</a>
            <a className="hover:text-[#ff4fa3] transition">COLLECTIONS</a>
            <a className="hover:text-[#ff4fa3] transition">ABOUT</a>
          </nav>

          <div className="hidden md:flex items-center gap-8 text-xs font-black">
            <span className="text-xl">⌕</span>
            <span>EUR €⌄</span>
            <span>ACCOUNT</span>
            <span>CART (0)</span>
          </div>
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-20 px-8 md:px-16 pt-24 max-w-2xl">
          <p className="text-[#ff4fa3] text-sm font-black tracking-wide mb-4">CURATED FASHION</p>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.93] tracking-tight">
            BUILT DIFFERENT.
            <br />
            MADE TO <span className="text-[#ff4fa3] italic">STAND OUT.</span>
          </h2>
          <p className="mt-6 text-white/75 text-lg leading-relaxed">
            Curated drops. Exclusive brands.
            <br />
            For those who set the standard.
          </p>
          <div className="mt-9 flex gap-4">
            <button className="bg-[#ff4fa3] text-black px-8 py-4 text-xs font-black hover:scale-105 transition">
              SHOP NOW →
            </button>
            <button className="border border-white/40 px-8 py-4 text-xs font-black hover:bg-white hover:text-black transition">
              VIEW DROPS
            </button>
          </div>
        </div>

        {/* DROP INFO */}
        <div className="absolute z-20 right-10 md:right-20 top-56 hidden md:block">
          <p className="text-[#ff4fa3] text-xs font-black">NEW DROP</p>
          <h3 className="font-black mt-3 text-xl">CHAPTER 04</h3>
          <div className="w-8 h-[2px] bg-[#ff4fa3] my-6" />
          <p className="text-sm font-bold text-white/80">SATURDAY 25 MAY<br />18:00 CET</p>
          <button className="mt-9 text-[#ff4fa3] text-xs font-black">DISCOVER →</button>
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="h-16 border-b border-[#ff4fa3]/30 border-t border-[#ff4fa3]/20 bg-[#090909] flex items-center overflow-hidden">
        <div className="px-8 md:px-16 text-[#ff4fa3] text-xs font-black whitespace-nowrap border-r border-[#ff4fa3]/25 h-full flex items-center">
          ◎ FEATURED BRANDS →
        </div>
        <div className="flex flex-1 justify-around gap-10 text-sm font-black tracking-[0.25em] text-white/85">
          {brands.map((brand) => (
            <span key={brand} className="whitespace-nowrap">{brand}</span>
          ))}
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-[290px_1fr_1.25fr] border-b border-[#ff4fa3]/25">
        {/* SIDEBAR */}
        <aside className="border-r border-[#ff4fa3]/25 p-8 bg-[#070707]">
          <div className="border border-[#ff4fa3]/25 p-6 bg-black/30">
            <div className="flex justify-between mb-5">
              <p className="text-[#ff4fa3] text-xs font-black">SHOP BY CATEGORY</p>
              <span className="text-[#ff4fa3]">→</span>
            </div>
            <div className="space-y-4">
              {categories.map((cat) => (
                <div
                  key={cat}
                  className={`flex justify-between text-sm font-bold ${cat === "SALE" ? "text-[#ff4fa3]" : "text-white/80"} ${cat === "NEW IN" ? "bg-white/10 px-3 py-2 -mx-3" : ""}`}
                >
                  <span>{cat}</span>
                  <span>{cat === "NEW IN" ? "→" : ""}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border border-[#ff4fa3]/25 p-6 min-h-[160px] bg-black/30">
            <h3 className="text-[#ff4fa3] font-black">VANTYX WORLD</h3>
            <p className="mt-4 text-sm text-white/65 leading-relaxed">Stories, interviews, and everything that inspires our world.</p>
            <button className="mt-4 text-xs font-black text-white">READ NOW →</button>
          </div>
        </aside>

        {/* NEW IN CARD */}
        <article className="relative min-h-[430px] border-r border-[#ff4fa3]/25 p-8 flex items-center overflow-hidden bg-[#080808]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_40%,rgba(255,79,163,0.20),transparent_35%)]" />
          <div className="absolute top-8 right-8 text-[#ff4fa3] font-black">(01)</div>
          <div className="absolute top-8 left-[42%] w-[310px] h-3 bg-[repeating-linear-gradient(90deg,#ff4fa3_0_8px,transparent_8px_18px)]" />
          <div className="absolute bottom-6 right-8 text-[#ff4fa3] text-4xl">＋</div>
          <div className="relative z-10 max-w-md">
            <h2 className="text-5xl font-black">NEW IN</h2>
            <p className="mt-5 text-white/75">The latest pieces.<br />Fresh styles just landed.</p>
            <button className="mt-10 border border-[#ff4fa3] text-[#ff4fa3] px-9 py-4 text-xs font-black hover:bg-[#ff4fa3] hover:text-black transition">
              EXPLORE NOW →
            </button>
          </div>
        </article>

        {/* RIGHT CARDS */}
        <div className="grid grid-rows-2">
          <article className="relative min-h-[215px] border-b border-[#ff4fa3]/25 p-8 overflow-hidden bg-[#070707]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(255,79,163,0.16),transparent_28%)]" />
            <div className="absolute top-5 right-8 text-[#ff4fa3] text-3xl">＋</div>
            <div className="absolute right-8 bottom-8 h-24 w-3 bg-[repeating-linear-gradient(180deg,#ff4fa3_0_4px,transparent_4px_8px)]" />
            <p className="relative z-10 text-[#ff4fa3] text-sm font-black">(02)</p>
            <h2 className="relative z-10 text-5xl font-black mt-3">DROPS</h2>
            <p className="relative z-10 mt-4 text-white/70 max-w-xs">Limited pieces. One drop. No restock. Be ready.</p>
            <button className="relative z-10 mt-5 border border-[#ff4fa3] text-[#ff4fa3] px-8 py-3 text-xs font-black hover:bg-[#ff4fa3] hover:text-black transition">
              VIEW ALL DROPS →
            </button>
          </article>

          <article className="relative min-h-[215px] p-8 overflow-hidden bg-[#090909]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(255,79,163,0.20),transparent_28%)]" />
            <div className="absolute right-[-60px] bottom-[-100px] w-[260px] h-[260px] rounded-full border border-[#ff4fa3]/40" />
            <div className="absolute right-[-30px] bottom-[-70px] w-[200px] h-[200px] rounded-full border border-[#ff4fa3]/30" />
            <div className="absolute top-5 right-8 text-[#ff4fa3] text-3xl">＋</div>
            <p className="relative z-10 text-[#ff4fa3] text-sm font-black">(03)</p>
            <h2 className="relative z-10 text-4xl font-black mt-3">COLLECTIONS</h2>
            <p className="relative z-10 mt-4 text-white/70 max-w-sm">Curated selections handpicked by VANTYX.</p>
            <button className="relative z-10 mt-7 text-[#ff4fa3] text-xs font-black">BROWSE COLLECTIONS →</button>
          </article>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-b border-[#ff4fa3]/25 bg-[#080808]">
        {[
          ["◎", "WORLDWIDE SHIPPING", "Fast delivery everywhere."],
          ["◇", "AUTHENTIC ONLY", "100% verified products."],
          ["▣", "SECURE PAYMENTS", "Shop with confidence."],
          ["↻", "EASY RETURNS", "14 days to return."],
        ].map(([icon, title, sub]) => (
          <div key={title} className="p-6 flex gap-4 items-center justify-center border-r border-[#ff4fa3]/20 last:border-r-0">
            <span className="text-2xl text-[#ff4fa3]">{icon}</span>
            <div>
              <p className="text-sm font-black">{title}</p>
              <p className="text-xs text-white/55">{sub}</p>
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER CTA */}
      <footer className="relative p-8 md:p-12 bg-[#060606] overflow-hidden">
        <div className="absolute inset-0 text-[#ff4fa3]/10 text-[210px] font-black italic -rotate-12">VANTYX</div>
        <div className="relative z-10 grid md:grid-cols-[1fr_1.4fr_1fr] gap-8 items-center">
          <div>
            <h2 className="text-3xl font-black">BE FIRST. <span className="text-[#ff4fa3]">ALWAYS.</span></h2>
            <p className="mt-4 text-white/65">Join the list and get early access to drops, new arrivals and exclusives.</p>
          </div>
          <div className="flex">
            <input className="w-full bg-black/40 border border-white/20 px-5 py-4 outline-none text-sm focus:border-[#ff4fa3]" placeholder="Enter your email" />
            <button className="bg-[#ff4fa3] text-black px-8 py-4 text-xs font-black whitespace-nowrap">JOIN THE LIST</button>
          </div>
          <div className="grid grid-cols-2 gap-4 text-xs font-black text-white/80">
            <span>INSTAGRAM →</span><span>TIKTOK →</span><span>TWITTER →</span><span>YOUTUBE →</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
