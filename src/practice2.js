// TODO 逻辑纰漏，当sections内items顺序不是index顺序时会有问题
const inject = (items, sections) => {
    // TODO 本来整个逻辑是对的，但你这里sort内箭头函数没有return，所以出问题了
    sections.sort((a,b) => a.index - b.index).forEach((section, index) => {
        items.splice(section.index + index, 0, section.content)
    });
    return items;
}
export { inject };
