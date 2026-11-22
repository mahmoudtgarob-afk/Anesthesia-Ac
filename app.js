// ==========================================
// 1. قاعدة بيانات المنهج الشاملة (6 محاور كاملة)
// ==========================================
const courseData = [
    {
        lec: "lec1",
        tag: "مثلث التخدير • Triad of Anesthesia",
        title: "مثلث التخدير العام ومراحله الثلاث",
        summary: "أي تخدير عام متكامل يعتمد على 3 أركان أساسية ومراحل: التحريض (Induction)، الحفاظ (Maintenance)، والإفاقة (Recovery).",
        details: {
            mechanism: "1) التنويم (Hypnosis) لنقل المريض من الوعي للاوعي. 2) تسكين الألم (Analgesia). 3) إرخاء العضلات (Muscle Relaxation) عند الحاجة للتنبيب (ETT) أو الجراحة.",
            dose: "تُضاف أحياناً أدوية مساعدة مثل مضادات القيء (Antiemetics) أو مضادات التحسس حسب الحالة.",
            clinical: "التحريض غالباً بالأدوية الوريدية (IV) لسرعتها وأمانها، والحفاظ بالغازات الاستنشاقية (Inhalational) أو TIVA.",
            contraindications: "العمليات القصيرة التي يتنفس فيها المريض تلقائياً (Spontaneous) قد لا تحتاج مرخيات عضلية."
        }
    },
    {
        lec: "lec1",
        tag: "Induction • منوم حليبي",
        title: "Propofol (بروبوفول)",
        summary: "أشهر منوم وريدي. لونه أبيض حليبي، مضاد للقيء، يخفض الضغط ويوسع الأوعية الدموية.",
        details: {
            mechanism: "ينشط مستقبلات GABA-A في الدماغ لزيادة التهدئة والنوم السريع.",
            dose: "1.5 - 2.5 mg/kg للبالغين (وحتى 3 mg/kg للأطفال). التركيز القياسي: 10 mg/ml في أمبولة 20ml = 200mg.",
            clinical: "يمتلك تأثيراً مضاداً للقيء (Antiemetic). يسبب ألماً عند الحقن في الأوردة الصغيرة (يُخفف بـ Lidocaine أو الحقن في وريد كبير).",
            contraindications: "مرضى هبوط الضغط (Hypotension)، النزيف، والصدمة (Shock)."
        }
    },
    {
        lec: "lec1",
        tag: "Induction • باربيتيورات",
        title: "Thiopental (ثيوبنتال / بنتوثال)",
        summary: "منوم قلوي جداً (High pH) يأتي كمسحوق أصفر يُخفف بمحلول ملحي. خطير جداً لو حُقن داخل الشريان.",
        details: {
            mechanism: "ينشط مستقبلات GABA-A. يُخفف فيال 1g بـ 40ml Normal Saline غالباً ليصبح 25 mg/ml.",
            dose: "3 - 5 mg/kg للبالغين.",
            clinical: "يخفض ضغط الدماغ (ICP) وضغط الدم ويثبط التنفس.",
            contraindications: "الحقن داخل الشريان (Intra-arterial injection) يسبب تشنجاً شريانياً حاداً وتلف الأنسجة وقد يصل للغرغرينا (Gangrene)."
        }
    },
    {
        lec: "lec1",
        tag: "Induction • استقرار قلبي",
        title: "Etomidate (إيتوميديت)",
        summary: "الأكثر استقراراً للقلب والضغط والنبض، لكنه قد يثبط الغدة الكظرية (Adrenal suppression).",
        details: {
            mechanism: "ينشط مستقبلات GABA-A مع الحفاظ على استقرار القلب والأوعية الدموية.",
            dose: "0.1 - 0.3 mg/kg للبالغين.",
            clinical: "مفضل لمرضى القلب وعدم استقرار الدورة الدموية، ويسبب ألماً عند الحقن ورمعاً عضلياً خفيفاً أحياناً.",
            contraindications: "يثبط تصنيع الكورتيزول في الغدة الكظرية (Adrenal suppression) خاصة عند تكرار الجرعات."
        }
    },
    {
        lec: "lec1",
        tag: "Induction & Analgesia • NMDA",
        title: "Ketamine (كيتامين / كيتلر)",
        summary: "يقفل مستقبلات NMDA. يرفع الضغط والنبض ويوسع القصبات؛ ممتاز للربو والأطفال والصدمة.",
        details: {
            mechanism: "يثبط مستقبلات NMDA الاستثارية، مما يُحدث تخديراً انفصالياً (Dissociative anesthesia) وتسكيناً قوياً.",
            dose: "كمسكن: ~0.5 mg/kg | كمنوم: 1 - 2 mg/kg (الفيال القياسي 50 mg/ml).",
            clinical: "يسبب توسع القصبات (Bronchodilation) ويرفع الضغط والنبض، ويُستخدم بكثرة للأطفال ومرضى الربو والصدمة.",
            contraindications: "ارتفاع ضغط الدم الشديد أو ارتفاع ضغط الدماغ/العين."
        }
    },
    {
        lec: "lec1",
        tag: "Inhalational • الغازات الاستنشاقية",
        title: "مقارنة الغازات الاستنشاقية (الألوان، MAC، والسرعة)",
        summary: "Isoflurane (بنفسجي)، Sevoflurane (أصفر)، Desflurane (أزرق)، Halothane (أحمر).",
        details: {
            mechanism: "تُبخر عبر Vaporizer ولا يُسمح بفتح غازين معاً. تعمل على مستقبلات GABA.",
            dose: "MAC: Halothane (0.75%)، Isoflurane (1.15-1.2%)، Sevoflurane (2%)، Desflurane (6%)، Nitrous Oxide (105%).",
            clinical: "القوة (Potency) عكس MAC (الهالوثين الأقوى). السرعة عكس الذوبانية في الدم (Desflurane الأسرع، يليه Nitrous ثم Sevo/Iso، وHalothane الأبطأ).",
            contraindications: "ممنوعة تماماً في مرضى القابلية لفرط الحرارة الخبيث (Malignant Hyperthermia)."
        }
    },
    {
        lec: "lec2",
        tag: "Muscle Relaxants • مرخيات عضلية",
        title: "Succinylcholine vs Atracurium & Rocuronium",
        summary: "تقفل مستقبلات النيكوتين في العضلات لتسهيل التنبيب. لا توفر تسكيناً أو تنويماً.",
        details: {
            mechanism: "Succinylcholine (Depolarizing) سريع جداً (يبدأ خلال أقل من دقيقة وينتهي خلال ~10 دقائق) ويُستخدم في الحالات الطارئة (RSI). Atracurium وRocuronium (Non-depolarizing).",
            dose: "Succinylcholine: 1 - 2 mg/kg | Atracurium: 0.5 mg/kg | Rocuronium (Esmeron): 0.6 mg/kg (أو 1.2 mg/kg لـ RSI).",
            clinical: "Atracurium يتكسر عبر Hoffmann elimination لذا فهو آمن لمرضى الفشل الكلوي والكبدي. Rocuronium يسبب ألماً عند الحقن إذا حُقن والمريض مستيقظ.",
            contraindications: "Succinylcholine ممنوع في Malignant Hyperthermia وفرط البوتاسيوم."
        }
    },
    {
        lec: "lec2",
        tag: "Reversal Agents • معاكسة المرخيات",
        title: "Neostigmine + Atropine vs Sugammadex",
        summary: "إنهاء مفعول المرخيات العضلية غير المزيلة للاستقطاب عند انتهاء العملية.",
        details: {
            mechanism: "Neostigmine يزيد الأستيل كولين في الوصلة العضلية، ويُخلط مع Atropine لمنع بطء النبض وزيادة الإفرازات. Sugammadex يغلف Rocuronium/Vecuronium ويلغي مفعولهما فوراً.",
            dose: "يُخلط Neostigmine + Atropine في سرنجة 10ml مع Normal Saline ويُعطى بعد بدء عودة التنفس التلقائي، بينما Sugammadex يعمل في أي وقت.",
            clinical: "Sugammadex أسرع وأكثر أماناً لـ Rocuronium لكنه أعلى تكلفة.",
            contraindications: "عدم إعطاء Neostigmine دون Atropine أو قبل عودة بداية التقلص العضلي."
        }
    },
    {
        lec: "lec2",
        tag: "Opioids • المسكنات الأفيونية",
        title: "Morphine, Fentanyl, Remifentanil, Pethidine & Tramadol",
        summary: "تسكين الألم الشديد عبر مستقبلات Mu, Delta, Kappa. تسبب تثبيط التنفس والغثيان والإمساك.",
        details: {
            mechanism: "Morphine هو المرجع (Prototype). Sufentanil هو الأقوى. Remifentanil هو الأسرع (يتكسر في البلازما ويُعطى Infusion). Pethidine (Meperidine) يعالج الرعشة بعد التخدير (Shivering).",
            dose: "Fentanyl (بالمايكروجرام 100mcg/2ml) وTramadol هما الأكثر توفراً في صالات العمليات.",
            clinical: "يجب الانتباه لخطر تثبيط مركز التنفس (Respiratory depression) والإدمان/التحمل (Tolerance).",
            contraindications: "تُعطى تحت مراقبة دقيقة للتنفس وغالباً يُضاف مضاد قيء مع الترامادول."
        }
    },
    {
        lec: "lec2",
        tag: "Benzodiazepines • المهدئات",
        title: "Midazolam (ميدازولام) و Diazepam (فاليوم)",
        summary: "تزيل القلق والتوتر قبل العملية وتُحدث نسياناً للأحداث (Anterograde Amnesia).",
        details: {
            mechanism: "تنشط مستقبلات GABA-A لتهدئة المريض ومنعه من تذكر مجريات العملية.",
            dose: "Midazolam مفضل لسرعته وقصر مفعوله مقارنة بـ Diazepam الذي يسبب ألماً وريدياً ويدوم طويلاً.",
            clinical: "يُقلل التوتر ويخفض الضغط المرتفع الناتج عن الخوف قبل التحريض.",
            contraindications: "تثبيط التنفس عند دمجه بجرعات عالية مع الأفيونات."
        }
    },
    {
        lec: "lec3",
        tag: "Capnography • أساسيات الموجات",
        title: "الكابنوغراف (Mainstream vs Sidestream) والموجة الطبيعية",
        summary: "قياس ETCO2 بنهاية الزفير (الطبيعي 35-45 mmHg). جرب المحاكي الحي في الأعلى لمشاهدة جميع الموجات!",
        details: {
            mechanism: "Sidestream يسحب عينة ~150 ml/min إلى جهاز التحليل وهو الأخف والأكثر شيوعاً. المراحل الأربع: Phase I (Dead space = 0)، Phase II (صعود/خلط)، Phase III (Alveolar plateau)، Phase IV (شهيق).",
            dose: "المدى الطبيعي: 35 - 45 mmHg.",
            clinical: "أدق وأسرع مؤشر للتأكد من وجود الأنبوب الرغامي في القصبة الهوائية وليس المريء.",
            contraindications: "راقب دائماً خط الأساس (Baseline = 0) وشكل الهضبة."
        }
    },
    {
        lec: "lec4",
        tag: "Anesthesia Machine • عربة التخدير",
        title: "مكونات عربة التخدير وصمام APL وزر Oxygen Flush",
        summary: "تشغيل العربة والمونيتور، ضبط الأكسجين، التبديل بين Mechanical وSpontaneous، واستخدام O2 Flush.",
        details: {
            mechanism: "صمام APL يتحكم بضغط الزفير (يُضبط على Minimum في التلقائي أو 10-20 عند النفخ اليدوي بـ Reservoir bag).",
            dose: "زر Oxygen Flush يضخ أكسجين عالي التدفق (35 - 75 L/min) مباشرة للدائرة.",
            clinical: "العتلة تحول مسار الغازات بين التنفس الآلي (Ventilator) والتلقائي (Bag/Spontaneous).",
            contraindications: "عدم فتح مبخرتين معاً، والتأكد من صلاحية حبيبات Soda lime لامتصاص CO2."
        }
    },
    {
        lec: "lec5",
        tag: "Spinal Anesthesia • التخدير النصفي",
        title: "Spinal vs High Spinal vs Total Spinal Anesthesia",
        summary: "الحقن بين الفقرات القطنية L3-L4، وحدود الانتشار الآمنة أسفل T4-T5.",
        details: {
            mechanism: "Spinal طبيعي: ينتشر المخدر حتى مستوى T4 أو أدنى. High Spinal: يصعد فوق T4 (T1-T4 يثبط الأعصاب الودية للقلب فيسبب هبوط ضغط حاد وبطء نبض؛ والوصول للعنقية C3-C5 يشل العصب الحجابي ويوقف التنفس). Total Spinal: يدخل الجمجمة ويفقد المريض الوعي.",
            dose: "الحقن بين L3 وL4 بعد التأكد من خروج السائل النخاعي (CSF).",
            clinical: "التصرف في High/Total Spinal: دعم التنفس فوراً (أكسجين/تنبيب) وعلاج هبوط الضغط وبطء النبض.",
            contraindications: "تجنب إمالة الرأس للأسفل بشكل مفرط بعد حقن المخدر الثقيل (Hyperbaric)."
        }
    },
    {
        lec: "lec6",
        tag: "Practical Dilution • التخفيف العملي",
        title: "القاعدة الذهبية للتخفيف وحساب الجرعات في الصالة",
        summary: "تحويل تركيز الأدوية إلى 10 mg/ml لتسهيل الحساب الذهني السريع.",
        details: {
            mechanism: "Propofol جاهز (10 mg/ml). Atracurium جاهز (10 mg/ml). Ketamine يأتي 50 mg/ml فنأخذ 1ml ونكمله لـ 5ml بـ Normal Saline فيصبح 10 mg/ml.",
            dose: "المعادلة: (الوزن × الجرعة المطلوبة) ÷ التركيز (mg/ml) = عدد السيسيهات (ml).",
            clinical: "اقرأ اسم الدواء وتركيزه مرتين دائماً واستأذن المشرف قبل السحب أو الحقن.",
            contraindications: "الخلط بين تركيز السكولين (50 mg/ml) والأتراكوريوم (10 mg/ml)."
        }
    }
];

