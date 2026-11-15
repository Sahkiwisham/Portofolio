/* ==========================================================================
   SAHKI PORTFOLIO — INTERACTIVE LOGIC, ANIMATIONS & OS SIMULATORS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  sahkiInitScrollProgress();
  sahkiInitTrailingCursor();
  sahkiInitMobileMenu();
  sahkiInitWelcomeScreen();
  sahkiInitTicker();
  sahkiInitGallery();
  sahkiInitSkills();
  sahkiInitSoTugas1();
  sahkiInitSoTugas2();
  sahkiInitExtraAssignments();
  sahkiInitContactForm();
});

/* 1. Scroll Progress */
function sahkiInitScrollProgress() {
  const bar = document.getElementById("sahki_scroll_progress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    bar.style.width = `${pct}%`;
  });
}

/* 2. Clean Trailing Cursor Ring (No Pill Text) */
function sahkiInitTrailingCursor() {
  const ring = document.getElementById("sahki_cursor_ring");
  if (!ring || window.matchMedia("(hover: none)").matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    ring.style.opacity = "1";
    const hoverTarget = e.target.closest("a, button, .sahki_galeri_card, .sahki_welcome_screen, .sahki_index_row");
    if (hoverTarget) {
      ring.classList.add("sahki_cursor_active");
    } else {
      ring.classList.remove("sahki_cursor_active");
    }
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(animateRing);
  }
  animateRing();
}

/* 3. Mobile Hamburger Menu */
function sahkiInitMobileMenu() {
  const btn = document.getElementById("sahki_hamburger");
  const menu = document.getElementById("sahki_mobile_menu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    menu.classList.toggle("sahki_mobile_open");
  });
}

/* 4. Welcome Intro ("Hi, im Samm") */
function sahkiInitWelcomeScreen() {
  const welcome = document.getElementById("sahki_welcome_screen");
  const hero = document.getElementById("sahki_hero_section");
  const replayBtn = document.getElementById("sahki_replay_intro");

  if (!welcome) {
    if (hero) setTimeout(() => hero.classList.add("sahki_revealed"), 100);
    return;
  }

  setTimeout(() => {
    welcome.classList.add("sahki_revealed");
  }, 120);

  const alreadyEntered = sessionStorage.getItem("sahki_intro_seen") === "1";
  if (alreadyEntered) {
    welcome.style.transition = "none";
    welcome.classList.add("sahki_welcome_hidden");
    if (hero) setTimeout(() => hero.classList.add("sahki_revealed"), 120);
    setTimeout(() => { welcome.style.transition = ""; }, 100);
  }

  function enterSite() {
    welcome.classList.add("sahki_welcome_hidden");
    sessionStorage.setItem("sahki_intro_seen", "1");
    if (hero) {
      setTimeout(() => hero.classList.add("sahki_revealed"), 380);
    }
  }

  welcome.addEventListener("click", enterSite);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !welcome.classList.contains("sahki_welcome_hidden")) {
      enterSite();
    }
  });

  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      sessionStorage.removeItem("sahki_intro_seen");
      if (hero) hero.classList.remove("sahki_revealed");
      welcome.classList.remove("sahki_welcome_hidden");
      welcome.classList.remove("sahki_revealed");
      setTimeout(() => welcome.classList.add("sahki_revealed"), 80);
    });
  }
}

