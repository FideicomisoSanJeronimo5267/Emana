"use client"
import { useDragScroll } from '@/src/app/hooks/useDragScroll'
import styles from './features-section.module.css'
import { useRef } from 'react';

export default function FeaturesSection() {
    const scrollRef = useDragScroll()
    const ref1 = useRef<HTMLDivElement>(null);

    const setRefs = (el: HTMLDivElement | null) => {
        ref1.current = el;
        scrollRef.current = el;
    };

    return (
        <div ref={setRefs} className={styles.features}>
            <li className={styles.feature__item}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.0068 36L12.6898 30.719H5.31884V23.339L0 18.0222L5.31884 12.7054V5.32541H12.6898L18.0068 0L23.3102 5.32541H30.6812V12.7054L36 18.0222L30.6812 23.339V30.719H23.3102L18.0068 36ZM18.0032 25.6077C20.1095 25.6077 21.9044 24.8702 23.3881 23.3952C24.8715 21.9203 25.6132 20.1282 25.6132 18.019C25.6132 15.9102 24.8709 14.113 23.3863 12.6274C21.9017 11.1422 20.1063 10.3996 18 10.3996C15.8934 10.3996 14.104 11.1428 12.6318 12.6292C11.1599 14.1157 10.4239 15.9133 10.4239 18.0222C10.4239 20.1314 11.1605 21.923 12.6336 23.3971C14.1067 24.8708 15.8966 25.6077 18.0032 25.6077ZM18.0068 24.0732C16.3178 24.0732 14.8871 23.4879 13.7147 22.3174C12.5426 21.1471 11.9565 19.7132 11.9565 18.0154C11.9565 16.324 12.5411 14.8876 13.7101 13.7062C14.8789 12.5248 16.3111 11.9341 18.0068 11.9341C19.6961 11.9341 21.1307 12.5248 22.3107 13.7062C23.4906 14.8876 24.0806 16.324 24.0806 18.0154C24.0806 19.7065 23.4906 21.139 22.3107 22.3128C21.1307 23.4864 19.6961 24.0732 18.0068 24.0732ZM18.0068 33.8143L22.649 29.1841H29.1481V22.6933L33.8098 18.0222L29.1445 13.3512V6.86036H22.6612L18.0068 2.19292L13.3388 6.86036H6.85553V13.3512L2.19022 18.0222L6.8519 22.6933V29.1841H13.3315L18.0068 33.8143Z" fill="#95978C" />
                </svg>
                <span>
                    Residencias adaptadas para cada estilo de vida
                </span>
            </li>
            <li className={styles.feature__item}>
                <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.0668 36L0.985239 20.2485L9.75081 9.6435H24.3107L33.0838 20.2485L17.0668 36ZM3.74281 8.1845L0 4.4985L1.21791 3.278L4.95272 6.9795L3.74281 8.1845ZM16.2202 5.2385V0H17.9134V5.2385H16.2202ZM30.2577 8.1845L29.0863 6.9755L32.8156 3.2745L34 4.4985L30.2577 8.1845ZM17.0668 33.628L29.956 20.9795H4.11359L17.0668 33.628ZM10.5439 11.336L3.95847 19.287H30.1371L23.5256 11.336H10.5439Z" fill="#95978C" />
                </svg>

                <span>
                    Acabados <br /> premium
                </span>
            </li>
            <li className={styles.feature__item}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0975 34.3075H22.8565V24.595H13.0975V34.3075ZM1.6925 22.9025H11.405V13.1435H1.6925V22.9025ZM13.0975 22.9025H22.8565V13.1435H13.0975V22.9025ZM24.5485 22.9025H34.3075V13.1435H24.5485V22.9025ZM24.5485 11.4515H34.3075V1.6925H24.5485V11.4515ZM11.405 36V24.595H0V11.4515H22.8565V0H36V24.595H24.5485V36H11.405Z" fill="#95978C" />
                </svg>
                <span>
                    Distribuciones que emanan confort, privacidad y bienestar
                </span>
            </li>
        </div>
    )
}