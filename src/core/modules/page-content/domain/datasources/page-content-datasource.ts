import { PageContentModel } from "../models/page-content-model";
import GetBySlugParams from "../params/get-by-slug-params";

export abstract class PageContentDatasource {
    abstract getBySlug(params: GetBySlugParams): Promise<PageContentModel>;
}