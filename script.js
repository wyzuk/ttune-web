/**
 * টি - টিউন (T-Tune)
 * High-Fidelity Audio Engine & Fullscreen Audio-Reactive Particle Visualizer
 */

// =============================================================================
// 1. EXACT 16 LOCAL MP3 TRACKS (Using exact disk filenames)
// =============================================================================
const songs = [
  {
    id: 1,
    en: "Jeno Tomari Kache",
    bn: "যেন তোমারই কাছে",
    file: "musics/01 - Jeno Tomari Kache (যেন তোমারই কাছে)-Lyrical ｜ Shudhu Tomari Jonyo ｜ Dev ｜ Srabanti ｜ SVF.mp3"
  },
  {
    id: 2,
    en: "Egiye De",
    bn: "এগিয়ে দে",
    file: "musics/02 - Egiye de - Lyrical ｜ Shudhu Tomari Jonyo ｜ Dev, Srabanti ｜ Arijit, Madhubanti ｜ Arindom ｜ SVF Music.mp3"
  },
  {
    id: 3,
    en: "Tomake Chai",
    bn: "তোমাকে চাই",
    file: "musics/03 - Tomake Chai (তোমাকে চাই) ｜ Gangster ｜ Arijit Singh ｜ Arindom ｜ Yash ｜ Mimi ｜ SVF Music.mp3"
  },
  {
    id: 4,
    en: "Kothin",
    bn: "কঠিন",
    file: "musics/04 - Kothin ｜ Bojhena Shey Bojhena ｜ Full Video Song ｜ Ash K, Saayoni G ｜ Soham ｜ Mimi ｜ SVF Music.mp3"
  },
  {
    id: 5,
    en: "Ki Kore Toke Bolbo",
    bn: "কি করে তোকে বলবো",
    file: "musics/05 - Ki Kore Toke Bolbo ｜ Rangbaaz ｜ Dev ｜ Koel Mallick ｜ Arijit Singh ｜ Jeet Gannguli.mp3"
  },
  {
    id: 6,
    en: "Tor Ek Kothaye",
    bn: "তোঁর এক কথায়",
    file: "musics/06 - Tor Ek Kothaye ｜ Besh Korechi Prem Korechi ｜ Koel ｜ Jeet ｜ Arijit Singh ｜ Jeet Gannguli.mp3"
  },
  {
    id: 7,
    en: "Porle Mone",
    bn: "পড়লে মনে",
    file: "musics/07 - Porle Mone ( পড়লে মনে ) ｜ Awara ｜ Jeet ｜ Sayantika ｜ Jeet Gannguli ｜ Ravi Kinnagi ｜ SVF Music.mp3"
  },
  {
    id: 8,
    en: "Ekta Premer Gaan Likhechi",
    bn: "একটা প্রেমের গান লিখেছি",
    file: "musics/08 - Ekta Premer Gaan Likhechi ｜ Paglu 2 ｜ Dev ｜ Koel Mallick ｜ Jeet Gannguli ｜ Sujit Mondal.mp3"
  },
  {
    id: 9,
    en: "Bojhena Shey Bojhena",
    bn: "বোঝেনা সে বোঝেনা",
    file: "musics/09 - Bojhena Shey Bojhena (বোঝেনা সে বোঝেনা) ｜ Title Track ｜Soham ｜Abir ｜ Payel ｜Mimi ｜ Arijit Singh ｜SVF.mp3"
  },
  {
    id: 10,
    en: "Rimjhim E Dhara Te",
    bn: "রিমঝিম এ ধারাতে",
    file: "musics/10 - Rimjhim E Dhara Te ｜ Premer Kahini ｜ Dev ｜ Koel ｜ Shaan ｜Jeet Gannguli ｜ SVF.mp3"
  },
  {
    id: 11,
    en: "Bhogoban",
    bn: "ভগবান",
    file: "musics/11 - Bhogoban(ভগবান) ｜ Bojhena Shye Bojhena ｜ Full Video Song ｜ Timir B ｜ Somlata ｜ SVF Music.mp3"
  },
  {
    id: 12,
    en: "Poran Jai Jolia Re",
    bn: "পরাণ যায় জ্বলিয়া রে",
    file: "musics/12 - Poran Jai Jolia Re (পরাণ যায় জ্বলিয়া রে) ｜ Title Track ｜ Dev ｜ Subhashree ｜ Jeet Gannguli ｜ SVF.mp3"
  },
  {
    id: 13,
    en: "Tomar Amar Prem",
    bn: "তোমার আমার প্রেম",
    file: "musics/13 - Tomar Amar Prem ｜ Jaaneman ｜ Soham ｜ Koel ｜ Zubeen Garg ｜ Jeet Gannguli ｜ Raja Chanda.mp3"
  },
  {
    id: 14,
    en: "Shedin Dekha Hoyechilo",
    bn: "সেদিন দেখা হয়েছিল",
    file: "musics/14 - Shedin Dekha Hoyechilo ( সেদিন দেখা হয়েছিল ) ｜ Title Track ｜ Dev ｜ Srabanti ｜ Sujit Mondal ｜ SVF.mp3"
  },
  {
    id: 15,
    en: "Jane Mon",
    bn: "জানে মন",
    file: "musics/15 - Jane Mon ｜ Paglu ｜ Dev ｜ Koel Mallick ｜ Jeet Gannguli ｜ Rajib Kumar.mp3"
  },
  {
    id: 16,
    en: "O Bondhu",
    bn: "ও বন্ধু",
    file: "musics/16 - O Bondhu ｜ Sathi ｜ Jeet ｜ Priyanka Trivedi ｜ Haranath Chakraborty ｜ SVF ｜ 2002.mp3"
  }
];

