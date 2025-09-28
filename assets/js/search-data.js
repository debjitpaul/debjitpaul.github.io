// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Selected Publications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "My curriculum vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "Research updates, insights, and thoughts on AI and NLP",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-understanding-flops-mfu-and-computational-efficiency-in-llm-training-from-dense-transformers-to-moe-architectures",
        
          title: "Understanding FLOPs, MFU, and Computational Efficiency in LLM Training: From Dense Transformers to...",
        
        description: "A comprehensive guide to counting FLOPs in LLM training, measuring Model FLOPs Utilization (MFU), and extending these concepts to Mixture-of-Experts architectures with a deep dive into OpenAI&#39;s GPT-OSS models.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/compute/";
          
        },
      },{id: "post-making-reasoning-matter-measuring-faithfulness-in-chain-of-thought-reasoning",
        
          title: "Making Reasoning Matter - Measuring Faithfulness in Chain-of-Thought Reasoning",
        
        description: "A deep dive into our latest research on evaluating and improving the faithfulness of chain-of-thought reasoning in large language models.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/reasoning-matter/";
          
        },
      },{id: "post-blog",
        
          title: "blog",
        
        description: "Research updates, insights, and thoughts on AI reasoning and computational linguistics",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/";
          
        },
      },{id: "news-successfully-defended-my-phd-thesis-man-student",
          title: 'Successfully defended my PhD. Thesis :man_student:',
          description: "",
          section: "News",},{id: "news-talk-at-ku-leuven-neuro-symbolic-commonsense-reasoning-in-nlp",
          title: 'Talk at KU Leuven: Neuro-Symbolic Commonsense Reasoning in NLP.',
          description: "",
          section: "News",},{id: "news-check-out-our-new-preprint-paper-refiner-reasoning-feedback-on-intermediate-representations",
          title: 'Check out our new preprint paper REFINER: Reasoning Feedback on Intermediate Representations',
          description: "",
          section: "News",},{id: "news-invited-as-an-area-chair-at-emnlp-2023",
          title: 'Invited as an Area Chair at EMNLP 2023',
          description: "",
          section: "News",},{id: "news-check-out-our-new-preprint-paper-flows-building-blocks-of-reasoning-and-collaborating-ai",
          title: 'Check out our new preprint paper Flows: Building Blocks of Reasoning and Collaborating...',
          description: "",
          section: "News",},{id: "news-i-am-on-the-academic-and-industry-job-market-if-you-think-my-background-can-be-a-good-fit-i-d-be-happy-to-discuss",
          title: 'I am on the academic and industry job market. If you think my...',
          description: "",
          section: "News",},{id: "news-two-papers-got-accepted-at-emnlp-2023-see-you-in-singapore-airplane",
          title: 'Two papers got accepted at EMNLP 2023. See you in Singapore :airplane:',
          description: "",
          section: "News",},{id: "news-refiner-got-accepted-at-eacl-main-conference-2024-see-you-in-malta-airplane",
          title: 'REFINER got accepted at EACL main conference 2024. See you in Malta :airplane:...',
          description: "",
          section: "News",},{id: "news-check-out-our-new-preprint-paper-making-reasoning-matter-measuring-and-improving-faithfulness-of-chain-of-thought-reasoning",
          title: 'Check out our new preprint paper Making Reasoning Matter: Measuring and Improving Faithfulness...',
          description: "",
          section: "News",},{id: "news-teaching-at-the-ifi-summer-school-2024-at-university-of-zurich-on-modern-nlp-with-llms",
          title: 'Teaching at the IFI Summer School 2024 at University of Zurich on Modern...',
          description: "",
          section: "News",},{id: "news-guest-lecture-in-the-topics-in-natural-language-processing-course-at-epfl",
          title: 'Guest Lecture in the Topics in Natural Language Processing course at EPFL.',
          description: "",
          section: "News",},{id: "news-two-papers-are-accepted-at-emnlp-2024",
          title: 'Two papers are accepted at EMNLP 2024',
          description: "",
          section: "News",},{id: "news-talk-at-microsoft-research-msr-bangalore-india",
          title: 'Talk at Microsoft Research (MSR), Bangalore, India.',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-at-naacl-2025-fipo-fallacy-informed-preference-optimization",
          title: 'One paper is accepted at NAACL 2025 (FIPO: Fallacy-Informed Preference Optimization)',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-at-iclr-2025-include",
          title: 'One paper is accepted at ICLR 2025 (INCLUDE)',
          description: "",
          section: "News",},{id: "news-our-paper-fipo-fallacy-informed-preference-optimisation-received-the-outstanding-paper-award-at-naacl-2025",
          title: 'Our paper FIPO: Fallacy-Informed Preference Optimisation received the Outstanding Paper Award 🏆 at...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%65%62%6A%69%74%70%61%75%6C%6D%73@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/debjit-paul", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=jJ8MjZMAAAAJ&hl=en&oi=ao", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/2261760962", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://debjitpaul.github.io/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
