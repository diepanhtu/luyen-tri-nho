/**
 * Super Memory 00-99 & Binary Training Single Page App
 * Pure JavaScript Implementation
 */

// ==========================================================================
// 1. DATASETS & MAPPINGS
// ==========================================================================

// 100 Encoding Pairs (00 to 99)
const DATASET = [
    { num: "00", name: "Con Chó" },
    { num: "01", name: "Con Trâu" },
    { num: "02", name: "Con Nhím" },
    { num: "03", name: "Con Mực" },
    { num: "04", name: "Con Rắn" },
    { num: "05", name: "Cá Sấu" },
    { num: "06", name: "Cái Búa" },
    { num: "07", name: "Cục Phấn" },
    { num: "08", name: "Con Heo" },
    { num: "09", name: "Con Gián" },
    { num: "10", name: "Tổ Chim" },
    { num: "11", name: "Tinh Tinh" },
    { num: "12", name: "Tấm Nệm" },
    { num: "13", name: "Thang Máy" },
    { num: "14", name: "Túi Rác" },
    { num: "15", name: "Thùng Sơn" },
    { num: "16", name: "Túi Balo" },
    { num: "17", name: "Tai Phone" },
    { num: "18", name: "Tàu Hỏa" },
    { num: "19", name: "Tê Giác" },
    { num: "20", name: "Nước Cất" },
    { num: "21", name: "Nhà Tù" },
    { num: "22", name: "Người Nhện" },
    { num: "23", name: "Nước Mắm" },
    { num: "24", name: "Nấm Rơm" },
    { num: "25", name: "Nhân Sâm" },
    { num: "26", name: "Nhẫn Bạc" },
    { num: "27", name: "Nổ Pháo" },
    { num: "28", name: "Nghiện Hút" },
    { num: "29", name: "Người Già" },
    { num: "30", name: "Móng Chân" },
    { num: "31", name: "Máy Tính" },
    { num: "32", name: "Màng Nhĩ" },
    { num: "33", name: "Móc Mắt" },
    { num: "34", name: "Mưa Rào" },
    { num: "35", name: "Móc Sắt" },
    { num: "36", name: "Máy Bay" },
    { num: "37", name: "MAFIA" },
    { num: "38", name: "Màn Hình" },
    { num: "39", name: "Máy Giặt" },
    { num: "40", name: "Răng Cưa" },
    { num: "41", name: "Rổ Tre" },
    { num: "42", name: "Ruột Non" },
    { num: "43", name: "Rắc Muối" },
    { num: "44", name: "Ròng Rọc" },
    { num: "45", name: "Rồng Sắt" },
    { num: "46", name: "Robot" },
    { num: "47", name: "Rô Phi" },
    { num: "48", name: "Rau Hẹ" },
    { num: "49", name: "Rô Ga" },
    { num: "50", name: "Sữa Chua" },
    { num: "51", name: "Sư Tử" },
    { num: "52", name: "Sọ Người" },
    { num: "53", name: "Sứt Môi" },
    { num: "54", name: "Sầu Riêng" },
    { num: "55", name: "Su Su" },
    { num: "56", name: "Sóng Biển" },
    { num: "57", name: "Sạc Pin" },
    { num: "58", name: "Su Hào" },
    { num: "59", name: "Sàn Gỗ" },
    { num: "60", name: "Bọ Cạp" },
    { num: "61", name: "Bong Tai" },
    { num: "62", name: "Bắp Ngô" },
    { num: "63", name: "Bóng Ma" },
    { num: "64", name: "Bóng Rổ" },
    { num: "65", name: "Bác Sĩ" },
    { num: "66", name: "Bong Bóng" },
    { num: "67", name: "Bàn Phím" },
    { num: "68", name: "Bác Hồ" },
    { num: "69", name: "Bình Ga" },
    { num: "70", name: "Phi Công" },
    { num: "71", name: "Phù Thủy" },
    { num: "72", name: "Phá Nhà" },
    { num: "73", name: "Phát Minh" },
    { num: "74", name: "Phấn Rôm" },
    { num: "75", name: "Pháp Sư" },
    { num: "76", name: "Phong Bì" },
    { num: "77", name: "Phật Pháp" },
    { num: "78", name: "Phóng Hỏa" },
    { num: "79", name: "Phân Gà" },
    { num: "80", name: "Hươu Cao Cổ" },
    { num: "81", name: "Hành Tây" },
    { num: "82", name: "Hạt Nêm" },
    { num: "83", name: "Học Máu" },
    { num: "84", name: "Hàng Rào" },
    { num: "85", name: "Hố Sâu" },
    { num: "86", name: "Hoàng Bào" },
    { num: "87", name: "Hoa Phượng" },
    { num: "88", name: "Hôi Hám" },
    { num: "89", name: "Hạt Gạo" },
    { num: "90", name: "Gà Chọi" },
    { num: "91", name: "Găng Tay" },
    { num: "92", name: "Gậy Như Ý" },
    { num: "93", name: "Giun Móc" },
    { num: "94", name: "Giấy Ráp" },
    { num: "95", name: "Ghế Sofa" },
    { num: "96", name: "Gió Bão" },
    { num: "97", name: "Giải Phóng" },
    { num: "98", name: "Ghi Hình" },
    { num: "99", name: "Ga Giường" }
];

