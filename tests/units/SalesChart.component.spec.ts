import { mount } from '@vue/test-utils'
import SalesChart from '@/presentation/components/SalesChart.vue'
import { describe, it, expect, vi } from 'vitest'

vi.mock('vue-chartjs', () => ({
    Line: {
        name: 'LineChartMock',
        props: ['data', 'options'],
        template: '<div class="line-chart-mock" />',
    },
}))

describe('SalesChart', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('should render the component properly', () => {
        const wrapper = mount(SalesChart)
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('should render the title "Ventas por mes"', () => {
        const wrapper = mount(SalesChart)
        expect(wrapper.text()).toContain('Ventas por mes')
    })

    it('should pass the correct chart data to the Line chart', () => {
        const wrapper = mount(SalesChart)
        const chart = wrapper.findComponent({ name: 'LineChartMock' })

        expect(chart.props('data')).toEqual({
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Ventas',
                    data: [1500, 3200, 2800, 3500, 4000, 4600],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    fill: true,
                },
            ],
        })
    })

    it('should pass the correct chart options to the Line chart', () => {
        const wrapper = mount(SalesChart)
        const chart = wrapper.findComponent({ name: 'LineChartMock' })

        expect(chart.props('options')).toEqual({
            responsive: true,
            maintainAspectRatio: false,
        })
    })

})