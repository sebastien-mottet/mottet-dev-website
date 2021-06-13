export const animate = (className) => {
    return (
        (inView, entry) => {
            if (inView) {
                entry.target.classList.add(className);
            } else {
                entry.target.classList.remove(className);
            }
        }
    )
}

export const openLinkNewTab = (url) => {
    window.open(url, "_blank") 
}