// Quick Object Map for 00-99
const IMG_MAP = {};
DATASET.forEach(item => {
    IMG_MAP[item.num] = item.name;
});

// Binary 3-Bit Mapping
const BIT_MAP = {
    "000": "C", "001": "T", "011": "N", "111": "M",
    "110": "R", "100": "S", "010": "B", "101": "P"
};
const BIT_KEYS = Object.keys(BIT_MAP);

const NUM_MAP = {
    "C": "0", "T": "1", "N": "2", "M": "3", "R": "4", "S": "5", "B": "6", "P": "7"
};

// Fisher-Yates Shuffle Utility
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


// ==========================================================================
// 2. GLOBAL STATE
// ==========================================================================
let currentView = "home"; // 'home', 'mode-0099', 'mode-binary'

// State for 00-99 Mode
let currentCardIndex = 0;
let isAnswerShown0099 = false;
let cardHistory = [];
let historyIndex = -1;
let cardsReviewedCount = 0;
let cycleCount0099 = 0;
let pool0099 = [];
let activeRange = "all";

// State for Binary Mode
let binaryMode = "3bit";
let isBinaryAnswerShown = false;
let currentBinaryQuestion = null;
let poolBinary = [];
let binaryReviewedCount = 0;
let binaryCycleCount = 0;


// ==========================================================================
// 3. DOM ELEMENTS
// ==========================================================================

// Header & Navigation
const brandHomeBtn = document.getElementById("brand-home-btn");
const navBtnHome = document.getElementById("nav-btn-home");
const btnBgcolor = document.getElementById("btn-bgcolor");
const btnTheme = document.getElementById("btn-theme");
const btnOpenModal = document.getElementById("btn-open-modal");
const btnOpenModalText = document.getElementById("btn-open-modal-text");
const headerTagline = document.getElementById("header-tagline");

// Views
const viewHome = document.getElementById("view-home");
const view0099 = document.getElementById("view-0099");
const viewBinary = document.getElementById("view-binary");
const modeCards = document.querySelectorAll(".mode-card[data-mode-target]");
const btnBackHomeList = document.querySelectorAll(".btn-back-home");

// Elements for 00-99
const displayArea = document.getElementById("display-area");
const frontNumberEl = document.getElementById("front-number");
const backKeywordEl = document.getElementById("back-keyword");
const answerContainer = document.getElementById("answer-container");
const btnFlip = document.getElementById("btn-flip");
const btnFlipText = document.getElementById("btn-flip-text");
const rangeSelect = document.getElementById("range-select");
const statCount = document.getElementById("stat-count");
const statCycle = document.getElementById("stat-cycle");
const historySequenceEl = document.getElementById("history-sequence");

// Elements for 00-99 Modal
const modalOverlay = document.getElementById("modal-overlay");
const btnCloseModal = document.getElementById("btn-close-modal");
const btnModalCloseFooter = document.getElementById("btn-modal-close-footer");
const modalSearch = document.getElementById("modal-search");
const btnClearSearch = document.getElementById("btn-clear-search");
const datasetGrid = document.getElementById("dataset-grid");
const noResults = document.getElementById("no-results");
const modalCountIndicator = document.getElementById("modal-count-indicator");
const modalFilterTabs = document.querySelectorAll(".modal-filter-tab");

