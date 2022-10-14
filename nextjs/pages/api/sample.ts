import type { NextApiRequest, NextApiResponse } from "next";
import { credentials, ServiceError } from "@grpc/grpc-js";

import { SampleClient } from "../../codegen/api/sample_grpc_pb";
import {
  UserSearchRequest,
  UsersResponse,
  DeleteRequest,
  NewUser,
} from "../../codegen/api/sample_pb";

const gRpcHost = "go:50051";
// const gRpcHost = "localhost:50051"; dev起動時の検証用ホスト
const Client = new SampleClient(gRpcHost, credentials.createInsecure());

export type UserApiResponse =
  | { ok: true; usersList: UsersResponse.AsObject["usersList"] }
  | { ok: false; error: ServiceError | string };

export default function handler(
  apiReq: NextApiRequest,
  apiRes: NextApiResponse<UserApiResponse>
) {
  switch (apiReq.method) {
    case "POST": {
      const { name } = JSON.parse(apiReq.body);
      const request = new UserSearchRequest();
      request.setName(name);
      Client.getUsers(request, (grpcErr, grpcRes) => {
        if (grpcErr) {
          apiRes.status(500).json({ ok: false, error: grpcErr });
        } else {
          const { usersList } = grpcRes.toObject();
          apiRes.status(200).json({ ok: true, usersList });
        }
      });
      break;
    }
    case "DELETE": {
      const { id } = JSON.parse(apiReq.body);
      const request = new DeleteRequest();
      request.setId(id);
      Client.deleteUser(request, (grpcErr, grpcRes) => {
        if (grpcErr) {
          apiRes.status(500).json({ ok: false, error: grpcErr });
        } else {
          const { success } = grpcRes.toObject();
          if (success) apiRes.status(200).json({ ok: true, usersList: [] });
          else
            apiRes
              .status(200)
              .json({ ok: false, error: "削除できませんでした" });
        }
      });
      break;
    }
    case "PUT": {
      const { name, birthday } = JSON.parse(apiReq.body);
      const request = new NewUser();
      request.setName(name);
      request.setBirthday(birthday);
      Client.createUser(request, (grpcErr, grpcRes) => {
        if (grpcErr) {
          apiRes.status(500).json({ ok: false, error: grpcErr });
        } else {
          const user = grpcRes.toObject();
          if (user) apiRes.status(200).json({ ok: true, usersList: [user] });
          else
            apiRes
              .status(200)
              .json({ ok: false, error: "追加できませんでした" });
        }
      });
      break;
    }
  }
}
