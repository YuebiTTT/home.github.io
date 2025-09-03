/**
 * 增强交互功能 - 为网站添加更多动态效果
 */

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 1. 为头像添加悬停效果
    enhanceAvatarInteraction();
    
    // 2. 为导航链接添加平滑滚动效果
    enhanceNavigationSmoothScroll();
    
    // 3. 添加返回顶部按钮
    addBackToTopButton();
    
    // 4. 为社交媒体图标添加悬停动画
    enhanceSocialMediaIcons();
    
    // 5. 添加页面元素的滚动显示动画
    enhanceScrollAnimation();
});

/**
 * 增强头像交互效果
 */
function enhanceAvatarInteraction() {
    const avatar = document.querySelector('.js-avatar');
    if (avatar) {
        avatar.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        avatar.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0)';
        });
    }
}

/**
 * 增强导航链接的平滑滚动效果
 */
function enhanceNavigationSmoothScroll() {
    const navLinks = document.querySelectorAll('a.blog-button');
    navLinks.forEach(link => {
        // 只对内部链接应用平滑滚动
        if (link.getAttribute('href') === '/' || link.getAttribute('href') === '#') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    });
}

/**
 * 添加返回顶部按钮
 */
function addBackToTopButton() {
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'back-to-top';
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<i class="social iconfont icon-arrowup"></i>';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s, visibility 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    `;
    
    document.body.appendChild(backToTopButton);
    
    // 显示/隐藏返回顶部按钮
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
    
    // 点击返回顶部
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 添加悬停效果
    backToTopButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'background-color 0.3s, transform 0.3s';
    });
    
    backToTopButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        this.style.transform = 'scale(1)';
    });
}



/**
 * 增强社交媒体图标的交互
 */
function enhanceSocialMediaIcons() {
    const socialIcons = document.querySelectorAll('.navigation__item a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

/**
 * 增强滚动动画效果
 */
function enhanceScrollAnimation() {
    // 为更多元素添加滚动显示动画
    const animatedElements = document.querySelectorAll('.navigation__item, .social-icon');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}