// Elements for Binary Mode
const binaryTabs = document.querySelectorAll(".binary-tab");
const binaryWorkspace = document.getElementById("binary-workspace");
const binaryQuestionEl = document.getElementById("binary-question");
const binaryAnswerArea = document.getElementById("binary-answer-area");
const binaryAnswerMain = document.getElementById("binary-answer-main");
const binaryAnswerFormula = document.getElementById("binary-answer-formula");
const btnBinaryShowAnswer = document.getElementById("btn-binary-show-answer");
const btnBinaryShowAnswerText = document.getElementById("btn-binary-show-answer-text");
const btnBinaryGuide = document.getElementById("btn-binary-guide");
const binaryStatCount = document.getElementById("binary-stat-count");
const binaryStatCycle = document.getElementById("binary-stat-cycle");

// Elements for Binary Modal
const binaryModalOverlay = document.getElementById("binary-modal-overlay");
const btnCloseBinaryModal = document.getElementById("btn-close-binary-modal");
const btnBinaryModalCloseFooter = document.getElementById("btn-binary-modal-close-footer");
const binaryLookupGrid = document.getElementById("binary-lookup-grid");


// ==========================================================================
// 4. VIEW ROUTING & NAVIGATION
// ==========================================================================

function switchView(targetView) {
    currentView = targetView;

    // Hide all views
    viewHome.classList.add("hidden");
    view0099.classList.add("hidden");
    viewBinary.classList.add("hidden");

    // Reset visibility of home nav button
    if (targetView === "home") {
        viewHome.classList.remove("hidden");
        navBtnHome.classList.add("hidden");
        headerTagline.textContent = "Nền Tảng Luyện Trí Nhớ";
        btnOpenModalText.textContent = "Xem Bảng Mã Hoá";
    } else if (targetView === "mode-0099") {
        view0099.classList.remove("hidden");
        navBtnHome.classList.remove("hidden");
        headerTagline.textContent = "Mã Hoá 00 - 99";
        btnOpenModalText.textContent = "Xem Bảng 00-99";
    } else if (targetView === "mode-binary") {
        viewBinary.classList.remove("hidden");
        navBtnHome.classList.remove("hidden");
        headerTagline.textContent = "Luyện Nhị Phân";
        btnOpenModalText.textContent = "Tra Cứu 3-Bit";
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}


// ==========================================================================
// 5. 00-99 MODE CORE LOGIC
// ==========================================================================

function getActiveRangeIndices() {
    if (activeRange === "all") {
        return Array.from({ length: 100 }, (_, i) => i);
    }
    const [start, end] = activeRange.split("-").map(Number);
    const indices = [];
    for (let i = start; i <= end; i++) {
        indices.push(i);
    }
    return indices;
}

function refill0099Pool(isNextCycle = false) {
    const indices = getActiveRangeIndices();
    pool0099 = shuffleArray(indices);
    if (isNextCycle) {
        cycleCount0099++;
    }
}

function getRandomCardIndex() {
    if (pool0099.length === 0) {
        refill0099Pool(true);
    }
    return pool0099.pop();
}

function renderCurrentCard() {
    const item = DATASET[currentCardIndex];
    if (!item) return;

    frontNumberEl.textContent = item.num;
    backKeywordEl.textContent = item.name;

    if (isAnswerShown0099) {
        answerContainer.classList.remove("hidden");
        btnFlipText.textContent = "Ẩn Đáp Án";
    } else {
        answerContainer.classList.add("hidden");
        btnFlipText.textContent = "Hiện Đáp Án";
    }

    statCount.textContent = cardsReviewedCount;
    if (statCycle) statCycle.textContent = cycleCount0099;
    renderHistorySequence();
}

function renderHistorySequence() {
    if (!historySequenceEl) return;
    historySequenceEl.innerHTML = "";

    const displayHistory = cardHistory.length > 100 ? cardHistory.slice(-100) : cardHistory;
    const offset = cardHistory.length > 100 ? cardHistory.length - 100 : 0;

    displayHistory.forEach((cardIdx, idx) => {
        const i = idx + offset;
        const item = DATASET[cardIdx];
        if (!item) return;

        const span = document.createElement("span");
        span.className = "history-item";
        if (i === historyIndex) {
            span.classList.add("active");
        }
        span.textContent = item.num;
        span.title = item.name;
        span.addEventListener("click", (e) => {
            e.stopPropagation();
            historyIndex = i;
            currentCardIndex = cardIdx;
            isAnswerShown0099 = false;
            renderCurrentCard();
        });
        historySequenceEl.appendChild(span);
    });

    const activeEl = historySequenceEl.querySelector(".history-item.active");
    if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
}

function toggleAnswer0099() {
    isAnswerShown0099 = !isAnswerShown0099;
    renderCurrentCard();
}

function loadNextRandomCard() {
    const nextIdx = getRandomCardIndex();

    if (historyIndex === cardHistory.length - 1) {
        cardHistory.push(nextIdx);
        historyIndex++;
    } else {
        cardHistory = cardHistory.slice(0, historyIndex + 1);
        cardHistory.push(nextIdx);
        historyIndex++;
    }

    if (cardHistory.length > 100) {
        cardHistory = cardHistory.slice(-100);
        historyIndex = cardHistory.length - 1;
    }

    currentCardIndex = nextIdx;
    cardsReviewedCount++;

    isAnswerShown0099 = false;
    renderCurrentCard();
}

function loadPrevCard() {
    if (historyIndex > 0) {
        historyIndex--;
        currentCardIndex = cardHistory[historyIndex];
    } else {
        const indices = getActiveRangeIndices();
        let curPos = indices.indexOf(currentCardIndex);
        if (curPos === -1) curPos = 0;
        let prevPos = (curPos - 1 + indices.length) % indices.length;
        currentCardIndex = indices[prevPos];
    }

    isAnswerShown0099 = false;
    renderCurrentCard();
}

function selectSpecificCard(index) {
    currentCardIndex = index;
    cardHistory.push(index);
    historyIndex = cardHistory.length - 1;
    cardsReviewedCount++;

    isAnswerShown0099 = false;
    renderCurrentCard();
    closeModal();
    switchView("mode-0099");
}


// ==========================================================================
// 6. BINARY TRAINING CORE LOGIC
// ==========================================================================

function refillBinaryPool(isNextCycle = false) {
    if (binaryMode === "3bit") {
        poolBinary = shuffleArray(BIT_KEYS.map(bits => ({ type: "3bit", bits })));
    } else if (binaryMode === "6bit") {
        const pairs = [];
        BIT_KEYS.forEach(b1 => {
            BIT_KEYS.forEach(b2 => {
                pairs.push({ type: "6bit", bit1: b1, bit2: b2 });
            });
        });
        poolBinary = shuffleArray(pairs);
    } else if (binaryMode === "modeC") {
        const pairs = [];
        BIT_KEYS.forEach(b1 => {
            BIT_KEYS.forEach(b2 => {
                const l1 = BIT_MAP[b1];
                const l2 = BIT_MAP[b2];
                const d1 = NUM_MAP[l1];
                const d2 = NUM_MAP[l2];
                const numStr = d1 + d2;
                pairs.push({
                    type: "modeC",
                    numStr: numStr,
                    bit1: b1,
                    bit2: b2,
                    letter1: l1,
                    letter2: l2
                });
            });
        });
        poolBinary = shuffleArray(pairs);
    } else if (binaryMode === "modeD") {
        poolBinary = [{ type: "modeD" }];
    }

    if (isNextCycle) {
        binaryCycleCount++;
    }
}

function generateBinaryQuestion() {
    isBinaryAnswerShown = false;
    binaryAnswerArea.classList.add("hidden");
    btnBinaryShowAnswerText.textContent = "Hiện Đáp Án";

    if (poolBinary.length === 0) {
        refillBinaryPool(true);
    }

    currentBinaryQuestion = poolBinary.pop();
    binaryReviewedCount++;

    if (currentBinaryQuestion.type === "3bit") {
        binaryQuestionEl.innerHTML = currentBinaryQuestion.bits;
    } else if (currentBinaryQuestion.type === "6bit") {
        binaryQuestionEl.innerHTML = `<span>${currentBinaryQuestion.bit1}</span><span>${currentBinaryQuestion.bit2}</span>`;
    } else if (currentBinaryQuestion.type === "modeC") {
        binaryQuestionEl.innerHTML = currentBinaryQuestion.numStr;
    } else if (currentBinaryQuestion.type === "modeD") {
        binaryQuestionEl.innerHTML = "Chế độ D";
    }

    if (binaryStatCount) binaryStatCount.textContent = binaryReviewedCount;
    if (binaryStatCycle) binaryStatCycle.textContent = binaryCycleCount;
}

function toggleShowBinaryAnswer() {
    isBinaryAnswerShown = !isBinaryAnswerShown;
    if (isBinaryAnswerShown) {
        binaryAnswerArea.classList.remove("hidden");
        btnBinaryShowAnswerText.textContent = "Ẩn Đáp Án";

        if (currentBinaryQuestion.type === "3bit") {
            const letter = BIT_MAP[currentBinaryQuestion.bits];
            binaryAnswerMain.innerHTML = letter;
            binaryAnswerFormula.innerHTML = `${currentBinaryQuestion.bits} &rarr; ${letter}`;
        } else if (currentBinaryQuestion.type === "6bit") {
            const letter1 = BIT_MAP[currentBinaryQuestion.bit1];
            const letter2 = BIT_MAP[currentBinaryQuestion.bit2];
            const combined = letter1 + letter2;
            const digit1 = NUM_MAP[letter1];
            const digit2 = NUM_MAP[letter2];
            const numString = digit1 + digit2;
            const image = IMG_MAP[numString] || "???";

            binaryAnswerMain.innerHTML = `${combined} - ${image}`;
            binaryAnswerFormula.innerHTML = `${currentBinaryQuestion.bit1} (${letter1}) + ${currentBinaryQuestion.bit2} (${letter2}) &rarr; ${combined} &rarr; ${image}`;
        } else if (currentBinaryQuestion.type === "modeC") {
            const { bit1, bit2, letter1, letter2, numStr } = currentBinaryQuestion;
            const combinedLetters = letter1 + letter2;
            const imageKeyword = IMG_MAP[numStr] || "???";

            binaryAnswerMain.innerHTML = `<span>${bit1}</span> <span>${bit2}</span> (${combinedLetters} - ${imageKeyword})`;
            binaryAnswerFormula.innerHTML = `${numStr} (${imageKeyword}) &rarr; ${letter1} (${bit1}) + ${letter2} (${bit2}) &rarr; ${bit1} ${bit2}`;
        } else {
            binaryAnswerMain.innerHTML = "Chế độ D";
            binaryAnswerFormula.innerHTML = "Đang nghiên cứu và thiết kế";
        }
    } else {
        binaryAnswerArea.classList.add("hidden");
        btnBinaryShowAnswerText.textContent = "Hiện Đáp Án";
    }
}

function setBinaryMode(mode) {
    binaryMode = mode;
    binaryCycleCount = 0;
    binaryReviewedCount = 0;
    binaryTabs.forEach(tab => {
        tab.classList.toggle("active", tab.dataset.binaryMode === mode);
    });
    refillBinaryPool(false);
    generateBinaryQuestion();
}


// ==========================================================================
// 7. MODALS & SEARCH
// ==========================================================================

// 00-99 Modal
function populateModalGrid(filterText = "", rangeFilter = "all") {
    datasetGrid.innerHTML = "";
    const query = filterText.toLowerCase().trim();
    let count = 0;

    DATASET.forEach((item, index) => {
        let inRange = true;
        if (rangeFilter !== "all") {
            const [start, end] = rangeFilter.split("-").map(Number);
            const numVal = parseInt(item.num, 10);
            if (numVal < start || numVal > end) {
                inRange = false;
            }
        }

        let matchesQuery = true;
        if (query) {
            matchesQuery = item.num.includes(query) || item.name.toLowerCase().includes(query);
        }

        if (inRange && matchesQuery) {
            count++;
            const gridItem = document.createElement("div");
            gridItem.className = "grid-item";
            gridItem.setAttribute("role", "button");
            gridItem.setAttribute("tabindex", "0");
            gridItem.innerHTML = `
                <span class="grid-item-number">${item.num}</span>
                <span class="grid-item-keyword">${item.name}</span>
            `;
            gridItem.addEventListener("click", () => selectSpecificCard(index));
            gridItem.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    selectSpecificCard(index);
                }
            });
            datasetGrid.appendChild(gridItem);
        }
    });

    modalCountIndicator.textContent = `Hiển thị ${count}/100 cặp mã hóa`;
    if (count === 0) {
        noResults.classList.remove("hidden");
    } else {
        noResults.classList.add("hidden");
    }
}

