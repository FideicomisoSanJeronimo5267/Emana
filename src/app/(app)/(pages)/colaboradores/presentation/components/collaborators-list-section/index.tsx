import styles from '../../../colaboradores.module.css'
import CollaboratorSection from '../collaborator-section'
import LazyAnimation from '@/src/app/(app)/components/lazy-animation'

interface Collaborator {
    name?: string | null;
    description?: string | null;
    imageSrc?: string | null;
    imageAlt?: string | null;
    imageBlurData?: string | null;
    logoSrc?: string | null;
    id?: string | null;
}

interface CollaboratorsListSectionProps {
    collaborators?: Collaborator[] | null;
}

export default function CollaboratorsListSection({ collaborators }: CollaboratorsListSectionProps = {}) {
    if (!collaborators?.length) return null

    return (
        <div className={styles.collaboratorsList}>
            {collaborators.map((collab, index) => (
                <LazyAnimation key={collab.id ?? index}>
                    <CollaboratorSection
                        name={collab.name ?? ''}
                        description={collab.description ?? ''}
                        image={{
                            src: collab.imageSrc ?? '',
                            alt: collab.imageAlt ?? collab.name ?? '',
                            blurData: collab.imageBlurData ?? '',
                        }}
                        isReversed={index % 2 === 0}
                        logo={collab.logoSrc ?? ''}
                    />
                </LazyAnimation>
            ))}
        </div>
    )
}
