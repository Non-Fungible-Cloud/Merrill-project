import { useRouter } from "next/router";

export default function TopBar({title}: {title:string}) {
  const router = useRouter();
  return (
    <div className="flex text-white w-full justify-between p-5 items-center">
      {router.route !== "/" ? (
        <img
          className="h-8 cursor-pointer"
          src="/component/icon-arrow-back.svg"
          onClick={() => router.back()}
        />
      ): (
        <div className="w-8 h-8"></div>
      )}

      <h2>{title}</h2>
      <div className="flex">
        <img
          className="h-5 cursor-pointer"
          src="/component/icon-chat-bubble.svg"
        />
        <img
          className="h-5 ml-2 cursor-pointer"
          src="/component/icon-menu.svg"
        />
      </div>
    </div>
  );
}
