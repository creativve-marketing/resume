// --- МАТРИЦА СЛУЖЕБНЫХ ДАННЫХ ДЛЯ ЭКРАНА КОМПЕТЕНЦИЙ ---
const matrixData = [
    {
        req: "Опыт от 1 года в продуктовом маркетинге, продакт-менеджменте или развитии продуктов.",
        resp: "9 лет глубокого практического опыта в маркетинге, интернет-маркетинге, контекстной и таргетированной рекламе.",
        tags: ["9 лет опыта", "Маркетинг", "Tаргет & Контекст", "Лидогенерация", "b2b", "b2c"]
    },
    {
        req: "Понимание того, как продукт развивается и выводится на рынок.",
        resp: "Есть чёткое продуктовое понимание процессов. Огромная прикладная насмотренность за счёт работы с 70+ различными коммерческими нишами в контекстной рекламе и тремя b2b-компаниями.",
        tags: ["Продуктовый цикл", "Go-to-Market", "70+ Ниш бизнеса", "Аналитика"]
    },
    {
        req: "Умение анализировать рынок, конкурентов и потребности клиентов.",
        resp: "Глубокий опыт анализа 70+ ниш.Понимание современных фреймворков JTBD, CJM и CustDev-интервью.",
        tags: ["JTBD", "CJM", "CustDev", "Маркетинговые исследования", "Python", "SQL", "Power Bi"]
    },
    {
        req: "Опыт построения маркетинговых воронок и продвижения продуктов.",
        resp: "Уверенно проектирую классические воронки продаж и и знаком с growth-маркетингом (В частности, с пиратской метрикой AAARRR).",
        tags: ["Воронки продаж", "Growth Marketing", "Метрики AAARRR", "Конверсии", "CPL", "LTV", "ROI"]
    },
    {
        req: "Понимание инструментов продаж и продвижения: каналы, воронки, аналитика.",
        resp: "Отличное практическое владение инструментарием продвижения: контекст, таргет, SEO, Email-маркетинг, ABM-маркетинг, WOW-маркетинг",
        tags: ["SEO", "Email маркетинг", "ABM", "Roistat", "WOW-marketing"]
    }
];

// --- ОБНОВЛЕННЫЙ МАССИВ МЕСТ РАБОТЫ: УФАНЕТ БЕЗ СПИСКА ---
const placeholderJobs = [
    { 
        name: "АО «Уфанет»", 
        role: "Продуктовый маркетолог", 
        period: "Октябрь 2026 — Будущее", 
        // Флаг isUfanet подскажет скрипту, что разметку списка выводить не нужно
        isUfanet: true,
        htmlContent: `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 24px; text-align: center; width: 100%; height: 100%; padding: 20px 0;">
                <p style="font-size: 1.4rem; font-weight: 700; color: #ffffff; letter-spacing: -0.01em;">Давайте начнем!</p>
                <img src="https://giphy.com" alt="Ура, Уфанет!" style="width: 100%; max-width: 420px; border-radius: 16px; border: 1px solid var(--border-color); box-shadow: 0 15px 35px rgba(52, 215, 75, 0.15);">
            </div>
        `
    },
    { 
        name: "«ALLIGATOR MEDIA»", 
        role: "Специалист по контекстной рекламе", 
        period: "2021 — 2022", 
        bullets: ["Планирование, запуск и ведение рекламных кампаний в Яндекс.Директ и Google Ads.", "Оптимизация рекламных кампаний по KPI", "Коммуникации с клиентом", "Формирование отчетности для клиентов"] 
    },
    { 
        name: "ООО «ИдеалСтройИнвест»", 
        role: "Интернет-маркетолог", 
        period: "2018 — 2021", 
        bullets: ["Настройка кампаний в Яндекс Директ и Google Ads", "Ежедневное ведение, аналитика и оптимизация рекламных кампаний - достижение заданного KPI, работа над CTR, снижение цены клика. Запуск А/Б тестов объявлений, креативов, сайта через Roistat", "Настройка и ведение таргетированной рекламы", "Выдвижение гипотез (по рекламе и сайту), поиск точек роста", "Запуск e-mail рассылок через unisender, sendpulse"] 
    },
    { 
        name: "«Pandaworks»", 
        role: "Ведущий специалист по контекстной рекламе", 
        period: "2017 — 2018", 
        bullets: ["Настройка Яндекс Директ и Google Adwords клиентам", "Настройка Яндекс Метрики, Google Analytics, подключение сквозной аналитики (Roistat)", "Ведение и оптимизация рекламных кампаний. Ежедневный мониторинг кампаний, чистка минус-фраз. Анализ конкурентов", "Разработка стратегии контекстной рекламы для клиентов. Составление рекомендаций по повышению конверсии сайта", "Развитие отдела контекстной рекламы"] 
    },
    { 
        name: "ООО «Стандарт»", 
        role: "Маркетолог", 
        period: "2014 — 2016", 
        bullets: ["Создание воронки продаж для каждой услуги компании", "Разработка веб-сайта компании", "Внедрение система учета и аналитики звонков и заявок", "Разработка маркетингового плана", "Поиск и внедрение новых каналов продвижения компании", "Анализ конкурентов, анализ и сегментирование целевой аудитории"] 
    },
    { 
        name: "«Акустические и Звукоизоляционные материалы»", 
        role: "Маркетолог", 
        period: "2012 — 2013", 
        bullets: ["Разработан маркетинговый план из 257 способов повышения прибыли", "Сняли серию видеороликов, в которых сотрудники компании отвечают на волнующие клиентов вопросы", "Разработан корпоративный сайт и интернет-магазин", "Проведено сегментирование клиентов. Для каждого сегмента создали индивидуальные коммерческие предложения", "Проведение мозговых штурмов с сотрудниками компании", "Регулярное наполнение сайтов продающими текстами и статьями"] 
    }
];

