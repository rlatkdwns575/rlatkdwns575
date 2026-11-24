const projectData = {
    "jaso-supporter": {
        category: "AI Agent · Full Stack",
        logo: "assets/logo-jaso.svg",
        title: "JasoSupporter — 자소서·커리어 AI 코치",
        summary:
            "취업 준비생이 경험·스펙을 사실 단위로 구조화하고, 이를 마스터 자소서·포트폴리오·면접·지원 기록으로 재사용하는 Flutter + FastAPI 워크스페이스입니다. AI 생성은 로컬에서 QLoRA로 파인튜닝한 Ollama 모델 'jaso-coach'를 사용합니다.",
        stacks: ["Flutter", "Dart", "Riverpod", "FastAPI", "Python", "Ollama", "QLoRA", "Qwen3-1.7B", "PostgreSQL", "SQLite", "JWT", "SSE"],
        validation: {
            methods: [
                "별도 레포(jasosupporter-ml)에서 Gold 데이터를 합성해 Qwen3-1.7B를 QLoRA(SFT)로 파인튜닝",
                "사실성(factuality) · 질문 적합성(question relevance) · 구조(structure) 3개 축으로 생성 품질을 평가",
                "RAG는 사용자가 선택한 경험 카드를 직접 주입하고, 없을 때만 최근 top-k 카드를 fallback으로 사용",
                "main 브랜치 push/PR 시 GitHub Actions로 Flutter analyze·test와 backend pytest를 자동 실행"
            ],
            metrics: {
                items: [
                    { label: "사실성 (Factuality)", value: 90 },
                    { label: "질문 적합성 (Relevance)", value: 88 },
                    { label: "구조 (Structure)", value: 85 }
                ],
                note: "※ 위 점수는 그래프 형식 예시입니다 — 실제 평가 수치로 교체해 주세요."
            }
        },
        structure: [
            "앱: Flutter(Riverpod)에서 경험 카드·마스터 자소서·면접 답변을 관리하고 JWT 세션 유지",
            "서버: FastAPI가 인증·커리어 데이터(CRUD)·채팅방을 담당하고 SSE로 AI 응답 스트리밍",
            "AI: FastAPI → Ollama 'jaso-coach' 호출 (외부 API 불필요, 완전 로컬 추론)",
            "학습: Gold 데이터 합성 → QLoRA(SFT) → GGUF 변환 → ollama create"
        ],
        details: [
            "'Experience → MasterEssay → PortfolioProject → InterviewAnswer → ApplicationRecord'로 이어지는 제품 흐름을 설계했습니다.",
            "AI가 사용자의 사실만 사용하도록 제약해 허위 수치·성과·역할을 만들지 않게 했습니다.",
            "Qwen3-1.7B 기반 QLoRA 파인튜닝과 Ollama 서빙으로 완전한 로컬 추론 파이프라인을 구성했습니다."
        ],
        links: [
            { label: "앱 레포 (GitHub)", url: "https://github.com/rlatkdwns575/JASOSUPPORTER" },
            { label: "모델 학습 레포 (ML)", url: "https://github.com/rlatkdwns575/jasosupporter-ml" }
        ]
    },
    "currency-decision": {
        category: "Data Science",
        logo: "assets/logo-currency.svg",
        title: "USD/KRW 장기 투자 의사결정 모델",
        summary:
            "원/달러 환율과 거시경제·금융시장 데이터를 활용해 장기 투자 관점에서 달러 매수 여부를 판단하는 Transformer 기반 모델입니다. '환율이 오를까'가 아니라 '지금 매수하면 6개월 뒤 연환산 7% 이상 수익이 기대되는가'를 분류합니다.",
        stacks: ["Python", "Transformer", "Pandas", "NumPy", "FRED API", "ECOS API", "Streamlit"],
        validation: {
            table: {
                head: ["검증 설계", "내용"],
                rows: [
                    ["문제 정의", "장기 보유 전제의 매수(1)/비매수(0) 이진 분류"],
                    ["타깃 라벨", "126 거래일(약 6개월) 뒤 수익률을 연환산해 7% 이상이면 1"],
                    ["데이터 소스", "FRED(미국 금리·CPI·실업률 등) + ECOS(한국 거시지표) + USD/KRW"],
                    ["검증 방식", "시계열 순서를 지킨 train/test 분할로 미래 데이터 누수 차단"]
                ]
            },
            metrics: {
                items: [
                    { label: "Accuracy", value: 72 },
                    { label: "Precision", value: 70 },
                    { label: "Recall", value: 68 },
                    { label: "F1-score", value: 69 }
                ],
                note: "※ 위 점수는 그래프 형식 예시입니다 — 실제 평가 수치로 교체해 주세요."
            }
        },
        structure: [
            "데이터 수집: FRED·ECOS·USD/KRW 환율 데이터 통합",
            "전처리: 날짜 정렬, 수치형 변환, forward/back fill 결측치 처리, 파생 feature 생성",
            "타깃 생성: 126 거래일 뒤 연환산 수익률 7% 기준 라벨링",
            "모델링·시각화: 시계열 입력 기반 이진 분류 모델 학습 후 Streamlit으로 결과 시각화"
        ],
        details: [
            "단순 가격 예측이 아니라 실제 투자 행동으로 연결 가능한 분류 문제로 재정의했습니다.",
            "최소 6개월 이상 보유를 전제로 한 장기 투자 의사결정 기준을 수치로 명확히 정의했습니다.",
            "FRED·ECOS 등 서로 다른 소스의 거시·금융 데이터를 하나의 시계열로 통합했습니다."
        ],
        links: [
            { label: "GitHub 보기", url: "https://github.com/rlatkdwns575/Currency_Decision_Maker" }
        ]
    },
    "lg-hair-refresher": {
        category: "AI Service · Mobile",
        logo: "assets/logo-hair.svg",
        image: "PuriHair_home.jpg",
        imageCaption: "LG Hair Refresher 홈 화면",
        title: "LG Hair Refresher — 모발·두피 케어 앱",
        summary:
            "헤어 리프레셔 디바이스와 연동해 모발/두피 상태를 측정하고, 모발 냄새·먼지·오염도·날씨·일정 데이터를 분석해 개인화된 리프레시 모드를 추천하며, 실행 결과와 사용 기록을 관리하는 Flutter 모바일 앱입니다.",
        stacks: ["Flutter", "Dart", "go_router", "Supabase", "Python", "Gemini API", "RAG"],
        validation: {
            badge: "LG DX School Project · 우수상 (Excellence Award)",
            table: {
                head: ["분석·설계 항목", "내용"],
                rows: [
                    ["입력 데이터", "모발 냄새, 먼지, 오염도, 날씨, 일정 데이터"],
                    ["추천 로직", "상태·환경 정보 기반 개인화 리프레시 모드 추천"],
                    ["환경 예측", "외부 환경·캘린더 정보를 결합한 오염도 예측"],
                    ["설계 범위", "앱 아키텍처, 데이터베이스 구조, 핵심 서비스 플로우"]
                ]
            }
        },
        structure: [
            "핵심 흐름: 측정 → 상태 분석 → 모드 추천 → 리프레시 실행 → 결과 확인 → 사용 기록 관리",
            "feature 기반 구조(auth·home·measure·refresh·history·settings)로 화면과 데이터 계층을 분리",
            "데이터: Supabase를 백엔드로 사용하고 API 접근은 feature의 data/api 또는 core/services로 집중",
            "디자인: Figma 디자인 토큰(색상·폰트·간격·반경)을 theme 레이어에 먼저 반영"
        ],
        details: [
            "LG DX School 프로젝트로 진행해 우수상을 수상했습니다.",
            "헤어 리프레셔 디바이스와 연동되는 Flutter 모바일 애플리케이션을 개발했습니다.",
            "앱 아키텍처·데이터베이스 구조·핵심 서비스 플로우를 직접 설계했습니다."
        ],
        links: [
            { label: "GitHub 보기", url: "https://github.com/rlatkdwns575/LG_HAIR_REFRESHER" }
        ]
    }
};

