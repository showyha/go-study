import type { NextPage } from "next";
import Link from "next/link";
import { useState, MouseEvent } from "react";
import { User } from "../codegen/api/sample_pb";
import type { UserApiResponse } from "./api/sample";

const App: NextPage = () => {
  const [result, setResult] = useState<User.AsObject[]>([]);
  const [name, setName] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handlePut = async (e: MouseEvent<HTMLButtonElement>) => {
    if (name === "") {
      setError("名前は必ず入力してください");
      return;
    }
    if (birthday === "") {
      setError("誕生日は必ず入力してください");
      return;
    }
    const res = await fetch("/api/sample", {
      method: "PUT",
      body: JSON.stringify({ name, birthday }),
    });
    const json: UserApiResponse = await res.json();
    if (json.ok) {
      const { usersList } = json;
      setResult(usersList);
      setError("");
    } else {
      if (typeof json.error === "string") {
        console.error(json.error);
        setError(json.error);
      } else {
        const { code, details } = json.error;
        console.error(`Error! ${code}: ${details}`);
        setError(`Error! ${code}: ${details}`);
      }
    }
  };

  return (
    <div className={"tw-container tw-p-4"}>
      {error.length > 0 ? (
        <div className={"alert alert-danger"} role="alert">
          {error}
        </div>
      ) : undefined}
      {result.map((user) => (
        <div key={user.id} className={"alert alert-success"} role="alert">
          {user.name}を追加しました
        </div>
      ))}
      <nav className="navbar navbar-light bg-light">
        <Link href="/sample" className={""}>
          <a className={"btn btn-primary btn-lg tw-ml-4"} role="button">
            戻る
          </a>
        </Link>
      </nav>
      <div className="card mx-auto">
        <div className="card-body">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="name" className="col-form-label">
                名前
              </label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={name}
                onInput={(e) => setName(e.currentTarget.value)}
              />
            </div>
          </div>
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="birthday" className="col-form-label">
                誕生日
              </label>
            </div>
            <div className="col-auto">
              <input
                type="date"
                id="birthday"
                name="birthday"
                className="form-control"
                value={birthday}
                onInput={(e) => setBirthday(e.currentTarget.value)}
              />
            </div>
          </div>
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={handlePut}
              >
                追加
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
