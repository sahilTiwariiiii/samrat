/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>
{
    const toggle = document.getElementById(toggleId) , nav = document.getElementById(navId)

    if(toggle && nav)
    {
        toggle.addEventListener('click', ()=>
        {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')


/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction()
{
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: false // reveal once; do not hide on scroll out
});

/*SCROLL HOME*/
sr.reveal('.home__title',{});
sr.reveal('.button',{delay: 200});
sr.reveal('.home__img',{delay: 400});
sr.reveal('.home__social-icon',{ interval: 200});

/*SCROLL ABOUT (scoped only to About section)*/
sr.reveal('#about .about__img',{});
sr.reveal('#about .about__subtitle',{delay: 400});
sr.reveal('#about .about__text',{delay: 400});

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{});
sr.reveal('.skills__text',{});
sr.reveal('.skills__data',{interval: 200});
sr.reveal('.skills__img',{delay: 600});

/*SCROLL PROJECTS (disabled — no scroll effect on projects)*/
// sr.reveal('.work__img',{interval: 200});


/* ===== HRMS Modal Logic ===== */
(() => {
  const overlay = document.getElementById('hrmsOverlay');
  const modal = document.getElementById('hrmsModal');
  const openBtn = document.getElementById('hrms-open-modal');
  const closeBtn = document.getElementById('hrmsClose');
  const imageEl = document.getElementById('hrmsImage');
  const prevBtn = document.getElementById('hrmsPrev');
  const nextBtn = document.getElementById('hrmsNext');
  const captionEl = document.getElementById('hrmsCaptionText');
  const fullToggle = document.getElementById('hrmsFullToggle');
  const openRaw = document.getElementById('hrmsOpenRaw');
  const groupBtns = document.querySelectorAll('.hrms-group-btn');

  if (!overlay || !modal || !openBtn || !closeBtn || !imageEl || !prevBtn || !nextBtn || !captionEl || !fullToggle || !openRaw) {
    return; // Modal not present on this page
  }

  const GROUPS = {
    superAdmin: [
      'assets/img/hrms/superAdmin/superAdmincreateorganization1.png',
      'assets/img/hrms/superAdmin/superAdmindashrboad1.png',
      'assets/img/hrms/superAdmin/superAdmincreateorganization2.png',
      'assets/img/hrms/superAdmin/superAdmincreateorganization3.png',
      'assets/img/hrms/superAdmin/superAdmincreateorganization4.png',
      'assets/img/hrms/superAdmin/superAdmincreateorganization5.png',
      'assets/img/hrms/superAdmin/superAdminvieworganizationdetail6.png',
      'assets/img/hrms/superAdmin/superAdminvieworganizationdetail7.png',
      'assets/img/hrms/superAdmin/superAdminvieworganizationdetail8.png',
      'assets/img/hrms/superAdmin/superAdminvieworganizationdetail9.png',
      'assets/img/hrms/superAdmin/superAdminvieworganizationdetail10.png',
      'assets/img/hrms/superAdmin/Screenshot 2025-10-23 122824.png'
    ],
    companyAdmin: [
      'assets/img/hrms/companyAdmin/ca1dashboardpage.png',
      'assets/img/hrms/companyAdmin/ca2dashbraodpage.png',
      'assets/img/hrms/companyAdmin/caemployeepage3.png',
      'assets/img/hrms/companyAdmin/ca4employeepage.png',
      'assets/img/hrms/companyAdmin/ca5employee.png',
      'assets/img/hrms/companyAdmin/ca6employee.png',
      'assets/img/hrms/companyAdmin/ca7employee.png',
      'assets/img/hrms/companyAdmin/ca8employee.png',
      'assets/img/hrms/companyAdmin/ca9employee.png',
      'assets/img/hrms/companyAdmin/ca10employee.png',
      'assets/img/hrms/companyAdmin/ca11attendance.png',
      'assets/img/hrms/companyAdmin/ca12attendance.png',
      'assets/img/hrms/companyAdmin/ca13attendance.png',
      'assets/img/hrms/companyAdmin/ca14attendance.png',
      'assets/img/hrms/companyAdmin/ca15attendance.png',
      'assets/img/hrms/companyAdmin/ca16regularization.png',
      'assets/img/hrms/companyAdmin/ca17regularization.png',
      'assets/img/hrms/companyAdmin/ca18regularization.png',
      'assets/img/hrms/companyAdmin/ca19regularization.png',
      'assets/img/hrms/companyAdmin/ca20salarystructure.png',
      'assets/img/hrms/companyAdmin/ca21salarystructure.png',
      'assets/img/hrms/companyAdmin/ca22salarystructure.png',
      'assets/img/hrms/companyAdmin/casalarystructure23.png',
      'assets/img/hrms/companyAdmin/casalarystructure24.png',
      'assets/img/hrms/companyAdmin/casalarystructure25.png',
      'assets/img/hrms/companyAdmin/capayroll26.png',
      'assets/img/hrms/companyAdmin/capayroll27.png',
      'assets/img/hrms/companyAdmin/capayroll28.png',
      'assets/img/hrms/companyAdmin/capayroll29.png',
      'assets/img/hrms/companyAdmin/capayroll30.png',
      'assets/img/hrms/companyAdmin/capayroll31.png',
      'assets/img/hrms/companyAdmin/capayroll32.png',
      'assets/img/hrms/companyAdmin/caleaves33.png',
      'assets/img/hrms/companyAdmin/caleaves34.png',
      'assets/img/hrms/companyAdmin/caleaves35.png',
      'assets/img/hrms/companyAdmin/caleaves36.png',
      'assets/img/hrms/companyAdmin/caleavesallotment37.png',
      'assets/img/hrms/companyAdmin/caleavesallotment38.png',
      'assets/img/hrms/companyAdmin/caleavesallotment39.png',
      'assets/img/hrms/companyAdmin/caleavesallotment40.png',
      'assets/img/hrms/companyAdmin/caleavesallotment41.png',
      'assets/img/hrms/companyAdmin/caleavesallotment42.png',
      'assets/img/hrms/companyAdmin/caleavesrequest43.png',
      'assets/img/hrms/companyAdmin/caleavesrequest44.png',
      'assets/img/hrms/companyAdmin/caleavesrequest45.png',
      'assets/img/hrms/companyAdmin/caleavesrequest46.png',
      'assets/img/hrms/companyAdmin/caleavesrequest47.png',
      'assets/img/hrms/companyAdmin/careportemployee48.png',
      'assets/img/hrms/companyAdmin/careportemployee49.png',
      'assets/img/hrms/companyAdmin/careportleaverequestreport50.png',
      'assets/img/hrms/companyAdmin/careportleaverequestreport51.png',
      'assets/img/hrms/companyAdmin/careportleaverequestreport52.png',
      'assets/img/hrms/companyAdmin/careportpayrollreport53.png',
      'assets/img/hrms/companyAdmin/careportpayrollreport54.png',
      'assets/img/hrms/companyAdmin/careportattendancereport55.png',
      'assets/img/hrms/companyAdmin/caorganizationsettings56.png',
      'assets/img/hrms/companyAdmin/camyspaceapplyleave57.png',
      'assets/img/hrms/companyAdmin/camyspaceapplyleave58.png',
      'assets/img/hrms/companyAdmin/camyspaceattedanceregularization59.png',
      'assets/img/hrms/companyAdmin/camyspaceattedanceregularization60.png',
      // Non-numbered images placed at the end to preserve numeric order
      'assets/img/hrms/companyAdmin/casalarystructure.png',
      'assets/img/hrms/companyAdmin/loginpage.png'
    ],
    employee: [
      'assets/img/hrms/employee/employeedashboard1.png',
      'assets/img/hrms/employee/employeedashboardattendance2.png',
      'assets/img/hrms/employee/employeedashboardattendance3.png',
      'assets/img/hrms/employee/employeedashboardregularization4.png',
      'assets/img/hrms/employee/employeedashboardregularization5.png',
      'assets/img/hrms/employee/employeeleavepolicy6.png',
      'assets/img/hrms/employee/employeeleavebalance7.png',
      'assets/img/hrms/employee/employeeleaveapply8.png',
      'assets/img/hrms/employee/employeeleavetrackleaverequest9.png',
      'assets/img/hrms/employee/employeesalarystructure10.png',
      'assets/img/hrms/employee/employeepayroll11.png',
      'assets/img/hrms/employee/employeesettings12.png',
      'assets/img/hrms/employee/employeedashbraodinlaptop.png',
      'assets/img/hrms/employee/employydashbraodinlaptopat.png'
    ]
  };

  let currentGroup = 'superAdmin';
  let list = GROUPS[currentGroup];
  let index = 0;
  let attempts = 0;

  function setActiveGroup(name) {
    currentGroup = name;
    list = GROUPS[name] || [];
    index = 0;
    groupBtns.forEach(btn => btn.classList.toggle('hrms-active', btn.dataset.group === name));
    updateImage();
  }

  function updateImage() {
    attempts = 0;
    if (!list.length) {
      imageEl.removeAttribute('src');
      captionEl.textContent = 'No images in this group';
      openRaw.href = '#';
      return;
    }
    const url = list[index];
    const encoded = encodeURI(url);
    imageEl.onload = () => { attempts = 0; };
    imageEl.onerror = () => {
      attempts += 1;
      if (attempts >= list.length) {
        imageEl.removeAttribute('src');
        captionEl.textContent = 'Image missing';
        openRaw.href = '#';
      } else {
        index = (index + 1) % list.length;
        updateImage();
      }
    };
    imageEl.src = encoded;
    captionEl.textContent = '';
    openRaw.href = encoded;
  }

  function nextImage() {
    if (!list.length) return;
    index = (index + 1) % list.length;
    updateImage();
  }

  function prevImage() {
    if (!list.length) return;
    index = (index - 1 + list.length) % list.length;
    updateImage();
  }

  function openModal() {
    overlay.classList.add('active');
    modal.classList.remove('fullscreen');
    setActiveGroup('companyAdmin');
    document.body.style.overflow = 'hidden';
    document.body.classList.add('hrms-overlay-open');
  }

  function closeModal() {
    overlay.classList.remove('active');
    modal.classList.remove('fullscreen');
    document.body.style.overflow = '';
    document.body.classList.remove('hrms-overlay-open');
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  nextBtn.addEventListener('click', nextImage);
  prevBtn.addEventListener('click', prevImage);

  groupBtns.forEach(btn => {
    btn.addEventListener('click', () => setActiveGroup(btn.dataset.group));
  });

  fullToggle.addEventListener('click', () => {
    const isFull = modal.classList.toggle('fullscreen');
    fullToggle.textContent = isFull ? 'Exit Full Screen' : 'Full Screen';
  });

  imageEl.addEventListener('click', () => {
    const isFull = modal.classList.toggle('fullscreen');
    fullToggle.textContent = isFull ? 'Exit Full Screen' : 'Full Screen';
  });

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });
})();


/* ===== LeadGen Modal Logic ===== */
(() => {
  const overlay = document.getElementById('leadgenOverlay');
  const modal = document.getElementById('leadgenModal');
  const openBtn = document.getElementById('leadgen-open-modal');
  const closeBtn = document.getElementById('leadgenClose');
  const imageEl = document.getElementById('leadgenImage');
  const prevBtn = document.getElementById('leadgenPrev');
  const nextBtn = document.getElementById('leadgenNext');
  const captionEl = document.getElementById('leadgenCaptionText');
  const fullToggle = document.getElementById('leadgenFullToggle');
  const openRaw = document.getElementById('leadgenOpenRaw');
  const groupBtns = document.querySelectorAll('.leadgen-group-btn');

  if (!overlay || !modal || !openBtn || !closeBtn || !imageEl || !prevBtn || !nextBtn || !captionEl || !fullToggle || !openRaw) {
    return; // Modal not present on this page
  }

  const GROUPS = {
    admin: [
      // Numeric order first
      'assets/img/leadgeneraiton/admin/admin2.png',
      'assets/img/leadgeneraiton/admin/admin3.png',
      'assets/img/leadgeneraiton/admin/admin4.png',
      'assets/img/leadgeneraiton/admin/admin5.png',
      'assets/img/leadgeneraiton/admin/admin6.png',
      'assets/img/leadgeneraiton/admin/admin7.png',
      'assets/img/leadgeneraiton/admin/admin8.png',
      'assets/img/leadgeneraiton/admin/admin9.png',
      'assets/img/leadgeneraiton/admin/admin10.png',
      'assets/img/leadgeneraiton/admin/admin11.png',
      // Non-numbered at end
      'assets/img/leadgeneraiton/admin/admin.png'
    ],
    merchant: [
      'assets/img/leadgeneraiton/merchant/merchant1.png',
      'assets/img/leadgeneraiton/merchant/merchant2.png',
      'assets/img/leadgeneraiton/merchant/merchant3.png',
      'assets/img/leadgeneraiton/merchant/merchant4.png',
      'assets/img/leadgeneraiton/merchant/merchant5.png',
      'assets/img/leadgeneraiton/merchant/merchant6.png',
      'assets/img/leadgeneraiton/merchant/merchant7.png',
      'assets/img/leadgeneraiton/merchant/merchant8.png',
      'assets/img/leadgeneraiton/merchant/merchant9.png',
      'assets/img/leadgeneraiton/merchant/merchant10.png',
      'assets/img/leadgeneraiton/merchant/merchant11.png',
      'assets/img/leadgeneraiton/merchant/merchant12.png',
      'assets/img/leadgeneraiton/merchant/merchant13.png'
    ],
    user: [
      'assets/img/leadgeneraiton/user/user1.png',
      'assets/img/leadgeneraiton/user/user2.png',
      'assets/img/leadgeneraiton/user/user3.png',
      'assets/img/leadgeneraiton/user/user4.png'
    ]
  };

  let activeGroup = 'admin';
  let list = GROUPS[activeGroup];
  let index = 0;

  function getFileName(path) {
    const parts = path.split('/');
    return parts[parts.length - 1];
  }

  function updateImage() {
    const src = list[index];
    imageEl.src = src;
    imageEl.alt = `LeadGen screenshot ${index + 1}`;
    openRaw.href = src;
  }

  function setActiveGroup(group) {
    activeGroup = group;
    list = GROUPS[group] || [];
    index = 0;
    groupBtns.forEach(btn => btn.classList.toggle('leadgen-active', btn.dataset.group === group));
    updateImage();
  }

  function nextImage() {
    if (!list.length) return;
    index = (index + 1) % list.length;
    updateImage();
  }

  function prevImage() {
    if (!list.length) return;
    index = (index - 1 + list.length) % list.length;
    updateImage();
  }

  function openModal() {
    overlay.classList.add('active');
    modal.classList.remove('fullscreen');
    setActiveGroup('admin');
    document.body.style.overflow = 'hidden';
    document.body.classList.add('leadgen-overlay-open');
  }

  function closeModal() {
    overlay.classList.remove('active');
    modal.classList.remove('fullscreen');
    document.body.style.overflow = '';
    document.body.classList.remove('leadgen-overlay-open');
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  nextBtn.addEventListener('click', nextImage);
  prevBtn.addEventListener('click', prevImage);

  groupBtns.forEach(btn => {
    btn.addEventListener('click', () => setActiveGroup(btn.dataset.group));
  });

  fullToggle.addEventListener('click', () => {
    const isFull = modal.classList.toggle('fullscreen');
    fullToggle.textContent = isFull ? 'Exit Full Screen' : 'Full Screen';
  });

  imageEl.addEventListener('click', () => {
    const isFull = modal.classList.toggle('fullscreen');
    fullToggle.textContent = isFull ? 'Exit Full Screen' : 'Full Screen';
  });

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });
})();