/* 5. Staggered Animated Hero Showcase Ticker */
function sahkiInitTicker() {
  const card = document.getElementById("sahki_hero_ticker");
  if (!card || typeof SAHKI_PORTFOLIO_DATA === "undefined") return;

  const slides = SAHKI_PORTFOLIO_DATA.tickerSlides;
  let currentIndex = 0;
  let timer = null;

  const imgEl = document.getElementById("sahki_ticker_img");
  const visEl = document.getElementById("sahki_ticker_visual");
  const kickerEl = document.getElementById("sahki_ticker_kicker");
  const titleEl = document.getElementById("sahki_ticker_title");
  const descEl = document.getElementById("sahki_ticker_desc");
  const metricEl = document.getElementById("sahki_ticker_metric");
  const indexEl = document.getElementById("sahki_ticker_index");
  const prevBtn = document.getElementById("sahki_ticker_prev");
  const nextBtn = document.getElementById("sahki_ticker_next");

  function renderSlide(idx) {
    const item = slides[idx];
    const animTargets = [kickerEl, titleEl, descEl, metricEl];
    animTargets.forEach((el) => el && el.classList.add("sahki_fade_out"));

    setTimeout(() => {
      if (imgEl) {
        imgEl.style.display = item.visual ? "none" : "";
        if (!item.visual) imgEl.src = item.img;
      }
      if (visEl) {
        visEl.style.display = item.visual ? "block" : "none";
        visEl.innerHTML = item.visual ? sahkiTickerVisual(item.visual) : "";
      }
      if (kickerEl) kickerEl.textContent = item.kicker;
      if (titleEl) titleEl.textContent = item.title;
      if (descEl) descEl.textContent = item.desc;
      if (metricEl) {
        metricEl.textContent = item.metric;
        metricEl.href = item.href;
      }
      if (indexEl) indexEl.textContent = `0${idx + 1} / 0${slides.length}`;

      animTargets.forEach((el, i) => {
        if (!el) return;
        setTimeout(() => el.classList.remove("sahki_fade_out"), i * 65);
      });
    }, 240);
  }

  function step(dir) {
    currentIndex = (currentIndex + dir + slides.length) % slides.length;
    renderSlide(currentIndex);
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(() => step(1), 4600);
  }

  function stopAuto() {
    if (timer) clearInterval(timer);
  }

  if (prevBtn) prevBtn.addEventListener("click", () => { step(-1); startAuto(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { step(1); startAuto(); });
  card.addEventListener("mouseenter", stopAuto);
  card.addEventListener("mouseleave", startAuto);

  startAuto();
}

/* Visual ticker tanpa foto: lintasan head (Disk) & Gantt Chart (CPU) */
function sahkiTickerVisual(kind) {
  if (kind === "disk") {
    const t = [100, 110, 145, 160, 175, 188, 95, 76, 55, 40, 12];
    const X = (v) => 30 + (v / 199) * 540;
    const Y = (i) => 36 + i * 18;
    const grid = [0, 50, 100, 150, 199].map((v) =>
      `<line x1="${X(v)}" y1="24" x2="${X(v)}" y2="228" stroke="#3F3F46"/><text class="sahki_viz_lbl" x="${X(v)}" y="14" text-anchor="middle">${v}</text>`).join("");
    const pts = t.map((v, i) => `${X(v)},${Y(i)}`).join(" ");
    const dots = t.map((v, i) =>
      `<circle cx="${X(v)}" cy="${Y(i)}" r="4" fill="${i ? "#EAEAE8" : "#111111"}" stroke="#EAEAE8" stroke-width="2"/><text class="sahki_viz_lbl" x="${X(v) + 9}" y="${Y(i) + 4}">${v}</text>`).join("");
    return `<svg viewBox="0 0 600 244" preserveAspectRatio="xMidYMid meet" role="img">${grid}<polyline class="sahki_viz_path" pathLength="1" points="${pts}" fill="none" stroke="#EAEAE8" stroke-width="2"/>${dots}<text class="sahki_viz_lbl" x="30" y="240">LOOK · HEAD 100 · 264 TRACK</text></svg>`;
  }
  const g = [["P1", 0, 1, "#F7F7F6", "#111111"], ["P2", 1, 5, "#A1A1AA", "#111111"], ["P4", 5, 10, "#D4D4D0", "#111111"], ["P1", 10, 17, "#F7F7F6", "#111111"], ["P3", 17, 26, "#52525B", "#F7F7F6"]];
  const u = 540 / 26;
  const bars = g.map((s, i) =>
    `<g class="sahki_viz_bar" style="animation-delay:${0.15 + i * 0.12}s"><rect x="${30 + s[1] * u}" y="84" width="${(s[2] - s[1]) * u - 2}" height="60" fill="${s[3]}"/><text class="sahki_viz_seg" x="${30 + ((s[1] + s[2]) / 2) * u - 1}" y="119" text-anchor="middle" fill="${s[4]}">${s[0]}</text></g>`).join("");
  const ticks = [0, 1, 5, 10, 17, 26].map((v) =>
    `<line x1="${30 + v * u}" y1="146" x2="${30 + v * u}" y2="154" stroke="#A1A1AA"/><text class="sahki_viz_lbl" x="${30 + v * u}" y="168" text-anchor="middle">${v}</text>`).join("");
  return `<svg viewBox="0 0 600 244" preserveAspectRatio="xMidYMid meet" role="img"><text class="sahki_viz_lbl" x="30" y="62">SRT · GANTT CHART</text>${bars}${ticks}<text class="sahki_viz_lbl" x="30" y="214">AVG TAT 13.00 · AVG WT 6.50</text></svg>`;
}

/* 6. Virtual Photography Gallery & Lightbox */
function sahkiInitGallery() {
  const grid = document.getElementById("sahki_galeri_grid");
  if (!grid || typeof SAHKI_PORTFOLIO_DATA === "undefined") return;

  const filterBtns = document.querySelectorAll(".sahki_galeri_filter");
  const lightbox = document.getElementById("sahki_lightbox");
  const lbImg = document.getElementById("sahki_lb_img");
  const lbTitle = document.getElementById("sahki_lb_title");
  const lbSub = document.getElementById("sahki_lb_sub");
  const lbClose = document.getElementById("sahki_lb_close");

  function renderPhotos(cat = "all") {
    const list = cat === "all"
      ? SAHKI_PORTFOLIO_DATA.photos
      : SAHKI_PORTFOLIO_DATA.photos.filter((p) => p.category === cat);

    grid.innerHTML = list.map((photo) => `
      <article class="sahki_galeri_card" data-id="${photo.id}">
        <div class="sahki_galeri_img_wrap" style="--sahki-ar:${photo.w || 16} / ${photo.h || 10};">
          <img src="${photo.src}" alt="${photo.title}" width="${photo.w || 1600}" height="${photo.h || 1000}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${photo.fallback || photo.src}';">
        </div>
        <div class="sahki_galeri_meta">
          <div>
            <h3 class="sahki_galeri_title">${photo.title}</h3>
            <p class="sahki_galeri_sub">${photo.sub}</p>
          </div>
          <span class="sahki_galeri_cat">${photo.category}</span>
        </div>
      </article>
    `).join("");

    grid.querySelectorAll(".sahki_galeri_card").forEach((cardEl) => {
      cardEl.addEventListener("click", () => {
        const photo = SAHKI_PORTFOLIO_DATA.photos.find((p) => p.id === cardEl.dataset.id);
        if (!photo || !lightbox) return;
        lbImg.src = cardEl.querySelector("img").src;
        lbTitle.textContent = photo.title;
        lbSub.textContent = photo.sub;
        lightbox.classList.add("sahki_open");
      });
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("sahki_active"));
      btn.classList.add("sahki_active");
      renderPhotos(btn.dataset.cat);
    });
  });

  if (lbClose && lightbox) {
    lbClose.addEventListener("click", () => lightbox.classList.remove("sahki_open"));
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.classList.remove("sahki_open");
    });
  }

  renderPhotos("all");
}