let currentSlide = 0;
let currentStep = 0;
let viewedSteps = new Set();
window.addEventListener('DOMContentLoaded', () => {
    
    // Элементы слайдера
    const slides = document.querySelectorAll('.slide-section');
    const menuButtons = document.querySelectorAll('.menu-btn');
    const startTrigger = document.getElementById('next-slide-trigger');

    // Элементы терминала компетенций (Экран 2)
    const tabsContainer = document.getElementById('steps-tabs-container');
    const reqDisplay = document.getElementById('step-requirement-display');
    const respDisplay = document.getElementById('step-response-display');
    const tagsDisplay = document.getElementById('step-tags-display');
    const barFill = document.getElementById('step-bar-fill');
    const footerStatus = document.getElementById('stepper-footer-status');
    const counterText = document.getElementById('step-counter-text');

    // Элементы экрана истории и модального окна (Экран 3)
    const ctaBtn = document.getElementById('cta-collaboration-btn');
    const contactsModal = document.getElementById('contacts-modal');
    const closeContactsBtn = document.getElementById('close-contacts-btn');

    // Элементы таймлайна опыта работы (Экран 4)
    const timelineContainer = document.getElementById('workplace-timeline-list');
    const jobPeriod = document.getElementById('workplace-detail-period');
    const jobName = document.getElementById('workplace-detail-name');
    const jobRole = document.getElementById('workplace-detail-role');
    const jobBullets = document.getElementById('workplace-detail-bullets');

    // --- ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ГЛАВНЫХ ЭКРАНОВ ---
    function changeSlide(index) {
        if (!slides.length || index < 0 || index >= slides.length) return;
        
        slides[currentSlide].classList.remove('active');
        if (menuButtons[currentSlide]) menuButtons[currentSlide].classList.remove('active');
        
        currentSlide = index;
        
        slides[currentSlide].classList.add('active');
        if (menuButtons[currentSlide]) menuButtons[currentSlide].classList.add('active');

        if (currentSlide === 1) {
            renderStep(currentStep);
        }
    }

    // --- ЛОГИКА ТЕРМИНАЛА КОМПЕТЕНЦИЙ (ЭКРАН 2) ---
    function initTabs() {
        if (!tabsContainer) return;
        tabsContainer.innerHTML = '';
        matrixData.forEach((_, idx) => {
            const btn = document.createElement('button');
            btn.className = 'tab-btn';
            btn.id = `tab-btn-${idx}`;
            btn.innerHTML = `<span>Требование</span> <strong>0${idx + 1}</strong>`;
            btn.addEventListener('click', () => renderStep(idx));
            tabsContainer.appendChild(btn);
        });
    }

    function renderStep(stepIndex) {
        currentStep = stepIndex;
        viewedSteps.add(currentStep);

        matrixData.forEach((_, idx) => {
            const btn = document.getElementById(`tab-btn-${idx}`);
            if (!btn) return;
            btn.className = 'tab-btn';
            if (idx === currentStep) btn.classList.add('active');
            else if (viewedSteps.has(idx)) btn.classList.add('completed');
        });

        if (reqDisplay) reqDisplay.textContent = matrixData[currentStep].req;
        if (respDisplay) respDisplay.textContent = matrixData[currentStep].resp;

        if (tagsDisplay) {
            tagsDisplay.innerHTML = '';
            matrixData[currentStep].tags.forEach(tag => {
                const span = document.createElement('span');
                span.className = 'tech-tag';
                span.textContent = tag;
                tagsDisplay.appendChild(span);
            });
        }

        if (barFill) {
            barFill.style.width = '0%';
            setTimeout(() => { barFill.style.width = '100%'; }, 50);
        }

        if (viewedSteps.size === matrixData.length) {
            if (footerStatus) footerStatus.className = 'stepper-footer-controls success-state';
            if (counterText) counterText.innerHTML = `✓ Анализ завершен: Идеальное соответствие вакансии на 100%!`;
        } else {
            if (footerStatus) footerStatus.className = 'stepper-footer-controls';
            if (counterText) counterText.textContent = `Изучено требований вакансии: ${viewedSteps.size} из ${matrixData.length}`;
        }
    }
    // --- ЛОГИКА ХРОНОЛОГИИ МЕСТ РАБОТЫ (ЭКРАН 4) ---
    function renderJobDetail(idx) {
        const job = placeholderJobs[idx];
        if (!job) return;

        document.querySelectorAll('.timeline-item-btn').forEach((b, i) => {
            b.classList.toggle('active', i === idx);
        });

        if (jobPeriod) jobPeriod.textContent = job.period;
        if (jobName) jobName.textContent = job.name;
        if (jobRole) jobRole.textContent = job.role;
        
        if (jobBullets) {
            jobBullets.innerHTML = '';
            
            // Если выбран Уфанет — рендерим красивый кастомный блок БЕЗ списков и буллитов
            if (job.isUfanet) {
                jobBullets.innerHTML = job.htmlContent;
            } else {
                // Для остальных компаний-рыб рендерим стандартный маркированный список
                const ulTitle = document.createElement('p');
                ulTitle.className = 'stack-title';
                ulTitle.textContent = 'Ключевые обязанности и достижения:';
                jobBullets.appendChild(ulTitle);

                const ul = document.createElement('ul');
                ul.className = 'workplace-bullets-list';
                
                job.bullets.forEach(bullet => {
                    const li = document.createElement('li');
                    li.textContent = bullet;
                    ul.appendChild(li);
                });
                jobBullets.appendChild(ul);
            }
        }
    }

    function initWorkplaceTimeline() {
        if (!timelineContainer) return;
        timelineContainer.innerHTML = '';
        
        placeholderJobs.forEach((job, idx) => {
            const btn = document.createElement('button');
            btn.className = 'timeline-item-btn';
            if (idx === 0) btn.classList.add('active');
            
            btn.innerHTML = `
                <span class="timeline-date">${job.period}</span>
                <span class="timeline-comp-name">${job.name}</span>
            `;
            
            btn.addEventListener('click', () => renderJobDetail(idx));
            timelineContainer.appendChild(btn);
        });
        
        renderJobDetail(0);
    }

    // --- ОБРАБОТЧИКИ КЛИКОВ НАВИГАЦИИ ---
    menuButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetBtn = e.target.closest('.menu-btn');
            if (targetBtn) changeSlide(parseInt(targetBtn.dataset.target, 10));
        });
    });

    if (startTrigger) {
        startTrigger.addEventListener('click', () => changeSlide(1));
    }

    // УПРАВЛЕНИЕ МОДАЛКОЙ КОНТАКТОВ
    if (ctaBtn && contactsModal) {
        ctaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            contactsModal.style.display = 'flex';
        });
    }

    if (closeContactsBtn && contactsModal) {
        closeContactsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            contactsModal.style.display = 'none';
        });
    }

    // СТАРТОВАЯ ИНИЦИАЛИЗАЦИЯ ВСЕХ БЛОКОВ ПРИЛОЖЕНИЯ
    initTabs();
    renderStep(0);
    initWorkplaceTimeline();
});

