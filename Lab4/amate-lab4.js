// A Mate
// ITMD 541-01 Graduate Student

(function () {
    // Update the hero headline text
    const mainHeadline = document.querySelector('#hero h1');
    if (mainHeadline) {
        mainHeadline.textContent = "Uplift Your Brand with Stellar Marketing";
        console.log("Hero headline updated.");
    } else {
        console.error("Hero headline not found.");
    }
})();

(function () {
    // Update the hero subtext with bold and italic formatting
    const subText = document.querySelector('#hero p');
    if (subText) {
        subText.innerHTML = 'Utilize cutting-edge strategies from Stellar Marketing to help your business <strong><em>thrive</em></strong> and <strong><em>excel</em></strong>.';
        console.log("Hero subtext updated.");
    } else {
        console.error("Hero subtext not found.");
    }
})();

(function () {
    // Change the hero section background image
    const heroBackground = document.querySelector('#hero');
    if (heroBackground) {
        heroBackground.style.backgroundImage = 'url("https://picsum.photos/id/683/1280/720")';
        heroBackground.style.backgroundSize = 'cover';
        heroBackground.style.backgroundPosition = 'center';
        console.log("Hero background updated.");
    } else {
        console.error("Hero section not found.");
    }
})();

(function () {
    // Match the navbar background color with the footer
    const siteFooter = document.querySelector('footer');
    const siteNav = document.querySelector('nav');
    const siteHeader = document.querySelector('header');

    if (siteFooter && siteNav) {
        siteNav.style.backgroundColor = window.getComputedStyle(siteFooter).backgroundColor;
        siteHeader.style.backgroundColor = window.getComputedStyle(siteFooter).backgroundColor;
        console.log("Navbar background color updated.");
    } else {
        console.error("Footer or Navbar not found.");
    }
})();

(function () {
    // Remove the "Get Started" CTA button from the hero section
    const ctaButton = document.querySelector('a[href="contact.html"].bg-blue-600');
    if (ctaButton) {
        ctaButton.remove();
        console.log("CTA button removed.");
    } else {
        console.error("CTA button not found.");
    }
})();

(function () {
    // Center align section headings for Services, Solutions, and Contact
    document.querySelectorAll('h2').forEach(heading => heading.style.textAlign = 'center');
    console.log("Section headings centered.");
})();

(function () {
    // Change the color of service icons to green (#47C714)
    document.querySelectorAll('.material-symbols-outlined.text-6xl').forEach(icon => icon.style.color = '#47C714');
    console.log("Service icons color updated.");
})();

(function () {
    // Update the digital marketing icon to 'Ads Click'
    const digitalMarketingIcon = document.querySelector('span[data-icon="digital"]');
    if (digitalMarketingIcon) {
        digitalMarketingIcon.textContent = 'ads_click';
        console.log("Digital marketing icon updated.");
    } else {
        console.error("Digital marketing icon not found.");
    }
})();

function adjustGrid() {
    const productCardsContainer = document.querySelector('[data-section="product_cards"]');
    if (productCardsContainer) {
        productCardsContainer.classList.remove('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4');
        if (window.innerWidth >= 1024) {
            productCardsContainer.classList.add('grid-cols-4');
        } else if (window.innerWidth >= 768) {
            productCardsContainer.classList.add('md:grid-cols-2');
        } else {
            productCardsContainer.classList.add('grid-cols-1');
        }
    } else {
        console.error("Product cards container not found.");
    }
}
adjustGrid();
window.addEventListener('resize', adjustGrid);

(function () {
    // Change the Musicians image in the "Specialized Marketing Solutions" section
    const musicianImg = document.querySelector('img[alt="Musicians"]');
    if (musicianImg) {
        musicianImg.src = 'https://picsum.photos/id/453/400/300';
        console.log("Musicians image updated.");
    } else {
        console.error("Musicians image not found.");
    }
})();

(function () {
    // Form validation - prevents submission to broken URL and validates input
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const userName = contactForm.querySelector('input[name="name"]').value.trim();
            const userEmail = contactForm.querySelector('input[name="email"]').value.trim();

            if (userName && userEmail) {
                alert(`Thank you, ${userName}! We will be in touch with you shortly at ${userEmail}.`);
            } else {
                alert("Please provide a name and email.");
            }
        });
        console.log("Form validation applied.");
    }
})();

