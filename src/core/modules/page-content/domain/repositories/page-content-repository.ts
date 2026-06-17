import { Result } from "@/src/shared/result";
import { PageContentEntity } from "../entities/page-content-entity";
import GetBySlugParams from "../params/get-by-slug-params";
import CustomError from "@/src/shared/errors/custom_error";

export abstract class PageContentRepository {
    abstract getBySlug(params: GetBySlugParams): Promise<Result<PageContentEntity, CustomError>>;
}