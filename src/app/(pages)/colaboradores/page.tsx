import styles from './colaboradores.module.css';
import CollaboratorSection from './presentation/components/collaborator-section';
import { collaboratorsImagesdata } from '@/src/core/constants/image-data/collaborators-page';
const collaborators = [
    {
        name: "ONE DEVELOPMENT GROUP",
        description: "Empresa mexicana dedicada a crear espacios inmobiliarios de nueva generación y experiencias memorables que transforman la forma de vivir, trabajar y convivir. \n\n En cada proyecto, ONE prioriza generar un impacto positivo en residentes, usuarios, visitantes, inversionistas y en la comunidad que rodea cada desarrollo. \n\n Entre sus proyectos más destacados se encuentran SOFIA, Arboleda, El Gran Ancira y GALA en Nuevo León, así como NAYA y NAYAMĀ en el estado de Nayarit, y ALISIA en Jalisco.",
        image: collaboratorsImagesdata.one_development_group,
        logo: "/assets/images/collaborators/odg.svg"
    },
    {
        name: "JSA",
        description: "Taller arquitectónico mexicano liderado por la visión de Javier Sánchez, cuya práctica se basa en procesos colectivos y estrategias de convivencia a distintas escalas. \n\n Su trabajo se ha consolidado a través de proyectos como Pujol, Hotel Carlota y The Cape en Los Cabos, creando espacios que dialogan de manera orgánica con su entorno. \n\n JSA entiende la arquitectura como un ciclo continuo de aprendizaje, investigación y aproximación urbana, donde cada proyecto se convierte en una propuesta de valor para clientes y usuarios.",
        image: collaboratorsImagesdata.jsa,
        logo: "/assets/images/collaborators/jsa.svg"
    },
    {
        name: "ESRAWE",
        description: "Es un taller multidisciplinario de diseño con sede en la Ciudad de México, especializado en mobiliario, interiorismo y soluciones arquitectónicas para proyectos residenciales, culturales y de hospitalidad. \n\n Su trabajo se distingue por una visión sofisticada que combina precisión técnica, sensibilidad estética y una profunda conexión con el contexto. \n\n A través de un proceso meticuloso y colaborativo, el estudio transforma cada proyecto en una experiencia coherente, innovadora y atemporal.",
        image: collaboratorsImagesdata.esrawe,
        logo: "/assets/images/collaborators/esrawe.svg"
    }
];

export default function CollaboratorsPage() {
    return (
        <main className={styles.main}>

            <div className={styles.collaboratorsList}>
                {collaborators.map((collab, index) => (
                    <CollaboratorSection
                        key={index}
                        name={collab.name}
                        description={collab.description}
                        image={collab.image}
                        isReversed={index % 2 == 0}
                        logo={collab.logo}
                    />
                ))}
            </div>
        </main>
    )
}