function openModal() {
    if (currentView === "mode-binary") {
        openBinaryModal();
        return;
    }
    modalOverlay.classList.add("active");
    modalOverlay.setAttribute("aria-hidden", "false");
    modalSearch.focus();
    populateModalGrid(modalSearch.value, getActiveModalFilterTab());
}

function closeModal() {
    modalOverlay.classList.remove("active");
    modalOverlay.setAttribute("aria-hidden", "true");
}

function getActiveModalFilterTab() {
    const activeTab = document.querySelector(".modal-filter-tab.active");
    return activeTab ? activeTab.dataset.filter : "all";
}

// Binary 3-Bit Modal
function initBinaryModalGrid() {
    if (!binaryLookupGrid) return;
    binaryLookupGrid.innerHTML = "";
    BIT_KEYS.forEach(bits => {
        const div = document.createElement("div");
        div.className = "lookup-item";
        div.innerHTML = `<span>${bits}</span> <strong>${BIT_MAP[bits]}</strong>`;
        binaryLookupGrid.appendChild(div);
    });
}

function openBinaryModal() {
    binaryModalOverlay.classList.add("active");
    binaryModalOverlay.setAttribute("aria-hidden", "false");
}

function closeBinaryModal() {
    binaryModalOverlay.classList.remove("active");
    binaryModalOverlay.setAttribute("aria-hidden", "true");
}


