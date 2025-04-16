import { useRef } from 'react';
import '../../templates/css/styles.css';
import '../../templates/css/styles-courses.css'
import '../../templates/css/style-video-cards.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ScrollButton } from "../scroll-button/ScrollButton"
import useMediaQueryScreen from '../../templates/ts/useMediaQueryScreen';
import ComputerCourses from './Responsive-ui-Courses/computerCourses';
import TabletCourses from './Responsive-ui-Courses/tabletCourses';
import MobilCourses from './Responsive-ui-Courses/mobilCourses';

export const Courses = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoUrl = '/videos/Aprende Inglés con Michigan Master.mp4';
  const posterUrl = 'http://localhost:5173/videos/Aprende%20Ingl%C3%A9s%20con%20Michigan%20Master.mp4';

	const [isxSmall, isSmall, isMedium, isLarge, isLargeXl] = useMediaQueryScreen();

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('Drag started', event);
    event.dataTransfer.setData('text/plain', 'Algun dato');
  };

  return (
    <div className="bg-main-purple" style={{ overflowX: 'hidden', overflowY: 'scroll', height: '100vh' }} ref={containerRef}>
      { (isLarge || isLargeXl) && (
        <ComputerCourses
          videoUrl={videoUrl}
          posterUrl={posterUrl}
          handleDragStart={handleDragStart}/>
      )}

      {(isMedium) && (
        <TabletCourses
          videoUrl={videoUrl}
          posterUrl={posterUrl}
          handleDragStart={handleDragStart}/>
      )}

      {(isxSmall || isSmall) && (
        <MobilCourses
          videoUrl={videoUrl}
          posterUrl={posterUrl}
          handleDragStart={handleDragStart}/>
      )}
     
      {/* Scrollbar button */}
      <ScrollButton containerRef={containerRef} />
    </div>
  );
};
