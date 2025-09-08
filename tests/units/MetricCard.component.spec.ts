import { mount } from '@vue/test-utils'
import MetricCard from '@/presentation/components/MetricCard.vue'

describe('MetricCard', () => {
    it('should show the title and value', () => {
        const wrapper = mount(MetricCard, {
            props: {
                title: 'Ventas',
                value: 1234,
                subtitle: 'hoy'
            }
        })
        expect(wrapper.text()).toContain('Ventas')
        expect(wrapper.text()).toContain('1234')
        expect(wrapper.text()).toContain('hoy')
    })
})