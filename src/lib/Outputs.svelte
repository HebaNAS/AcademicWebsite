<script lang="ts">
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import { slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    // Floating section navigation
    const navSections = [
        { id: 'publications', label: 'Publications' },
        { id: 'awards', label: 'Awards' },
        { id: 'articles', label: 'Articles' },
        { id: 'videos', label: 'Videos' },
        { id: 'certificates', label: 'Certificates' },
        { id: 'presentations', label: 'Presentations' },
    ];
    let activeSection = navSections[0].id;

    function scrollToSection(id: string) {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Publications data
    const publications = [
        {
            id: 1,
            year: "2026 (Forthcoming)",
            title: "Atrial Fibrillation Detection using Photoplethysmography Signals via 2D Convolutional Networks",
            abstract: "Atrial Fibrillation is the most sustained cardiac arrhythmia and a leading risk factor for stroke and heart failure. While electrocardiography remains the clinical gold standard for AF detection, its requirement for specialized equipment and technical expertise limits scalability. Photoplethysmography, a non-invasive signal commonly acquired from consumer-grade smartwatches, offers a promising alternative provided the signal can be processed and interpreted robustly. This paper investigates AF detection from PPG signals by converting 1D PPG segments into compact 2D temporal-unfolded images and applying 2D CNNs. Using patient-wise cross-validation on the MIMICPERform dataset, the 2D CNN substantially reduces the performance gap between PPG and ECG observed for 1D CNNs, achieving near parity in ROC-AUC while remaining computationally compact for potential on-device deployment. The results indicate that temporal unfolding into the 2D image domain is an effective strategy for robust AF detection from wearable PPG.", // Add your abstract here
            link: "", // Add DOI once assigned by Springer
            authors: "Sajesh, S., El-Shimy, H., Alhaddadin, F.",
            journal: "Proceedings of the International Conference on Advances in Computing Research (ACR'26) - Lecture Notes in Networks and Systems. Springer. [Accepted]"
        },
        {
            id: 2,
            year: "2026",
            title: "Advancing Skin Cancer Diagnosis Using Computer Vision to Aid the Visually Impaired",
            abstract: "Skin cancer is one of the most common forms of cancer, with early detection being crucial for effective treatment. Individuals with visual impairment often struggle to monitor skin lesions independently, typically depending on caregivers or dermatologists for assistance.This study develops a skin cancer detection system using dermoscopic images from the HAM10000 dataset, evaluating four deep learning models to assist caregivers and dermatologists in providing faster analysis for the individuals who are visually impaired. The research employs segmentation masks to crop images during preprocessing, with data augmentation and transfer learning for optimizing performance. Among the models used, EfficientNetV2-L achieved the highest accuracy of 95.1% and a recall of 86.3% for malignant lesions in binary classification, showing reliable classification of cancerous lesions. This system helps caregivers and dermatologists with a tool to efficiently monitor skin health for visually impaired individuals, reducing diagnostic delays and supporting faster decision making.",  // Update to final version when published
            link: "https://www.igi-global.com/book/improving-quality-life-people-disabilities/367327", // Update to the chapter one when made available 
            authors: "Palanisamy, R., Sobnath, D., El-Shimy, H.",
            journal: "Improving Quality of Life for People with Disabilities Through Smart Technologies (Ch. 11). I. U. Rehman, M. Nasralla, D. Sobnath, M. A. K. Khattak, & S. Ali (Eds.). IGI Global Scientific Publishing."
        },
        {
            id: 3,
            year: "2025",
            title: "Self-Supervised Learning for Pre-training Capsule Networks: Overcoming Medical Imaging Dataset Challenges",
            abstract: "Deep learning techniques are increasingly being adopted in diagnostic medical imaging. However, the limited availability of high-quality, large-scale medical datasets presents a significant challenge, often necessitating the use of transfer learning approaches. This study investigates self-supervised learning methods for pre-training capsule networks in polyp diagnostics for colon cancer. We used the PICCOLO dataset, comprising 3,433 samples, which exemplifies typical challenges in medical datasets: small size, class imbalance, and distribution shifts between data splits. Capsule networks offer inherent interpretability due to their architecture and inter-layer information routing mechanism. However, their limited native implementation in mainstream deep learning frameworks and the lack of pre-trained versions pose a significant challenge. This is particularly true if aiming to train them on small medical datasets, where leveraging pre-trained weights as initial parameters would be beneficial. We explored two auxiliary self-supervised learning tasks, colourisation and contrastive learning, for capsule network pre-training. We compared self-supervised pre-trained models against alternative initialisation strategies. Our findings suggest that contrastive learning and in-painting techniques are suitable auxiliary tasks for self-supervised learning in the medical domain. These techniques helped guide the model to capture important visual features that are beneficial for the downstream task of polyp classification, increasing its accuracy by 5.26% compared to other weight initialisation methods.",
            link: "https://doi.org/10.1007/978-981-96-9242-2_22",
            authors: "El-Shimy, H., Zantout, H., Lones, M., El Gayar, N.",
            journal: "Information System Design: Intelligent Healthcare Informatics (ISDIA 2025) - Lecture Notes in Networks and Systems"
        },
        {
            id: 4,
            year: "2022",
            title: "A Review of Capsule Networks in Medical Image Analysis",
            abstract: "Computer-aided diagnosis technologies are gaining increased focus within the medical field due to their role in assisting physicians in their diagnostic decision-making through the ability to recognise patterns in medical images. Such technologies started showing promising results in their ability to match or outperform physicians in certain specialities and improve the quality of medical diagnosis. Convolutional neural networks are one state-of-the-art technique to use for disease detection and diagnosis in medical images. However, capsule networks aim to improve over these by preserving part-whole relationships between an object and its sub-components leading to better interpretability, an important characteristic for applications in the medical domain. In this paper, we review the latest applications of capsule networks in computer-aided diagnosis from medical images and compare their results with those of convolutional neural networks employed for the same tasks. Our findings support the use of Capsule Networks over Convolutional Neural Networks for Computer-Aided Diagnosis due to their superiority in performance but more importantly for their better interpretability and their ability to achieve such performance on small datasets.",
            link: "https://doi.org/10.1007/978-3-031-20650-4_6",
            authors: "El-Shimy, H., Zantout, H., Lones, M., El Gayar, N.",
            journal: "Artificial Neural Networks in Pattern Recognition - Lecture Notes in Computer Science ((LNAI,volume 13739))"
        },
        {
            id: 5,
            year: "2022",
            title: "Assessment of Pharmaceutical Patent Novelty with Siamese Neural Networks",
            abstract: "Patents in the pharmaceutical field fulfil an important role as they contain details of the final product that is the culmination of years of research and possibly millions of dollars of investment. It is crucial that both patent producers and consumers are able to assess the novelty of such patents and perform basic processing on them. In this work, we review approaches in the literature in patent analysis and novelty assessment that range from basic digitisation to deep learning-based approaches including natural language processing, image processing and chemical structure extraction. We propose a system that automates the process of patent novelty assessment using Siamese neural networks for similarity detection. Our system showed promising results and has a potential to improve upon the current patent analysis methods, specifically in the pharmaceutical field, by not just focusing on the task from a Natural Language Processing perspective, but also, adding image analysis and adaptations for chemical structure extraction.",
            link: "https://doi.org/10.1007/978-3-031-20650-4_12",
            authors: "El-Shimy, H., Zantout, H., Ragab Hassen, H.",
            journal: "Artificial Neural Networks in Pattern Recognition - Lecture Notes in Computer Science ((LNAI,volume 13739))"
        },
    ];

    // Presentations data 
    let presentations = [
        {
            id: 1,
            title: "GenAI Pedagogy Talk",
            date: "April 2026",
            description: "Talk on integrating generative AI into pedagogy — building tools beyond slides",
            slideUrl: `${base}/talks/genai-pedagogy/index.html`,
            expanded: false
        },
        {
            id: 2,
            title: "PhD Thesis Presentation",
            date: "April 2025",
            description: "Presentation of PhD thesis viva at Heriot-Watt University Dubai",
            slideUrl: "https://hebanas.github.io/PhD-Viva-Presentation/",
            expanded: false
        },
        {
            id: 3,
            title: "Self-Supervised Learning for Pre-training Capsule Networks",
            date: "January 2025",
            description: "Presentation at the 2025 Information System Design & Intelligent Applications (ISDIA-2025) Conference",
            slideUrl: "https://view.genially.com/67f467aa26e4aa085cdfbbd0",
            expanded: false
        },
        {
            id: 4,
            title: "Explainable AI for Polyp Detection in Colonoscopy",
            date: "June 2021",
            description: "Presentation to Industrial Board of Experts at Heriot-Watt University Dubai",
            slideUrl: "https://view.genial.ly/623231c4ac2ebd0014082694",
            expanded: false
        },
    ];

    // Articles data
    let articles = [
        {
            id: 1,
            title: "بناء الثقة في الذكاء الاصطناعي: حالة الحوكمة والتنظيم المحليين",
            date: "April 2026",
            description: "Article for بوابة الأهرام (Ahram Gate)",
            url: "https://gate.ahram.org.eg/News/5593094.aspx",
        },
        {
            id: 2,
            title: "Women Powering the Region's Digital Transformation",
            date: "March 2026",
            description: "Article for The Integrator Digital Magazine",
            url: "https://integratormedia.com/2026/03/09/women-powering-the-regions-digital-transformation/",
        },
        {
            id: 3,
            title: "How Women Scientists Can Accelerate National Innovation Goals",
            date: "February 2026",
            description: "Article for The Integrator Digital Magazine",
            url: "https://integratormedia.com/2026/02/12/how-women-scientists-can-accelerate-national-innovation-goals/",
        },
        {
            id: 4,
            title: "Building Trust in AI: The Case for Local Governance and Regulation",
            date: "January 2026",
            description: "Article for The AI Times Digital Magazine",
            url: "https://gecnewswire.com/the-ai-times-january-2026/#the-ai-times-january-2026/32",
        },
        {
            id: 5,
            title: "Smart Buildings for Better Healthcare",
            date: "September 2022",
            description: "HWUD Centre of Excellence in Smart Construction Research Bulletin",
            url: "https://issuu.com/heriot-watt_university_dubai/docs/cesc_bulletin_6_september_2022_v3",
        },
    ];


    // Function to toggle slides visibility
    function toggleSlides(id) {
        presentations = presentations.map(p => {
            if (p.id === id) {
                return {...p, expanded: !p.expanded};
            }
            return p;
        });
    }

    // Media data
    let media = [
        {
            id: 1,
            title: "Heriot-Watt University Global Research Institute for Health & Care Technologies Video",
            date: "May 2025",
            description: "A video showcasing the research activities at Heriot-Watt University Dubai, including my work on AI in healthcare.",
            url: "https://www.youtube.com/embed/7Y3ZyNyTqns",
        },
    ];

    // Certificates
    let certs = [
        {
            id: 1,
            title: "AI in Healthcare",
            issuer: "Harvard Medical School",
            date: "Completed August 2025",
            url: "https://certificates.emeritus.org/137d2f3c-442f-48c0-be75-f75a647100b5",
        },
    ];

    // Create stores for modal state management to ensure reactivity
    let isModalOpen = false;
    let selectedPublication = null;

    // Open modal function - use store to guarantee reactivity
    function openModal(publication) {
        selectedPublication = publication;
        isModalOpen = true;
        document.body.classList.add('overflow-hidden');
    }

    // Close modal function
    function closeModal() {
        isModalOpen = false;
        document.body.classList.remove('overflow-hidden');
    }

    // Close modal when clicking outside
    function handleClickOutside(event) {
        const modal = document.querySelector('.modal-content');
        if (modal && !modal.contains(event.target) && isModalOpen) {
            closeModal();
        }
    }

    onMount(() => {
        document.addEventListener('click', handleClickOutside);

        // Highlight the section whose top has crossed the middle of the viewport.
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        activeSection = entry.target.id;
                    }
                }
            },
            { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
        );

        for (const s of navSections) {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.body.classList.remove('overflow-hidden');
            observer.disconnect();
        };
    });

