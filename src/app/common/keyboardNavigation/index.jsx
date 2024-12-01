import { useEffect } from "react";

const KeyboardNavigation = ({ children }) => {
    useEffect(() => {
        const getFocusableElements = () => {
            return Array.from(
                document.querySelectorAll(
                    'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
                )
            ).filter((el) => !el.disabled); // Filter out disabled elements
        };

        const handleKeyDown = (event) => {
            const focusableElements = getFocusableElements();
            const activeElement = document.activeElement;

            if (!focusableElements.includes(activeElement)) return;

            const currentIndex = focusableElements.indexOf(activeElement);

            switch (event.key) {
                case "ArrowUp":
                case "ArrowLeft":
                    event.preventDefault()
                    if (currentIndex > 0) {
                        focusableElements[currentIndex - 1].focus();
                    }
                    break;
                case "ArrowDown":
                case "ArrowRight":
                    event.preventDefault()
                    if (currentIndex < focusableElements.length - 1) {
                        focusableElements[currentIndex + 1].focus();
                    }
                    break;
                case "Enter":
                    if (document.activeElement.tagName !== "SELECT") {
                        document.activeElement?.click();
                    }
                    break;
                case "Escape":
                    document.activeElement?.blur();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return <>{children}</>;
};

export default KeyboardNavigation;