/* 7. Skills Interactive Filter */
function sahkiInitSkills() {
  const grid = document.getElementById("sahki_skills_grid");
  if (!grid || typeof SAHKI_PORTFOLIO_DATA === "undefined") return;

  const btns = document.querySelectorAll(".sahki_skill_filter");

  function renderSkills(cat = "all") {
    const items = cat === "all"
      ? SAHKI_PORTFOLIO_DATA.skills
      : SAHKI_PORTFOLIO_DATA.skills.filter((s) => s.cat === cat);

    grid.innerHTML = items.map((s) => `
      <div class="sahki_card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.65rem;">
          <span class="sahki_kicker" style="margin:0;">${s.cat}</span>
          <span style="font-family:var(--sahki-font-mono);font-size:0.8rem;font-weight:700;">${s.level}</span>
        </div>
        <h3 class="sahki_card_title">${s.name}</h3>
        <p style="font-size:0.88rem;color:var(--sahki-muted);margin-bottom:1rem;">${s.desc}</p>
        <div style="height:4px;background:var(--sahki-bg);width:100%;">
          <div style="height:100%;background:var(--sahki-ink);width:${s.level};"></div>
        </div>
      </div>
    `).join("");
  }

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("sahki_active"));
      btn.classList.add("sahki_active");
      renderSkills(btn.dataset.cat);
    });
  });

  renderSkills("all");
}

