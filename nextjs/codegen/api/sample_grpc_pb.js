// GENERATED CODE -- DO NOT EDIT!

"use strict";
var grpc = require("@grpc/grpc-js");
var api_sample_pb = require("../api/sample_pb.js");

function serialize_samplepb_DeleteRequest(arg) {
  if (!(arg instanceof api_sample_pb.DeleteRequest)) {
    throw new Error("Expected argument of type samplepb.DeleteRequest");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_samplepb_DeleteRequest(buffer_arg) {
  return api_sample_pb.DeleteRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_samplepb_DeleteResponse(arg) {
  if (!(arg instanceof api_sample_pb.DeleteResponse)) {
    throw new Error("Expected argument of type samplepb.DeleteResponse");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_samplepb_DeleteResponse(buffer_arg) {
  return api_sample_pb.DeleteResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_samplepb_NewUser(arg) {
  if (!(arg instanceof api_sample_pb.NewUser)) {
    throw new Error("Expected argument of type samplepb.NewUser");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_samplepb_NewUser(buffer_arg) {
  return api_sample_pb.NewUser.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_samplepb_User(arg) {
  if (!(arg instanceof api_sample_pb.User)) {
    throw new Error("Expected argument of type samplepb.User");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_samplepb_User(buffer_arg) {
  return api_sample_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_samplepb_UserSearchRequest(arg) {
  if (!(arg instanceof api_sample_pb.UserSearchRequest)) {
    throw new Error("Expected argument of type samplepb.UserSearchRequest");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_samplepb_UserSearchRequest(buffer_arg) {
  return api_sample_pb.UserSearchRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_samplepb_UsersResponse(arg) {
  if (!(arg instanceof api_sample_pb.UsersResponse)) {
    throw new Error("Expected argument of type samplepb.UsersResponse");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_samplepb_UsersResponse(buffer_arg) {
  return api_sample_pb.UsersResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

// 名前の通り一つのサービスを表す(service)
var SampleService = (exports.SampleService = {
  // rpcで定義されるのが実質的なインターフェース
  getUsers: {
    path: "/samplepb.Sample/GetUsers",
    requestStream: false,
    responseStream: false,
    requestType: api_sample_pb.UserSearchRequest,
    responseType: api_sample_pb.UsersResponse,
    requestSerialize: serialize_samplepb_UserSearchRequest,
    requestDeserialize: deserialize_samplepb_UserSearchRequest,
    responseSerialize: serialize_samplepb_UsersResponse,
    responseDeserialize: deserialize_samplepb_UsersResponse,
  },
  createUser: {
    path: "/samplepb.Sample/CreateUser",
    requestStream: false,
    responseStream: false,
    requestType: api_sample_pb.NewUser,
    responseType: api_sample_pb.User,
    requestSerialize: serialize_samplepb_NewUser,
    requestDeserialize: deserialize_samplepb_NewUser,
    responseSerialize: serialize_samplepb_User,
    responseDeserialize: deserialize_samplepb_User,
  },
  deleteUser: {
    path: "/samplepb.Sample/DeleteUser",
    requestStream: false,
    responseStream: false,
    requestType: api_sample_pb.DeleteRequest,
    responseType: api_sample_pb.DeleteResponse,
    requestSerialize: serialize_samplepb_DeleteRequest,
    requestDeserialize: deserialize_samplepb_DeleteRequest,
    responseSerialize: serialize_samplepb_DeleteResponse,
    responseDeserialize: deserialize_samplepb_DeleteResponse,
  },
});

exports.SampleClient = grpc.makeGenericClientConstructor(SampleService);
