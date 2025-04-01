// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                nav.classList.remove('active');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Tab functionality for student portal
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and tab contents
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding tab content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Sub-tab functionality for staff portal
    const subTabBtns = document.querySelectorAll('.sub-tab-btn');
    subTabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const subTabId = this.getAttribute('data-subtab');
            const parentTab = this.closest('.tab-content');
            
            // Remove active class from all sub-buttons and sub-tab contents
            parentTab.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
            parentTab.querySelectorAll('.sub-tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding sub-tab content
            this.classList.add('active');
            parentTab.querySelector('#' + subTabId).classList.add('active');
        });
    });
    
    // Show class selection when specific class is chosen in announcements
    const audienceSelect = document.getElementById('announcementAudience');
    const classSelection = document.getElementById('classSelection');
    
    if (audienceSelect && classSelection) {
        audienceSelect.addEventListener('change', function() {
            if (this.value === 'specific-class') {
                classSelection.style.display = 'block';
            } else {
                classSelection.style.display = 'none';
            }
        });
    }
    
    // Toggle announcement form
    const newAnnouncementBtn = document.getElementById('newAnnouncementBtn');
    const announcementForm = document.getElementById('announcementForm');
    const cancelAnnouncementBtn = document.getElementById('cancelAnnouncementBtn');
    
    if (newAnnouncementBtn && announcementForm) {
        newAnnouncementBtn.addEventListener('click', function() {
            announcementForm.style.display = 'block';
        });
    }
    
    if (cancelAnnouncementBtn && announcementForm) {
        cancelAnnouncementBtn.addEventListener('click', function() {
            announcementForm.style.display = 'none';
        });
    }
    
    // Modal functionality
    const studentLoginBtn = document.getElementById('studentLoginBtn');
    const studentPortalModal = document.getElementById('studentPortalModal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    
    if (studentLoginBtn && studentPortalModal) {
        studentLoginBtn.addEventListener('click', function() {
            studentPortalModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }
    
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Sample data for student portal (in a real app, this would come from a server)
    const studyMaterials = [
        { id: 1, title: 'Mathematics Chapter 1', subject: 'mathematics', class: 'primary5', description: 'Introduction to algebra', date: '2023-05-15', file: 'math_ch1.pdf' },
        { id: 2, title: 'English Grammar', subject: 'english', class: 'primary4', description: 'Basic grammar rules', date: '2023-05-10', file: 'english_grammar.pdf' },
        { id: 3, title: 'Science Experiment', subject: 'science', class: 'primary6', description: 'Chemistry lab instructions', date: '2023-05-18', file: 'science_lab.docx' },
        { id: 4, title: 'History of South Sudan', subject: 'history', class: 'secondary2', description: 'Independence struggle', date: '2023-05-05', file: 'history_ss.pptx' },
        { id: 5, title: 'Geography Quiz', subject: 'geography', class: 'secondary1', description: 'African countries quiz', date: '2023-05-20', file: 'geo_quiz.pdf' }
    ];
    
    const assignments = [
        { id: 1, title: 'Math Homework', subject: 'mathematics', dueDate: '2023-06-01', status: 'pending' },
        { id: 2, title: 'English Essay', subject: 'english', dueDate: '2023-05-25', status: 'submitted' },
        { id: 3, title: 'Science Project', subject: 'science', dueDate: '2023-06-10', status: 'pending' },
        { id: 4, title: 'History Report', subject: 'history', dueDate: '2023-05-30', status: 'late' }
    ];
    
    const results = [
        { subject: 'Mathematics', term1: '85%', term2: '78%', term3: '92%', average: '85%' },
        { subject: 'English', term1: '90%', term2: '88%', term3: '91%', average: '90%' },
        { subject: 'Science', term1: '82%', term2: '85%', term3: '88%', average: '85%' },
        { subject: 'History', term1: '75%', term2: '80%', term3: '85%', average: '80%' },
        { subject: 'Geography', term1: '88%', term2: '90%', term3: '92%', average: '90%' }
    ];
    
    // Populate study materials
    function populateStudyMaterials(filter = 'all') {
        const materialsList = document.querySelector('.materials-list');
        if (!materialsList) return;
        
        materialsList.innerHTML = '';
        
        const filteredMaterials = filter === 'all' 
            ? studyMaterials 
            : studyMaterials.filter(material => material.subject === filter);
        
        filteredMaterials.forEach(material => {
            const materialCard = document.createElement('div');
            materialCard.className = 'material-card';
            materialCard.innerHTML = `
                <h4>${material.title}</h4>
                <p>${material.description}</p>
                <div class="material-meta">
                    <span>${material.class.toUpperCase()}</span>
                    <span>${material.date}</span>
                </div>
                <div class="material-actions">
                    <a href="uploads/study-materials/${material.file}" download>Download</a>
                </div>
            `;
            materialsList.appendChild(materialCard);
        });
    }
    
    // Populate assignments
    function populateAssignments() {
        const assignmentsList = document.querySelector('.assignments-list');
        if (!assignmentsList) return;
        
        assignmentsList.innerHTML = '';
        
        assignments.forEach(assignment => {
            const assignmentItem = document.createElement('div');
            assignmentItem.className = 'assignment-item';
            assignmentItem.innerHTML = `
                <div class="assignment-info">
                    <h4>${assignment.title}</h4>
                    <p>${assignment.subject} | Due: ${assignment.dueDate}</p>
                </div>
                <div class="assignment-status ${assignment.status}">
                    ${assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                </div>
            `;
            assignmentsList.appendChild(assignmentItem);
        });
    }
    
    // Populate results
    function populateResults() {
        const resultsTable = document.querySelector('.results-table');
        if (!resultsTable) return;
        
        // Create table header
        resultsTable.innerHTML = `
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Term 1</th>
                    <th>Term 2</th>
                    <th>Term 3</th>
                    <th>Average</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;
        
        const tbody = resultsTable.querySelector('tbody');
        
        results.forEach(result => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${result.subject}</td>
                <td>${result.term1}</td>
                <td>${result.term2}</td>
                <td>${result.term3}</td>
                <td><strong>${result.average}</strong></td>
            `;
            tbody.appendChild(row);
        });
    }
    
    // Initialize student portal content
    if (studentPortalModal) {
        populateStudyMaterials();
        populateAssignments();
        populateResults();
        
        // Filter study materials by subject
        const subjectFilter = document.getElementById('subjectFilter');
        if (subjectFilter) {
            subjectFilter.addEventListener('change', function() {
                populateStudyMaterials(this.value);
            });
        }
    }
    
    // Sample data for staff portal
    const staffMaterials = [...studyMaterials];
    const students = [
        { id: 'S001', name: 'John Deng', class: 'primary5', contact: 'john.d@email.com' },
        { id: 'S002', name: 'Mary Akech', class: 'primary4', contact: 'mary.a@email.com' },
        { id: 'S003', name: 'Peter Bol', class: 'secondary2', contact: 'peter.b@email.com' },
        { id: 'S004', name: 'Sarah Nyibol', class: 'primary6', contact: 'sarah.n@email.com' },
        { id: 'S005', name: 'James Gatkuoth', class: 'secondary1', contact: 'james.g@email.com' }
    ];
    
    const announcements = [
        { id: 1, title: 'School Reopening', content: 'School will reopen on June 1st after the holidays.', date: '2023-05-10', audience: 'all' },
        { id: 2, title: 'Staff Meeting', content: 'There will be a staff meeting on Friday at 10 AM.', date: '2023-05-15', audience: 'staff' },
        { id: 3, title: 'Examination Schedule', content: 'The term 2 examination schedule has been posted.', date: '2023-05-18', audience: 'students' }
    ];
    
    // Staff login functionality
    const staffLoginForm = document.getElementById('staffLoginForm');
    const staffPortalModal = document.getElementById('staffPortalModal');
    
    if (staffLoginForm && staffPortalModal) {
        staffLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('staffUsername').value;
            const password = document.getElementById('staffPassword').value;
            
            if (username === 'HDinternational' && password === 'Dove@2023') {
                staffPortalModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                this.reset();
            } else {
                alert('Invalid username or password. Please try again.');
            }
        });
    }
    
    // Populate staff materials
    function populateStaffMaterials(filter = 'all') {
        const materialsTable = document.querySelector('.materials-table tbody');
        if (!materialsTable) return;
        
        materialsTable.innerHTML = '';
        
        const filteredMaterials = filter === 'all' 
            ? staffMaterials 
            : staffMaterials.filter(material => material.subject === filter);
        
        filteredMaterials.forEach(material => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${material.title}</td>
                <td>${material.subject.charAt(0).toUpperCase() + material.subject.slice(1)}</td>
                <td>${material.class.toUpperCase()}</td>
                <td>${material.date}</td>
                <td>
                    <button class="action-btn view-btn">View</button>
                    <button class="action-btn edit-btn">Edit</button>
                    <button class="action-btn delete-btn">Delete</button>
                </td>
            `;
            materialsTable.appendChild(row);
        });
    }
    
    // Populate student list
    function populateStudentList(filter = 'all') {
        const studentsTable = document.querySelector('.students-table tbody');
        if (!studentsTable) return;
        
        studentsTable.innerHTML = '';
        
        const filteredStudents = filter === 'all' 
            ? students 
            : students.filter(student => student.class === filter);
        
        filteredStudents.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.class.toUpperCase()}</td>
                <td>${student.contact}</td>
                <td>
                    <button class="action-btn view-btn">View</button>
                    <button class="action-btn edit-btn">Edit</button>
                </td>
            `;
            studentsTable.appendChild(row);
        });
    }
    
    // Populate announcements
    function populateAnnouncements() {
        const announcementsList = document.querySelector('.announcements-list');
        if (!announcementsList) return;
        
        announcementsList.innerHTML = '';
        
        announcements.forEach(announcement => {
            const announcementItem = document.createElement('div');
            announcementItem.className = 'announcement-item';
            
            let audienceText = '';
            switch (announcement.audience) {
                case 'all':
                    audienceText = 'All (Staff & Students)';
                    break;
                case 'staff':
                    audienceText = 'Staff Only';
                    break;
                case 'students':
                    audienceText = 'Students Only';
                    break;
                case 'specific-class':
                    audienceText = 'Specific Class';
                    break;
            }
            
            announcementItem.innerHTML = `
                <h4>${announcement.title}</h4>
                <p>${announcement.content}</p>
                <div class="announcement-meta">
                    <span>Audience: ${audienceText}</span>
                    <span>${announcement.date}</span>
                </div>
            `;
            announcementsList.appendChild(announcementItem);
        });
    }
    
    // Initialize staff portal content
    if (staffPortalModal) {
        populateStaffMaterials();
        populateStudentList();
        populateAnnouncements();
        
        // Filter materials by subject
        const materialFilter = document.getElementById('materialFilter');
        if (materialFilter) {
            materialFilter.addEventListener('change', function() {
                populateStaffMaterials(this.value);
            });
        }
        
        // Search materials
        const materialSearch = document.getElementById('materialSearch');
        if (materialSearch) {
            materialSearch.addEventListener('input', function() {
                // In a real app, this would filter the materials array
                console.log('Searching for:', this.value);
            });
        }
        
        // Filter students by class
        const classFilter = document.getElementById('classFilter');
        if (classFilter) {
            classFilter.addEventListener('change', function() {
                populateStudentList(this.value);
            });
        }
        
        // Search students
        const studentSearch = document.getElementById('studentSearch');
        if (studentSearch) {
            studentSearch.addEventListener('input', function() {
                // In a real app, this would filter the students array
                console.log('Searching for:', this.value);
            });
        }
        
        // Upload form submission
        const uploadForm = document.getElementById('uploadForm');
        if (uploadForm) {
            uploadForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const title = document.getElementById('materialTitle').value;
                const subject = document.getElementById('materialSubject').value;
                const classLevel = document.getElementById('materialClass').value;
                const description = document.getElementById('materialDescription').value;
                const file = document.getElementById('materialFile').files[0];
                
                if (!title || !subject || !classLevel || !file) {
                    alert('Please fill in all required fields.');
                    return;
                }
                
                // In a real app, this would upload to a server
                const newMaterial = {
                    id: staffMaterials.length + 1,
                    title,
                    subject,
                    class: classLevel,
                    description,
                    date: new Date().toISOString().split('T')[0],
                    file: file.name
                };
                
                staffMaterials.push(newMaterial);
                populateStaffMaterials();
                
                alert('Material uploaded successfully!');
                this.reset();
            });
        }
        
        // New announcement form submission
        const newAnnouncementForm = document.getElementById('newAnnouncementForm');
        if (newAnnouncementForm) {
            newAnnouncementForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const title = document.getElementById('announcementTitle').value;
                const content = document.getElementById('announcementContent').value;
                const audience = document.getElementById('announcementAudience').value;
                const classLevel = audience === 'specific-class' 
                    ? document.getElementById('announcementClass').value 
                    : null;
                
                if (!title || !content || !audience) {
                    alert('Please fill in all required fields.');
                    return;
                }
                
                // In a real app, this would send to a server
                const newAnnouncement = {
                    id: announcements.length + 1,
                    title,
                    content,
                    date: new Date().toISOString().split('T')[0],
                    audience: classLevel ? 'specific-class' : audience
                };
                
                announcements.unshift(newAnnouncement);
                populateAnnouncements();
                
                alert('Announcement published successfully!');
                this.reset();
                announcementForm.style.display = 'none';
            });
        }
    }
});