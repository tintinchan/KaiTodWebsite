import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { useEffect, useState } from 'react';

const FeatureList = [
  {
    title: 'แนะนำอย่างยิ่งสำหรับผู้เริ่มต้น',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    style: styles.sloganStyle,
    description: (
      <p>
        เว็บไซต์นี้เป็นเว็บที่จะสอนผู้ที่ใช้งานคอมครั้งแรกหรือยังไม่คุ้นเคยกับการใช้งาน โดยจะแนวทางที่ทั้งเป็นความรู้พื้นฐานและคีย์ลัดต่างๆที่ผู้จัดทำรับรองได้เลยว่ามีประโยชน์กับการใช้งานคอมของท่านอย่างแน่นอน
      </p>
    ),
  },
  {
    title: '',
    Svg: null,
    style: styles.buttonStyle,
    description: (<>
      <div className={styles.buttons}>
        <Link
          className={clsx("button button--secondary button--lg", styles.btn, styles.effect04)}
          data-sm-link-text="ไปที่เอกสาร"
          to="/docs/intro">
          เริ่มได้ที่นี่
        </Link>
      </div>
    </>),
  }
];

const RectangleTop = ({
  pos={top: 0,left: 0,bottom: 0,right: 0,eidth: 0,height: 0,}, 
  posPC={top: 0,left: 0,bottom: 0,right: 0,eidth: 0,height: 0,}}) => {
  console.log(window.scrollY)
  return (<g>
    <polygon points={`
      ${pos.left},${pos.top + (window.scrollY - 90)} 
      ${pos.right - pos.width},${pos.bottom + (window.scrollY - 90)} 
      ${(posPC.right - posPC.width)*0.5},${(posPC.bottom)*0.5} 
      ${(posPC.width*0.2)},${(posPC.height*0.2)} 
      `} 
    className={styles.svgLine}></polygon>
  </g>)
}

function Feature({Svg, title, description, style}) {
  return (
    <div className={clsx('col col--6', style)}>
      {Svg != null? <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> : <></>}
      <div className={clsx("text--center padding-horiz--md", styles.featureBorder)}>
        {title != ''? <h1 className={styles.title}>{title}</h1> : <></>}
        <span className={styles.description}>{description}</span>
      </div>
    </div>
  );
}

export default function HomepageFeatures() 
{
  const [pos, setPos] = useState([
    { top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      eidth: 0,
      height: 0,
  }]);
  const [posPC, setPosPC] = useState([
    { top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      eidth: 0,
      height: 0,
  }]);
  useEffect(() => {
    let a = document.getElementsByClassName(styles.sloganStyle)[0].getBoundingClientRect();
    let b = document.getElementsByClassName(styles.features)[0].getBoundingClientRect();
    setPos({
      top: a.top,
      left: a.left,
      bottom: a.bottom,
      right: a.right,
      width: a.width,
      height: a.height,
    })
    setPosPC({
      top: b.top,
      left: b.left,
      bottom: b.bottom,
      right: b.right,
      width: b.width,
      height: b.height,
    })
  });
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.column}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
      {/* <svg height="100%" width="100%" className={styles.backgroundRay}>
        <RectangleTop pos={pos} posPC={posPC}/>
      </svg> */}
    </section>
  );
}
