let str = `亲们，你们能用一个表达式，实现整数、小数的千分位吗？
2811869.8076
2811869.8076265824
2611319
1873645928345.234626
22022
1996年（勿误伤）
ISO20000-1:2005（勿误伤）
`

let processedString = str.replaceAll(/\d+(\.\d+)?(?=[ \n\r])/g, (match, nameGroups) => {
    return formatNumber(match)
})

/* 格式化数字，添加千位符 */
function formatNumber(numberStr){
    let sections = numberStr.split('.')
    if (sections.length > 1){ // 带小数点的
        let left = sections[0]
        left = addComaToStr(left, true)
        let right = sections[1]
        right = addComaToStr(right)
        return left + '.' + right
    } else { // 整数
        return addComaToStr(sections[0], true)
    }
}

/* 给字符串添加 , */
// [1,2,3,4] => [1,2,3,',',4]
// isReverse 就将字符串反转方向，比如：整数部分需要反转
function addComaToStr(str, isReverse){
    let letterArray = str.split('')
    if (isReverse){
        letterArray.reverse() // 反转过来
    }
    let sectionSize = letterArray.length / 3
    // let lastOffset = letterArray.length % 3
    for (let i = 0; i < sectionSize; i++) {
        letterArray.splice(i*3 + i,0,',')
    }
    letterArray.shift() // 去除头上的 `,`
    if (isReverse){
        return letterArray.reverse().join('')
    } else {
        return letterArray.join('')
    }
}

console.log(processedString)