// =============================================================================
// 2. PERSISTENT AUDIO ELEMENT & WEB AUDIO ENGINE
// =============================================================================
// One persistent HTMLAudioElement for the player
const audio = new Audio();
audio.preload = "auto";
audio.volume = 0.85;
audio.muted = false;

let audioContext = null;
let audioSource = null;
let analyser = null;
let freqData = null;

let currentIndex = 0;
let previousVolume = 0.85;
let isSeeking = false;

// DOM Elements
const canvas = document.getElementById('particlesCanvas');
const ctx = canvas.getContext('2d');

const statusPill = document.getElementById('statusPill');
const statusText = document.getElementById('statusText');
const currentTitleEn = document.getElementById('currentTitleEn');
const currentTitleBn = document.getElementById('currentTitleBn');
const currentTimeEl = document.getElementById('currentTime');
const durationTimeEl = document.getElementById('durationTime');
const progressBarContainer = document.getElementById('progressBarContainer');
const progressBarFill = document.getElementById('progressBarFill');
const progressThumb = document.getElementById('progressThumb');

const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const muteBtn = document.getElementById('muteBtn');
const volHighIcon = document.getElementById('volHighIcon');
const volMuteIcon = document.getElementById('volMuteIcon');
const volumeSlider = document.getElementById('volumeSlider');

const hideUiBtn = document.getElementById('hideUiBtn');
const restoreUiBtn = document.getElementById('restoreUiBtn');
const playlistContainer = document.getElementById('playlistContainer');

/**
 * Initializes the Web Audio pipeline.
 * Routes audio through AnalyserNode AND directly to AudioContext.destination
 * so sound is guaranteed to reach the speakers/headphones.
 */
function initAudioSystem() {
  if (audioSource) return;

  // Chromium security blocks createMediaElementSource output on file:///
  // On file:///, native HTMLAudioElement outputs directly to speakers.
  if (window.location.protocol === 'file:') {
    console.log("TTune: Running via file:// protocol. Direct HTMLAudioElement output active for audible sound.");
    return;
  }

  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    audioContext = new AudioContextClass();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.8;

    freqData = new Uint8Array(analyser.frequencyBinCount);

    audioSource = audioContext.createMediaElementSource(audio);

    // Audio -> Destination (Speakers) AND Audio -> Analyser (Particles)
    audioSource.connect(audioContext.destination);
    audioSource.connect(analyser);

    console.log("TTune: Web Audio API connected to destination and analyser.");
  } catch (err) {
    console.warn("TTune: AudioContext setup note:", err);
  }
}

