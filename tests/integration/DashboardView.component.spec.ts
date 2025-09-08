import { mount, flushPromises } from '@vue/test-utils'
import DashboardView from '@/presentation/views/DashboardView.vue'
import {describe, it, expect, vi} from 'vitest'

vi.mock('vue-chartjs', () => ({
    Line: {
        name: 'LineChartMock',
        props: ['data', 'options'],
        template: '<div class="line-chart-mock" />',
    },
}))

describe('DashboardView', () => {
    it('should render the "Cargando..." message initially', () => {
        const wrapper = mount(DashboardView)
        expect(wrapper.html()).toMatch(/Cargando\.\.\./)
    })

    it('should render metric cards after fetching metrics', async () => {
        const wrapper = mount(DashboardView)
        await flushPromises()

        expect(wrapper.html()).not.toMatch(/Cargando\.\.\./)

        const metricCards = wrapper.findAllComponents({ name: 'MetricCard' })
        expect(metricCards.length).toEqual(4)

        expect(metricCards[0].props('title')).toEqual('Ventas hoy')
        expect(metricCards[0].props('value')).toEqual('$12.000,00')
        expect(metricCards[0].props('subtitle')).toEqual('vs. ayer: +12%')

        expect(metricCards[1].props('title')).toEqual('Clientes nuevos')
        expect(metricCards[1].props('value')).toEqual(12)
        expect(metricCards[1].props('subtitle')).toEqual('vs. semana pasada')
    })

    it('should always render the SalesChart component', () => {
        const wrapper = mount(DashboardView)
        const salesChart = wrapper.findComponent({ name: 'SalesChart' })
        expect(salesChart.exists()).toBeTruthy()
    })
})