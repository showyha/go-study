// package: samplepb
// file: api/sample.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as api_sample_pb from "../api/sample_pb";

interface ISampleService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getUsers: ISampleService_IGetUsers;
  createUser: ISampleService_ICreateUser;
  deleteUser: ISampleService_IDeleteUser;
}

interface ISampleService_IGetUsers
  extends grpc.MethodDefinition<
    api_sample_pb.UserSearchRequest,
    api_sample_pb.UsersResponse
  > {
  path: "/samplepb.Sample/GetUsers";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<api_sample_pb.UserSearchRequest>;
  requestDeserialize: grpc.deserialize<api_sample_pb.UserSearchRequest>;
  responseSerialize: grpc.serialize<api_sample_pb.UsersResponse>;
  responseDeserialize: grpc.deserialize<api_sample_pb.UsersResponse>;
}
interface ISampleService_ICreateUser
  extends grpc.MethodDefinition<api_sample_pb.NewUser, api_sample_pb.User> {
  path: "/samplepb.Sample/CreateUser";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<api_sample_pb.NewUser>;
  requestDeserialize: grpc.deserialize<api_sample_pb.NewUser>;
  responseSerialize: grpc.serialize<api_sample_pb.User>;
  responseDeserialize: grpc.deserialize<api_sample_pb.User>;
}
interface ISampleService_IDeleteUser
  extends grpc.MethodDefinition<
    api_sample_pb.DeleteRequest,
    api_sample_pb.DeleteResponse
  > {
  path: "/samplepb.Sample/DeleteUser";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<api_sample_pb.DeleteRequest>;
  requestDeserialize: grpc.deserialize<api_sample_pb.DeleteRequest>;
  responseSerialize: grpc.serialize<api_sample_pb.DeleteResponse>;
  responseDeserialize: grpc.deserialize<api_sample_pb.DeleteResponse>;
}

export const SampleService: ISampleService;

export interface ISampleServer extends grpc.UntypedServiceImplementation {
  getUsers: grpc.handleUnaryCall<
    api_sample_pb.UserSearchRequest,
    api_sample_pb.UsersResponse
  >;
  createUser: grpc.handleUnaryCall<api_sample_pb.NewUser, api_sample_pb.User>;
  deleteUser: grpc.handleUnaryCall<
    api_sample_pb.DeleteRequest,
    api_sample_pb.DeleteResponse
  >;
}

export interface ISampleClient {
  getUsers(
    request: api_sample_pb.UserSearchRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: api_sample_pb.UsersResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getUsers(
    request: api_sample_pb.UserSearchRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: api_sample_pb.UsersResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getUsers(
    request: api_sample_pb.UserSearchRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: api_sample_pb.UsersResponse
    ) => void
  ): grpc.ClientUnaryCall;
  createUser(
    request: api_sample_pb.NewUser,
    callback: (
      error: grpc.ServiceError | null,
      response: api_sample_pb.User
    ) => void
  ): grpc.ClientUnaryCall;
  createUser(
    request: api_sample_pb.NewUser,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: api_sample_pb.User
    ) => void
  ): grpc.ClientUnaryCall;
  createUser(
    request: api_sample_pb.NewUser,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: api_sample_pb.User
    ) => void
  ): grpc.ClientUnaryCall;
  deleteUser(
    request: api_sample_pb.DeleteRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: api_sample_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall;
  deleteUser(
    request: api_sample_pb.DeleteRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: api_sample_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall;
  deleteUser(
    request: api_sample_pb.DeleteRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: api_sample_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall;
}

export class SampleClient extends grpc.Client implements ISampleClient {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: Partial<grpc.ClientOptions>
  );
  public getUsers(
    request: api_sample_pb.UserSearchRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: api_sample_pb.UsersResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getUsers(
    request: api_sample_pb.UserSearchRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: api_sample_pb.UsersResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getUsers(
    request: api_sample_pb.UserSearchRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: api_sample_pb.UsersResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public createUser(
    request: api_sample_pb.NewUser,
    callback: (
      error: grpc.ServiceError | null,
      response: api_sample_pb.User
    ) => void
  ): grpc.ClientUnaryCall;
  public createUser(
    request: api_sample_pb.NewUser,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: api_sample_pb.User
    ) => void
  ): grpc.ClientUnaryCall;
  public createUser(
    request: api_sample_pb.NewUser,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: api_sample_pb.User
    ) => void
  ): grpc.ClientUnaryCall;
  public deleteUser(
    request: api_sample_pb.DeleteRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: api_sample_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public deleteUser(
    request: api_sample_pb.DeleteRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: api_sample_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public deleteUser(
    request: api_sample_pb.DeleteRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: api_sample_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall;
}
