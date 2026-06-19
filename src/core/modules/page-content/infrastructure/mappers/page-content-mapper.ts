import { PageContentEntity } from "../../domain/entities/page-content-entity";
import { PageContentModel } from "../../domain/models/page-content-model";

export class PageContentMapper {
  static toEntity(content: PageContentModel): PageContentEntity {
    return {
        id: content.id,
        pageType: content.pageType,
        homeSections: content.homeSections,
        residenciasSections: content.residenciasSections,
        amenidadesSections: content.amenidadesSections,
        updatedAt: content.updatedAt,
        createdAt: content.createdAt,
    };
  }
}
