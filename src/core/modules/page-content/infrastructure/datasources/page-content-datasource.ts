import config from '@payload-config'
import { getPayload } from "payload";
import { PageContentDatasource } from "../../domain/datasources/page-content-datasource";
import GetBySlugParams from "../../domain/params/get-by-slug-params";
import { PageContentModel } from '../../domain/models/page-content-model';

export class PageContentDatasourceImpl implements PageContentDatasource {
    async getBySlug(params: GetBySlugParams): Promise<PageContentModel> {
        const payload =await getPayload({
            config: config
        })

        const result = await payload.find({
            collection: 'page-content',
            where: {
                slug: {
                    equals: params.slug,
                },

            },

        });

        return result.docs[0];
    }
}