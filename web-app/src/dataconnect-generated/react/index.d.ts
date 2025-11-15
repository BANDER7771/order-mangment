import { CreateUserData, ListPublicMoviesData, AddMovieToListData, AddMovieToListVariables, GetUserListsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;

export function useListPublicMovies(options?: useDataConnectQueryOptions<ListPublicMoviesData>): UseDataConnectQueryResult<ListPublicMoviesData, undefined>;
export function useListPublicMovies(dc: DataConnect, options?: useDataConnectQueryOptions<ListPublicMoviesData>): UseDataConnectQueryResult<ListPublicMoviesData, undefined>;

export function useAddMovieToList(options?: useDataConnectMutationOptions<AddMovieToListData, FirebaseError, AddMovieToListVariables>): UseDataConnectMutationResult<AddMovieToListData, AddMovieToListVariables>;
export function useAddMovieToList(dc: DataConnect, options?: useDataConnectMutationOptions<AddMovieToListData, FirebaseError, AddMovieToListVariables>): UseDataConnectMutationResult<AddMovieToListData, AddMovieToListVariables>;

export function useGetUserLists(options?: useDataConnectQueryOptions<GetUserListsData>): UseDataConnectQueryResult<GetUserListsData, undefined>;
export function useGetUserLists(dc: DataConnect, options?: useDataConnectQueryOptions<GetUserListsData>): UseDataConnectQueryResult<GetUserListsData, undefined>;
