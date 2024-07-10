import Link from "next/link";
import Image from "next/image";

export default function BookLink({ linkTo, imageCover, bookTitle, bookAuthor }) {
  return (
    <Link
      className="grid-cols-[max-content_max-content] grid gap-x-4 max-sm:gap-x-2 items-center p-2 rounded-md shadow-sm hover:shadow-md bg-white w-[420px] max-sm:w-[350px]"
      href={linkTo}
    >
      <Image className="row-span-2" src={imageCover} alt="обложка книги" width={76} height={76} />
      <h2 className="text-2xl font-bold self-end max-sm:text-lg">{bookTitle}</h2>
      <p className="">{bookAuthor}</p>
    </Link>
  );
}
