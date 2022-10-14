// package: samplepb
// file: api/sample.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class UserSearchRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UserSearchRequest;
  getBirthdayfrom(): string;
  setBirthdayfrom(value: string): UserSearchRequest;
  getBirthdayto(): string;
  setBirthdayto(value: string): UserSearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSearchRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UserSearchRequest
  ): UserSearchRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: UserSearchRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UserSearchRequest;
  static deserializeBinaryFromReader(
    message: UserSearchRequest,
    reader: jspb.BinaryReader
  ): UserSearchRequest;
}

export namespace UserSearchRequest {
  export type AsObject = {
    name: string;
    birthdayfrom: string;
    birthdayto: string;
  };
}

export class UsersResponse extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): UsersResponse;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UsersResponse
  ): UsersResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: UsersResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UsersResponse;
  static deserializeBinaryFromReader(
    message: UsersResponse,
    reader: jspb.BinaryReader
  ): UsersResponse;
}

export namespace UsersResponse {
  export type AsObject = {
    usersList: Array<User.AsObject>;
  };
}

export class User extends jspb.Message {
  getId(): number;
  setId(value: number): User;
  getName(): string;
  setName(value: string): User;
  getBirthday(): string;
  setBirthday(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: User,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(
    message: User,
    reader: jspb.BinaryReader
  ): User;
}

export namespace User {
  export type AsObject = {
    id: number;
    name: string;
    birthday: string;
  };
}

export class NewUser extends jspb.Message {
  getName(): string;
  setName(value: string): NewUser;
  getBirthday(): string;
  setBirthday(value: string): NewUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewUser.AsObject;
  static toObject(includeInstance: boolean, msg: NewUser): NewUser.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: NewUser,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): NewUser;
  static deserializeBinaryFromReader(
    message: NewUser,
    reader: jspb.BinaryReader
  ): NewUser;
}

export namespace NewUser {
  export type AsObject = {
    name: string;
    birthday: string;
  };
}

export class DeleteRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DeleteRequest
  ): DeleteRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: DeleteRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(
    message: DeleteRequest,
    reader: jspb.BinaryReader
  ): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    id: number;
  };
}

export class DeleteResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DeleteResponse
  ): DeleteResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: DeleteResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(
    message: DeleteResponse,
    reader: jspb.BinaryReader
  ): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
    success: boolean;
  };
}
