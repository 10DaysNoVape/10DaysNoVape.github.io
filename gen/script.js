document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const progressButton = document.getElementById('progress-button');
    const resetButton = document.getElementById('reset-button');
    const currentDayElement = document.getElementById('current-day');
    const dayMessageElement = document.getElementById('day-message');
    const achievementsElement = document.getElementById('achievements-text');
    const progressBar = document.getElementById('progress-bar');
    
    // Daily messages and achievements
    const dailyData = [
        {
            day: 0,
            message: "เริ่มต้นการเดินทาง 10 วันของคุณวันนี้!",
            achievements: "เมื่อคุณเริ่มต้น คุณจะเริ่มเห็นการเปลี่ยนแปลงทางสุขภาพทีละน้อย"
        },
        {
            day: 1,
            message: "วันแรกอาจจะยาก แต่คุณทำได้! ร่างกายของคุณเริ่มกำจัดนิโคตินแล้ว",
            achievements: "ระดับออกซิเจนในเลือดเริ่มกลับสู่ระดับปกติ, ความดันโลหิตและอัตราการเต้นของหัวใจลดลง"
        },
        {
            day: 2,
            message: "อาการอยากบุหรี่ไฟฟ้าจะเริ่มลดลง พยายามดื่มน้ำมากๆ",
            achievements: "ระบบประสาทเริ่มปรับตัว, การรับรสและกลิ่นดีขึ้น"
        },
        {
            day: 3,
            message: "ผ่านมา 3 วันแล้ว! นิโคตินส่วนใหญ่ถูกกำจัดออกจากร่างกายแล้ว",
            achievements: "ระบบหายใจเริ่มฟื้นตัว, หลอดลมเริ่มผ่อนคลาย, ระดับพลังงานเพิ่มขึ้น"
        },
        {
            day: 4,
            message: "อาการถอนนิโคตินเริ่มลดลง ความคิดจะเริ่มชัดเจนขึ้น",
            achievements: "ระบบไหลเวียนเลือดดีขึ้น, สมองได้รับออกซิเจนมากขึ้น"
        },
        {
            day: 5,
            message: "ครึ่งทางแล้ว! คุณทำได้ยอดเยี่ยมมาก",
            achievements: "การไอและการหายใจลำบากเริ่มลดลง, ระบบภูมิคุ้มกันเริ่มฟื้นตัว"
        },
        {
            day: 6,
            message: "ขณะนี้อาการอยากบุหรี่ไฟฟ้าลดลงอย่างมาก",
            achievements: "ระดับความเครียดเริ่มลดลง, คุณภาพการนอนดีขึ้น"
        },
        {
            day: 7,
            message: "หนึ่งสัปดาห์แล้ว! คุณเริ่มสร้างนิสัยใหม่ที่ดีกว่า",
            achievements: "ความเสี่ยงของโรคหัวใจเริ่มลดลง, ผิวพรรณเริ่มดีขึ้น"
        },
        {
            day: 8,
            message: "เพียง 2 วันเท่านั้น! ร่างกายของคุณขอบคุณคุณอย่างมาก",
            achievements: "ความอดทนเพิ่มขึ้น, ระบบหลอดเลือดฟื้นตัว"
        },
        {
            day: 9,
            message: "อีกเพียงวันเดียว! คุณเกือบสำเร็จแล้ว",
            achievements: "ความเสี่ยงต่อการเกิดโรคทางเดินหายใจลดลง, สมรรถภาพทางกายดีขึ้น"
        },
        {
            day: 10,
            message: "ยินดีด้วย! คุณผ่าน 10 วันโดยไม่มีบุหรี่ไฟฟ้าแล้ว",
            achievements: "คุณประสบความสำเร็จในการเอาชนะความอยากนิโคตินและสร้างนิสัยที่ดีต่อสุขภาพ ถ้าคุณทำได้ 10 วัน คุณสามารถทำต่อไปได้!"
        }
    ];

    // Check for saved progress in localStorage
    let currentDay = parseInt(localStorage.getItem('noVapeDay')) || 0;
    updateUI(currentDay);

    // Progress button event listener
    progressButton.addEventListener('click', function() {
        if (currentDay < 10) {
            currentDay++;
            localStorage.setItem('noVapeDay', currentDay);
            updateUI(currentDay);
        }
    });

    // Reset button event listener
    resetButton.addEventListener('click', function() {
        if (confirm('คุณแน่ใจหรือไม่ที่จะเริ่มต้นใหม่? ความก้าวหน้าทั้งหมดจะถูกรีเซ็ต')) {
            currentDay = 0;
            localStorage.setItem('noVapeDay', currentDay);
            updateUI(currentDay);
        }
    });

    // Function to update UI based on current day
    function updateUI(day) {
        // Update day counter
        currentDayElement.textContent = day;
        
        // Update progress bar (each day is 10%)
        const progressPercentage = day * 10;
        progressBar.style.width = `${progressPercentage}%`;
        
        // Update button text based on progress
        if (day === 0) {
            progressButton.textContent = 'เริ่มการเดินทาง';
        } else if (day < 10) {
            progressButton.textContent = 'บันทึกวันถัดไป';
        } else {
            progressButton.textContent = 'ยินดีด้วย! คุณทำได้แล้ว';
            progressButton.disabled = true;
        }

        // Update daily message and achievements
        const dayData = dailyData.find(data => data.day === day);
        if (dayData) {
            dayMessageElement.textContent = dayData.message;
            achievementsElement.textContent = dayData.achievements;
        }
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    // Animation for reason cards
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.reason-card').forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});
