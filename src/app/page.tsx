import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { FaRegSmile } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <br />
      <Button
        color='primary'
        variant='bordered'
        startContent={<FaRegSmile size={20} />}
        as={Link}
        href='/members'
      >
        Take me to members...
      </Button>
    </div>
  );
}
