import React, { useEffect } from "react";

const KeyboardNavigation = ({ children }) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case "ArrowUp":
                    window.scrollBy(0, -50);
                    break;
                case "ArrowDown":
                    window.scrollBy(0, 50);
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
