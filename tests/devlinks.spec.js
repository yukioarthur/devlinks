import { test, expect } from '@playwright/test'
import { mkdirSync } from 'node:fs'

test('layout escuro responsivo, foto e links externos', async ({ page }) => {
  const errors = []
  page.on('pageerror', e => errors.push(e.message))
  for (const width of [320, 360, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: width === 1440 ? 1024 : 800 })
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
    await expect(page.getByRole('heading', { name: 'Arthur Yukio' })).toBeVisible()
    await expect(page.locator('.link-button')).toHaveCount(4)
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    expect(await page.locator('.profile img').evaluate(img => img.complete && img.naturalWidth > 0)).toBe(true)
    const first = await page.locator('.link-button').first().boundingBox()
    expect(first.height).toBeGreaterThanOrEqual(56)
    expect(first.y).toBe(312)
    if (width === 360 || width === 1440) {
      mkdirSync('docs/evidencias', { recursive: true })
      await page.screenshot({ path: `docs/evidencias/dark-${width}.png`, fullPage: true })
    }
  }
  for (const link of await page.locator('a').all()) {
    expect(new URL(await link.getAttribute('href')).protocol).toBe('https:')
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    await expect(link).toHaveAttribute('target', '_blank')
  }
  expect(errors).toEqual([])
})

test('claro mantém geometria e funciona em desktop e mobile', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Modo claro' }).click()
  for (const width of [320, 360, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: width === 1440 ? 1024 : 800 })
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
    await expect(page.locator('html')).toHaveCSS('color', 'rgb(0, 0, 0)')
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    const first = await page.locator('.link-button').first().boundingBox()
    expect(first.y).toBe(312)
    expect(first.width).toBe(Math.min(width - 48, 540))
    if (width === 360 || width === 1440) {
      await page.screenshot({ path: `docs/evidencias/light-${width}.png`, fullPage: true })
    }
  }
})

test('tema alterna pelo teclado e persiste depois de atualizar', async ({ page }) => {
  await page.goto('/')
  const toggle = page.getByRole('button', { name: 'Modo claro' })
  await expect(toggle).toHaveAttribute('aria-pressed', 'false')
  await page.keyboard.press('Tab')
  await expect(toggle).toBeFocused()
  await page.keyboard.press('Space')
  await expect(toggle).toHaveAttribute('aria-pressed', 'true')
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await toggle.click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.reload()
  await expect(toggle).toHaveAttribute('aria-pressed', 'false')
})

test('ignora valor inválido no storage', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('devlinks:theme', 'outro'))
  await page.goto('/')
  await expect(page.getByRole('button', { name: 'Modo claro' })).toHaveAttribute('aria-pressed', 'false')
})

test('tema continua funcionando com storage bloqueado', async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('Bloqueado', 'SecurityError') } }))
  await page.goto('/')
  await page.getByRole('button', { name: 'Modo claro' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
})
