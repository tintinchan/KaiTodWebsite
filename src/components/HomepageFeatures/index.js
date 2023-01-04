import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        วานร เป็นชื่อสามัญของสัตว์ในไฟลัมสัตว์มีแกนสันหลัง ชั้นสัตว์เลี้ยงลูกด้วยนม จัดอยู่ในอันดับวานร (Primates) ลักษณะท่าทางคล้ายมนุษย์ ซึ่งจัดอยู่ในอันดับเดียวกัน เนื่องจากมีบรรพบุรุษร่วมกันมา ก่อนที่จะมีวิวัฒนาการแยกตัวออกจากกัน เมื่อ 2-3 ล้านปีก่อน
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
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        ลิง เป็นสัตว์ที่มนุษย์รับรู้เป็นอย่างดีว่า เป็นสัตว์ที่ว่องไว มีความซุกซน อยู่ไม่นิ่ง จนมีคำเปรียบเทียบในสำนวนไทยว่า "ซนเหมือนลิง" โดยเฉพาะใช้กับเด็ก
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
