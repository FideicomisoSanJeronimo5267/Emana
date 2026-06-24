import CustomError from "@/src/shared/errors/custom_error";
import { PageContentDatasource } from "../../domain/datasources/page-content-datasource";
import { PageContentEntity } from "../../domain/entities/page-content-entity";
import GetBySlugParams from "../../domain/params/get-by-slug-params";
import { PageContentRepository } from "../../domain/repositories/page-content-repository";
import { err, ok, Result } from "@/src/shared/result/result";
import { PageContentMapper } from "../mappers/page-content-mapper";

export class PageContentRepositoryImpl implements PageContentRepository {
    constructor(private readonly datasource: PageContentDatasource) { }

    async getBySlug(params: GetBySlugParams): Promise<Result<PageContentEntity, CustomError>> {

        try {
            const result = await this.datasource.getBySlug(params);
            return ok(PageContentMapper.toEntity(result))

        } catch (error) {
            if (error instanceof CustomError) {
                return err(error);
            }

            return err(
                CustomError.internalServer(
                    'There was an error fetching the page content. Please try again later.',
                ),
            );
        }
    }
}