// =============================================================================
// 3. TRACK LOADING & PLAYBACK CONTROL
// =============================================================================
function loadSong(index, shouldPlay = false) {
  if (index < 0 || index >= songs.length) return;
  currentIndex = index;
  const song = songs[currentIndex];

  localStorage.setItem('ttuneLastSongIndex', currentIndex);

  // Update Song Titles
  currentTitleEn.textContent = song.en;
  currentTitleBn.textContent = song.bn;

  // Reset Progress Display
  currentTimeEl.textContent = "00:00";
  progressBarFill.style.width = '0%';
  progressThumb.style.left = '0%';

  // Update Playlist Highlight
  updatePlaylistHighlight();

  // Load Audio
  audio.pause();
  audio.src = encodeURI(song.file);
  audio.currentTime = 0;
  audio.load();
  audio.muted = false;
  audio.volume = Number(volumeSlider.value);

  console.log("TTune loading:", audio.src);

  if (shouldPlay) {
    playAudioDirect();
  } else {
    updatePlayerUI();
    updateAudioState('ready', 'শুনতে প্লে করুন');
  }
}

async function playAudioDirect() {
  try {
    initAudioSystem();

    if (audioContext && audioContext.state === "suspended") {
      await audioContext.resume();
    }

    audio.muted = false;
    audio.volume = Number(volumeSlider.value);

    await audio.play();
    updatePlayerUI();
  } catch (error) {
    console.error("TTune playback error:", error);
    updateAudioState('error', 'গানটি চালানো যাচ্ছে না');
  }
}

async function togglePlayPause() {
  if (audio.paused) {
    await playAudioDirect();
  } else {
    audio.pause();
    updatePlayerUI();
  }
}

function playNext(auto = false) {
  const nextIdx = (currentIndex + 1) % songs.length;
  const shouldPlay = auto || !audio.paused;
  loadSong(nextIdx, shouldPlay);
}

function playPrevious() {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }
  const prevIdx = (currentIndex - 1 + songs.length) % songs.length;
  const shouldPlay = !audio.paused;
  loadSong(prevIdx, shouldPlay);
}

// =============================================================================
// 4. AUDIO EVENT LISTENERS
// =============================================================================
audio.addEventListener('play', () => {
  updatePlayerUI();
  updateAudioState('playing', '● এখন বাজছে');
  document.body.classList.add('music-playing');
  console.log("TTune playing. Volume:", audio.volume, "Muted:", audio.muted);
});

audio.addEventListener('pause', () => {
  updatePlayerUI();
  updateAudioState('paused', 'Ⅱ বিরতিতে');
  document.body.classList.remove('music-playing');
});

audio.addEventListener('ended', () => {
  playNext(true);
});

audio.addEventListener('timeupdate', () => {
  if (isSeeking) return;
  const cur = audio.currentTime || 0;
  const dur = audio.duration || 0;

  currentTimeEl.textContent = formatTime(cur);

  if (dur > 0) {
    const pct = Math.min(100, Math.max(0, (cur / dur) * 100));
    progressBarFill.style.width = `${pct}%`;
    progressThumb.style.left = `${pct}%`;
    durationTimeEl.textContent = formatTime(dur);
    progressBarContainer.setAttribute('aria-valuenow', Math.round(pct));
  }
});

audio.addEventListener('loadedmetadata', () => {
  console.log("TTune duration loaded:", audio.duration);
  if (audio.duration) {
    durationTimeEl.textContent = formatTime(audio.duration);
  }
});

audio.addEventListener('error', (e) => {
  console.error("TTune audio error:", e);
  updateAudioState('error', 'গানটি চালানো যাচ্ছে না');
});

// =============================================================================
// 5. UI STATE HELPERS
// =============================================================================
function updatePlayerUI() {
  if (!audio.paused) {
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
    playPauseBtn.setAttribute('title', 'বিরতি (Space)');
    playPauseBtn.setAttribute('aria-label', 'Pause');
  } else {
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
    playPauseBtn.setAttribute('title', 'শুনুন (Space)');
    playPauseBtn.setAttribute('aria-label', 'Play');
  }
}

function updateAudioState(state, text) {
  if (state === 'playing') {
    statusPill.classList.remove('paused');
  } else {
    statusPill.classList.add('paused');
  }
  statusText.textContent = text;
}

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// =============================================================================
// 6. PROGRESS BAR SEEKING
// =============================================================================
function seekAtEvent(e) {
  const dur = audio.duration || 0;
  if (dur <= 0) return;

  const rect = progressBarContainer.getBoundingClientRect();
  const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  let offsetX = clientX - rect.left;
  offsetX = Math.max(0, Math.min(offsetX, rect.width));
  const pct = offsetX / rect.width;

  progressBarFill.style.width = `${pct * 100}%`;
  progressThumb.style.left = `${pct * 100}%`;
  currentTimeEl.textContent = formatTime(pct * dur);

  audio.currentTime = pct * dur;
}

