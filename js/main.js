/**
 * Studio LampKeep Official Website Scripts v2.0
 * Jointly crafted by Art Director, UI/UX Specialist, & Creative Motion Specialist
 */

// Product Details Data for Modals
const APP_DATA = {
  poc: {
    title: 'Prince of Chaos',
    subtitle: '― 混沌迷宮と呪いの公子 ―',
    category: '本格3DダンジョンRPG × 紙芝居会話劇',
    tag: 'Android 8.0+ 専用',
    platform: 'Android 8.0+ 専用',
    price: '基本プレイ無料（広告消し 500円）',
    packageId: 'com.lampkeep.princeofchaos',
    distribution: 'Google Play クローズドテスト / 公開準備中',
    specs: [
      { label: '日本語正式名称', value: 'Prince of Chaos ― 混沌迷宮と呪いの公子 ―' },
      { label: 'プラットフォーム', value: 'Android 8.0+ 専用' },
      { label: '価格方針', value: '基本プレイ無料（広告消し 500円）' },
      { label: 'パッケージID', value: 'com.lampkeep.princeofchaos' },
      { label: 'ネットワーク', value: '完全オフライン動作（通信なし）' },
      { label: 'サウンド', value: '全32曲 完全オリジナル内包' },
      { label: '操作対応', value: 'タッチスライド見渡し / 十字キー / ゲームパッド' },
      { label: 'シナリオ規模', value: '全112場面 / 6大マルチエンディング' }
    ],
    description: `呪いの公子と呼ばれるリュカと、言葉を話す黒猫クロが、楔を集めて逆さ塔を目指すダークファンタジーRPG。
吹き出しによるテンポ良い紙芝居会話劇（全112場面、6つのマルチエンディング）と、一人称視点の重厚な地下迷宮探索が融合。
壁・床・戦闘背景が階層ごとに変化する地下10階＋深淵回廊、精鋭モンスター、武具の付加効果・ユニーク・組装備システム、連携技バトルなど、やりこみ要素が凝縮されています。
迷宮・名称・文章・絵・全32曲のオリジナルBGMはすべて独自制作。外部データやROMは一切不要で、完全オフラインで没入できます。`,
    features: [
      '吹き出しでテンポよく進む112場面の会話劇＆6つの結末（マルチエンディング）',
      '最大6人編成の隊列、技と気力、パートナーとの強力な連携技システム',
      '地下10階の踏破、その先に待ち受ける果てなき「深淵回廊」と精鋭魔獣',
      '武具の付加効果（Affixes）、ユニーク装備、セット効果、ナギの鍛冶屋での強化',
      '全32曲に及ぶ Studio LampKeep 完全オリジナル楽曲を内包',
      'タッチスライド見渡し・画面反転・Bluetooth/USBゲームパッド完全対応'
    ],
    gallery: [
      { src: 'assets/img/poc/hero.jpg', caption: 'キービジュアル：深淵の塔と呪いの公子リュカ' },
      { src: 'assets/img/poc/01_title.jpg', caption: 'タイトル画面：Prince of Chaos ― 混沌迷宮と呪いの公子 ―' },
      { src: 'assets/img/poc/story_prologue.jpg', caption: '紙芝居会話劇：序幕・呪いと運命の出会い（全112場面）' },
      { src: 'assets/img/poc/05_maze.jpg', caption: '地下迷宮探索：一人称視点3Dダンジョン＆スライド見渡し' },
      { src: 'assets/img/poc/boss.jpg', caption: '魔獣遭遇：深淵回廊の強敵ボス＆精鋭魔獣' },
      { src: 'assets/img/poc/07_battle.jpg', caption: 'コマンドバトル：隊列・気力・強力な連携技' },
      { src: 'assets/img/poc/04_status.jpg', caption: 'パーティ・ステータス管理・武具付加効果' },
      { src: 'assets/img/poc/14_inn.jpg', caption: '拠点ナギ：灯火の酒場・鍛冶屋・祈りの宮' }
    ],
    links: [
      { text: 'Google Play で入手（クローズドテスト）', url: 'https://play.google.com/apps/testing/com.lampkeep.princeofchaos', isExternal: true },
      { text: 'Prince of Chaos 単体紹介サイト', url: 'https://lampkeeper2026.github.io/prince-of-chaos/', isExternal: true, isSecondary: true },
      { text: 'プライバシーポリシー', url: 'https://lampkeeper2026.github.io/prince-of-chaos-privacy/', isExternal: true, isSecondary: true }
    ]
  },
  blockdrop: {
    title: 'LampDrop：混沌迷宮の蒼き灯火',
    subtitle: 'LampDrop: Chaos Labyrinth ― 暗闇を切り裂く、蒼き刃と光の連鎖',
    category: '中世ゴシック・ダークファンタジー高速パズル',
    tag: 'Android 8.0+ / Web',
    platform: 'Android 8.0+ / Webブラウザ / PC',
    price: '基本プレイ無料（買い切りプレミアムパス ¥600）',
    packageId: 'com.lampkeep.blockdrop1988',
    distribution: 'Google Play クローズドテスト審査中 / 公開準備中',
    specs: [
      { label: 'プラットフォーム', value: 'Android 8.0+ / Web' },
      { label: '操作性', value: '1988アーケード直系（0.5秒着地猶予＆回転入れ）' },
      { label: 'プレイフィールド', value: '12×20 ワイド戦場（神聖十字架★RARE）' },
      { label: 'ビジュアル演出', value: '6大迷宮シネマティック動画背景' },
      { label: '料金体系', value: '基本無料 / 買い切り¥600（完全広告消し＋作業用MV）' },
      { label: '安心設計', value: '不要な個人情報収集ゼロ・オフライン対応' },
      { label: 'パッケージID', value: 'com.lampkeep.blockdrop1988' }
    ],
    description: `一列消せば、敵を両断。ブロックを積むたび、心拍数が跳ね上がる！
1988年レトロアーケードパズルの魂が息づく超高速の爽快感に、重厚なダークファンタジーの死闘が融合した『LampDrop（ランプドロップ）』。
息を呑む美麗シネマティック迷宮を舞台に、広大な12×20の戦場と奇跡の5マスピース「聖十字架」が降臨！
さらに、パズルのライン消去と連動して蒼炎の刃が敵を切り裂く白熱のリアルタイム剣戟、妖しく花開くように呼吸する生きた魔導ランプなど、遊ぶほどに没入する圧倒的なエンターテインメント体験が待っています。`,
    features: [
      '1988年アーケード（セガ1988＆TGM）直系：0.5秒着地猶予（ロックディレイ）と隙間ねじ込み回転入れ・壁床キック完全再現',
      '息を呑むほど美しい6大迷宮世界：ゲームプレイ中も背後で青き灯火や霧がリアルタイムに息づくシネマティック動画',
      '大迫力の12×20ワイド戦場 ＆ 奇跡の聖十字架：広大な盤面が生み出す怒濤の大連鎖と、逆境を覆す幻の5マスレリック',
      '白熱のリアルタイム剣戟バトル ＆ 呪縛解法：ライン消去で敵を両断！渾身の4段消去【破呪】でボスの呪いを一掃',
      '親切インゲーム解説：遊び方・ダンジョン攻略ガイド（How to Play）を常設し初心者から安心',
      '公式主題歌3分MVシアター：Google Flow Music制作・日本語／英語デュアル歌姫ヴォーカル切り替え対応',
      '買い切りプレミアムパス（¥600）：完全広告非表示＋デスクを彩るシネマティック作業用ループMVが全開放',
      '全国オンラインランキング：世界中のライバルと競い合い深淵の頂点を目指せ'
    ],
    gallery: [
      { src: 'assets/img/blockdrop/feature_graphic.png', caption: '公式グラフィック：LampDrop 混沌迷宮の蒼き灯火' },
      { src: 'assets/img/blockdrop/promo_01_title.png', caption: 'ストア紹介：魔導ランプ連結×本格ゴシック・レトロ落下パズル' },
      { src: 'assets/img/blockdrop/promo_02_battle.png', caption: 'リアルタイム背景バトル：ライン消去で太刀筋を放ちボスを撃破せよ' },
      { src: 'assets/img/blockdrop/promo_03_howto.png', caption: '遊び方ガイド：基本操作から呪いの破呪・ボス戦まで親切解説' },
      { src: 'assets/img/blockdrop/promo_04_mv_bestiary.png', caption: '豪華コンテンツ：全13章主題歌MV＆深淵魔獣図鑑' },
      { src: 'assets/img/blockdrop/battle_title.png', caption: 'タイトル画面：魔導ランプ連結×リアルタイム背景バトル『LampDrop』' },
      { src: 'assets/img/blockdrop/battle_gameplay.png', caption: 'プレイ画面：真鍮フレーム・リアルタイム背景バトル・連なる魔導ランプ' },
      { src: 'assets/img/blockdrop/card_crescent_slash.png', caption: '戦闘演出：ライン消去と連動してリュカの三日月斬りが炸裂' },
      { src: 'assets/img/blockdrop/card_battle_b1f.png', caption: '迷宮バトル：深淵の怪異・スケルトンナイトとの激闘' },
      { src: 'assets/img/blockdrop/lampdrop_stacked.png', caption: '盤面：美しく結束するランタンクラスタと4ライン消去MEGA CLEAR' }
    ],
    links: [
      { text: 'LampDrop 特設公式サイト', url: 'lampdrop/index.html', isExternal: false },
      { text: 'プライバシーポリシー', url: 'lampdrop-privacy.html', isExternal: false, isSecondary: true }
    ]
  },
  novelreader: {
    title: '青空文庫＆文書AI朗読',
    subtitle: 'Aozora & Document AI Reader ― 名作文学や所持文書を声優ドラマのように朗読',
    category: 'AI読書・アクセシビリティ / オーディオブック',
    tag: 'Android / Windows PWA',
    platform: 'Android 8.0+ / Windows 10/11 (Web PWA)',
    price: '完全無料（オープン＆アクセシビリティ指向）',
    packageId: 'com.surei.naroureader',
    distribution: 'Google Play 公開準備中 / Windows・Web PWA',
    specs: [
      { label: 'プラットフォーム', value: 'Android / Windows PWA' },
      { label: '料金体系', value: '完全無料' },
      { label: 'AIエンジン', value: '内包LLM / Gemini / Nano' },
      { label: 'TTS連携', value: 'Edge-TTS / VOICEVOX' },
      { label: 'バックグラウンド', value: 'スリープ時再生対応' },
      { label: 'パッケージID', value: 'com.surei.naroureader' }
    ],
    description: `名作文学やお手持ちの文書を、アプリ内包の軽量LLMやGemini、Pixel内蔵Gemini Nanoがリアルタイム解析！
ナレーション（地の文）と登場人物の会話を自動で判別・配役し、マルチボイス（声分け）でまるで本格オーディオドラマのように臨場感豊かに朗読する次世代読書アクセシビリティアプリです。
太宰治、芥川龍之介、夏目漱石、宮沢賢治などの「青空文庫」名作文学（厳選プリセット57作品＋18,000作品検索）をはじめ、PDFやテキストファイルなどのユーザー所持文書のスマート流し込みに対応。
ルビ（ふりがな）の自動展開、ユーザー辞書、画面オフ（スリープ）バックグラウンド再生、オフラインキャッシュなど、快適な読書・リスニング体験を提供します。`,
    features: [
      'アプリ内包LLM（設定・APIキー不要）による完全ローカル登場人物自動判別＆声分け朗読',
      'Google Gemini、Pixel内蔵Gemini Nano、Ollama等への自在なAIエンジン切り替え',
      '青空文庫の名作文学（厳選57作品プリセット＋1万8千作品インデックス検索）を標準サポート',
      'お手持ちのPDF・テキストファイル・自作原稿のスマート流し込み朗読対応',
      'Edge-TTS（高品質ニューラル音声）＆ VOICEVOX（ずんだもん等）連携対応',
      '画面オフ（スリープ）バックグラウンド再生・Media Session API（イヤホン操作）対応',
      '完全プライバシー保護：外部サーバーへの個人情報送信なし・安心のローカル完結設計'
    ],
    gallery: [
      { src: 'assets/img/novelreader/feature_graphic.png', caption: 'キービジュアル：青空文庫＆文書AI朗読' },
      { src: 'assets/img/novelreader/01_screenshot.png', caption: 'プレイヤー画面：登場人物ごとにリアルタイム声分け' },
      { src: 'assets/img/novelreader/02_screenshot.png', caption: 'ライブラリ画面：青空文庫の名作文学・所持文書の選択' },
      { src: 'assets/img/novelreader/03_player.png', caption: 'スマートフォンUI：片手で快適な朗読コントロール' },
      { src: 'assets/img/novelreader/04_settings.png', caption: '設定画面：AIエンジン切り替え・ボイスカスタマイズ' }
    ],
    links: [
      { text: 'プライバシーポリシー', url: 'privacy.html', isExternal: false }
    ]
  }
};

