import { useRef, useState } from 'react';
import { Reel, ReelIndicator, type ReelApi } from '@reelkit/react';

const slides = [
  { title: 'Welcome', subtitle: 'Swipe or use controls', color: '#6366f1' },
  { title: 'Features', subtitle: 'Touch, keyboard & wheel', color: '#8b5cf6' },
  { title: 'Pricing', subtitle: 'Flexible plans', color: '#ec4899' },
  { title: 'Contact', subtitle: 'Get in touch', color: '#14b8a6' },
];

export default function App() {
  const apiRef = useRef<ReelApi>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Reel
      count={slides.length}
      style={{ width: '100%', height: '100dvh' }}
      direction="vertical"
      enableWheel
      useNavKeys
      apiRef={apiRef}
      afterChange={(index) => setCurrentIndex(index)}
      itemBuilder={(index, _indexInRange, itemSize) => (
        <div
          style={{
            width: itemSize[0],
            height: itemSize[1],
            background: slides[index].color,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            {slides[index].title}
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.7 }}>
            {slides[index].subtitle}
          </p>
        </div>
      )}
    >
      <div
        style={{
          position: 'absolute',
          right: 12,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
        }}
      >
        <ReelIndicator
          count={slides.length}
          active={currentIndex}
          direction="vertical"
          radius={3}
          gap={4}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 8,
          zIndex: 10,
        }}
      >
        <button
          onClick={() => apiRef.current?.prev()}
          disabled={currentIndex === 0}
        >
          Prev
        </button>
        <button
          onClick={() => apiRef.current?.next()}
          disabled={currentIndex === slides.length - 1}
        >
          Next
        </button>
      </div>
    </Reel>
  );
}
