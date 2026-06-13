const weekLabels = ['日', '一', '二', '三', '四', '五', '六']

export const sortArticlesByDate = (list) => [...list].sort((a, b) => new Date(b.date) - new Date(a.date))

export const getFeaturedArticles = (list, limit = 3) =>
  sortArticlesByDate(list)
    .filter((article) => article.featured)
    .slice(0, limit)

export const getLatestArticles = (list, limit = 4) => sortArticlesByDate(list).slice(0, limit)

export const getRecommendedArticles = (list, slug, limit = 3) =>
  sortArticlesByDate(list)
    .filter((article) => article.slug !== slug)
    .sort((a, b) => Number(b.recommended) - Number(a.recommended))
    .slice(0, limit)

export const getAllTags = (list) => {
  const tags = new Set()
  list.forEach((article) => {
    article.tags.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags)
}

export const searchArticles = (list, keyword) => {
  const value = keyword.trim().toLowerCase()
  if (!value) {
    return list
  }
  return list.filter((article) => {
    const matchTitle = article.title.toLowerCase().includes(value)
    const matchExcerpt = article.excerpt.toLowerCase().includes(value)
    const matchTag = article.tags.some((tag) => tag.toLowerCase().includes(value))
    return matchTitle || matchExcerpt || matchTag
  })
}

export const filterArticlesByTag = (list, tag) => {
  if (!tag) {
    return list
  }
  return list.filter((article) => article.tags.includes(tag))
}

export const paginateArticles = (list, page = 1, pageSize = 6) => {
  const start = (page - 1) * pageSize
  return list.slice(start, start + pageSize)
}

export const getPageCount = (length, pageSize = 6) => Math.max(1, Math.ceil(length / pageSize))

export const getArchiveMonths = (list) => {
  const monthMap = new Map()
  sortArticlesByDate(list).forEach((article) => {
    const monthKey = article.date.slice(0, 7)
    if (!monthMap.has(monthKey)) {
      monthMap.set(monthKey, [])
    }
    monthMap.get(monthKey).push(article)
  })

  return Array.from(monthMap.entries()).map(([key, entries]) => ({
    key,
    label: key.replace('-', ' / '),
    entries,
  }))
}

export const getCalendarDays = (monthKey, monthArticles) => {
  const [year, month] = monthKey.split('-').map(Number)
  const firstDay = new Date(year, month - 1, 1)
  const totalDays = new Date(year, month, 0).getDate()
  const startOffset = firstDay.getDay()
  const result = []
  const articleMap = new Map()

  monthArticles.forEach((article) => {
    articleMap.set(Number(article.date.slice(-2)), article)
  })

  for (let i = 0; i < startOffset; i += 1) {
    result.push({ id: `empty-${i}`, empty: true })
  }

  for (let day = 1; day <= totalDays; day += 1) {
    result.push({
      id: `${monthKey}-${day}`,
      day,
      label: weekLabels[(startOffset + day - 1) % 7],
      article: articleMap.get(day) || null,
      empty: false,
    })
  }

  return result
}
