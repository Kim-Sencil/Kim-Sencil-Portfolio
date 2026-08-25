/* =========================================
   INFORMATION BUTTONS
========================================= */

const profileButtons =
    document.querySelectorAll(".profile-button");

const detailsPanel =
    document.getElementById("detailsPanel");

const detailsContent =
    document.getElementById("detailsContent");

let activeSection = null;


/* =========================================
   INFORMATION CONTENT
========================================= */

const sectionContent = {

    contact: `
        <div class="details-header">
            <h2>Contact Info:</h2>
        </div>

        <div class="details-body">

            <div class="contact-grid">

                <div class="contact-column">

                    <div class="info-item">
                        <span class="info-label">
                            Mobile Number
                        </span>

                        <span class="info-value">
                            09647529692
                        </span>
                    </div>


                    <div class="info-item">
                        <span class="info-label">
                            Hotline Number
                        </span>

                        <span class="info-value">
                            222-9565
                        </span>
                    </div>


                    <div class="info-item">
                        <span class="info-label">
                            Email
                        </span>

                        <span class="info-value">
                            <a href="mailto:sencil.kimsencil@gmail.com">
                                sencil.kimsencil@gmail.com
                            </a>
                        </span>
                    </div>

                </div>


                <div class="contact-column">

                    <div class="info-item">

                        <span class="info-label">
                            Facebook
                        </span>

                        <span class="info-value">
                            Kim Sencil
                        </span>

                    </div>


                    <div class="info-item">

                        <span class="info-label">
                            Instagram
                        </span>

                        <span class="info-value">
                            wh1te_ferr4ri
                        </span>

                    </div>

                </div>

            </div>

        </div>
    `,


    skills: `
        <div class="details-header">
            <h2>Skills and Weaknesses</h2>
        </div>

        <div class="details-body">

            <div class="skills-grid">

                <div class="skills-column">

                    <h3>Skills</h3>

                    <ul>

                        <li>
                            specializes in the field of chemistry and geology
                        </li>

                        <li>
                            quality analysis capabilities
                        </li>

                        <li>
                            creative and critical thinker
                        </li>

                        <li>
                            manages time responsively
                        </li>

                        <li>
                            has leadership experience
                        </li>

                    </ul>

                </div>


                <div class="skills-column">

                    <h3>Weaknesses</h3>

                    <ul>

                        <li>
                            requires rest constantly
                        </li>

                        <li>
                            functionality decreases with the lack of food
                        </li>

                        <li>
                            may have the tendency to overthink certain things
                        </li>

                        <li>
                            leadership is compromised when fatigued and may
                            prefer solitude
                        </li>

                    </ul>

                </div>

            </div>

        </div>
    `,


    additional: `
        <div class="details-header">
            <h2>Additional Info</h2>
        </div>

        <div class="details-body">

            <div class="additional-grid">

                <div class="additional-column">

                    <div class="favorite-item">

                        <strong>Favorite Color</strong>

                        <span>Red</span>

                    </div>


                    <div class="favorite-item">

                        <strong>Favorite Food</strong>

                        <span>Pasta (any kind)</span>

                    </div>


                    <div class="favorite-item">

                        <strong>Favorite Song</strong>

                        <span>
                            Hotel California by Eagles
                        </span>

                    </div>

                </div>


                <div class="additional-column hobbies-column">

                    <h3>Hobbies</h3>

                    <ul>

                        <li>Drawing</li>

                        <li>Playing Guitar</li>

                        <li>Gaming</li>

                        <li>Hiking</li>

                    </ul>

                </div>

            </div>

        </div>
    `
};


/* =========================================
   BUTTON INTERACTION
========================================= */

profileButtons.forEach(button => {

    button.addEventListener("click", () => {

        const section = button.dataset.section;


        /* Close if clicking the active button */

        if (activeSection === section) {

            detailsPanel.classList.remove("open");

            detailsPanel.setAttribute(
                "aria-hidden",
                "true"
            );

            button.setAttribute(
                "aria-expanded",
                "false"
            );

            activeSection = null;

            return;
        }


        /* Reset all buttons */

        profileButtons.forEach(otherButton => {

            otherButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });


        /* Activate selected button */

        button.setAttribute(
            "aria-expanded",
            "true"
        );


        /* Replace the SINGLE lower panel */

        detailsContent.innerHTML =
            sectionContent[section];


        detailsPanel.classList.add("open");

        detailsPanel.setAttribute(
            "aria-hidden",
            "false"
        );


        activeSection = section;


        /*
           Smoothly move the lower panel
           into view.
        */

        setTimeout(() => {

            detailsPanel.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });

        }, 150);

    });

});


/* =========================================
   PROFILE PICTURE OVERLAY
========================================= */

const profilePictureButton =
    document.getElementById(
        "profilePictureButton"
    );

const pfpOverlay =
    document.getElementById("pfpOverlay");

const overlayClose =
    document.getElementById("overlayClose");


/* Open overlay */

profilePictureButton.addEventListener(
    "click",
    () => {

        pfpOverlay.classList.add("open");

        pfpOverlay.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";
    }
);


/* Close overlay */

function closePfpOverlay() {

    pfpOverlay.classList.remove("open");

    pfpOverlay.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}


/* Close button */

overlayClose.addEventListener(
    "click",
    closePfpOverlay
);


/* Click outside enlarged PFP */

pfpOverlay.addEventListener(
    "click",
    event => {

        if (event.target === pfpOverlay) {

            closePfpOverlay();

        }

    }
);


/* Escape key */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            pfpOverlay.classList.contains("open")
        ) {

            closePfpOverlay();

        }

    }
);
