<script lang="ts">
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import { slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    // Publications data
    const publications = [
        {
            id: 1,
            year: "2025",
            title: "Self-Supervised Learning for Pre-training Capsule Networks: Overcoming Medical Imaging Dataset Challenges",
            abstract: "Deep learning techniques are increasingly being adopted in diagnostic medical imaging. However, the limited availability of high-quality, large-scale medical datasets presents a significant challenge, often necessitating the use of transfer learning approaches. This study investigates self-supervised learning methods for pre-training capsule networks in polyp diagnostics for colon cancer. We used the PICCOLO dataset, comprising 3,433 samples, which exemplifies typical challenges in medical datasets: small size, class imbalance, and distribution shifts between data splits. Capsule networks offer inherent interpretability due to their architecture and inter-layer information routing mechanism. However, their limited native implementation in mainstream deep learning frameworks and the lack of pre-trained versions pose a significant challenge. This is particularly true if aiming to train them on small medical datasets, where leveraging pre-trained weights as initial parameters would be beneficial. We explored two auxiliary self-supervised learning tasks, colourisation and contrastive learning, for capsule network pre-training. We compared self-supervised pre-trained models against alternative initialisation strategies. Our findings suggest that contrastive learning and in-painting techniques are suitable auxiliary tasks for self-supervised learning in the medical domain. These techniques helped guide the model to capture important visual features that are beneficial for the downstream task of polyp classification, increasing its accuracy by 5.26% compared to other weight initialisation methods.",
            link: "https://doi.org/10.48550/arXiv.2502.04748",
            authors: "El-Shimy, H., Zantout, H., Lones, M., El Gayar, N.",
            journal: "arXiv preprint arXiv:2502.04748 (awaiting publication)"
        },
        {
            id: 2,
            year: "2022",
            title: "A Review of Capsule Networks in Medical Image Analysis",
            abstract: "Computer-aided diagnosis technologies are gaining increased focus within the medical field due to their role in assisting physicians in their diagnostic decision-making through the ability to recognise patterns in medical images. Such technologies started showing promising results in their ability to match or outperform physicians in certain specialities and improve the quality of medical diagnosis. Convolutional neural networks are one state-of-the-art technique to use for disease detection and diagnosis in medical images. However, capsule networks aim to improve over these by preserving part-whole relationships between an object and its sub-components leading to better interpretability, an important characteristic for applications in the medical domain. In this paper, we review the latest applications of capsule networks in computer-aided diagnosis from medical images and compare their results with those of convolutional neural networks employed for the same tasks. Our findings support the use of Capsule Networks over Convolutional Neural Networks for Computer-Aided Diagnosis due to their superiority in performance but more importantly for their better interpretability and their ability to achieve such performance on small datasets.",
            link: "https://doi.org/10.1007/978-3-031-20650-4_6",
            authors: "El-Shimy, H., Zantout, H., Lones, M., El Gayar, N.",
            journal: "Artificial Neural Networks in Pattern Recognition - Lecture Notes in Computer Science ((LNAI,volume 13739))"
        },
        {
            id: 3,
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
            title: "Self-Supervised Learning for Pre-training Capsule Networks",
            date: "January 2025",
            description: "Presentation at the 2025 Information System Design & Intelligent Applications (ISDIA-2025) Conference",
            slideUrl: "https://view.genially.com/67f467aa26e4aa085cdfbbd0",
            expanded: false
        },
        {
            id: 2,
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
        
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.body.classList.remove('overflow-hidden');
        };
    });
</script>


