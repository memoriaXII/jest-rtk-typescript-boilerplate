import { expect, test } from '@playwright/test'

test('basic test', async ({ page }) => {
  // 打开一个页面并跳转到 https://playwright.dev/
  await page.goto('https://playwright.dev/')
  // 通过类选择器，选中类目为navbar__title的元素的innerText
  const name = await page.innerText('.navbar__title')
  // 断言校验是否匹配
  expect(name).toBe('Playwright')
})
