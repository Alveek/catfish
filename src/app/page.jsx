import BookLink from "@/components/book-link";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 items-center">
      <h1 className="text-xl font-bold bg-gradient-to-r from-teal-200 to-cyan-200 text-teal-600 min-w-full text-center px-5 py-4">
        Книги
      </h1>

      <BookLink
        linkTo={"caterpillar"}
        imageCover={"/caterpillar/pictures/cover.jpeg"}
        bookTitle={"Очень голодная гусеница"}
        bookAuthor={"Эрик Карл"}
      />
      <BookLink
        linkTo={"three-cats"}
        imageCover={"/three_cats/pictures/image_1.jpg"}
        bookTitle={"Три котёнка"}
        bookAuthor={"Владимир Сутеев"}
      />
    </main>
  );
}
