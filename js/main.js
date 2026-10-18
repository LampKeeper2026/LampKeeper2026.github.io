/**
 * Studio LampKeep Official Website Scripts
 */

// Product Details Data for Modals
const APP_DATA = {
  poc: {
    title: 'Prince of Chaos',
    subtitle: '混沌迷宮と呪いの公子 ― 紙芝居×一人称地下迷宮RPG',
    category: 'ダンジョンRPG / ノベルアドベンチャー',
    tag: 'Android 専用',
    platform: 'Android (8.0 以降)',
    price: '基本プレイ無料（広告非表示 500円）',
    packageId: 'com.lampkeep.princeofchaos',
    distribution: 'Google Play 公開中',
    description: `呪いの公子と呼ばれるリュカと、言葉を話す黒猫クロが、楔を集めて逆さ塔を目指すダークファンタジーRPG。
吹き出しによるテンポ良い紙芝居会話劇（全112場面、6つのマルチエンディング）と、一人称視点の重厚な地下迷宮探索が融合。
壁・床・戦闘背景が階層ごとに変化する地下10階＋深淵回廊、精鋭モンスター、武具の付加効果・ユニーク・組装備システム、連携技バトルなど、やりこみ要素が凝縮されています。
迷宮・名称・文章・絵・全32曲のオリジナルBGMはすべて独自制作。外部データやROMは一切不要で、完全オフラインで没入できます。`,
    features: [
      '吹き出しでテンポよく進む112場面の会話劇＆6つの結末（マルチエンディング）',
      '最大6人編成の隊列、技と気力、パートナーとの強力な連携技システム',
      '地下10階の踏破、その先に待ち受ける果てなき「深淵回廊」',
      '武具の付加効果（Affixes）、ユニーク装備、セット効果、ナギの鍛冶屋での強化',
      '全32曲に及ぶ Studio LampKeep 完全オリジナル楽曲を内包',
      '縦向き・横向き・画面反転・ゲームパッド（Bluetooth/USB）完全対応'
    ],
    gallery: [
      { src: 'assets/img/poc/hero.jpg', caption: 'キービジュアル：深淵の塔とリュカ' },
      { src: 'assets/img/poc/01_title.jpg', caption: 'タイトル画面：混沌迷宮と呪いの公子' },
      { src: 'assets/img/poc/05_maze.jpg', caption: '地下迷宮探索画面（3Dダンジョン）' },
      { src: 'assets/img/poc/07_battle.jpg', caption: 'コマンドバトル：連携技と精鋭魔獣' },
      { src: 'assets/img/poc/04_status.jpg', caption: 'パーティ・ステータス管理画面' },
      { src: 'assets/img/poc/14_inn.jpg', caption: '拠点ナギ：灯火の酒場・鍛冶屋・祈りの宮' }
    ],
    links: [
      { text: 'Prince of Chaos 公式サイト', url: 'https://lampkeeper2026.github.io/prince-of-chaos/', isExternal: true },
      { text: 'プライバシーポリシー', url: 'https://lampkeeper2026.github.io/prince-of-chaos-privacy/', isExternal: true }
    ]
  },
  blockdrop: {
    title: 'ブロックドロップ 1988：レトロパズル',
    subtitle: 'Block Drop 1988: Retro Fall ― 80年代アーケードの魂が蘇る',
    category: 'ネオ・レトロアーケード / 落下ブロックパズル',
    tag: 'Android / Web / Desktop',
    platform: 'Android 8.0+ / Webブラウザ / PC (JavaFX)',
    price: '完全無料（広告なし・課金なし）',
    packageId: 'com.lampkeep.blockdrop1988',
    distribution: 'Google Play 申請・内部テスト中 / Webデモ公開',
    description: `1988年稼働の伝説的アーケードゲームの操作感、物理挙動、そしてFM音源チップチューンサウンドを忠実再現した本格派レトロ落下ブロックパズル！
セガ実機準拠の左回転のみ（Sega Rotation）、接地遅延（Lock Delay 30F）、出現遅延（ARE 30F）、線形合同法（LCG）乱数生成テーブルを徹底追求。
さらに、3分間の制限時間内で連続ライン消去のコンボ倍率を叩き出すオリジナル「CYBER BURST」モードや、電脳都市2088・深宇宙・ネオンサーキットなど6大サイバー背景を搭載！
広告なし・アプリ内課金なし・完全オフライン動作。Bluetooth/USBゲームパッドやアーケードスティックにも完全対応しています。`,
    features: [
      '1988年アーケード実機準拠の物理エンジン（左回転のみ・壁蹴りなし・DAS・接地ディレイ再現）',
      'FM音源風オリジナルチップチューン（川上泰広氏サウンドスタイル再現）＆実機サンプリングSE',
      'Studio LampKeep オリジナル「CYBER BURST（3分スコアアタック）」モード搭載',
      '電脳都市2088、ディープスペース星雲など進行に応じて変化する6大美麗サイバーワールド',
      'タッチ操作（仮想D-Pad＆大型ボタン）＋Bluetooth/USBゲームパッド完全対応',
      '100%完全オフライン・広告なし・課金なし・個人情報非収集'
    ],
    gallery: [
      { src: 'assets/img/blockdrop/01_title.png', caption: 'タイトル画面：CLASSIC 1988 & CYBER BURST' },
      { src: 'assets/img/blockdrop/02_gameplay.png', caption: 'プレイ画面：アーケード筐体を模したサイバーフレーム' },
      { src: 'assets/img/blockdrop/03_cyber_title.png', caption: '新モード：3分間スコアアタック CYBER BURST' },
      { src: 'assets/img/blockdrop/04_cyber_gameplay.png', caption: 'CYBER BURST 実機プレイ：コンボ倍率と4ライン消去MEGA CLEAR' },
      { src: 'assets/img/blockdrop/05_pause.png', caption: 'ポーズ画面・安心のAndroidシステム戻る対応' }
    ],
    links: [
      { text: 'プライバシーポリシー', url: 'blockdrop-privacy.html', isExternal: false }
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

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFilter();
  initThumbnailSwitching();
  initModals();
  initCopyButtons();
});

// Navbar Scroll & Mobile Menu
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.mobile-menu-toggle');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

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

// Category Filter (All / Games / Tools)
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

// Card Thumbnails Image Switcher
function initThumbnailSwitching() {
  document.querySelectorAll('.work-visual-thumbs').forEach(thumbContainer => {
    const parentVisual = thumbContainer.closest('.work-visual');
    const mainImg = parentVisual.querySelector('.work-visual-main');

    thumbContainer.querySelectorAll('img').forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        e.stopPropagation();
        const newSrc = thumb.getAttribute('data-src') || thumb.getAttribute('src');
        mainImg.src = newSrc;
      });
    });
  });
}

