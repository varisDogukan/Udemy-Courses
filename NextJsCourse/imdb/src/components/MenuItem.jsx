import Link from 'next/link';

const MenuItem = ({ title, address, Icon }) => {
  return (
    <div>
      <Link href={address} className=" hover:text-amber-600">
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
