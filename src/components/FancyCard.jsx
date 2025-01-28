export default function FancyCard({ className, children }) {
    const handleMouseMove = (e) => {
        for (const card of document.getElementsByClassName("card")) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    };
    return (
        <div onMouseMove={handleMouseMove} className={"card"}>
            <div className="card-border" />
            <div className={`${className} card-content`}>{children}</div>
        </div>
    );
}
