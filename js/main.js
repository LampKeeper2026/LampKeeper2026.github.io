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
    title: 'LampDrop：混沌迷宮の蒼き灯火',
    subtitle: 'LampDrop: Chaos Labyrinth ― 魔導ランプが連なる本格ゴシック・レトロ落下パズル',
    category: 'ゴシック・レトロアーケード / 落下ブロックパズル',
    tag: 'Android / Web / Desktop',
    platform: 'Android 8.0+ / Webブラウザ / PC (JavaFX)',
    price: '基本プレイ無料（広告あり・ゲーム中非表示）',
    packageId: 'com.lampkeep.blockdrop1988',
    distribution: 'Google Play 申請・内部テスト中 / Webデモ公開',
    description: `魔導ランプが連なり、混沌の迷宮を照らし出す――
1988年クラシック・アーケードの緊迫感とダークファンタジー世界が融合した、本格派レトロ落下ブロックパズル『LampDrop（ランプドロップ）』が登場！
Studio LampKeepの代表作『Prince of Chaos ― 混沌迷宮と呪いの公子』の耽美な世界観を受け継ぐ、重厚な黒鉄と真鍮のゴシックフレーム、神秘的に揺らめく蒼灯、そして疾走感あふれるチップチューンサウンドがスマートフォンで蘇ります。
落下するピースは真鍮と硝子で精緻に描かれたアンティークランプ。隣接する同色のランプ同士がアイアンチェーンや真鍮パイプでシームレスに結束し、魔導の光を放ちます。4ライン同時消去時の爽快な「MEGA CLEAR」で迷宮を一気に浄化せよ！`,
    features: [
      '繋がる魔導ランプ（ランタンクラスタ）：同色ランプが鍛造チェーンや真鍮パイプで結束',
      '1988年アーケード実機準拠の物理エンジン（反時計回り回転・壁蹴りなし・LCG乱数・30Fロック遅延）',
      'Prince of Chaos 迷宮6大階層（蒼灯の納骨回廊、機巧の地下炉、宙吊りの逆さ塔、混沌の祭壇等）',
      'Studio LampKeep オリジナル「CHAOS BURST（3分スコアアタック・コンボ倍率）」モード搭載',
      'FM音源風オリジナルチップチューン（川上泰広氏スタイル再現）＆実機サンプリングSE',
      'タッチ操作（仮想D-Pad＆大型ボタン）＋Bluetooth/USBゲームパッド完全対応'
    ],
    gallery: [
      { src: 'assets/img/blockdrop/lampdrop_title.png', caption: 'タイトル画面：CLASSIC 1988 & CHAOS BURST' },
      { src: 'assets/img/blockdrop/lampdrop_gameplay.png', caption: 'プレイ画面：真鍮と黒鉄のゴシックフレーム＆連なる魔導ランプ' },
      { src: 'assets/img/blockdrop/lampdrop_stacked.png', caption: '盤面：美しく結束するランタンクラスタと4ライン消去MEGA CLEAR' },
      { src: 'assets/img/blockdrop/02_gameplay.png', caption: '実機Pixel画面：アーケード筐体を模したサイバー操作系' },
      { src: 'assets/img/blockdrop/05_pause.png', caption: 'ポーズ画面・安心のAndroidシステム戻る対応' }
    ],
    links: [
      { text: 'プライバシーポリシー', url: 'lampdrop-privacy.html', isExternal: false }
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