/* 8. Sistem Operasi Tugas 1 — Disk Scheduling Canvas & Simulator */
function sahkiInitSoTugas1() {
  const canvas = document.getElementById("sahki_disk_canvas");
  const select = document.getElementById("sahki_disk_algo");
  const stepBox = document.getElementById("sahki_disk_steps");
  if (!canvas || !select) return;

  const sequences = {
    FCFS:   { seq: [100, 145, 76, 188, 12, 95, 160, 40, 110, 175, 55], total: 963 },
    SSTF:   { seq: [100, 95, 110, 76, 55, 40, 12, 145, 160, 175, 188], total: 264 },
    SCAN:   { seq: [100, 110, 145, 160, 175, 188, 199, 95, 76, 55, 40, 12], total: 286 },
    CSCAN:  { seq: [100, 110, 145, 160, 175, 188, 199, 0, 12, 40, 55, 76, 95], total: 393 },
    LOOK:   { seq: [100, 110, 145, 160, 175, 188, 95, 76, 55, 40, 12], total: 264 },
    CLOOK:  { seq: [100, 110, 145, 160, 175, 188, 12, 40, 55, 76, 95], total: 347 }
  };

  function drawChart(algoKey) {
    const data = sequences[algoKey] || sequences.LOOK;
    const seq = data.seq;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = 310 * dpr;

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    const w = rect.width;
    const h = 310;
    const padX = 36;
    const padY = 34;
    const plotW = w - padX * 2;
    const plotH = h - padY * 2;

    ctx.clearRect(0, 0, w, h);

    // Track axis ticks
    ctx.strokeStyle = "#E4E4E7";
    ctx.fillStyle = "#52525B";
    ctx.font = "11px 'JetBrains Mono', monospace";
    [0, 50, 100, 150, 199].forEach((t) => {
      const x = padX + (t / 199) * plotW;
      ctx.beginPath();
      ctx.moveTo(x, padY - 8);
      ctx.lineTo(x, h - padY + 8);
      ctx.stroke();
      ctx.fillText(String(t), x - 10, 18);
    });

    // Head trajectory
    ctx.strokeStyle = "#111111";
    ctx.lineWidth = 2;
    ctx.beginPath();
    seq.forEach((track, i) => {
      const x = padX + (track / 199) * plotW;
      const y = padY + (i / (seq.length - 1)) * plotH;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Points & labels
    seq.forEach((track, i) => {
      const x = padX + (track / 199) * plotW;
      const y = padY + (i / (seq.length - 1)) * plotH;
      ctx.fillStyle = i === 0 ? "#FFFFFF" : "#111111";
      ctx.beginPath();
      ctx.arc(x, y, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#111111";
      ctx.fillText(String(track), x + 7, y + 4);
    });

    if (stepBox) {
      const diffs = [];
      for (let i = 1; i < seq.length; i++) {
        diffs.push(`|${seq[i]} - ${seq[i - 1]}|`);
      }
      stepBox.innerHTML = `
        <strong>Urutan Lintasan (${algoKey}):</strong> ${seq.join(" → ")}<br>
        <strong>Perhitungan:</strong> ${diffs.join(" + ")} = <strong>${data.total} Track</strong>
      `;
    }
  }

  select.addEventListener("change", () => drawChart(select.value));
  window.addEventListener("resize", () => drawChart(select.value));
  drawChart(select.value);
}

/* 9. Sistem Operasi Tugas 2 — CPU Scheduling Table & Gantt Chart */
function sahkiInitSoTugas2() {
  const select = document.getElementById("sahki_cpu_algo");
  const tbody = document.getElementById("sahki_cpu_tbody");
  const gantt = document.getElementById("sahki_cpu_gantt");
  const summary = document.getElementById("sahki_cpu_summary");
  if (!select || !tbody || !gantt) return;

  const datasets = {
    FCFS: {
      rows: [
        { p: "P1", at: 0, bt: 8, ft: 8, tat: 8, wt: 0 },
        { p: "P2", at: 1, bt: 4, ft: 12, tat: 11, wt: 7 },
        { p: "P3", at: 2, bt: 9, ft: 21, tat: 19, wt: 10 },
        { p: "P4", at: 3, bt: 5, ft: 26, tat: 23, wt: 18 }
      ],
      gantt: [
        { label: "P1", dur: 8, color: "#111111" },
        { label: "P2", dur: 4, color: "#3F3F46" },
        { label: "P3", dur: 9, color: "#52525B" },
        { label: "P4", dur: 5, color: "#71717A" }
      ],
      avgTat: "15.25",
      avgWt: "8.75"
    },
    SJF: {
      rows: [
        { p: "P1", at: 0, bt: 8, ft: 8, tat: 8, wt: 0 },
        { p: "P2", at: 1, bt: 4, ft: 12, tat: 11, wt: 7 },
        { p: "P4", at: 3, bt: 5, ft: 17, tat: 14, wt: 9 },
        { p: "P3", at: 2, bt: 9, ft: 26, tat: 24, wt: 15 }
      ],
      gantt: [
        { label: "P1", dur: 8, color: "#111111" },
        { label: "P2", dur: 4, color: "#3F3F46" },
        { label: "P4", dur: 5, color: "#71717A" },
        { label: "P3", dur: 9, color: "#52525B" }
      ],
      avgTat: "14.25",
      avgWt: "7.75"
    },
    SRT: {
      rows: [
        { p: "P1", at: 0, bt: 8, ft: 17, tat: 17, wt: 9 },
        { p: "P2", at: 1, bt: 4, ft: 5, tat: 4, wt: 0 },
        { p: "P3", at: 2, bt: 9, ft: 26, tat: 24, wt: 15 },
        { p: "P4", at: 3, bt: 5, ft: 10, tat: 7, wt: 2 }
      ],
      gantt: [
        { label: "P1", dur: 1, color: "#111111" },
        { label: "P2", dur: 4, color: "#3F3F46" },
        { label: "P4", dur: 5, color: "#71717A" },
        { label: "P1", dur: 7, color: "#111111" },
        { label: "P3", dur: 9, color: "#52525B" }
      ],
      avgTat: "13.00",
      avgWt: "6.50"
    },
    RR3: {
      rows: [
        { p: "P1", at: 0, bt: 8, ft: 22, tat: 22, wt: 14 },
        { p: "P2", at: 1, bt: 4, ft: 13, tat: 12, wt: 8 },
        { p: "P3", at: 2, bt: 9, ft: 26, tat: 24, wt: 15 },
        { p: "P4", at: 3, bt: 5, ft: 24, tat: 21, wt: 16 }
      ],
      gantt: [
        { label: "P1", dur: 3, color: "#111111" },
        { label: "P2", dur: 3, color: "#3F3F46" },
        { label: "P3", dur: 3, color: "#52525B" },
        { label: "P4", dur: 3, color: "#71717A" },
        { label: "P2", dur: 1, color: "#3F3F46" },
        { label: "P1", dur: 3, color: "#111111" },
        { label: "P3", dur: 3, color: "#52525B" },
        { label: "P4", dur: 2, color: "#71717A" },
        { label: "P1", dur: 2, color: "#111111" },
        { label: "P3", dur: 3, color: "#52525B" }
      ],
      avgTat: "19.75",
      avgWt: "13.25"
    }
  };

  function renderCpu(key) {
    const data = datasets[key] || datasets.SRT;
    tbody.innerHTML = data.rows.map((r) => `
      <tr>
        <td><strong>${r.p}</strong></td>
        <td>${r.at}</td>
        <td>${r.bt}</td>
        <td>${r.ft}</td>
        <td>${r.tat}</td>
        <td>${r.wt}</td>
      </tr>
    `).join("");

    const totalDur = data.gantt.reduce((acc, s) => acc + s.dur, 0);
    gantt.innerHTML = data.gantt.map((seg) => `
      <div class="sahki_gantt_seg" style="width:${(seg.dur / totalDur) * 100}%;background:${seg.color};">
        <span>${seg.label}</span>
        <span style="font-size:0.65rem;opacity:0.8;">${seg.dur}ms</span>
      </div>
    `).join("");

    if (summary) {
      summary.innerHTML = `Rata-rata Turnaround Time (TAT): <strong>${data.avgTat} ms</strong> &nbsp;|&nbsp; Rata-rata Waiting Time (WT): <strong>${data.avgWt} ms</strong>`;
    }
  }

  select.addEventListener("change", () => renderCpu(select.value));
  renderCpu(select.value);
}

/* 10. Extra Assignments Renderer */
function sahkiInitExtraAssignments() {
  const box = document.getElementById("sahki_extra_assignments");
  if (!box || typeof SAHKI_PORTFOLIO_DATA === "undefined") return;
  const target = box.dataset.target;
  const items = SAHKI_PORTFOLIO_DATA.extraAssignments.filter((a) => a.target === target);
  if (items.length === 0) return;

  box.innerHTML = items.map((item) => `
    <div class="sahki_card" style="margin-top:1.5rem;">
      <p class="sahki_kicker">${item.date || "2026"}</p>
      <h3 class="sahki_card_title">${item.title}</h3>
      <p style="font-size:0.9rem;color:var(--sahki-muted);">${item.summary}</p>
    </div>
  `).join("");
}

/* 11. Contact Form Validation */
function sahkiInitContactForm() {
  const form = document.getElementById("sahki_contact_form");
  const alertBox = document.getElementById("sahki_contact_alert");
  if (!form || !alertBox) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = document.getElementById("sahki_c_nama").value.trim();
    const email = document.getElementById("sahki_c_email").value.trim();
    const pesan = document.getElementById("sahki_c_pesan").value.trim();

    if (!nama || !email.includes("@") || pesan.length < 5) {
      alertBox.style.display = "block";
      alertBox.textContent = "Harap lengkapi nama, alamat email yang valid, dan pesan minimal 5 karakter.";
      return;
    }

    alertBox.style.display = "block";
    alertBox.textContent = `Terima kasih, ${nama}. Pesan Anda telah dicatat untuk M Sahki Wisham Fauzan (2503010033).`;
    form.reset();
  });
}
