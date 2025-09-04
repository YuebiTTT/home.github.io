/**
 * 增强交互功能 - 为网站添加更多动态效果
 * 包含粒子背景、打字机效果、鼠标跟随、视差滚动和点击效果等
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
    
    // 6. 添加粒子背景效果
    addParticleBackground();
    
    // 7. 添加鼠标跟随效果
    addMouseFollowerEffect();
    
    // 9. 添加视差滚动效果
    addParallaxEffect();
    
    // 10. 添加页面点击效果
    addClickEffect();
    
    // 11. 为标题添加渐入效果
    enhanceTitleAnimation();
    
    // 12. 添加窗口大小变化时的响应式调整
    addResponsiveAdjustments();
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
 * 增强标题动画效果
 */
function enhanceTitleAnimation() {
    const title = document.querySelector('.panel-cover__title');
    if (!title) return;
    
    // 添加标题的渐入和缩放效果
    title.style.opacity = '0';
    title.style.transform = 'scale(0.8)';
    title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    // 延迟执行，让其他元素先显示
    setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'scale(1)';
    }, 1500);
    
    // 为标题添加悬停效果
    title.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    title.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

/**
 * 添加响应式调整
 */
function addResponsiveAdjustments() {
    // 窗口大小变化时调整特效
    function adjustEffectsForScreenSize() {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        
        // 移动设备上优化粒子效果
        const particleContainer = document.getElementById('particle-container');
        if (particleContainer) {
            particleContainer.style.opacity = isMobile ? '0.4' : '0.7';
        }
        
        // 移动设备上关闭鼠标跟随效果以节省性能
        const mouseFollower = document.getElementById('mouse-follower');
        if (mouseFollower) {
            mouseFollower.style.display = isMobile ? 'none' : 'block';
        }
    }
    
    // 初始执行一次
    adjustEffectsForScreenSize();
    
    // 窗口大小变化时重新调整
    window.addEventListener('resize', adjustEffectsForScreenSize);
    
    // 滚动时的性能优化
    let lastScrollTime = 0;
    const scrollThrottle = 16; // 约60fps
    
    window.addEventListener('scroll', function() {
        const now = Date.now();
        if (now - lastScrollTime < scrollThrottle) {
            return;
        }
        lastScrollTime = now;
        
        // 这里可以添加滚动时需要执行的优化代码
    });
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

/**
 * 添加粒子背景效果
 */
function addParticleBackground() {
    // 性能检测：如果设备性能较低，减少粒子数量
    const isLowPerformance = window.matchMedia('(max-width: 768px)').matches || 
                            navigator.userAgent.match(/mobile/i) !== null;
    const particleCount = isLowPerformance ? 15 : 30;
    
    // 创建粒子容器
    const particleContainer = document.createElement('div');
    particleContainer.id = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.7;
    `;
    document.body.appendChild(particleContainer);
    
    // 创建粒子
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const speedX = (Math.random() - 0.5) * 0.3;
        const speedY = (Math.random() - 0.5) * 0.3;
        const opacity = Math.random() * 0.7 + 0.3;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background-color: rgba(255, 255, 255, ${opacity});
            border-radius: 50%;
            left: ${x}%;
            top: ${y}%;
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        `;
        
        particleContainer.appendChild(particle);
        particles.push({
            element: particle,
            x, y, size, speedX, speedY
        });
    }
    
    // 动画循环 - 使用requestAnimationFrame优化性能
    let animationFrameId;
    function animateParticles() {
        particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // 边界检测
            if (particle.x < 0 || particle.x > 100) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > 100) particle.speedY *= -1;
            
            particle.element.style.left = `${particle.x}%`;
            particle.element.style.top = `${particle.y}%`;
        });
        
        animationFrameId = requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
    
    // 窗口隐藏时暂停动画，节省性能
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationFrameId);
        } else {
            animateParticles();
        }
    });
}

/**
 * 添加鼠标跟随效果
 */
function addMouseFollowerEffect() {
    const follower = document.createElement('div');
    follower.id = 'mouse-follower';
    follower.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: width 0.3s, height 0.3s, background-color 0.3s;
        mix-blend-mode: screen;
    `;
    
    document.body.appendChild(follower);
    
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    const ease = 0.1; // 缓动系数
    
    // 鼠标移动时更新位置
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        follower.style.display = 'block';
    });
    
    // 鼠标离开视窗时隐藏
    document.addEventListener('mouseleave', () => {
        follower.style.display = 'none';
    });
    
    // 为链接添加交互效果
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            follower.style.width = '24px';
            follower.style.height = '24px';
            follower.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        });
        
        link.addEventListener('mouseleave', () => {
            follower.style.width = '8px';
            follower.style.height = '8px';
            follower.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        });
    });
    
    // 动画循环
    function animateFollower() {
        followerX += (mouseX - followerX) * ease;
        followerY += (mouseY - followerY) * ease;
        
        follower.style.left = `${followerX}px`;
        follower.style.top = `${followerY}px`;
        
        requestAnimationFrame(animateFollower);
    }
    
    animateFollower();
}

/**
 * 添加视差滚动效果
 */
function addParallaxEffect() {
    const panel = document.getElementById('panel');
    if (!panel) return;
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        // 视差效果，滚动距离的1/5
        panel.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        panel.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
}

/**
 * 添加页面点击效果
 */
function addClickEffect() {
    document.addEventListener('click', (e) => {
        const clickEffect = document.createElement('div');
        const size = Math.random() * 40 + 20;
        const x = e.clientX - size / 2;
        const y = e.clientY - size / 2;
        
        clickEffect.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            z-index: 9999;
            transform: scale(0);
            animation: click-animation 0.6s ease-out;
        `;
        
        // 添加动画样式
        const style = document.createElement('style');
        style.textContent = `
            @keyframes click-animation {
                0% {
                    transform: scale(0);
                    opacity: 1;
                }
                100% {
                    transform: scale(3);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(clickEffect);
        
        // 动画结束后移除元素
        setTimeout(() => {
            clickEffect.remove();
            // 如果是动态创建的样式，也需要移除
            if (style && style.parentNode === document.head) {
                style.remove();
            }
        }, 600);
    });
}