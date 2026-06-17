import CustomError from "@/src/shared/errors/custom_error";
import { PageContentRepository } from "../../domain/repositories/page-content-repository";
import { PageContentEntity } from "../../domain/entities/page-content-entity";
import { Result } from "@/src/shared/result/result";

export class GetPageContentUseCase {
    constructor(private readonly repository: PageContentRepository) { }

    async execute(slug: string): Promise<Result<PageContentEntity, CustomError>> {
        return this.repository.getBySlug({ slug });
    }
}