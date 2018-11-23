import fetch from '../config/fetch'

/**
 * 新闻列表数据
 */

export const newsList = () => fetch('/static/data/news.json');
export const newsDetail = () => fetch('/static/data/newsDetail.json');