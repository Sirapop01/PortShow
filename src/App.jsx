import { useEffect, useState } from 'react'
import LeftSection from './sections/LeftSection'
import RigthSection from './sections/RightSection'


function App() {
  const [sectionIds, setSectionIds] = useState([])
  const [navBarItems, setNavBarItems] = useState([])
  const [currentSection, setCurrentSection] = useState('');

  const addSectionIds = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return; // ป้องกันการอ่านค่าจาก null

    const elementId = element.id;
    setSectionIds((prev) => [...new Set([...prev, elementId])]);

    console.log(sectionId);
    const elementTitle = element.childNodes[0]?.textContent || "Untitled";

    const obj = { title: elementTitle, sectionId: elementId };
    setNavBarItems((prev) => {
      if (prev.findIndex(e => e.title === obj.title) < 0) {
        return [...prev, obj];
      }
      return prev;
    });
  };

  const handleScroll = () => {
    for(let index = 0; index < sectionIds.length; index++) {
      const el = sectionIds[index];
      const eloffsetTop = document.getElementById(el).getClientRects()[0].y;
      const height = document.getElementById(el).getClientRects()[0].height * 0.5;
      const viewHeight = window.innerHeight * 0.3;

      if(eloffsetTop <= 0 ){
        if((eloffsetTop + height) > viewHeight){
          setCurrentSection(el);
        }
      }else if(eloffsetTop > 0 && eloffsetTop < viewHeight){
        setCurrentSection(el);
      }
    }
  }

  useEffect(() => {
    if (sectionIds.length > 0) {
      setCurrentSection(sectionIds[0])
    }
  }, [sectionIds])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [sectionIds])

  return (
    <div className="mt-14 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]">
      <LeftSection navBarItems={navBarItems} currentSection={currentSection} />
      <RigthSection onInitial={addSectionIds} />
    </div>
  )
}

export default App
