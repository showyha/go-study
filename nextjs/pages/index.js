import Link from "next/link";

export default function Home() {
  return (
    <div className={"tw-container tw-p-4"}>
      <Link href="/sample">
        <a className={"btn btn-primary btn-lg"} role="button">
          ユーザー一覧を見る
        </a>
      </Link>
    </div>
  );
}
