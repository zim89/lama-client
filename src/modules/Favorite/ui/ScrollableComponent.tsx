import { useScrollStore } from '@/shared/store/store';
import { useEffect, useRef } from 'react';

export default function ScrollableComponent({ children }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    isDragging,
    startY,
    scrollTop,
    setIsDragging,
    setStartY,
    setScrollTop,
  } = useScrollStore();

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setStartY(e.pageY - (container?.offsetTop ?? 0));
      setScrollTop(container?.scrollTop ?? 0);
      e.preventDefault(); // Prevent text selection while dragging
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !container) return;
      const y = e.pageY - (container?.offsetTop ?? 0);
      const walk = (y - startY) * 2;
      container.scrollTop = scrollTop - walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (container) {
      container.addEventListener('mousedown', handleMouseDown);
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousedown', handleMouseDown);
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, [isDragging, startY, scrollTop, setIsDragging, setStartY, setScrollTop]);

  return (
    <div
      className='custom-scrollbar flex h-[90vh] w-full justify-center overflow-y-auto xs:left-0 md:absolute'
      ref={containerRef}
      style={{ cursor: isDragging ? 'grabbing' : '' }}>
      {children}
    </div>
  );
}