const navLinks = document.querySelectorAll(".nav-links a, .hero-actions a[href^='#']");
const projectCards = document.querySelectorAll(".project-card");
const modal = document.querySelector("#project-modal");
const modalCloseBtn = document.querySelector("#modal-close-btn");
const modalCategory = document.querySelector("#modal-category");
const modalTitle = document.querySelector("#modal-title");
const modalSummary = document.querySelector("#modal-summary");
const modalLogo = document.querySelector("#modal-logo");
const modalImage = document.querySelector("#modal-image");
const modalValidation = document.querySelector("#modal-validation");
const modalStacks = document.querySelector("#modal-stacks");
const modalStructure = document.querySelector("#modal-structure");
const modalDetails = document.querySelector("#modal-details");
const modalLinks = document.querySelector("#modal-links");
const currentYear = document.querySelector("#current-year");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");
        if (!targetId || !targetId.startsWith("#")) return;
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            event.preventDefault();
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

function fillList(container, items) {
    container.innerHTML = "";
    items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        container.appendChild(li);
    });
}

function fillBadges(container, items) {
    container.innerHTML = "";
    items.forEach((item) => {
        const badge = document.createElement("span");
        badge.textContent = item;
        container.appendChild(badge);
    });
}

function fillLinks(container, links) {
    container.innerHTML = "";
    (links || []).forEach((link, index) => {
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        anchor.className = index === 0 ? "btn btn-solid" : "btn btn-ghost";
        anchor.textContent = link.label + " ↗";
        container.appendChild(anchor);
    });
}

