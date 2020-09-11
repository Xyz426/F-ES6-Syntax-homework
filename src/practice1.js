const parseData = ({data,column}) => {
    let output = [];
    data.map(it => {
        let item = {};
        column.map(key => {
            item[key.name] = it.shift()
        })
        output.push(item);
    })

    return output;
}
export { parseData };