function setupProgressBar() {
  progressBarContainer.addEventListener('mousedown', (e) => {
    isSeeking = true;
    progressBarContainer.classList.add('dragging');
    seekAtEvent(e);

    const onMouseMove = (moveEvent) => seekAtEvent(moveEvent);
    const onMouseUp = (upEvent) => {
      isSeeking = false;
      progressBarContainer.classList.remove('dragging');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      seekAtEvent(upEvent);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  });

  progressBarContainer.addEventListener('touchstart', (e) => {
    isSeeking = true;
    progressBarContainer.classList.add('dragging');
    seekAtEvent(e);

    const onTouchMove = (moveEvent) => seekAtEvent(moveEvent);
    const onTouchEnd = (endEvent) => {
      isSeeking = false;
      progressBarContainer.classList.remove('dragging');
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };

    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
  }, { passive: true });
}

// =============================================================================
// 7. VOLUME SLIDER & MUTE
// =============================================================================
function setVolume(val) {
  val = Math.max(0, Math.min(1, val));
  volumeSlider.value = val;
  audio.volume = val;
  audio.muted = (val === 0);
  localStorage.setItem('ttuneVolume', val);
  updateVolumeIcon();
}

function updateVolumeIcon() {
  if (audio.muted || audio.volume === 0) {
    volHighIcon.classList.add('hidden');
    volMuteIcon.classList.remove('hidden');
  } else {
    volHighIcon.classList.remove('hidden');
    volMuteIcon.classList.add('hidden');
  }
}

function toggleMute() {
  if (audio.muted || audio.volume === 0) {
    audio.muted = false;
    const restore = previousVolume > 0 ? previousVolume : 0.85;
    audio.volume = restore;
    volumeSlider.value = restore;
  } else {
    previousVolume = audio.volume > 0 ? audio.volume : 0.85;
    audio.muted = true;
    volumeSlider.value = 0;
  }
  updateVolumeIcon();
}

// =============================================================================
// 8. PLAYLIST RENDERING (INDIVIDUAL CURVED SONG ROWS)
// =============================================================================
function renderPlaylist() {
  playlistContainer.innerHTML = '';

  songs.forEach((song, idx) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'song-card' + (idx === currentIndex ? ' active' : '');
    card.setAttribute('role', 'option');
    card.setAttribute('aria-selected', idx === currentIndex ? 'true' : 'false');
    card.setAttribute('data-index', idx);

    const padNum = String(idx + 1).padStart(2, '0');

    card.innerHTML = `
      <span class="song-num">${padNum}</span>
      <span class="song-name">${song.en}</span>
      <div class="song-eq" aria-hidden="true">
        <span class="eq-bar"></span>
        <span class="eq-bar"></span>
        <span class="eq-bar"></span>
      </div>
    `;

    card.addEventListener('click', () => {
      loadSong(idx, true);
    });

    playlistContainer.appendChild(card);
  });
}

function updatePlaylistHighlight() {
  const cards = playlistContainer.querySelectorAll('.song-card');
  cards.forEach((card, idx) => {
    const isCurrent = idx === currentIndex;
    card.classList.toggle('active', isCurrent);
    card.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
    if (isCurrent) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

// =============================================================================
// 9. ONLY VISUALIZER: FULLSCREEN AUDIO-REACTIVE PARTICLES
// =============================================================================
let particles = [];
const PARTICLE_COUNT = 75;

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const w = window.innerWidth;
  const h = window.innerHeight;

  if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    initParticles();
  }
}

window.addEventListener('resize', resizeCanvas);

function initParticles() {
  particles = [];
  const w = window.innerWidth;
  const h = window.innerHeight;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      baseRadius: 1.5 + Math.random() * 2.8,
      vx: (Math.random() - 0.5) * 0.45,
      vy: -0.25 - Math.random() * 0.65,
      baseAlpha: 0.18 + Math.random() * 0.55,
      hueOffset: Math.random() * 20
    });
  }
}

function getAudioEnergy() {
  if (!analyser || !freqData || audio.paused) {
    return 0;
  }
  analyser.getByteFrequencyData(freqData);
  let sum = 0;
  const bins = Math.min(freqData.length, 32); // Focus on bass & lower mids
  for (let i = 0; i < bins; i++) {
    sum += freqData[i];
  }
  return sum / (bins * 255); // 0.0 to 1.0
}

