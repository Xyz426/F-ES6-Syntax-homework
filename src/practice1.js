// TODO 可以思考一下可否用reduce来做
const parseData = ({data,column}) => {
    // TODO 使用map做数组与数组的转化，不用声明新数组
    // 要声明的话，这里也应该用const，list的push不算对其重新赋值（JS中引用类型相关知识点可以看看）
    const output = [];
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
