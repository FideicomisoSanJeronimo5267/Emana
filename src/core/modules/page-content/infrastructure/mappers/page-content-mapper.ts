import { PageContentEntity } from "../../domain/entities/page-content-entity";
import { PageContentModel } from "../../domain/models/page-content-model";

export class PageContentMapper {
  static toEntity(content: PageContentModel): PageContentEntity {
    return {
        id: content.id,
        slug: content.slug,
        sections: content.sections,
        updatedAt: content.updatedAt,
        createdAt: content.createdAt,
    };
  }
}
