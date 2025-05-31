
import { useState, useEffect } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

interface LogoProcessorProps {
  originalSrc: string;
  alt: string;
  className?: string;
}

const LogoProcessor = ({ originalSrc, alt, className }: LogoProcessorProps) => {
  const [processedLogoSrc, setProcessedLogoSrc] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        setError(null);
        
        console.log('Starting logo background removal...');
        
        // Fetch the original image
        const response = await fetch(originalSrc);
        const blob = await response.blob();
        
        // Load it as an HTMLImageElement
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create object URL for the processed image
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedLogoSrc(processedUrl);
        
        console.log('Logo background removal completed successfully');
      } catch (err) {
        console.error('Error processing logo:', err);
        setError('Failed to process logo');
        // Fallback to original image
        setProcessedLogoSrc(originalSrc);
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, [originalSrc]);

  if (isProcessing) {
    return (
      <div className={`${className} bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg animate-pulse`}>
        <div className="w-full h-full bg-slate-800/50 rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full animate-ping"></div>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={processedLogoSrc || originalSrc}
      alt={alt}
      className={className}
    />
  );
};

export default LogoProcessor;