<section class="w-screen md:w-full lg:w-screen width-adjust h-max bg-theme-fg-dark dark:bg-theme-action-dark grad-1 flex flex-col items-stretch pt-10 pb-20">
    <div class="container w-8/12 mx-auto shadow-text"> 

        <h2 class="font-display font-bold text-3xl mt-16 mb-2 text-theme-text-dark dark:text-theme-fg-light">Publications</h2>
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

        <h2 class="font-display font-bold text-3xl mt-16 mb-2 text-theme-text-dark dark:text-theme-fg-light">Awards</h2>
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
        
        <h2 class="font-display font-bold text-3xl mt-16 mb-2 text-theme-text-dark dark:text-theme-fg-light">Research Projects</h2>
        <hr class="border-theme-action dark:border-theme-fg-light mt-2 mb-8"/>
        
        <div class="grid grid-cols-1 gap-8">
            <div class="bg-white/80 dark:bg-theme-action-light/40 p-6 rounded shadow-lg">
                <h3 class="font-bold text-xl mb-4 text-theme-action dark:text-theme-fg-light">Patent Similarity Analysis with Siamese Neural Networks (2018-2019)</h3>
                <p class="text-theme-text-dark dark:text-theme-fg-light mb-4">This project used deep learning (CNN + LSTM) and NLP techniques to segment and classify pharmaceutical patents. The system analyzes patents to identify similarities, potential infringements, and novel claims.</p>
                <p class="text-theme-text-dark dark:text-theme-fg-light mb-6">You can find this project on GitHub: <a href="https://github.com/HebaNAS/Patent-Similarity-Check" target="_blank" rel="noopener noreferrer" class="text-theme-action dark:text-theme-fg-light underline hover:no-underline">Patent Similarity Check</a></p>
                
                <div class="w-full bg-gray-100 dark:bg-theme-action-dark rounded p-4">
                    <p class="text-theme-text-dark dark:text-theme-fg-light text-sm italic mb-2">Key technologies:</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 bg-theme-action/10 dark:bg-theme-fg-light/10 text-theme-action dark:text-theme-fg-light rounded-full text-sm">Deep Learning</span>
                        <span class="px-3 py-1 bg-theme-action/10 dark:bg-theme-fg-light/10 text-theme-action dark:text-theme-fg-light rounded-full text-sm">LSTM</span>
                        <span class="px-3 py-1 bg-theme-action/10 dark:bg-theme-fg-light/10 text-theme-action dark:text-theme-fg-light rounded-full text-sm">CNN</span>
                        <span class="px-3 py-1 bg-theme-action/10 dark:bg-theme-fg-light/10 text-theme-action dark:text-theme-fg-light rounded-full text-sm">NLP</span>
                        <span class="px-3 py-1 bg-theme-action/10 dark:bg-theme-fg-light/10 text-theme-action dark:text-theme-fg-light rounded-full text-sm">Siamese Neural Networks</span>
                        <span class="px-3 py-1 bg-theme-action/10 dark:bg-theme-fg-light/10 text-theme-action dark:text-theme-fg-light rounded-full text-sm">Entity-recognition</span>
                        <span class="px-3 py-1 bg-theme-action/10 dark:bg-theme-fg-light/10 text-theme-action dark:text-theme-fg-light rounded-full text-sm">Python</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

  <div class="container w-8/12 mx-auto">
        <h2 class="font-display font-bold text-3xl mt-16 mb-2 text-theme-text-dark dark:text-theme-fg-light">Articles</h2>
        <hr class="border-theme-action dark:border-theme-fg-light mt-2 mb-8"/>
        <div class="space-y-6">
        {#each articles as article}
            <div class="bg-white dark:bg-theme-action-light/30 rounded shadow-lg overflow-hidden">
                <div class="p-6">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-3">
                        <h3 class="text-xl font-bold text-theme-text-dark dark:text-theme-fg-light">{article.title}</h3>
                        <span class="text-sm font-medium bg-gray-200 dark:bg-theme-action-dark text-theme-text-dark dark:text-theme-fg-light py-1 px-4 rounded-full self-start">{article.date}</span>
                    </div>
                    <p class="text-theme-text-dark dark:text-theme-fg-light mb-6">{article.description}</p>
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

    <div class="container w-8/12 mx-auto mb-12 pb-12">
        <h2 class="font-display font-bold text-3xl mt-16 mb-2 text-theme-text-dark dark:text-theme-fg-light">Presentations</h2>
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
                        <div style="position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0;">
                            <iframe frameborder="0" width="100%" height="100%" title="{presentation.title}" 
                                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                    src="{presentation.slideUrl}" 
                                    allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all">
                            </iframe>
                        </div>
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
</style>
