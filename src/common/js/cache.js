/*
* @Author: JMyin
* @Date:   2017-07-11 10:58:49
* @Last Modified by:   JMyin
* @Last Modified time: 2017-07-11 12:06:29
*/
import storage from 'good-storage'
const SEARCH_KEY = '__search__'
const SEARCH_MAX_LENGTH = 15

// 存储搜索值
export function saveSearch(query) {
	// 首先获取当前的存储情况，如果没有 就设置为一个空数组
	let searches = storage.get(SEARCH_KEY, [])
	inserArray(searches, query, (item) => {
		return item === query
	}, SEARCH_MAX_LENGTH)
	storage.set(SEARCH_KEY, searches)
	return searches
}

function inserArray(arr, val, compare, maxLen) {
	const index = arr.findIndex(compare)
	// 如果所有为0 表示数组中已经有这条数据 并且是第一个 那就什么都不用做
	if (index === 0) {
		return
	}
	// 如果要插入的值在数组中 但是不是第一个 就要先将其删除 然后再插入到数组的第一个位置
	if (index > 0) {
		arr.splice(index, 1)
	}
	arr.unshift(val)
	if (maxLen && arr.length > maxLen) {
		// 如果数组的长度超过最大值，将最后一个数组元素pop出来
		arr.pop()
	}
}

export function loadSearch() {
	return storage.get(SEARCH_KEY, [])
}