// ==========================================
// 2. عرض البطاقات والبحث والنافذة التفصيلية
// ==========================================
const lecturesGrid = document.getElementById("lectures-grid");
const tabButtons = document.querySelectorAll(".tab-btn");
const searchInput = document.getElementById("lecture-search");
const modal = document.getElementById("detail-modal");
const modalBody = document.getElementById("modal-body-content");

let activeTab = "all";

function renderLectureCards() {
    const query = (searchInput.value || "").trim().toLowerCase();
    const filtered = courseData.filter(item => {
        const matchTab = activeTab === "all" || item.lec === activeTab;
        const matchSearch = !query ||
            item.title.toLowerCase().includes(query) ||
            item.summary.toLowerCase().includes(query) ||
            item.tag.toLowerCase().includes(query) ||
            item.details.mechanism.toLowerCase().includes(query);
        return matchTab && matchSearch;
    });

    lecturesGrid.innerHTML = filtered.map((item) => {
        const realIdx = courseData.indexOf(item);
        return `
            <div class="info-card" onclick="openDetailModal(${realIdx})">
                <span class="card-tag">${item.tag}</span>
                <h3>${item.title}</h3>
                <p>${item.summary}</p>
                <div class="card-footer">
                    <span>افتح النافذة التفصيلية</span>
                    <i class="fa-solid fa-arrow-up-left-from-square"></i>
                </div>
            </div>
        `;
    }).join("");
}

