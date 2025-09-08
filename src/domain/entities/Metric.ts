export interface Metric {
    title: string
    value: {
        number: number,
        isMoney: boolean
    }
    subtitle?: string
}