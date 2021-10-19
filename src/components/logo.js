/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui';
import Image from 'next/image'
import { Link } from 'react-scroll';
import logo from 'assets/images/logo.svg'

export default function Logo({ src }) {
  return (
    <Link
      to='/'
      className="logoHeader"
    >
      <Image  src={src} alt='ok' />
    </Link>
  );
}