// ==========================================================================
// 8. THEME & PREFERENCES
// ==========================================================================

const BG_MODES = ["default", "black", "dark-navy", "dark-slate"];
let currentBgIndex = 0;

function updateMetaThemeColor() {
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) return;
    setTimeout(() => {
        const computedBg = getComputedStyle(document.body).backgroundColor || '#0b0f19';
        metaTheme.setAttribute('content', computedBg);
    }, 50);
}

function toggleBgColor() {
    currentBgIndex = (currentBgIndex + 1) % BG_MODES.length;
    const newBg = BG_MODES[currentBgIndex];
    document.documentElement.setAttribute("data-bg", newBg);
    localStorage.setItem("super_memory_bgcolor", newBg);
    updateMetaThemeColor();
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    btnTheme.querySelector(".theme-icon").textContent = newTheme === "dark" ? "🌙" : "☀️";
    localStorage.setItem("super_memory_theme", newTheme);
    updateMetaThemeColor();
}

function loadSavedPreferences() {
    const savedTheme = localStorage.getItem("super_memory_theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
        btnTheme.querySelector(".theme-icon").textContent = savedTheme === "dark" ? "🌙" : "☀️";
    }

    const savedBg = localStorage.getItem("super_memory_bgcolor");
    if (savedBg) {
        document.documentElement.setAttribute("data-bg", savedBg);
        currentBgIndex = BG_MODES.indexOf(savedBg);
        if (currentBgIndex === -1) currentBgIndex = 0;
    }
    updateMetaThemeColor();
}