(function () {
    const SLIDE_DATA = [
        "Вы уже несколько раз посмотрели резюме",
        "Но еще не пригласили на собеседование",
        "Давайте поставим все точки над 'i'",
        "На самом первом собеседовании вы сделали оффер",
        "Но предложили зарплату меньше, чем указывалось в вакансии",
        "Поэтому нужно было подумать - принимать оффер или нет",
        "Затем вы задали вопрос 'Что для вас идеальная работа'",
        "И похоже ответ вам не понравился, хотя там не было ничего такого кардинального",
        "Это были просто классные условия труда",
        "Из-за этих двух причин, вы отказали",
        "Но это было просто недопонимание",
        "Может быть, оставим это в прошлом?",
        "Давайте проведем собеседование",
        "Честно пообщаемся",
        "И начнем работать",
        "Ваша компания очень классная ",
        "Зарплата 150к тоже роскошная",
        "Вы уже делали оффер",
        "И даже похвалили выполненное тестовое задание",
        "Поэтому у вас интерес тоже должен быть",
        "Все компании дают возможность 1 раз в полгода/год снова откликаться на вакансию",
        "Поэтому давайте просто начнем работать",
        "Как насчет собеседования 3 ноября в 15 часов?",
        "Если готовы, то позвоните по номеру, указанному в резюме",
        "Хорошего вам дня!"
    ];

    let currentSlideIndex = 0;

    document.addEventListener("DOMContentLoaded", () => {
        const introScreen = document.getElementById("slider-intro-screen");
        const galleryScreen = document.getElementById("slider-gallery-screen");
        const btnStart = document.getElementById("slider-btn-start");
        const btnPrev = document.getElementById("slider-btn-prev");
        const btnNext = document.getElementById("slider-btn-next");
        const viewImg = document.getElementById("slider-current-img");
        const viewCounter = document.getElementById("slider-counter-view");
        const viewText = document.getElementById("slider-text-view");

        if (!introScreen || !galleryScreen || !btnStart) return;

        btnStart.addEventListener("click", () => {
            introScreen.classList.add("slider-hidden");
            galleryScreen.classList.remove("slider-hidden");
            renderSlide();
        });

        btnPrev.addEventListener("click", () => {
            if (currentSlideIndex > 0) {
                currentSlideIndex--;
                renderSlide();
            }
        });

        btnNext.addEventListener("click", () => {
            if (currentSlideIndex < SLIDE_DATA.length - 1) {
                currentSlideIndex++;
                renderSlide();
            }
        });

        function renderSlide() {
            const currentText = SLIDE_DATA[currentSlideIndex];
            const slideNumber = currentSlideIndex + 1;

            viewText.textContent = currentText;
            viewCounter.textContent = `${slideNumber.toString().padStart(2, '0')} / ${SLIDE_DATA.length}`;
            
            console.log("Пытаюсь загрузить гифку по пути:");
            viewImg.setAttribute("src", `./img/gif/slide${slideNumber}.gif`);

            viewImg.setAttribute("alt", "");


            btnPrev.disabled = currentSlideIndex === 0;
            btnNext.disabled = currentSlideIndex === SLIDE_DATA.length - 1;
        }
    });
})();
