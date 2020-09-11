const inject = (items, sections) => {
    
    sections.sort((a,b) => {a.index - b.index}).forEach((section, index) => {
        items.splice(section.index + index, 0, section.content)
    });
    return items;
}
export { inject };