window.openDetailModal = function(idx) {
    const item = courseData[idx];
    modalBody.innerHTML = `
        <span class="card-tag">${item.tag}</span>
        <h2 style="color: var(--primary); margin-bottom: 1rem;">${item.title}</h2>
        <p style="color: var(--text-muted); margin-bottom: 1.2rem;">${item.summary}</p>
        <table class="modal-table">
            <tr><th>آلية العمل / الشرح العلمي</th><td>${item.details.mechanism}</td></tr>
            <tr><th>الجرعات / القيم القياسية</th><td>${item.details.dose}</td></tr>
            <tr><th>ملاحظات سريرية (Clinical)</th><td>${item.details.clinical}</td></tr>
            <tr><th>تنبيهات وموانع / تصرفات</th><td>${item.details.contraindications}</td></tr>
        </table>
    `;
    modal.classList.remove("hidden");
};

document.querySelector(".modal-close").addEventListener("click", () => modal.classList.add("hidden"));
document.querySelector(".modal-backdrop").addEventListener("click", () => modal.classList.add("hidden"));

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeTab = btn.dataset.tab;
        renderLectureCards();
    });
});

searchInput.addEventListener("input", renderLectureCards);
renderLectureCards();

// ==========================================
// 3. محاكي شاشة الكابنوغراف الحية (Live Canvas)
// ==========================================
const capnoCanvas = document.getElementById("capno-canvas");
const ctx = capnoCanvas.getContext("2d");
let currentWaveType = "normal";
let scanX = 0;

