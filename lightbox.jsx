import { useState } from 'react';

function PortfolioItemLightbox({ src }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <img src={src} onClick={() => setIsOpen(true)} />
      {isOpen && (
        <div id="lightbox" onClick={() => setIsOpen(false)}>
          <img src={src} />
        </div>
      )}
    </div>
  );
}

export default PortfolioItemLightbox;