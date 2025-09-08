import type { Metric } from "@/domain/entities/Metric.ts"

export interface MetricRepository {
    getMetrics(): Promise<Metric[]>
}