const waveConfigs = {
    normal: {
        etco2: "38", fico2: "0", rr: "14", color: "#10b981",
        title: "الموجة الطبيعية (Normal Capnogram - Phases I, II, III, IV)",
        desc: "Phase I: بداية الزفير من المساحة الميتة (Dead space = 0). Phase II: صعود سريع لخليط الغازات. Phase III: الهضبة السنخية ونقيس منها ETCO2 الطبيعي (35-45 mmHg). Phase IV: هبوط سريع للصفر عند الشهيق.",
        fn: (t) => {
            const p = t % 1;
            if (p < 0.35) return 0;
            if (p < 0.45) return ((p - 0.35) / 0.1) * 0.62;
            if (p < 0.85) return 0.62 + ((p - 0.45) / 0.4) * 0.05;
            return Math.max(0, 0.67 * (1 - (p - 0.85) / 0.15));
        }
    },
    shark: {
        etco2: "52", fico2: "0", rr: "12", color: "#f59e0b",
        title: "موجة زعنفة القرش (Shark Fin Waveform)",
        desc: "اختفاء الهضبة المستوية وصعود تدريجي مائل يشبه زعنفة القرش. الأسباب: الربو (Asthma)، COPD، تشنج القصبات (Bronchospasm)، أو انثناء/انسداد في الأنبوب الرغامي.",
        fn: (t) => {
            const p = t % 1;
            if (p < 0.3) return 0;
            if (p < 0.88) return Math.pow((p - 0.3) / 0.58, 0.75) * 0.82;
            return Math.max(0, 0.82 * (1 - (p - 0.88) / 0.12));
        }
    },
    curare: {
        etco2: "40", fico2: "0", rr: "16", color: "#38bdf8",
        title: "ثلمة الكوراري (Curare Cleft)",
        desc: "ظهور انكسار/نزول مفاجئ في الثلث الأخير من الهضبة نتيجة محاولة المريض أخذ نفس تلقائي أثناء عمل الفنتليتور بسبب انتهاء مفعول المرخي العضلي.",
        fn: (t) => {
            const p = t % 1;
            if (p < 0.35) return 0;
            if (p < 0.45) return ((p - 0.35) / 0.1) * 0.65;
            if (p < 0.65) return 0.65;
            if (p < 0.73) return 0.25;
            if (p < 0.86) return 0.66;
            return Math.max(0, 0.66 * (1 - (p - 0.86) / 0.14));
        }
    },
    rebreathing: {
        etco2: "48", fico2: "10", rr: "14", color: "#f97316",
        title: "ارتجاع ثاني أكسيد الكربون (Rebreathing)",
        desc: "عدم عودة خط الأساس إلى الصفر (FiCO2 > 0) بسبب استنشاق CO2 أثناء الشهيق. الأسباب: نفاد صلاحية حبيبات Soda lime، قلة Fresh gas flow، أو خلل بصمام الزفير.",
        fn: (t) => {
            const p = t % 1;
            const base = 0.18;
            if (p < 0.35) return base;
            if (p < 0.45) return base + ((p - 0.35) / 0.1) * 0.58;
            if (p < 0.85) return base + 0.58;
            return base + 0.58 * (1 - (p - 0.85) / 0.15);
        }
    },
    hypo: {
        etco2: "58", fico2: "0", rr: "8", color: "#ef4444",
        title: "نقص التهوية (Hypoventilation)",
        desc: "ارتفاع مستوى ETCO2 فوق 45 mmHg مع شكل موجة طبيعي لكن أعرض وأعلى. الأسباب: قلة معدل التنفس (RR) أو حجم النفس (Tidal Volume) أو ارتفاع الحرارة.",
        fn: (t) => {
            const p = (t * 0.65) % 1;
            if (p < 0.3) return 0;
            if (p < 0.4) return ((p - 0.3) / 0.1) * 0.88;
            if (p < 0.88) return 0.88;
            return Math.max(0, 0.88 * (1 - (p - 0.88) / 0.12));
        }
    },
    hyper: {
        etco2: "24", fico2: "0", rr: "24", color: "#00d2ff",
        title: "فرط التهوية (Hyperventilation)",
        desc: "انخفاض ETCO2 تحت 35 mmHg. الأسباب: زيادة معدل التنفس أو حجم النفس في الفنتليتور، أو انخفاض حرارة المريض (Hypothermia) والتمثيل الغذائي.",
        fn: (t) => {
            const p = (t * 1.5) % 1;
            if (p < 0.35) return 0;
            if (p < 0.45) return ((p - 0.35) / 0.1) * 0.38;
            if (p < 0.85) return 0.38;
            return Math.max(0, 0.38 * (1 - (p - 0.85) / 0.15));
        }
    },
    mh: {
        etco2: "85", fico2: "0", rr: "18", color: "#ef4444",
        title: "فرط الحرارة الخبيث (Malignant Hyperthermia)",
        desc: "تصاعد متسارع وخطير جداً في ETCO2 مع ارتفاع حرارة الجسم وتصلب العضلات. أوقف الغازات الاستنشاقية والسكولين فوراً وأعطِ Dantrolene!",
        fn: (t) => {
            const p = (t * 1.2) % 1;
            const scale = Math.min(0.95, 0.55 + (t % 4) * 0.1);
            if (p < 0.3) return 0;
            if (p < 0.4) return ((p - 0.3) / 0.1) * scale;
            if (p < 0.85) return scale;
            return Math.max(0, scale * (1 - (p - 0.85) / 0.15));
        }
    },
    disconnect: {
        etco2: "0", fico2: "0", rr: "0", color: "#ef4444",
        title: "فقدان الموجة المفاجئ (Disconnection / Esophageal Intubation / Arrest)",
        desc: "اختفاء الموجة وهبوط ETCO2 للصفر فجأة: افحص فوراً اتصال الدائرة (Circuit)، موقع الأنبوب الرغامي (التنبيب المريئي يختفي تدريجياً)، والنبض/الدورة الدموية.",
        fn: (t) => (t < 1.2 ? Math.max(0, (1.2 - t) * 0.3 * Math.sin(t * 15)) : 0)
    }
};

