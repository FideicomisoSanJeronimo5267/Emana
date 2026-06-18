export interface PageContentModel {
  id: string;
  pageType: 'home' | 'development' | 'department';
  homeSections?:
    | (
        | {
            alt?: string | null;
            src?: string | null;
            blurData?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'coverpage';
          }
        | {
            title?: string | null;
            description?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'oasis';
          }
        | {
            features?:
              | {
                  title: string;
                  description?: string | null;
                  icon: string;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'features-section';
          }
        | {
            id?: string | null;
            blockName?: string | null;
            blockType: 'divisor';
          }
        | {
            id?: string | null;
            blockName?: string | null;
            blockType: 'location';
          }
        | {
            id?: string | null;
            blockName?: string | null;
            blockType: 'amenities';
          }
        | {
            title?: string | null;
            buttonTitle?: string | null;
            headerDescription?: string | null;
            footerDescription?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'unitsAvailable';
          }
        | {
            title?: string | null;
            description?: string | null;
            titleFont?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'brochure';
          }
        | {
            title?: string | null;
            description?: string | null;
            coverImage?: string | null;
            blurDataURL?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'appointment';
          }
      )[]
    | null;
  updatedAt: string;
  createdAt: string;
}