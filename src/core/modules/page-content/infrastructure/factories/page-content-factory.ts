import { PageContentDatasourceImpl } from "../datasources/page-content-datasource";
import { PageContentRepositoryImpl } from "../repositories/page-content-repository";

export function pageContentFactory() {
    const datasource = new PageContentDatasourceImpl();
    return new PageContentRepositoryImpl(datasource);
}