let waveTime = 0;
let lastY = 210;

function drawCapnoLoop() {
    const cfg = waveConfigs[currentWaveType];
    const w = capnoCanvas.width;
    const h = capnoCanvas.height;

    ctx.fillStyle = "#040916";
    ctx.fillRect(scanX, 0, 18, h);

    ctx.strokeStyle = "rgba(255,255,255,0.04)";
    ctx.lineWidth = 1;
    for (let y = 30; y < h; y += 45) {
        ctx.beginPath();
        ctx.moveTo(scanX, y);
        ctx.lineTo(scanX + 4, y);
        ctx.stroke();
    }

    const val = cfg.fn(waveTime);
    const currentY = h - 30 - val * (h - 55);

    ctx.strokeStyle = cfg.color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    if (scanX === 0) {
        ctx.moveTo(scanX, currentY);
    } else {
        ctx.moveTo(scanX - 3, lastY);
        ctx.lineTo(scanX, currentY);
    }
    ctx.stroke();

    lastY = currentY;
    scanX += 3;
    waveTime += 0.012;

    if (scanX >= w) {
        scanX = 0;
    }

    requestAnimationFrame(drawCapnoLoop);
}
drawCapnoLoop();

document.querySelectorAll(".wave-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".wave-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentWaveType = btn.dataset.wave;
        waveTime = 0;
        const cfg = waveConfigs[currentWaveType];
        document.getElementById("mon-etco2").textContent = cfg.etco2;
        document.getElementById("mon-fico2").textContent = cfg.fico2;
        document.getElementById("mon-rr").textContent = cfg.rr;
        document.getElementById("wave-title").textContent = cfg.title;
        document.getElementById("wave-explanation").textContent = cfg.desc;
    