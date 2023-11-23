function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        };

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    };
};
initTabNav();


function initAccordion() {
    const accordionList = document.querySelectorAll('[data-tab="accordion"] dt');
    const activeClass = 'ativo';
    if(accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
        this.classList.toggle(activeClass);
        this.nextElementSibling.classList.toggle(activeClass);
        };
        
        accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);
        });
    };
};
initAccordion();



function initAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-tab="scroll"]');
    if(sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowMetade;

                if(sectionTop < 0) {
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            });
        };

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    };
};

initAnimacaoScroll();