// Global State
let currentModalApp = null;
let currentModalGalleryIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Creative Motion: Canvas Particles
  new LanternParticleEngine('lantern-canvas');

  // 2. Creative Motion: Mouse-tracking Glow & 3D Tilt
  initCardTiltAndGlow();

  // 3. UI/UX: Navbar & Mobile Drawer
  initNavbar();

  // 4. UI/UX: Works Filter
  initFilter();

  // 5. UI/UX: Card Thumbnails Switcher
  initThumbnailSwitching();

  // 6. UI/UX: Rich Modal Lightbox
  initModals();

  // 7. UI/UX: Copy Buttons
  initCopyButtons();

  // 8. UI/UX: Bottom Bar Scroll Spy
  initScrollSpy();
});

/* ==========================================================================
   1. Canvas Lantern Particle Engine (60fps, Zero-Dep, Responsive)
   ========================================================================== */
class LanternParticleEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d', { alpha: true });
    
    this.particles = [];
    this.mouse = { x: -1000, y: -1000, radius: 120 };
    this.isRunning = false;
    this.animationFrameId = null;

    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.isMobile = window.innerWidth <= 768;
    this.particleCount = this.isMobile ? 26 : 56;

    this.init();
  }

  init() {
    this.resize();
    this.createParticles();
    this.bindEvents();
    this.start();
  }

  resize() {
    const parent = this.canvas.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(this.spawnParticle(true));
    }
  }

  spawnParticle(randomY = false) {
    const isGold = Math.random() < 0.18; // 18%は真鍮ゴールド
    return {
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : this.height + 20,
      radius: Math.random() * (isGold ? 1.6 : 2.4) + 0.8,
      speedY: Math.random() * 0.45 + 0.22,
      swaySpeed: Math.random() * 0.02 + 0.008,
      swayDistance: Math.random() * 1.6 + 0.6,
      swayOffset: Math.random() * Math.PI * 2,
      baseAlpha: Math.random() * 0.45 + 0.35,
      pulseSpeed: Math.random() * 0.028 + 0.015,
      pulseOffset: Math.random() * Math.PI * 2,
      color: isGold ? { r: 212, g: 175, b: 55 } : { r: 0, g: 240, b: 255 }
    };
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;
      this.particleCount = this.isMobile ? 26 : 56;
      this.resize();
    }, { passive: true });

    window.addEventListener('pointermove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    }, { passive: true });

    window.addEventListener('pointerleave', () => {
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.start();
        } else {
          this.stop();
        }
      });
    }, { threshold: 0.05 });
    observer.observe(this.canvas);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stop();
      } else {
        this.start();
      }
    });
  }

  update() {
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      p.y -= p.speedY;
      p.swayOffset += p.swaySpeed;
      p.pulseOffset += p.pulseSpeed;

      p.x += Math.sin(p.swayOffset) * p.swayDistance * 0.3;

      const dx = p.x - this.mouse.x;
      const dy = p.y - this.mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < this.mouse.radius) {
        const force = (1 - dist / this.mouse.radius) * 1.5;
        p.x += (dx / dist) * force;
        p.y += (dy / dist) * force * 0.5;
      }

      if (p.y < -20 || p.x < -20 || p.x > this.width + 20) {
        this.particles[i] = this.spawnParticle(false);
      }
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (const p of this.particles) {
      const pulseAlpha = Math.max(0.12, p.baseAlpha + Math.sin(p.pulseOffset) * 0.25);
      const { r, g, b } = p.color;

      const grad = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3.6);
      grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${pulseAlpha})`);
      grad.addColorStop(0.35, `rgba(${r}, ${g}, ${b}, ${pulseAlpha * 0.45})`);
      grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

      this.ctx.fillStyle = grad;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius * 3.6, 0, Math.PI * 2);
      this.ctx.fill();

      // White Hot Core
      this.ctx.fillStyle = `rgba(255, 255, 255, ${pulseAlpha * 0.85})`;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius * 0.6, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  loop() {
    if (!this.isRunning) return;
    this.update();
    this.draw();
    this.animationFrameId = requestAnimationFrame(() => this.loop());
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.loop();
  }

  stop() {
    this.isRunning = false;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }
}

/* ==========================================================================
   2. Mouse-tracking Glow & 3D Tilt
   ========================================================================== */
function initCardTiltAndGlow() {
  if (window.matchMedia('(hover: none)').matches) return;

  const cards = document.querySelectorAll('.work-card');

  cards.forEach(card => {
    let bounds = card.getBoundingClientRect();
    let rAFId = null;

    const onPointerMove = (e) => {
      if (rAFId) return;
      rAFId = requestAnimationFrame(() => {
        bounds = card.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;
        const rotateX = ((y - centerY) / centerY) * -3.2;
        const rotateY = ((x - centerX) / centerX) * 3.2;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
        rAFId = null;
      });
    };

    const onPointerLeave = () => {
      if (rAFId) cancelAnimationFrame(rAFId);
      rAFId = null;
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    };

    card.addEventListener('pointermove', onPointerMove, { passive: true });
    card.addEventListener('pointerleave', onPointerLeave, { passive: true });
  });
}

/* ==========================================================================
   3. Navbar & Mobile Drawer
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.mobile-menu-toggle');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      header.classList.toggle('mobile-open');
    });

    document.querySelectorAll('.nav-link, .nav-btn').forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('mobile-open');
      });
    });
  }
}

/* ==========================================================================
   4. Category Filter
   ========================================================================== */
function initFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.work-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'grid';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   5. Card Thumbnails Image Switcher
   ========================================================================== */
function initThumbnailSwitching() {
  document.querySelectorAll('.work-visual-thumbs').forEach(thumbContainer => {
    const parentVisual = thumbContainer.closest('.work-visual');
    const mainImg = parentVisual.querySelector('.work-visual-main');

    thumbContainer.querySelectorAll('img').forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        e.stopPropagation();
        const newSrc = thumb.getAttribute('data-src') || thumb.getAttribute('src');
        
        mainImg.style.opacity = '0.5';
        setTimeout(() => {
          mainImg.src = newSrc;
          mainImg.style.opacity = '1';
        }, 120);

        thumbContainer.querySelectorAll('img').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  });
}

/* ==========================================================================
   6. Rich Modal Lightbox & Navigation
   ========================================================================== */
function initModals() {
  const modalBackdrop = document.getElementById('details-modal');
  if (!modalBackdrop) return;

  const closeBtn = modalBackdrop.querySelector('.modal-close-btn');

  // Open modal
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const appId = btn.getAttribute('data-open-modal');
      openModal(appId);
    });
  });

  const closeModal = () => {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modalBackdrop.classList.contains('open')) return;

    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      stepModalGallery(1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      stepModalGallery(-1);
    }
  });
}

function openModal(appId) {
  currentModalApp = appId;
  currentModalGalleryIndex = 0;
  renderModalContent(appId);
  const modalBackdrop = document.getElementById('details-modal');
  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function stepModalGallery(direction) {
  if (!currentModalApp) return;
  const data = APP_DATA[currentModalApp];
  if (!data) return;

  currentModalGalleryIndex = (currentModalGalleryIndex + direction + data.gallery.length) % data.gallery.length;
  updateModalGalleryView(data.gallery[currentModalGalleryIndex]);
}

function updateModalGalleryView(item) {
  const mainImg = document.getElementById('modal-main-image');
  const captionEl = document.getElementById('modal-image-caption');
  if (mainImg) {
    mainImg.style.opacity = '0.4';
    setTimeout(() => {
      mainImg.src = item.src;
      mainImg.style.opacity = '1';
    }, 100);
  }
  if (captionEl) captionEl.textContent = item.caption;

  document.querySelectorAll('.modal-gallery-thumbs img').forEach((el, idx) => {
    if (idx === currentModalGalleryIndex) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

function renderModalContent(appId) {
  const data = APP_DATA[appId];
  if (!data) return;

  const container = document.getElementById('modal-content-area');
  
  let thumbsHtml = '';
  data.gallery.forEach((item, index) => {
    thumbsHtml += `
      <img src="${item.src}" alt="${item.caption}" class="${index === 0 ? 'active' : ''}" onclick="selectModalGalleryIndex(${index})" />
    `;
  });

  let featuresHtml = '';
  data.features.forEach(feat => {
    featuresHtml += `<li><span style="color:var(--lamp-cyan-core); font-weight:bold; margin-right:8px;">✦</span> ${feat}</li>`;
  });

  let specsHtml = '';
  data.specs.forEach(spec => {
    specsHtml += `
      <div class="spec-card">
        <div class="spec-card-label">${spec.label}</div>
        <div class="spec-card-value">${spec.value}</div>
      </div>
    `;
  });

  let linksHtml = '';
  data.links.forEach(link => {
    const btnClass = link.isSecondary ? 'btn-card-action btn-card-secondary' : 'btn-card-action btn-card-primary';
    linksHtml += `
      <a href="${link.url}" class="${btnClass}" ${link.isExternal ? 'target="_blank" rel="noopener"' : ''}>
        ${link.text} ↗
      </a>
    `;
  });

  container.innerHTML = `
    <div class="modal-gallery">
      <div class="modal-gallery-viewport">
        <button class="gallery-nav-btn prev" aria-label="Previous" onclick="stepModalGallery(-1)">❮</button>
        <img id="modal-main-image" src="${data.gallery[0].src}" alt="${data.gallery[0].caption}" class="modal-gallery-main" />
        <button class="gallery-nav-btn next" aria-label="Next" onclick="stepModalGallery(1)">❯</button>
      </div>
      <p id="modal-image-caption" style="text-align:center; font-size:0.88rem; color:var(--text-silver); margin-top:10px;">${data.gallery[0].caption}</p>
      <div class="modal-gallery-thumbs">
        ${thumbsHtml}
      </div>
    </div>

    <div class="work-category" style="margin-top:18px;">${data.category}</div>
    <h2 style="font-family:var(--font-serif-gothic); font-size:1.9rem; font-weight:700; margin-bottom:6px; color:#fff;">${data.title}</h2>
    <p style="font-family:var(--font-heading-mincho); color:var(--lamp-cyan-core); font-size:1rem; margin-bottom:22px; font-weight:500;">${data.subtitle}</p>

    <div style="font-size:0.96rem; line-height:1.8; color:var(--text-silver); margin-bottom:28px; white-space:pre-line;">${data.description}</div>

    <h4 style="font-family:var(--font-heading-mincho); font-size:1.15rem; margin-bottom:14px; color:#fff;">主な特徴・システム</h4>
    <ul style="list-style:none; display:flex; flex-direction:column; gap:10px; margin-bottom:30px; font-size:0.92rem; color:var(--text-pure);">
      ${featuresHtml}
    </ul>

    <h4 style="font-family:var(--font-heading-mincho); font-size:1.15rem; margin-bottom:14px; color:#fff;">仕様・スペック</h4>
    <div class="modal-specs-grid">
      ${specsHtml}
    </div>

    <div style="display:flex; gap:14px; flex-wrap:wrap; margin-top:32px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.08);">
      ${linksHtml}
    </div>
  `;
}

window.selectModalGalleryIndex = function(index) {
  if (!currentModalApp) return;
  const data = APP_DATA[currentModalApp];
  if (!data || !data.gallery[index]) return;

  currentModalGalleryIndex = index;
  updateModalGalleryView(data.gallery[index]);
};

window.stepModalGallery = stepModalGallery;

/* ==========================================================================
   7. Copy Email & Toast Feedback
   ========================================================================== */
function initCopyButtons() {
  document.querySelectorAll('[data-copy-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy-target');
      navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'コピーしました！ ✓';
        btn.style.background = 'var(--lamp-cyan-core)';
        btn.style.color = '#030509';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.color = '';
        }, 2200);
      });
    });
  });
}

/* ==========================================================================
   8. Mobile Bottom Bar ScrollSpy
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const bottomItems = document.querySelectorAll('.mobile-bottom-item');
  if (!bottomItems.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        bottomItems.forEach(item => {
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => observer.observe(s));
}