function drawParticles() {
  requestAnimationFrame(drawParticles);

  const dpr = window.devicePixelRatio || 1;
  const w = window.innerWidth;
  const h = window.innerHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.scale(dpr, dpr);

  const energy = getAudioEnergy();

  particles.forEach(p => {
    // Movement reacts to audio energy
    const speedMultiplier = 1 + energy * 2.8;
    p.x += p.vx * speedMultiplier;
    p.y += p.vy * speedMultiplier;

    // Wrap around viewport edges
    if (p.x < 0) p.x = w;
    if (p.x > w) p.x = 0;
    if (p.y < 0) p.y = h;
    if (p.y > h) p.y = 0;

    // Radius and glow pulse with audio intensity
    const radius = p.baseRadius * (1 + energy * 2.0);
    const alpha = Math.min(1, p.baseAlpha * (0.8 + energy * 1.6));

    ctx.beginPath();
    ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(244, 186, 109, ${alpha})`;
    ctx.fill();

    // Subtle ambient particle glow when bass hits
    if (energy > 0.3) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, radius * 2.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(229, 152, 70, ${alpha * 0.25})`;
      ctx.fill();
    }
  });

  ctx.restore();
}

// =============================================================================
// 10. HIDE UI MODE (ONLY BACKGROUND + PARTICLES)
// =============================================================================
function toggleHideUi(forceState) {
  const isHidden = typeof forceState === 'boolean' ? forceState : !document.body.classList.contains('ui-hidden');

  if (isHidden) {
    document.body.classList.add('ui-hidden');
    restoreUiBtn.classList.remove('hidden');
  } else {
    document.body.classList.remove('ui-hidden');
    restoreUiBtn.classList.add('hidden');
  }
}

// =============================================================================
// 11. KEYBOARD SHORTCUTS
// =============================================================================
function setupKeyboard() {
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    switch (e.code) {
      case 'Space':
        e.preventDefault();
        togglePlayPause();
        break;

      case 'ArrowLeft':
        e.preventDefault();
        playPrevious();
        break;

      case 'ArrowRight':
        e.preventDefault();
        playNext();
        break;

      case 'KeyM':
        e.preventDefault();
        toggleMute();
        break;

      case 'ArrowUp':
        e.preventDefault();
        setVolume(Math.min(1, audio.volume + 0.05));
        break;

      case 'ArrowDown':
        e.preventDefault();
        setVolume(Math.max(0, audio.volume - 0.05));
        break;

      case 'Escape':
        e.preventDefault();
        if (document.body.classList.contains('ui-hidden')) {
          toggleHideUi(false);
        }
        break;
    }
  });
}

// =============================================================================
// 12. INITIALIZATION ON DOM READY
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderPlaylist();

  // Restore saved volume
  const savedVol = localStorage.getItem('ttuneVolume');
  if (savedVol !== null && !isNaN(Number(savedVol))) {
    setVolume(Number(savedVol));
  } else {
    setVolume(0.85);
  }

  // Restore last selected song without autoplaying
  const savedSongIndex = localStorage.getItem('ttuneLastSongIndex');
  const initialIdx = (savedSongIndex !== null && !isNaN(parseInt(savedSongIndex, 10))) ? parseInt(savedSongIndex, 10) : 0;
  loadSong(initialIdx, false);

  setupProgressBar();
  setupKeyboard();

  playPauseBtn.addEventListener('click', togglePlayPause);
  prevBtn.addEventListener('click', playPrevious);
  nextBtn.addEventListener('click', () => playNext(false));
  muteBtn.addEventListener('click', toggleMute);
  volumeSlider.addEventListener('input', (e) => setVolume(Number(e.target.value)));

  hideUiBtn.addEventListener('click', () => toggleHideUi(true));
  restoreUiBtn.addEventListener('click', () => toggleHideUi(false));

  // Clicking on background in hide-ui-mode restores UI
  window.addEventListener('click', (e) => {
    if (document.body.classList.contains('ui-hidden')) {
      // If clicking outside restore button, restore UI
      if (!restoreUiBtn.contains(e.target) && !hideUiBtn.contains(e.target)) {
        toggleHideUi(false);
      }
    }
  });

  // Start Particle Engine
  resizeCanvas();
  drawParticles();

  console.log("টি - টিউন audio engine & floating player ready.");
});
