import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'แนะนำอย่างยิ่งสำหรับผู้เริ่มต้น',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        เว็บไซต์นี้เป็นเว็บที่จะสอนผู้ที่ใช้งานคอมครั้งแรกหรือยังไม่คุ้นเคยกับการใช้งาน โดยจะแนวทางที่ทั้งเป็นความรู้พื้นฐานและคีย์ลัดต่างๆที่ผู้จัดทำรับรองได้เลยว่ามีประโยชน์กับการใช้งานคอมของท่านอย่างแน่นอน
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        ลิงมีตีนหน้าและตีนหลังใช้จับเกาะได้ มักปีนหากินบนต้นไม้ได้อย่างคล่องแคล่ว พวกที่มีหาง เช่น ลิงวอก และพวกที่ไม่มีหาง เช่น กอริลลา เป็นต้น
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6', styles.featureStyle)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.column}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
