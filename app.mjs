import lo from 'lodash'

const items = [1, [2, [3, [4]]]]

const newItems = lo.flattenDeep(items)

console.log(newItems)