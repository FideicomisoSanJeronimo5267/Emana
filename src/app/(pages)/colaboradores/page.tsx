import CollaboratorSection from '../../components/collaborator-section';
import ProjectDetailsBanner from '../../components/project-details-banner';
import styles from './colaboradores.module.css';

export default function ColaboradoresPage() {
    return (
        <main className={styles.main}>
            {/* 
        NOTE: Se omitting the first coverpage section as requested:
        "no agregues la primer seccion la del coverpage, la hare manualmente yo"
      */}

            <CollaboratorSection
                title="One Development Group"
                description="Empresa mexicana dedicada a crear espacios inmobiliarios de nueva generación y experiencias memorables que transforman la forma de vivir, trabajar y convivir. En cada proyecto, ONE prioriza generar un impacto positivo en residentes, usuarios, visitantes, inversionistas y en la comunidad que rodea cada desarrollo. Entre sus proyectos más destacados se encuentran SOFIA, Arboleda, El Gran Ancira y GALA en Nuevo León, así como NAYA y NAYAMĀ en el estado de Nayarit, y ALISIA en Jalisco."
                imageAlt="Imagen: 699_Retail_HQ.png"
                logoAlt="Logo ONE DEVELOPMENT GROUP"
                logoWidth="189px"
                logoHeight="37px"
            />

            <CollaboratorSection
                title="JSa"
                description="Taller arquitectónico mexicano liderado por la visión de Javier Sánchez, cuya práctica se basa en procesos colectivos y estrategias de convivencia a distintas escalas. Su trabajo se ha consolidado a través de proyectos como Pujol, Hotel Carlota y The Cape en Los Cabos, creando espacios que dialogan de manera orgánica con su entorno. JSA entiende la arquitectura como un ciclo continuo de aprendizaje, investigación y aproximación urbana, donde cada proyecto se convierte en una propuesta de valor para clientes y usuarios."
                imageAlt="Imagen: JSa_CEMEFI_1456+(Footer).jpg"
                logoAlt="Logo JSa (ksDG2I)"
                logoWidth="93px"
                logoHeight="90px"
                reversed
            />

            <CollaboratorSection
                title="ESRAWE"
                description={"Es un taller multidisciplinario de diseño con sede en la Ciudad de México especializado en mobiliario, interiorismo y arquitectura, de la cual ha creado un sello personal que trasciende a través del tiempo.\n\nSu concepción de diseño persigue una red interactiva como su principal motor de creatividad estética, explorando y revalorizando la manufactura y los procesos manuales.\n\nA través de un proceso metódico y colaborativo el estudio de Esrawe ha participado en una infinidad de proyectos y en el diseño de diversas tipologías."}
                imageAlt="Imagen: JUNE_04.png"
                logoAlt="Logo ESRAWE"
                logoWidth="188px"
                logoHeight="28px"
            />

            <ProjectDetailsBanner />
        </main>
    );
}
