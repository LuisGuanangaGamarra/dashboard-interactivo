import { test, expect } from '@playwright/test'

test('renderiza métricas y gráfico', async ({ page }) => {
    await page.goto('/')

    const cards = page.locator('.metrics-card')
    await expect(cards.first()).toBeVisible()
    await expect(page.getByText('Ventas hoy')).toBeVisible()
    await expect(page.getByText('Clientes nuevos')).toBeVisible()
    await expect(page.getByText('Tickets abiertos')).toBeVisible()



    await expect(page.locator('.sales-chart').first()).toBeVisible()
    await expect(page.locator('canvas')).toHaveCount(1)
})