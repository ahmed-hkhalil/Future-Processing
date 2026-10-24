import { image_path } from "../../environment";
import React from "react";


interface Image {
  className?: string;
  src: string;
  alt?: string;
  height?: number;
  width?: number;
  id?:string;
}

const ImageWithBasePath = (props: Image) => {
  // Combine the base path and the provided src to create the full image source URL
  const cleanSrc = props.src?.startsWith('/') ? props.src.slice(1) : (props.src || '');
  const fullSrc = `${image_path}${cleanSrc}`;
  return (
    <img
      className={props.className}
      src={fullSrc}
      height={props.height}
      alt={props.alt}
      width={props.width}
      id={props.id}
    />
  );
};

export default React.memo(ImageWithBasePath);