// ==========================================================================
// 9. EVENT LISTENERS
// ==========================================================================

function initEventListeners() {
    // Navigation Triggers
    brandHomeBtn.addEventListener("click", () => switchView("home"));
    brandHomeBtn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            switchView("home");
        }
    });

    navBtnHome.addEventListener("click", () => switchView("home"));

    btnBackHomeList.forEach(btn => {
        btn.addEventListener("click", () => switchView("home"));
    });

    modeCards.forEach(card => {
        card.addEventListener("click", () => {
            const target = card.dataset.modeTarget;
            if (target) switchView(target);
        });
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                const target = card.dataset.modeTarget;
                if (target) switchView(target);
            }
        });
    });

    // 00-99 Interaction
    displayArea.addEventListener("click", loadNextRandomCard);
    displayArea.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            loadNextRandomCard();
        }
    });

    btnFlip.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleAnswer0099();
    });

    rangeSelect.addEventListener("change", (e) => {
        activeRange = e.target.value;
        cycleCount0099 = 0;
        refill0099Pool(false);
        loadNextRandomCard();
    });

    // Binary Interaction
    binaryWorkspace.addEventListener("click", generateBinaryQuestion);
    binaryWorkspace.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            generateBinaryQuestion();
        }
    });

    btnBinaryShowAnswer.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleShowBinaryAnswer();
    });

    binaryTabs.forEach(tab => {
        tab.addEventListener("click", () => setBinaryMode(tab.dataset.binaryMode));
    });

    btnBinaryGuide.addEventListener("click", openBinaryModal);

    // Theme & Bg Controls
    btnTheme.addEventListener("click", toggleTheme);
    if (btnBgcolor) btnBgcolor.addEventListener("click", toggleBgColor);

    // Modal Triggers
    btnOpenModal.addEventListener("click", openModal);
    btnCloseModal.addEventListener("click", closeModal);
    btnModalCloseFooter.addEventListener("click", closeModal);

    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    btnCloseBinaryModal.addEventListener("click", closeBinaryModal);
    btnBinaryModalCloseFooter.addEventListener("click", closeBinaryModal);
    binaryModalOverlay.addEventListener("click", (e) => {
        if (e.target === binaryModalOverlay) closeBinaryModal();
    });

    // Modal Search
    modalSearch.addEventListener("input", (e) => {
        const val = e.target.value;
        btnClearSearch.classList.toggle("show", val.length > 0);
        populateModalGrid(val, getActiveModalFilterTab());
    });

    btnClearSearch.addEventListener("click", () => {
        modalSearch.value = "";
        btnClearSearch.classList.remove("show");
        populateModalGrid("", getActiveModalFilterTab());
        modalSearch.focus();
    });

    modalFilterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            modalFilterTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            populateModalGrid(modalSearch.value, tab.dataset.filter);
        });
    });

    // Global Keyboard Shortcuts
    document.addEventListener("keydown", (e) => {
        // Modal escape handling
        if (modalOverlay.classList.contains("active")) {
            if (e.key === "Escape") closeModal();
            return;
        }
        if (binaryModalOverlay.classList.contains("active")) {
            if (e.key === "Escape") closeBinaryModal();
            return;
        }

        // Ignore shortcuts if focusing an input/select
        if (["INPUT", "SELECT", "TEXTAREA"].includes(document.activeElement.tagName)) {
            return;
        }

        if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            if (currentView === "mode-0099") {
                loadNextRandomCard();
            } else if (currentView === "mode-binary") {
                generateBinaryQuestion();
            }
        } else if (e.key === "ArrowRight") {
            e.preventDefault();
            if (currentView === "mode-0099") {
                loadNextRandomCard();
            } else if (currentView === "mode-binary") {
                generateBinaryQuestion();
            }
        } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            if (currentView === "mode-0099") {
                loadPrevCard();
            }
        }
    });
}


// ==========================================================================
// 10. APP INITIALIZATION
// ==========================================================================

function initApp() {
    loadSavedPreferences();
    initEventListeners();
    initBinaryModalGrid();

    // Init 00-99 state: non-repeating shuffle pool
    refill0099Pool(false);
    currentCardIndex = getRandomCardIndex();
    cardHistory.push(currentCardIndex);
    historyIndex = 0;
    cardsReviewedCount = 1;
    renderCurrentCard();
    populateModalGrid();

    // Init Binary state: non-repeating shuffle pool
    refillBinaryPool(false);
    generateBinaryQuestion();

    // Default view: Home Dashboard
    switchView("home");
}

document.addEventListener("DOMContentLoaded", initApp);