// Modal View
function initModals() {
  const modalBackdrop = document.getElementById('details-modal');
  if (!modalBackdrop) return;

  const closeBtn = modalBackdrop.querySelector('.modal-close-btn');

  // Open modal buttons
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const appId = btn.getAttribute('data-open-modal');
      renderModalContent(appId);
      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close handlers
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

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

function renderModalContent(appId) {
  const data = APP_DATA[appId];
  if (!data) return;

  const container = document.getElementById('modal-content-area');
  
  // Gallery thumbs HTML
  let thumbsHtml = '';
  data.gallery.forEach((item, index) => {
    thumbsHtml += `
      <img src="${item.src}" alt="${item.caption}" class="${index === 0 ? 'active' : ''}" onclick="switchModalGalleryImage(this, '${item.src}', '${item.caption.replace(/'/g, "\\'")}')" />
    `;
  });

  // Features list HTML
  let featuresHtml = '';
  data.features.forEach(feat => {
    featuresHtml += `<li>✓ ${feat}</li>`;
  });

  // Links HTML
  let linksHtml = '';
  data.links.forEach(link => {
    linksHtml += `
      <a href="${link.url}" class="btn-card-action btn-card-primary" ${link.isExternal ? 'target="_blank" rel="noopener"' : ''}>
        ${link.text} ↗
      </a>
    `;
  });

  container.innerHTML = `
    <div class="modal-gallery">
      <img id="modal-main-image" src="${data.gallery[0].src}" alt="${data.gallery[0].caption}" class="modal-gallery-main" />
      <p id="modal-image-caption" style="text-align:center; font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">${data.gallery[0].caption}</p>
      <div class="modal-gallery-thumbs">
        ${thumbsHtml}
      </div>
    </div>

    <div class="work-category" style="margin-top:16px;">${data.category}</div>
    <h2 style="font-size:1.8rem; font-weight:800; margin-bottom:6px;">${data.title}</h2>
    <p style="color:var(--cyan-primary); font-size:0.95rem; margin-bottom:20px; font-weight:500;">${data.subtitle}</p>

    <div style="font-size:0.95rem; line-height:1.75; color:var(--text-muted); margin-bottom:24px; white-space:pre-line;">${data.description}</div>

    <h4 style="font-size:1.1rem; margin-bottom:12px; color:#fff;">主な特徴・システム</h4>
    <ul style="list-style:none; display:flex; flex-direction:column; gap:8px; margin-bottom:28px; color:#e2e8f0; font-size:0.9rem;">
      ${featuresHtml}
    </ul>

    <h4 style="font-size:1.1rem; margin-bottom:12px; color:#fff;">仕様・配信情報</h4>
    <table class="modal-specs-table">
      <tbody>
        <tr>
          <th>対応プラットフォーム</th>
          <td>${data.platform}</td>
        </tr>
        <tr>
          <th>価格・配信形式</th>
          <td>${data.price}</td>
        </tr>
        <tr>
          <th>配信状況</th>
          <td>${data.distribution}</td>
        </tr>
        <tr>
          <th>パッケージID</th>
          <td><code>${data.packageId}</code></td>
        </tr>
      </tbody>
    </table>

    <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:28px;">
      ${linksHtml}
    </div>
  `;
}

// Modal gallery image switch helper
window.switchModalGalleryImage = function(thumbElement, src, caption) {
  const mainImg = document.getElementById('modal-main-image');
  const captionEl = document.getElementById('modal-image-caption');
  if (mainImg) mainImg.src = src;
  if (captionEl) captionEl.textContent = caption;

  document.querySelectorAll('.modal-gallery-thumbs img').forEach(el => el.classList.remove('active'));
  thumbElement.classList.add('active');
};

// Copy email to clipboard
function initCopyButtons() {
  document.querySelectorAll('[data-copy-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy-target');
      navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'コピーしました！';
        btn.style.background = '#00d2ff';
        btn.style.color = '#000';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.color = '';
        }, 2000);
      });
    });
  });
}