function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}

function renderValidation(container, validation) {
    container.innerHTML = "";
    if (!validation) {
        container.style.display = "none";
        return;
    }
    container.style.display = "";

    container.appendChild(el("h4", null, "검증 · 성과"));

    if (validation.badge) {
        container.appendChild(el("span", "result-badge", validation.badge));
    }

    if (validation.metrics && validation.metrics.items) {
        const chart = el("div", "metric-chart");
        validation.metrics.items.forEach((m) => {
            const row = el("div", "metric-row");
            const top = el("div", "metric-top");
            top.appendChild(el("span", "metric-label", m.label));
            top.appendChild(el("span", "metric-value mono", m.value + (m.suffix || "%")));
            const track = el("div", "metric-track");
            const fill = el("div", "metric-fill");
            fill.style.width = Math.max(0, Math.min(100, m.value)) + "%";
            track.appendChild(fill);
            row.appendChild(top);
            row.appendChild(track);
            chart.appendChild(row);
        });
        container.appendChild(chart);
        if (validation.metrics.note) {
            container.appendChild(el("p", "metric-note", validation.metrics.note));
        }
    }

    if (validation.table && validation.table.rows) {
        const table = el("table", "data-table");
        if (validation.table.head) {
            const thead = document.createElement("thead");
            const tr = document.createElement("tr");
            validation.table.head.forEach((h) => tr.appendChild(el("th", null, h)));
            thead.appendChild(tr);
            table.appendChild(thead);
        }
        const tbody = document.createElement("tbody");
        validation.table.rows.forEach((cells) => {
            const tr = document.createElement("tr");
            cells.forEach((c) => tr.appendChild(el("td", null, c)));
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        container.appendChild(table);
    }

    if (validation.methods) {
        const list = el("ul", "modal-list");
        list.style.marginTop = "16px";
        validation.methods.forEach((m) => list.appendChild(el("li", null, m)));
        container.appendChild(list);
    }
}

function openModal(projectKey) {
    const project = projectData[projectKey];
    if (!project) return;

    if (project.logo) {
        modalLogo.src = project.logo;
        modalLogo.style.display = "";
    } else {
        modalLogo.removeAttribute("src");
        modalLogo.style.display = "none";
    }

    modalCategory.textContent = project.category;
    modalTitle.textContent = project.title;
    modalSummary.textContent = project.summary;

    modalImage.innerHTML = "";
    if (project.image) {
        const img = document.createElement("img");
        img.src = project.image;
        img.alt = project.imageCaption || project.title;
        img.loading = "lazy";
        modalImage.appendChild(img);
        modalImage.style.display = "";
    } else {
        modalImage.style.display = "none";
    }

    renderValidation(modalValidation, project.validation);
    fillBadges(modalStacks, project.stacks);
    fillList(modalStructure, project.structure);
    fillList(modalDetails, project.details);
    fillLinks(modalLinks, project.links);

    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modal.querySelector(".modal-content").scrollTop = 0;
}

function closeModal() {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

projectCards.forEach((card) => {
    card.addEventListener("click", () => {
        openModal(card.dataset.project);
    });

    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openModal(card.dataset.project);
        }
    });
});

modal.addEventListener("click", (event) => {
    if (event.target.dataset.close === "true") {
        closeModal();
    }
});

modalCloseBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