</script>


<section class="w-screen md:w-full lg:w-screen width-adjust h-max bg-theme-fg-dark dark:bg-theme-action-dark grad-1 flex flex-col items-stretch pt-10 pb-20">

    <aside class="floating-nav hidden lg:block" aria-label="Sections on this page">
        <p class="floating-nav-heading">On this page</p>
        <ul>
            {#each navSections as section}
                <li>
                    <a
                        href="#{section.id}"
                        on:click|preventDefault={() => scrollToSection(section.id)}
                        class:active={activeSection === section.id}
                        aria-current={activeSection === section.id ? 'true' : undefined}
                    >
                        <span class="indicator" aria-hidden="true"></span>
                        <span class="label">{section.label}</span>
                    </a>
                </li>
            {/each}
        </ul>
    </aside>

    <div class="container w-8/12 mx-auto shadow-text">

        <h2 id="publications" class="section-anchor font-display font-bold text-3xl mt-16 mb-2 text-theme-text-dark dark:text-theme-fg-light">Publications</h2>
        <hr class="border-theme-action dark:border-theme-fg-light mt-2 mb-8"/>
        
        <div class="relative">
            <ol class="relative border-s-2 border-theme-action/30 dark:border-theme-fg-light/30 ml-3">
                {#each publications as publication, i}
                    <li class="mb-12 ms-6">
                        <div class="absolute w-4 h-4 bg-theme-action dark:bg-theme-fg-light rounded-full mt-1.5 -start-2 border-2 border-white dark:border-theme-action-dark"></div>
                        <time class="mb-1 text-sm font-semibold leading-none text-theme-action dark:text-theme-fg-light">{publication.year}</time>
                        <h3 class="text-xl font-semibold mt-2 text-theme-text-dark dark:text-white cursor-pointer hover:text-theme-action dark:hover:text-theme-fg-light transition-colors duration-200"
                            on:click={() => openModal(publication)}>
                            {publication.title}
                        </h3>
                        <p class="text-base font-normal text-theme-text-dark/80 dark:text-theme-fg-light/80">
                            {publication.authors}
                        </p>
                        <p class="mb-4 text-base font-normal text-theme-text-dark/80 dark:text-theme-fg-light/80">
                            <span class="italic">{publication.journal}</span>
                        </p>
                        <button 
                            type="button"
                            on:click={() => openModal(publication)}
                            class="inline-flex items-center px-4 py-2 text-sm font-medium text-theme-text-dark dark:text-theme-fg-light bg-white dark:bg-theme-action border border-theme-action/50 dark:border-theme-fg-light/50 rounded hover:bg-theme-action hover:text-white dark:hover:bg-theme-fg-dark dark:hover:text-theme-action-dark transition-all duration-300">
                            View Abstract
                            <svg class="w-3 h-3 ms-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        {#if publication.link}
                            <a href={publication.link} target="_blank" rel="noopener noreferrer" 
                               class="inline-flex items-center ml-2 px-4 py-2 text-sm font-medium text-theme-text-dark dark:text-theme-fg-light bg-white dark:bg-theme-action border border-theme-action/50 dark:border-theme-fg-light/50 rounded hover:bg-theme-action hover:text-white dark:hover:bg-theme-fg-dark dark:hover:text-theme-action-dark transition-all duration-300">
                                Read Paper
                                <svg class="w-3 h-3 ms-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        {/if}
                    </li>
                {/each}
            </ol>
        </div>

        <h2 id="awards" class="section-anchor font-display font-bold text-3xl mt-16 mb-2 text-theme-text-dark dark:text-theme-fg-light">Awards</h2>
        <hr class="border-theme-action dark:border-theme-fg-light mt-2 mb-8"/>
        
        <div class="relative">
            <ol class="relative border-s-2 border-theme-action/30 dark:border-theme-fg-light/30 ml-3">
                <li class="mb-12 ms-6">
                    <div class="absolute w-4 h-4 bg-theme-action dark:bg-theme-fg-light rounded-full mt-1.5 -start-2 border-2 border-white dark:border-theme-action-dark"></div>
                    <time class="mb-1 text-sm font-semibold leading-none text-theme-action dark:text-theme-fg-light">2025</time>
                    <h3 class="text-xl font-semibold mt-2 text-theme-text-dark dark:text-white">
                        Best Paper Award at the 2025 Information System Design & Intelligent Applications (ISDIA-2025) Conference
                    </h3>
                    <p class="text-base font-normal text-theme-text-dark/80 dark:text-theme-fg-light/80">
                        For the paper titled "Self-Supervised Learning for Pre-training Capsule Networks: Overcoming Medical Imaging Dataset Challenges"
                    </p>
                </li>

                <li class="mb-12 ms-6">
                    <div class="absolute w-4 h-4 bg-theme-action dark:bg-theme-fg-light rounded-full mt-1.5 -start-2 border-2 border-white dark:border-theme-action-dark"></div>
                    <time class="mb-1 text-sm font-semibold leading-none text-theme-action dark:text-theme-fg-light">2022</time>
                    <h3 class="text-xl font-semibold mt-2 text-theme-text-dark dark:text-white">
                        Best Research Award - Heriot-Watt University Dubai Research Day
                    </h3>
                    <p class="text-base font-normal text-theme-text-dark/80 dark:text-theme-fg-light/80">
                        For the research project "Explainable AI for Polyp Detection in Colonoscopy"
                    </p>
                </li>
            </ol>
        </div> 
    </div>

  <div class="container w-8/12 mx-auto">
        <h2 id="articles" class="section-anchor font-display font-bold text-3xl mt-16 mb-2 text-theme-text-dark dark:text-theme-fg-light">Articles</h2>
        <hr class="border-theme-action dark:border-theme-fg-light mt-2 mb-8"/>
        <div class="space-y-6">
        {#each articles as article}
            <div class="bg-white dark:bg-theme-action-light/30 rounded shadow-lg overflow-hidden">
                <div class="p-6">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-3">
                        <h3 dir="auto" class="text-xl font-bold text-theme-text-dark dark:text-theme-fg-light">{article.title}</h3>
                        <span class="text-sm font-medium bg-gray-200 dark:bg-theme-action-dark text-theme-text-dark dark:text-theme-fg-light py-1 px-4 rounded-full self-start">{article.date}</span>
                    </div>
                    <p dir="auto" class="text-theme-text-dark dark:text-theme-fg-light mb-6">{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" 
                       class="inline-flex items-center px-4 py-2 text-sm font-medium text-theme-text-dark dark:text-theme-fg-light bg-white dark:bg-theme-action border border-theme-action/50 dark:border-theme-fg-light/50 rounded hover:bg-theme-action hover:text-white dark:hover:bg-theme-fg-dark dark:hover:text-theme-action-dark transition-all duration-300">
                        Read Article
                        <svg class="w-3 h-3 ms-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                </div> 
            </div>
        {/each}
      </div>
    </div>

    <div class="container w-8/12 mx-auto">
        <h2 id="videos" class="section-anchor font-display font-bold text-3xl mt-16 mb-2 text-theme-text-dark dark:text-theme-fg-light">Videos</h2>
        <hr class="border-theme-action dark:border-theme-fg-light mt-2 mb-8"/>
        <div class="space-y-6">
        {#each media as mediaitem}
            <div class="bg-white dark:bg-theme-action-light/30 rounded shadow-lg overflow-hidden">
                <div class="p-6">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-3">
                        <h3 class="text-xl font-bold text-theme-text-dark dark:text-theme-fg-light">{mediaitem.title}</h3>
                        <span class="text-sm font-medium bg-gray-200 dark:bg-theme-action-dark text-theme-text-dark dark:text-theme-fg-light py-1 px-4 rounded-full self-start">{mediaitem.date}</span>
                    </div>
                    <p class="text-theme-text-dark dark:text-theme-fg-light mb-6">{mediaitem.description}</p>
                    <div class="relative w-full" style="padding-bottom: 56.25%;">
                        <iframe 
                            class="absolute top-0 left-0 w-full h-full rounded"
                            src="{mediaitem.url}"
                            title={mediaitem.title}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div> 
            </div>
        {/each}
      </div>
    </div>

    <div class="container w-8/12 mx-auto">
        <h2 id="certificates" class="section-anchor font-display font-bold text-3xl mt-16 mb-2 text-theme-text-dark dark:text-theme-fg-light">Certificates</h2>
        <hr class="border-theme-action dark:border-theme-fg-light mt-2 mb-8"/>
        <div class="space-y-6">
        {#each certs as c}
            <div class="bg-white dark:bg-theme-action-light/30 rounded shadow-lg overflow-hidden">
                <div class="p-6">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                        <h3 class="text-xl font-bold text-theme-text-dark dark:text-theme-fg-light">{c.title}</h3>
                        <span class="text font-bold bg-gray-200 dark:bg-theme-action-dark text-theme-text-dark dark:text-theme-fg-light py-1 px-4 rounded-full self-start">{c.date}</span>
                    </div>
                    <p class="text-theme-text-dark dark:text-theme-fg-light mb-6 font-semibold text-lg">{c.issuer}</p>
                    <div class="relative w-full" style="padding-bottom: 3.25%;">
                      <a href="{c.url}" target="_blank" rel="noopener noreferrer">
                        <img 
                            class="rounded shadow-lg"
                            src="{base}/harvard.png"
                            alt="{c.title}" />
                      </a>
                    </div>
                </div> 
            </div>
        {/each}
        </div>
    </div>

    <div class="container w-8/12 mx-auto mb-12 pb-12">
        <h2 id="presentations" class="section-anchor font-display font-bold text-3xl mt-16 mb-2 text-theme-text-dark dark:text-theme-fg-light">Presentations</h2>
        <hr class="border-theme-action dark:border-theme-fg-light mt-2 mb-8"/>
        <div class="space-y-6">
        {#each presentations as presentation}
            <div class="bg-white dark:bg-theme-action-light/30 rounded shadow-lg overflow-hidden">
                <div class="p-6">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-3">
                        <h3 class="text-xl font-bold text-theme-text-dark dark:text-theme-fg-light">{presentation.title}</h3>
                        <span class="text-sm font-medium bg-gray-200 dark:bg-theme-action-dark text-theme-text-dark dark:text-theme-fg-light py-1 px-4 rounded-full self-start">{presentation.date}</span>
                    </div>
                    <p class="text-theme-text-dark dark:text-theme-fg-light mb-6">{presentation.description}</p>
                    
                    <button 
                        type="button"
                        class="flex items-center text-theme-action dark:text-theme-fg-light hover:underline focus:outline-none" 
                        on:click={() => toggleSlides(presentation.id)}>
                        <svg class="w-4 h-4 mr-2 transition-transform duration-500 {presentation.expanded ? 'rotate-180' : ''}" 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                        {presentation.expanded ? 'Hide Slides' : 'View Slides'}
                    </button>
                </div>
                
                {#if presentation.expanded}
                    <div transition:slide={{duration: 1000, easing: quintOut}} class="w-full border-t border-gray-200 dark:border-gray-700">
                        {#if presentation.slideUrl.includes('github.io')}                          
                            <div style="position: relative; padding-bottom: 99%; height: 0; overflow: hidden;">
                              <iframe 
                                frameborder="0" 
                                title="{presentation.title}" 
                                src="{presentation.slideUrl}" 
                                style="position: absolute; top: 0; left: -10%; width: 120%; height: 100%; border: 0; transform: scale(0.85);"
                                allowscriptaccess="always" 
                                allowfullscreen="true" 
                                scrolling="no" 
                                allownetworking="all">
                            </iframe>
                          </div>
                      {:else}
                          <!-- Regular handling for non-GitHub presentations (like Genially) -->
                          <div style="position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0;">
                              <iframe 
                                  frameborder="0" 
                                  title="{presentation.title}" 
                                  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
                                  src="{presentation.slideUrl}" 
                                  allowscriptaccess="always" 
                                  allowfullscreen="true" 
                                  scrolling="yes" 
                                  allownetworking="all">
                              </iframe>
                          </div>
                      {/if}
                    </div>
                {/if}
            </div>
        {/each}
      </div>
    </div>

</section>

{#if isModalOpen && selectedPublication}
    <div class="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" 
         on:click={() => closeModal()}>
        <div class="bg-white dark:bg-theme-action-dark p-6 rounded-lg shadow-xl max-w-2xl w-11/12 max-h-[90vh] overflow-y-auto"
             on:click|stopPropagation>
            <div class="flex justify-between items-start mb-4">
                <h3 class="text-2xl font-bold text-theme-text-dark dark:text-theme-fg-light">{selectedPublication.title}</h3>
                <button type="button" on:click={() => closeModal()} class="text-gray-500 pl-4 hover:text-gray-800">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            
            <div class="border-t border-b border-gray-200 dark:border-gray-700 py-4 my-4">
                <h4 class="text-lg font-semibold mb-2 text-theme-text-dark dark:text-theme-fg-light">Abstract</h4>
                <p class="text-theme-text-dark dark:text-theme-fg-light">{selectedPublication.abstract}</p>
            </div>
            
            <div class="mt-4 text-right">
                <button type="button" on:click={() => closeModal()} class="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded">
                    Close
                </button>
            </div>
        </div>
    </div>
{/if}

<style lang="postcss">
  :global(.dark) .shadow-text {
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.65);
  }

  @media (min-width: 876px) and (max-width: 1023px) {
      .width-adjust {
          width: 100vw;
      }
  }

  /* Gradient background */
  .grad-1 {
      background: linear-gradient(146deg, rgba(255,255,255,0.2) 0%, rgba(2,0,36,0.1) 100%);
  }

  .dark .grad-1 {
      background: linear-gradient(146deg, rgba(2,0,36,0.15) 0%, rgba(2,0,36,0.35) 100%) !important;
  }

  /* Modal styling */
  .modal-content {
      animation: fadeIn 0.3s ease-out;
  }

  @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
  }

  .iframe-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    /* Push the heading clear of the (currently non-sticky) page top so
       smooth-scroll lands the title comfortably below the viewport edge. */
    .section-anchor {
        scroll-margin-top: 1.5rem;
    }

    /* Floating section nav — mirrors the main nav's color treatment. */
    .floating-nav {
        position: fixed;
        left: 1.5rem;
        top: 50%;
        transform: translateY(-50%);
        z-index: 30;
        max-width: 13rem;
    }

    @media (min-width: 1280px) {
        .floating-nav {
            left: 2.25rem;
        }
    }

    .floating-nav-heading {
        font-family: 'Source Serif Pro', Georgia, serif;
        font-size: 0.7rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--text);
        opacity: 0.55;
        margin: 0 0 0.6rem 0.65rem;
    }

    :global(.dark) .floating-nav-heading {
        color: var(--fg-light);
        opacity: 0.6;
    }

    .floating-nav ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.15rem;
        border-left: 2px solid color-mix(in srgb, var(--action) 25%, transparent);
        padding-left: 0.4rem;
    }

    :global(.dark) .floating-nav ul {
        border-left-color: color-mix(in srgb, var(--fg-light) 30%, transparent);
    }

    .floating-nav a {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        padding: 0.35rem 0.5rem;
        color: var(--text);
        font-weight: 400;
        font-size: 0.95rem;
        text-decoration: none;
        border-radius: 0.25rem;
        transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .floating-nav a:hover {
        color: var(--fg);
    }

    .floating-nav a.active {
        color: var(--action) !important;
        font-weight: 600;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    :global(.dark) .floating-nav a {
        color: #ffffff;
    }

    :global(.dark) .floating-nav a:hover {
        color: var(--fg);
    }

    :global(.dark) .floating-nav a.active {
        color: var(--fg) !important;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    .floating-nav .indicator {
        display: inline-block;
        width: 0.5rem;
        height: 2px;
        background: currentColor;
        opacity: 0.4;
        transition: width 0.4s ease, opacity 0.4s ease;
    }

    .floating-nav a.active .indicator {
        width: 1.4rem;
        opacity: 1;
    }
</style>
