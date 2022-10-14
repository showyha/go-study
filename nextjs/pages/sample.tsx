import type { NextPage } from "next";
import Link from "next/link";
import { useState, MouseEvent } from "react";
import { User } from "../codegen/api/sample_pb";
import type { UserApiResponse } from "./api/sample";

const App: NextPage = () => {
  const [result, setResult] = useState<User.AsObject[] | undefined>(undefined);
  const [name, setName] = useState<string>("");
  const [birthdayFrom, setBirthdayFrom] = useState<string>("");
  const [birthdayTo, setBirthdayTo] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handleChange = async (e: MouseEvent<HTMLButtonElement>) => {
    const res = await fetch("/api/sample", {
      method: "POST",
      body: JSON.stringify({ name, birthdayFrom, birthdayTo }),
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
  const handleDelete = async (e: MouseEvent<HTMLButtonElement>) => {
    const id = Number(e.currentTarget.value);
    const res = await fetch("/api/sample", {
      method: "DELETE",
      body: JSON.stringify({ id }),
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
      {result !== undefined && result.length < 1 ? (
        <div className={"alert alert-warning"} role="alert">
          検索結果は0件です。
        </div>
      ) : undefined}
      {error.length > 0 ? (
        <div className={"alert alert-danger"} role="alert">
          {error}
        </div>
      ) : undefined}
      <nav className={"navbar tw-bg-slate-100"}>
        <Link href="/new" className={""}>
          <a className={"btn btn-primary btn-lg tw-ml-4"} role="button">
            追加
          </a>
        </Link>
        <div className={"row"}>
          <div className={"col"}>
            <label htmlFor="name" className={"col-form-label"}>
              名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={"form-control"}
              value={name}
              onInput={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <div className={"col"}>
            <label htmlFor="name" className={"col-form-label"}>
              誕生日From
            </label>
            <input
              type="date"
              id="birthdayFrom"
              name="birthdayFrom"
              className={"form-control"}
              value={birthdayFrom}
              onInput={(e) => setBirthdayFrom(e.currentTarget.value)}
            />
          </div>
          <div className={"col"}>
            <label htmlFor="name" className={"col-form-label"}>
              誕生日To
            </label>
            <input
              type="date"
              id="birthdayTo"
              name="birthdayTo"
              className={"form-control"}
              value={birthdayTo}
              onInput={(e) => setBirthdayTo(e.currentTarget.value)}
            />
          </div>
          <div className={"col"}>
            <button
              type="submit"
              className={"btn btn-outline-secondary"}
              onClick={handleChange}
            >
              検索
            </button>
          </div>
        </div>
      </nav>
      {result !== undefined ? (
        <div className={"card mx-auto"}>
          <div className={"card-body"}>
            <div className={"row"}>
              <div className={"col"}>
                <table className={"table"}>
                  <thead>
                    <tr>
                      <th scope="col">名前</th>
                      <th scope="col">誕生日</th>
                      <th scope="col">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.map((row) => (
                      <tr key={row.id}>
                        <td>{row.name}</td>
                        <td>{row.birthday}</td>
                        <td>
                          <button
                            type="submit"
                            className={"btn btn-outline-secondary"}
                            onClick={handleDelete}
                            value={row.id}
                          >
                            削除
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default App;
