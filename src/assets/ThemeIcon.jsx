export default function ThemeIcon({ isDark = false, isSystem = false }) {
    return (
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
            <title>{isSystem ? "System" : isDark ? "Dark" : "Light"}</title>

            <path
                fill={"var(--clr-fg)"}
                stroke={"var(--clr-fg)"}
                fillOpacity={0.35}
                strokeOpacity={1}
                className="theme-toggle-icon"
                d={
                    (isSystem || isDark)
                        ? "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
                        : "M 15,15 m 8, 0 a 8,8 0 1,0 -16,0 a 8,8 0 1,0  16,0"
                }
                transform={isSystem ? "scale(0.9) translate(4 4)" : (isDark ? "scale(1.3)" : "scale(1)")}
            />
            <g
                stroke={(!isSystem && isDark) ? "none" : "var(--clr-fg)"}
                className="sun-rays"
            >
                <line
                    id="ray"
                    strokeWidth="2"
                    strokeLinecap="round"
                    x1="15"
                    y1="1"
                    x2="15"
                    y2="4"
                />
                <use href="#ray" transform="rotate(45 15 15)" />
                <use href="#ray" transform="rotate(90 15 15)" />
                <use href="#ray" transform="rotate(135 15 15)" />
                <use href="#ray" transform="rotate(180 15 15)" />
                <use href="#ray" transform="rotate(225 15 15)" />
                <use href="#ray" transform="rotate(270 15 15)" />
                <use href="#ray" transform="rotate(315 15 15)" />
            </g>
        </svg>
    );
}
