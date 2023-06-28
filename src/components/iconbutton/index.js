import Image from 'next/image';
import Link from 'next/link';

const IconButton = (props) => {
  return (
    <Link href={props.url} legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
        <Image src={props.src} width={props.width} height={props.height} alt={props.alt} className={props.className}/>
      </a>
    </Link>
  );
};

export default IconButton;
