import type { MetricRepository } from "@/domain/repositories/MetricRepository.ts";
import data from '../mocks/metrics.json'
import type { Metric } from "@/domain/entities/Metric.ts";

export class MetricRepositoryImpl implements MetricRepository {
    async getMetrics() {
        return data as Metric[]
    }
}