import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  UserProfile: crudResolvers.UserProfileCrudResolver,
  UserFavoriteSongs: crudResolvers.UserFavoriteSongsCrudResolver,
  UserFavoritePlaylists: crudResolvers.UserFavoritePlaylistsCrudResolver,
  UserPost: crudResolvers.UserPostCrudResolver,
  UserProfileComments: crudResolvers.UserProfileCommentsCrudResolver,
  Playlist: crudResolvers.PlaylistCrudResolver,
  Song: crudResolvers.SongCrudResolver
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  UserProfile: {
    userProfile: actionResolvers.FindUniqueUserProfileResolver,
    findFirstUserProfile: actionResolvers.FindFirstUserProfileResolver,
    userProfiles: actionResolvers.FindManyUserProfileResolver,
    createUserProfile: actionResolvers.CreateUserProfileResolver,
    createManyUserProfile: actionResolvers.CreateManyUserProfileResolver,
    deleteUserProfile: actionResolvers.DeleteUserProfileResolver,
    updateUserProfile: actionResolvers.UpdateUserProfileResolver,
    deleteManyUserProfile: actionResolvers.DeleteManyUserProfileResolver,
    updateManyUserProfile: actionResolvers.UpdateManyUserProfileResolver,
    upsertUserProfile: actionResolvers.UpsertUserProfileResolver,
    aggregateUserProfile: actionResolvers.AggregateUserProfileResolver,
    groupByUserProfile: actionResolvers.GroupByUserProfileResolver
  },
  UserFavoriteSongs: {
    findUniqueUserFavoriteSongs: actionResolvers.FindUniqueUserFavoriteSongsResolver,
    findFirstUserFavoriteSongs: actionResolvers.FindFirstUserFavoriteSongsResolver,
    findManyUserFavoriteSongs: actionResolvers.FindManyUserFavoriteSongsResolver,
    createUserFavoriteSongs: actionResolvers.CreateUserFavoriteSongsResolver,
    createManyUserFavoriteSongs: actionResolvers.CreateManyUserFavoriteSongsResolver,
    deleteUserFavoriteSongs: actionResolvers.DeleteUserFavoriteSongsResolver,
    updateUserFavoriteSongs: actionResolvers.UpdateUserFavoriteSongsResolver,
    deleteManyUserFavoriteSongs: actionResolvers.DeleteManyUserFavoriteSongsResolver,
    updateManyUserFavoriteSongs: actionResolvers.UpdateManyUserFavoriteSongsResolver,
    upsertUserFavoriteSongs: actionResolvers.UpsertUserFavoriteSongsResolver,
    aggregateUserFavoriteSongs: actionResolvers.AggregateUserFavoriteSongsResolver,
    groupByUserFavoriteSongs: actionResolvers.GroupByUserFavoriteSongsResolver
  },
  UserFavoritePlaylists: {
    findUniqueUserFavoritePlaylists: actionResolvers.FindUniqueUserFavoritePlaylistsResolver,
    findFirstUserFavoritePlaylists: actionResolvers.FindFirstUserFavoritePlaylistsResolver,
    findManyUserFavoritePlaylists: actionResolvers.FindManyUserFavoritePlaylistsResolver,
    createUserFavoritePlaylists: actionResolvers.CreateUserFavoritePlaylistsResolver,
    createManyUserFavoritePlaylists: actionResolvers.CreateManyUserFavoritePlaylistsResolver,
    deleteUserFavoritePlaylists: actionResolvers.DeleteUserFavoritePlaylistsResolver,
    updateUserFavoritePlaylists: actionResolvers.UpdateUserFavoritePlaylistsResolver,
    deleteManyUserFavoritePlaylists: actionResolvers.DeleteManyUserFavoritePlaylistsResolver,
    updateManyUserFavoritePlaylists: actionResolvers.UpdateManyUserFavoritePlaylistsResolver,
    upsertUserFavoritePlaylists: actionResolvers.UpsertUserFavoritePlaylistsResolver,
    aggregateUserFavoritePlaylists: actionResolvers.AggregateUserFavoritePlaylistsResolver,
    groupByUserFavoritePlaylists: actionResolvers.GroupByUserFavoritePlaylistsResolver
  },
  UserPost: {
    userPost: actionResolvers.FindUniqueUserPostResolver,
    findFirstUserPost: actionResolvers.FindFirstUserPostResolver,
    userPosts: actionResolvers.FindManyUserPostResolver,
    createUserPost: actionResolvers.CreateUserPostResolver,
    createManyUserPost: actionResolvers.CreateManyUserPostResolver,
    deleteUserPost: actionResolvers.DeleteUserPostResolver,
    updateUserPost: actionResolvers.UpdateUserPostResolver,
    deleteManyUserPost: actionResolvers.DeleteManyUserPostResolver,
    updateManyUserPost: actionResolvers.UpdateManyUserPostResolver,
    upsertUserPost: actionResolvers.UpsertUserPostResolver,
    aggregateUserPost: actionResolvers.AggregateUserPostResolver,
    groupByUserPost: actionResolvers.GroupByUserPostResolver
  },
  UserProfileComments: {
    findUniqueUserProfileComments: actionResolvers.FindUniqueUserProfileCommentsResolver,
    findFirstUserProfileComments: actionResolvers.FindFirstUserProfileCommentsResolver,
    findManyUserProfileComments: actionResolvers.FindManyUserProfileCommentsResolver,
    createUserProfileComments: actionResolvers.CreateUserProfileCommentsResolver,
    createManyUserProfileComments: actionResolvers.CreateManyUserProfileCommentsResolver,
    deleteUserProfileComments: actionResolvers.DeleteUserProfileCommentsResolver,
    updateUserProfileComments: actionResolvers.UpdateUserProfileCommentsResolver,
    deleteManyUserProfileComments: actionResolvers.DeleteManyUserProfileCommentsResolver,
    updateManyUserProfileComments: actionResolvers.UpdateManyUserProfileCommentsResolver,
    upsertUserProfileComments: actionResolvers.UpsertUserProfileCommentsResolver,
    aggregateUserProfileComments: actionResolvers.AggregateUserProfileCommentsResolver,
    groupByUserProfileComments: actionResolvers.GroupByUserProfileCommentsResolver
  },
  Playlist: {
    playlist: actionResolvers.FindUniquePlaylistResolver,
    findFirstPlaylist: actionResolvers.FindFirstPlaylistResolver,
    playlists: actionResolvers.FindManyPlaylistResolver,
    createPlaylist: actionResolvers.CreatePlaylistResolver,
    createManyPlaylist: actionResolvers.CreateManyPlaylistResolver,
    deletePlaylist: actionResolvers.DeletePlaylistResolver,
    updatePlaylist: actionResolvers.UpdatePlaylistResolver,
    deleteManyPlaylist: actionResolvers.DeleteManyPlaylistResolver,
    updateManyPlaylist: actionResolvers.UpdateManyPlaylistResolver,
    upsertPlaylist: actionResolvers.UpsertPlaylistResolver,
    aggregatePlaylist: actionResolvers.AggregatePlaylistResolver,
    groupByPlaylist: actionResolvers.GroupByPlaylistResolver
  },
  Song: {
    song: actionResolvers.FindUniqueSongResolver,
    findFirstSong: actionResolvers.FindFirstSongResolver,
    songs: actionResolvers.FindManySongResolver,
    createSong: actionResolvers.CreateSongResolver,
    createManySong: actionResolvers.CreateManySongResolver,
    deleteSong: actionResolvers.DeleteSongResolver,
    updateSong: actionResolvers.UpdateSongResolver,
    deleteManySong: actionResolvers.DeleteManySongResolver,
    updateManySong: actionResolvers.UpdateManySongResolver,
    upsertSong: actionResolvers.UpsertSongResolver,
    aggregateSong: actionResolvers.AggregateSongResolver,
    groupBySong: actionResolvers.GroupBySongResolver
  }
};
const crudResolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  UserProfile: ["userProfile", "findFirstUserProfile", "userProfiles", "createUserProfile", "createManyUserProfile", "deleteUserProfile", "updateUserProfile", "deleteManyUserProfile", "updateManyUserProfile", "upsertUserProfile", "aggregateUserProfile", "groupByUserProfile"],
  UserFavoriteSongs: ["findUniqueUserFavoriteSongs", "findFirstUserFavoriteSongs", "findManyUserFavoriteSongs", "createUserFavoriteSongs", "createManyUserFavoriteSongs", "deleteUserFavoriteSongs", "updateUserFavoriteSongs", "deleteManyUserFavoriteSongs", "updateManyUserFavoriteSongs", "upsertUserFavoriteSongs", "aggregateUserFavoriteSongs", "groupByUserFavoriteSongs"],
  UserFavoritePlaylists: ["findUniqueUserFavoritePlaylists", "findFirstUserFavoritePlaylists", "findManyUserFavoritePlaylists", "createUserFavoritePlaylists", "createManyUserFavoritePlaylists", "deleteUserFavoritePlaylists", "updateUserFavoritePlaylists", "deleteManyUserFavoritePlaylists", "updateManyUserFavoritePlaylists", "upsertUserFavoritePlaylists", "aggregateUserFavoritePlaylists", "groupByUserFavoritePlaylists"],
  UserPost: ["userPost", "findFirstUserPost", "userPosts", "createUserPost", "createManyUserPost", "deleteUserPost", "updateUserPost", "deleteManyUserPost", "updateManyUserPost", "upsertUserPost", "aggregateUserPost", "groupByUserPost"],
  UserProfileComments: ["findUniqueUserProfileComments", "findFirstUserProfileComments", "findManyUserProfileComments", "createUserProfileComments", "createManyUserProfileComments", "deleteUserProfileComments", "updateUserProfileComments", "deleteManyUserProfileComments", "updateManyUserProfileComments", "upsertUserProfileComments", "aggregateUserProfileComments", "groupByUserProfileComments"],
  Playlist: ["playlist", "findFirstPlaylist", "playlists", "createPlaylist", "createManyPlaylist", "deletePlaylist", "updatePlaylist", "deleteManyPlaylist", "updateManyPlaylist", "upsertPlaylist", "aggregatePlaylist", "groupByPlaylist"],
  Song: ["song", "findFirstSong", "songs", "createSong", "createManySong", "deleteSong", "updateSong", "deleteManySong", "updateManySong", "upsertSong", "aggregateSong", "groupBySong"]
};
const argsInfo = {
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserProfileArgs: ["where"],
  FindFirstUserProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserProfileArgs: ["data"],
  CreateManyUserProfileArgs: ["data", "skipDuplicates"],
  DeleteUserProfileArgs: ["where"],
  UpdateUserProfileArgs: ["data", "where"],
  DeleteManyUserProfileArgs: ["where"],
  UpdateManyUserProfileArgs: ["data", "where"],
  UpsertUserProfileArgs: ["where", "create", "update"],
  AggregateUserProfileArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserProfileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserFavoriteSongsArgs: ["where"],
  FindFirstUserFavoriteSongsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserFavoriteSongsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserFavoriteSongsArgs: ["data"],
  CreateManyUserFavoriteSongsArgs: ["data", "skipDuplicates"],
  DeleteUserFavoriteSongsArgs: ["where"],
  UpdateUserFavoriteSongsArgs: ["data", "where"],
  DeleteManyUserFavoriteSongsArgs: ["where"],
  UpdateManyUserFavoriteSongsArgs: ["data", "where"],
  UpsertUserFavoriteSongsArgs: ["where", "create", "update"],
  AggregateUserFavoriteSongsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserFavoriteSongsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserFavoritePlaylistsArgs: ["where"],
  FindFirstUserFavoritePlaylistsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserFavoritePlaylistsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserFavoritePlaylistsArgs: ["data"],
  CreateManyUserFavoritePlaylistsArgs: ["data", "skipDuplicates"],
  DeleteUserFavoritePlaylistsArgs: ["where"],
  UpdateUserFavoritePlaylistsArgs: ["data", "where"],
  DeleteManyUserFavoritePlaylistsArgs: ["where"],
  UpdateManyUserFavoritePlaylistsArgs: ["data", "where"],
  UpsertUserFavoritePlaylistsArgs: ["where", "create", "update"],
  AggregateUserFavoritePlaylistsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserFavoritePlaylistsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserPostArgs: ["where"],
  FindFirstUserPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserPostArgs: ["data"],
  CreateManyUserPostArgs: ["data", "skipDuplicates"],
  DeleteUserPostArgs: ["where"],
  UpdateUserPostArgs: ["data", "where"],
  DeleteManyUserPostArgs: ["where"],
  UpdateManyUserPostArgs: ["data", "where"],
  UpsertUserPostArgs: ["where", "create", "update"],
  AggregateUserPostArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserProfileCommentsArgs: ["where"],
  FindFirstUserProfileCommentsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserProfileCommentsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserProfileCommentsArgs: ["data"],
  CreateManyUserProfileCommentsArgs: ["data", "skipDuplicates"],
  DeleteUserProfileCommentsArgs: ["where"],
  UpdateUserProfileCommentsArgs: ["data", "where"],
  DeleteManyUserProfileCommentsArgs: ["where"],
  UpdateManyUserProfileCommentsArgs: ["data", "where"],
  UpsertUserProfileCommentsArgs: ["where", "create", "update"],
  AggregateUserProfileCommentsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserProfileCommentsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePlaylistArgs: ["where"],
  FindFirstPlaylistArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPlaylistArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePlaylistArgs: ["data"],
  CreateManyPlaylistArgs: ["data", "skipDuplicates"],
  DeletePlaylistArgs: ["where"],
  UpdatePlaylistArgs: ["data", "where"],
  DeleteManyPlaylistArgs: ["where"],
  UpdateManyPlaylistArgs: ["data", "where"],
  UpsertPlaylistArgs: ["where", "create", "update"],
  AggregatePlaylistArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPlaylistArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSongArgs: ["where"],
  FindFirstSongArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySongArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSongArgs: ["data"],
  CreateManySongArgs: ["data", "skipDuplicates"],
  DeleteSongArgs: ["where"],
  UpdateSongArgs: ["data", "where"],
  DeleteManySongArgs: ["where"],
  UpdateManySongArgs: ["data", "where"],
  UpsertSongArgs: ["where", "create", "update"],
  AggregateSongArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySongArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  UserProfile: relationResolvers.UserProfileRelationsResolver,
  UserFavoriteSongs: relationResolvers.UserFavoriteSongsRelationsResolver,
  UserFavoritePlaylists: relationResolvers.UserFavoritePlaylistsRelationsResolver,
  UserPost: relationResolvers.UserPostRelationsResolver,
  UserProfileComments: relationResolvers.UserProfileCommentsRelationsResolver,
  Playlist: relationResolvers.PlaylistRelationsResolver,
  Song: relationResolvers.SongRelationsResolver
};
const relationResolversInfo = {
  User: ["profile", "createdPosts", "createdComments", "createdPlaylists", "createdSongs"],
  UserProfile: ["user", "favSongs", "favPlaylists", "posts", "comments"],
  UserFavoriteSongs: ["userProfile", "songs"],
  UserFavoritePlaylists: ["userProfile", "playlists"],
  UserPost: ["author", "userProfile"],
  UserProfileComments: ["author", "userProfile"],
  Playlist: ["author", "userFavoritePlaylists"],
  Song: ["author", "UserFavoriteSongs"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "name", "email", "emailVerified", "createdAt", "updatedAt", "role", "picture"],
  UserProfile: ["id", "userId"],
  UserFavoriteSongs: ["id", "userProfileId"],
  UserFavoritePlaylists: ["id", "userProfileId"],
  UserPost: ["id", "authorId", "title", "content", "createdAt", "updatedAt", "userProfileId"],
  UserProfileComments: ["id", "authorId", "content", "createdAt", "updatedAt", "userProfileId"],
  Playlist: ["id", "title", "authorId", "createdAt", "updatedAt", "userFavoritePlaylistsId"],
  Song: ["id", "title", "authorId", "createdAt", "updatedAt", "userFavoriteSongsId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture", "_count", "_min", "_max"],
  AggregateUserProfile: ["_count", "_min", "_max"],
  UserProfileGroupBy: ["id", "userId", "_count", "_min", "_max"],
  AggregateUserFavoriteSongs: ["_count", "_min", "_max"],
  UserFavoriteSongsGroupBy: ["id", "userProfileId", "_count", "_min", "_max"],
  AggregateUserFavoritePlaylists: ["_count", "_min", "_max"],
  UserFavoritePlaylistsGroupBy: ["id", "userProfileId", "_count", "_min", "_max"],
  AggregateUserPost: ["_count", "_avg", "_sum", "_min", "_max"],
  UserPostGroupBy: ["id", "authorId", "title", "content", "createdAt", "updatedAt", "userProfileId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUserProfileComments: ["_count", "_avg", "_sum", "_min", "_max"],
  UserProfileCommentsGroupBy: ["id", "authorId", "content", "createdAt", "updatedAt", "userProfileId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePlaylist: ["_count", "_min", "_max"],
  PlaylistGroupBy: ["id", "title", "authorId", "createdAt", "updatedAt", "userFavoritePlaylistsId", "_count", "_min", "_max"],
  AggregateSong: ["_count", "_min", "_max"],
  SongGroupBy: ["id", "title", "authorId", "createdAt", "updatedAt", "userFavoriteSongsId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["createdPosts", "createdComments", "createdPlaylists", "createdSongs"],
  UserCountAggregate: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture", "_all"],
  UserMinAggregate: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture"],
  UserMaxAggregate: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture"],
  UserProfileCount: ["posts", "comments"],
  UserProfileCountAggregate: ["id", "userId", "_all"],
  UserProfileMinAggregate: ["id", "userId"],
  UserProfileMaxAggregate: ["id", "userId"],
  UserFavoriteSongsCount: ["songs"],
  UserFavoriteSongsCountAggregate: ["id", "userProfileId", "_all"],
  UserFavoriteSongsMinAggregate: ["id", "userProfileId"],
  UserFavoriteSongsMaxAggregate: ["id", "userProfileId"],
  UserFavoritePlaylistsCount: ["playlists"],
  UserFavoritePlaylistsCountAggregate: ["id", "userProfileId", "_all"],
  UserFavoritePlaylistsMinAggregate: ["id", "userProfileId"],
  UserFavoritePlaylistsMaxAggregate: ["id", "userProfileId"],
  UserPostCountAggregate: ["id", "authorId", "title", "content", "createdAt", "updatedAt", "userProfileId", "_all"],
  UserPostAvgAggregate: ["id"],
  UserPostSumAggregate: ["id"],
  UserPostMinAggregate: ["id", "authorId", "title", "content", "createdAt", "updatedAt", "userProfileId"],
  UserPostMaxAggregate: ["id", "authorId", "title", "content", "createdAt", "updatedAt", "userProfileId"],
  UserProfileCommentsCountAggregate: ["id", "authorId", "content", "createdAt", "updatedAt", "userProfileId", "_all"],
  UserProfileCommentsAvgAggregate: ["id"],
  UserProfileCommentsSumAggregate: ["id"],
  UserProfileCommentsMinAggregate: ["id", "authorId", "content", "createdAt", "updatedAt", "userProfileId"],
  UserProfileCommentsMaxAggregate: ["id", "authorId", "content", "createdAt", "updatedAt", "userProfileId"],
  PlaylistCountAggregate: ["id", "title", "authorId", "createdAt", "updatedAt", "userFavoritePlaylistsId", "_all"],
  PlaylistMinAggregate: ["id", "title", "authorId", "createdAt", "updatedAt", "userFavoritePlaylistsId"],
  PlaylistMaxAggregate: ["id", "title", "authorId", "createdAt", "updatedAt", "userFavoritePlaylistsId"],
  SongCountAggregate: ["id", "title", "authorId", "createdAt", "updatedAt", "userFavoriteSongsId", "_all"],
  SongMinAggregate: ["id", "title", "authorId", "createdAt", "updatedAt", "userFavoriteSongsId"],
  SongMaxAggregate: ["id", "title", "authorId", "createdAt", "updatedAt", "userFavoriteSongsId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture", "profile", "createdPosts", "createdComments", "createdPlaylists", "createdSongs"],
  UserOrderByWithRelationInput: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture", "profile", "createdPosts", "createdComments", "createdPlaylists", "createdSongs"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture"],
  UserProfileWhereInput: ["AND", "OR", "NOT", "id", "user", "userId", "favSongs", "favPlaylists", "posts", "comments"],
  UserProfileOrderByWithRelationInput: ["id", "user", "userId", "favSongs", "favPlaylists", "posts", "comments"],
  UserProfileWhereUniqueInput: ["id", "userId"],
  UserProfileOrderByWithAggregationInput: ["id", "userId", "_count", "_max", "_min"],
  UserProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId"],
  UserFavoriteSongsWhereInput: ["AND", "OR", "NOT", "id", "userProfile", "userProfileId", "songs"],
  UserFavoriteSongsOrderByWithRelationInput: ["id", "userProfile", "userProfileId", "songs"],
  UserFavoriteSongsWhereUniqueInput: ["id", "userProfileId"],
  UserFavoriteSongsOrderByWithAggregationInput: ["id", "userProfileId", "_count", "_max", "_min"],
  UserFavoriteSongsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userProfileId"],
  UserFavoritePlaylistsWhereInput: ["AND", "OR", "NOT", "id", "userProfile", "userProfileId", "playlists"],
  UserFavoritePlaylistsOrderByWithRelationInput: ["id", "userProfile", "userProfileId", "playlists"],
  UserFavoritePlaylistsWhereUniqueInput: ["id", "userProfileId"],
  UserFavoritePlaylistsOrderByWithAggregationInput: ["id", "userProfileId", "_count", "_max", "_min"],
  UserFavoritePlaylistsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userProfileId"],
  UserPostWhereInput: ["AND", "OR", "NOT", "id", "author", "authorId", "title", "content", "createdAt", "updatedAt", "userProfile", "userProfileId"],
  UserPostOrderByWithRelationInput: ["id", "author", "authorId", "title", "content", "createdAt", "updatedAt", "userProfile", "userProfileId"],
  UserPostWhereUniqueInput: ["id"],
  UserPostOrderByWithAggregationInput: ["id", "authorId", "title", "content", "createdAt", "updatedAt", "userProfileId", "_count", "_avg", "_max", "_min", "_sum"],
  UserPostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "authorId", "title", "content", "createdAt", "updatedAt", "userProfileId"],
  UserProfileCommentsWhereInput: ["AND", "OR", "NOT", "id", "author", "authorId", "content", "createdAt", "updatedAt", "userProfile", "userProfileId"],
  UserProfileCommentsOrderByWithRelationInput: ["id", "author", "authorId", "content", "createdAt", "updatedAt", "userProfile", "userProfileId"],
  UserProfileCommentsWhereUniqueInput: ["id"],
  UserProfileCommentsOrderByWithAggregationInput: ["id", "authorId", "content", "createdAt", "updatedAt", "userProfileId", "_count", "_avg", "_max", "_min", "_sum"],
  UserProfileCommentsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "authorId", "content", "createdAt", "updatedAt", "userProfileId"],
  PlaylistWhereInput: ["AND", "OR", "NOT", "id", "title", "author", "authorId", "createdAt", "updatedAt", "userFavoritePlaylists", "userFavoritePlaylistsId"],
  PlaylistOrderByWithRelationInput: ["id", "title", "author", "authorId", "createdAt", "updatedAt", "userFavoritePlaylists", "userFavoritePlaylistsId"],
  PlaylistWhereUniqueInput: ["id"],
  PlaylistOrderByWithAggregationInput: ["id", "title", "authorId", "createdAt", "updatedAt", "userFavoritePlaylistsId", "_count", "_max", "_min"],
  PlaylistScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "authorId", "createdAt", "updatedAt", "userFavoritePlaylistsId"],
  SongWhereInput: ["AND", "OR", "NOT", "id", "title", "author", "authorId", "createdAt", "updatedAt", "UserFavoriteSongs", "userFavoriteSongsId"],
  SongOrderByWithRelationInput: ["id", "title", "author", "authorId", "createdAt", "updatedAt", "UserFavoriteSongs", "userFavoriteSongsId"],
  SongWhereUniqueInput: ["id"],
  SongOrderByWithAggregationInput: ["id", "title", "authorId", "createdAt", "updatedAt", "userFavoriteSongsId", "_count", "_max", "_min"],
  SongScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "authorId", "createdAt", "updatedAt", "userFavoriteSongsId"],
  UserCreateInput: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture", "profile", "createdPosts", "createdComments", "createdPlaylists", "createdSongs"],
  UserUpdateInput: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture", "profile", "createdPosts", "createdComments", "createdPlaylists", "createdSongs"],
  UserCreateManyInput: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture"],
  UserUpdateManyMutationInput: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture"],
  UserProfileCreateInput: ["id", "user", "favSongs", "favPlaylists", "posts", "comments"],
  UserProfileUpdateInput: ["id", "user", "favSongs", "favPlaylists", "posts", "comments"],
  UserProfileCreateManyInput: ["id", "userId"],
  UserProfileUpdateManyMutationInput: ["id"],
  UserFavoriteSongsCreateInput: ["id", "userProfile", "songs"],
  UserFavoriteSongsUpdateInput: ["id", "userProfile", "songs"],
  UserFavoriteSongsCreateManyInput: ["id", "userProfileId"],
  UserFavoriteSongsUpdateManyMutationInput: ["id"],
  UserFavoritePlaylistsCreateInput: ["id", "userProfile", "playlists"],
  UserFavoritePlaylistsUpdateInput: ["id", "userProfile", "playlists"],
  UserFavoritePlaylistsCreateManyInput: ["id", "userProfileId"],
  UserFavoritePlaylistsUpdateManyMutationInput: ["id"],
  UserPostCreateInput: ["author", "title", "content", "createdAt", "updatedAt", "userProfile"],
  UserPostUpdateInput: ["author", "title", "content", "createdAt", "updatedAt", "userProfile"],
  UserPostCreateManyInput: ["id", "authorId", "title", "content", "createdAt", "updatedAt", "userProfileId"],
  UserPostUpdateManyMutationInput: ["title", "content", "createdAt", "updatedAt"],
  UserProfileCommentsCreateInput: ["author", "content", "createdAt", "updatedAt", "userProfile"],
  UserProfileCommentsUpdateInput: ["author", "content", "createdAt", "updatedAt", "userProfile"],
  UserProfileCommentsCreateManyInput: ["id", "authorId", "content", "createdAt", "updatedAt", "userProfileId"],
  UserProfileCommentsUpdateManyMutationInput: ["content", "createdAt", "updatedAt"],
  PlaylistCreateInput: ["id", "title", "author", "createdAt", "updatedAt", "userFavoritePlaylists"],
  PlaylistUpdateInput: ["id", "title", "author", "createdAt", "updatedAt", "userFavoritePlaylists"],
  PlaylistCreateManyInput: ["id", "title", "authorId", "createdAt", "updatedAt", "userFavoritePlaylistsId"],
  PlaylistUpdateManyMutationInput: ["id", "title", "createdAt", "updatedAt"],
  SongCreateInput: ["id", "title", "author", "createdAt", "updatedAt", "UserFavoriteSongs"],
  SongUpdateInput: ["id", "title", "author", "createdAt", "updatedAt", "UserFavoriteSongs"],
  SongCreateManyInput: ["id", "title", "authorId", "createdAt", "updatedAt", "userFavoriteSongsId"],
  SongUpdateManyMutationInput: ["id", "title", "createdAt", "updatedAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolFilter: ["equals", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumUserRoleFilter: ["equals", "in", "notIn", "not"],
  UserProfileRelationFilter: ["is", "isNot"],
  UserPostListRelationFilter: ["every", "some", "none"],
  UserProfileCommentsListRelationFilter: ["every", "some", "none"],
  PlaylistListRelationFilter: ["every", "some", "none"],
  SongListRelationFilter: ["every", "some", "none"],
  UserPostOrderByRelationAggregateInput: ["_count"],
  UserProfileCommentsOrderByRelationAggregateInput: ["_count"],
  PlaylistOrderByRelationAggregateInput: ["_count"],
  SongOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture"],
  UserMaxOrderByAggregateInput: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture"],
  UserMinOrderByAggregateInput: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumUserRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  UserFavoriteSongsRelationFilter: ["is", "isNot"],
  UserFavoritePlaylistsRelationFilter: ["is", "isNot"],
  UserProfileCountOrderByAggregateInput: ["id", "userId"],
  UserProfileMaxOrderByAggregateInput: ["id", "userId"],
  UserProfileMinOrderByAggregateInput: ["id", "userId"],
  UserFavoriteSongsCountOrderByAggregateInput: ["id", "userProfileId"],
  UserFavoriteSongsMaxOrderByAggregateInput: ["id", "userProfileId"],
  UserFavoriteSongsMinOrderByAggregateInput: ["id", "userProfileId"],
  UserFavoritePlaylistsCountOrderByAggregateInput: ["id", "userProfileId"],
  UserFavoritePlaylistsMaxOrderByAggregateInput: ["id", "userProfileId"],
  UserFavoritePlaylistsMinOrderByAggregateInput: ["id", "userProfileId"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserPostCountOrderByAggregateInput: ["id", "authorId", "title", "content", "createdAt", "updatedAt", "userProfileId"],
  UserPostAvgOrderByAggregateInput: ["id"],
  UserPostMaxOrderByAggregateInput: ["id", "authorId", "title", "content", "createdAt", "updatedAt", "userProfileId"],
  UserPostMinOrderByAggregateInput: ["id", "authorId", "title", "content", "createdAt", "updatedAt", "userProfileId"],
  UserPostSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  UserProfileCommentsCountOrderByAggregateInput: ["id", "authorId", "content", "createdAt", "updatedAt", "userProfileId"],
  UserProfileCommentsAvgOrderByAggregateInput: ["id"],
  UserProfileCommentsMaxOrderByAggregateInput: ["id", "authorId", "content", "createdAt", "updatedAt", "userProfileId"],
  UserProfileCommentsMinOrderByAggregateInput: ["id", "authorId", "content", "createdAt", "updatedAt", "userProfileId"],
  UserProfileCommentsSumOrderByAggregateInput: ["id"],
  PlaylistCountOrderByAggregateInput: ["id", "title", "authorId", "createdAt", "updatedAt", "userFavoritePlaylistsId"],
  PlaylistMaxOrderByAggregateInput: ["id", "title", "authorId", "createdAt", "updatedAt", "userFavoritePlaylistsId"],
  PlaylistMinOrderByAggregateInput: ["id", "title", "authorId", "createdAt", "updatedAt", "userFavoritePlaylistsId"],
  SongCountOrderByAggregateInput: ["id", "title", "authorId", "createdAt", "updatedAt", "userFavoriteSongsId"],
  SongMaxOrderByAggregateInput: ["id", "title", "authorId", "createdAt", "updatedAt", "userFavoriteSongsId"],
  SongMinOrderByAggregateInput: ["id", "title", "authorId", "createdAt", "updatedAt", "userFavoriteSongsId"],
  UserProfileCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  UserPostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserProfileCommentsCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  PlaylistCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  SongCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  EnumUserRoleFieldUpdateOperationsInput: ["set"],
  UserProfileUpdateOneWithoutUserInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserPostUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserProfileCommentsUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PlaylistUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SongUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
  UserFavoriteSongsCreateNestedOneWithoutUserProfileInput: ["create", "connectOrCreate", "connect"],
  UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput: ["create", "connectOrCreate", "connect"],
  UserPostCreateNestedManyWithoutUserProfileInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserProfileCommentsCreateNestedManyWithoutUserProfileInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutProfileInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserFavoriteSongsUpdateOneWithoutUserProfileInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserFavoritePlaylistsUpdateOneWithoutUserProfileInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserPostUpdateManyWithoutUserProfileInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserProfileCommentsUpdateManyWithoutUserProfileInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserProfileCreateNestedOneWithoutFavSongsInput: ["create", "connectOrCreate", "connect"],
  SongCreateNestedManyWithoutUserFavoriteSongsInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserProfileUpdateOneRequiredWithoutFavSongsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SongUpdateManyWithoutUserFavoriteSongsInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserProfileCreateNestedOneWithoutFavPlaylistsInput: ["create", "connectOrCreate", "connect"],
  PlaylistCreateNestedManyWithoutUserFavoritePlaylistsInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserProfileUpdateOneRequiredWithoutFavPlaylistsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PlaylistUpdateManyWithoutUserFavoritePlaylistsInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutCreatedPostsInput: ["create", "connectOrCreate", "connect"],
  UserProfileCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutCreatedPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserProfileUpdateOneWithoutPostsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutCreatedCommentsInput: ["create", "connectOrCreate", "connect"],
  UserProfileCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutCreatedCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserProfileUpdateOneWithoutCommentsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserCreateNestedOneWithoutCreatedPlaylistsInput: ["create", "connectOrCreate", "connect"],
  UserFavoritePlaylistsCreateNestedOneWithoutPlaylistsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutCreatedPlaylistsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserFavoritePlaylistsUpdateOneWithoutPlaylistsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserCreateNestedOneWithoutCreatedSongsInput: ["create", "connectOrCreate", "connect"],
  UserFavoriteSongsCreateNestedOneWithoutSongsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutCreatedSongsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserFavoriteSongsUpdateOneWithoutSongsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumUserRoleFilter: ["equals", "in", "notIn", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumUserRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserProfileCreateWithoutUserInput: ["id", "favSongs", "favPlaylists", "posts", "comments"],
  UserProfileCreateOrConnectWithoutUserInput: ["where", "create"],
  UserPostCreateWithoutAuthorInput: ["title", "content", "createdAt", "updatedAt", "userProfile"],
  UserPostCreateOrConnectWithoutAuthorInput: ["where", "create"],
  UserPostCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  UserProfileCommentsCreateWithoutAuthorInput: ["content", "createdAt", "updatedAt", "userProfile"],
  UserProfileCommentsCreateOrConnectWithoutAuthorInput: ["where", "create"],
  UserProfileCommentsCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  PlaylistCreateWithoutAuthorInput: ["id", "title", "createdAt", "updatedAt", "userFavoritePlaylists"],
  PlaylistCreateOrConnectWithoutAuthorInput: ["where", "create"],
  PlaylistCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  SongCreateWithoutAuthorInput: ["id", "title", "createdAt", "updatedAt", "UserFavoriteSongs"],
  SongCreateOrConnectWithoutAuthorInput: ["where", "create"],
  SongCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  UserProfileUpsertWithoutUserInput: ["update", "create"],
  UserProfileUpdateWithoutUserInput: ["id", "favSongs", "favPlaylists", "posts", "comments"],
  UserPostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  UserPostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  UserPostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  UserPostScalarWhereInput: ["AND", "OR", "NOT", "id", "authorId", "title", "content", "createdAt", "updatedAt", "userProfileId"],
  UserProfileCommentsUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  UserProfileCommentsUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  UserProfileCommentsUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  UserProfileCommentsScalarWhereInput: ["AND", "OR", "NOT", "id", "authorId", "content", "createdAt", "updatedAt", "userProfileId"],
  PlaylistUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PlaylistUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PlaylistUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  PlaylistScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "authorId", "createdAt", "updatedAt", "userFavoritePlaylistsId"],
  SongUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  SongUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  SongUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  SongScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "authorId", "createdAt", "updatedAt", "userFavoriteSongsId"],
  UserCreateWithoutProfileInput: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture", "createdPosts", "createdComments", "createdPlaylists", "createdSongs"],
  UserCreateOrConnectWithoutProfileInput: ["where", "create"],
  UserFavoriteSongsCreateWithoutUserProfileInput: ["id", "songs"],
  UserFavoriteSongsCreateOrConnectWithoutUserProfileInput: ["where", "create"],
  UserFavoritePlaylistsCreateWithoutUserProfileInput: ["id", "playlists"],
  UserFavoritePlaylistsCreateOrConnectWithoutUserProfileInput: ["where", "create"],
  UserPostCreateWithoutUserProfileInput: ["author", "title", "content", "createdAt", "updatedAt"],
  UserPostCreateOrConnectWithoutUserProfileInput: ["where", "create"],
  UserPostCreateManyUserProfileInputEnvelope: ["data", "skipDuplicates"],
  UserProfileCommentsCreateWithoutUserProfileInput: ["author", "content", "createdAt", "updatedAt"],
  UserProfileCommentsCreateOrConnectWithoutUserProfileInput: ["where", "create"],
  UserProfileCommentsCreateManyUserProfileInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutProfileInput: ["update", "create"],
  UserUpdateWithoutProfileInput: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture", "createdPosts", "createdComments", "createdPlaylists", "createdSongs"],
  UserFavoriteSongsUpsertWithoutUserProfileInput: ["update", "create"],
  UserFavoriteSongsUpdateWithoutUserProfileInput: ["id", "songs"],
  UserFavoritePlaylistsUpsertWithoutUserProfileInput: ["update", "create"],
  UserFavoritePlaylistsUpdateWithoutUserProfileInput: ["id", "playlists"],
  UserPostUpsertWithWhereUniqueWithoutUserProfileInput: ["where", "update", "create"],
  UserPostUpdateWithWhereUniqueWithoutUserProfileInput: ["where", "data"],
  UserPostUpdateManyWithWhereWithoutUserProfileInput: ["where", "data"],
  UserProfileCommentsUpsertWithWhereUniqueWithoutUserProfileInput: ["where", "update", "create"],
  UserProfileCommentsUpdateWithWhereUniqueWithoutUserProfileInput: ["where", "data"],
  UserProfileCommentsUpdateManyWithWhereWithoutUserProfileInput: ["where", "data"],
  UserProfileCreateWithoutFavSongsInput: ["id", "user", "favPlaylists", "posts", "comments"],
  UserProfileCreateOrConnectWithoutFavSongsInput: ["where", "create"],
  SongCreateWithoutUserFavoriteSongsInput: ["id", "title", "author", "createdAt", "updatedAt"],
  SongCreateOrConnectWithoutUserFavoriteSongsInput: ["where", "create"],
  SongCreateManyUserFavoriteSongsInputEnvelope: ["data", "skipDuplicates"],
  UserProfileUpsertWithoutFavSongsInput: ["update", "create"],
  UserProfileUpdateWithoutFavSongsInput: ["id", "user", "favPlaylists", "posts", "comments"],
  SongUpsertWithWhereUniqueWithoutUserFavoriteSongsInput: ["where", "update", "create"],
  SongUpdateWithWhereUniqueWithoutUserFavoriteSongsInput: ["where", "data"],
  SongUpdateManyWithWhereWithoutUserFavoriteSongsInput: ["where", "data"],
  UserProfileCreateWithoutFavPlaylistsInput: ["id", "user", "favSongs", "posts", "comments"],
  UserProfileCreateOrConnectWithoutFavPlaylistsInput: ["where", "create"],
  PlaylistCreateWithoutUserFavoritePlaylistsInput: ["id", "title", "author", "createdAt", "updatedAt"],
  PlaylistCreateOrConnectWithoutUserFavoritePlaylistsInput: ["where", "create"],
  PlaylistCreateManyUserFavoritePlaylistsInputEnvelope: ["data", "skipDuplicates"],
  UserProfileUpsertWithoutFavPlaylistsInput: ["update", "create"],
  UserProfileUpdateWithoutFavPlaylistsInput: ["id", "user", "favSongs", "posts", "comments"],
  PlaylistUpsertWithWhereUniqueWithoutUserFavoritePlaylistsInput: ["where", "update", "create"],
  PlaylistUpdateWithWhereUniqueWithoutUserFavoritePlaylistsInput: ["where", "data"],
  PlaylistUpdateManyWithWhereWithoutUserFavoritePlaylistsInput: ["where", "data"],
  UserCreateWithoutCreatedPostsInput: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture", "profile", "createdComments", "createdPlaylists", "createdSongs"],
  UserCreateOrConnectWithoutCreatedPostsInput: ["where", "create"],
  UserProfileCreateWithoutPostsInput: ["id", "user", "favSongs", "favPlaylists", "comments"],
  UserProfileCreateOrConnectWithoutPostsInput: ["where", "create"],
  UserUpsertWithoutCreatedPostsInput: ["update", "create"],
  UserUpdateWithoutCreatedPostsInput: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture", "profile", "createdComments", "createdPlaylists", "createdSongs"],
  UserProfileUpsertWithoutPostsInput: ["update", "create"],
  UserProfileUpdateWithoutPostsInput: ["id", "user", "favSongs", "favPlaylists", "comments"],
  UserCreateWithoutCreatedCommentsInput: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture", "profile", "createdPosts", "createdPlaylists", "createdSongs"],
  UserCreateOrConnectWithoutCreatedCommentsInput: ["where", "create"],
  UserProfileCreateWithoutCommentsInput: ["id", "user", "favSongs", "favPlaylists", "posts"],
  UserProfileCreateOrConnectWithoutCommentsInput: ["where", "create"],
  UserUpsertWithoutCreatedCommentsInput: ["update", "create"],
  UserUpdateWithoutCreatedCommentsInput: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture", "profile", "createdPosts", "createdPlaylists", "createdSongs"],
  UserProfileUpsertWithoutCommentsInput: ["update", "create"],
  UserProfileUpdateWithoutCommentsInput: ["id", "user", "favSongs", "favPlaylists", "posts"],
  UserCreateWithoutCreatedPlaylistsInput: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture", "profile", "createdPosts", "createdComments", "createdSongs"],
  UserCreateOrConnectWithoutCreatedPlaylistsInput: ["where", "create"],
  UserFavoritePlaylistsCreateWithoutPlaylistsInput: ["id", "userProfile"],
  UserFavoritePlaylistsCreateOrConnectWithoutPlaylistsInput: ["where", "create"],
  UserUpsertWithoutCreatedPlaylistsInput: ["update", "create"],
  UserUpdateWithoutCreatedPlaylistsInput: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture", "profile", "createdPosts", "createdComments", "createdSongs"],
  UserFavoritePlaylistsUpsertWithoutPlaylistsInput: ["update", "create"],
  UserFavoritePlaylistsUpdateWithoutPlaylistsInput: ["id", "userProfile"],
  UserCreateWithoutCreatedSongsInput: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture", "profile", "createdPosts", "createdComments", "createdPlaylists"],
  UserCreateOrConnectWithoutCreatedSongsInput: ["where", "create"],
  UserFavoriteSongsCreateWithoutSongsInput: ["id", "userProfile"],
  UserFavoriteSongsCreateOrConnectWithoutSongsInput: ["where", "create"],
  UserUpsertWithoutCreatedSongsInput: ["update", "create"],
  UserUpdateWithoutCreatedSongsInput: ["id", "name", "email", "emailVerified", "password", "createdAt", "updatedAt", "role", "picture", "profile", "createdPosts", "createdComments", "createdPlaylists"],
  UserFavoriteSongsUpsertWithoutSongsInput: ["update", "create"],
  UserFavoriteSongsUpdateWithoutSongsInput: ["id", "userProfile"],
  UserPostCreateManyAuthorInput: ["id", "title", "content", "createdAt", "updatedAt", "userProfileId"],
  UserProfileCommentsCreateManyAuthorInput: ["id", "content", "createdAt", "updatedAt", "userProfileId"],
  PlaylistCreateManyAuthorInput: ["id", "title", "createdAt", "updatedAt", "userFavoritePlaylistsId"],
  SongCreateManyAuthorInput: ["id", "title", "createdAt", "updatedAt", "userFavoriteSongsId"],
  UserPostUpdateWithoutAuthorInput: ["title", "content", "createdAt", "updatedAt", "userProfile"],
  UserProfileCommentsUpdateWithoutAuthorInput: ["content", "createdAt", "updatedAt", "userProfile"],
  PlaylistUpdateWithoutAuthorInput: ["id", "title", "createdAt", "updatedAt", "userFavoritePlaylists"],
  SongUpdateWithoutAuthorInput: ["id", "title", "createdAt", "updatedAt", "UserFavoriteSongs"],
  UserPostCreateManyUserProfileInput: ["id", "authorId", "title", "content", "createdAt", "updatedAt"],
  UserProfileCommentsCreateManyUserProfileInput: ["id", "authorId", "content", "createdAt", "updatedAt"],
  UserPostUpdateWithoutUserProfileInput: ["author", "title", "content", "createdAt", "updatedAt"],
  UserProfileCommentsUpdateWithoutUserProfileInput: ["author", "content", "createdAt", "updatedAt"],
  SongCreateManyUserFavoriteSongsInput: ["id", "title", "authorId", "createdAt", "updatedAt"],
  SongUpdateWithoutUserFavoriteSongsInput: ["id", "title", "author", "createdAt", "updatedAt"],
  PlaylistCreateManyUserFavoritePlaylistsInput: ["id", "title", "authorId", "createdAt", "updatedAt"],
  PlaylistUpdateWithoutUserFavoritePlaylistsInput: ["id", "title", "author", "createdAt", "updatedAt"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

