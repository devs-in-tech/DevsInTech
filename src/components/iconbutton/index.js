import Image from "next/image";
import Link from "next/link";

const IconButton = (props) => {
  return (
    <Link
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      legacyBehavior
    >
      <Image
        src={props.src}
        width={props.width}
        height={props.height}
        alt={props.alt}
        className={props.className}
      />
    </Link>
  );
};

export default IconButton;
