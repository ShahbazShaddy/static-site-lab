
import Image from 'next/image';

const ImageComponent = ({ src, alt, width, height }) => (
  <Image src={src} alt={alt} width={width} height={height} />
);

export default ImageComponent;