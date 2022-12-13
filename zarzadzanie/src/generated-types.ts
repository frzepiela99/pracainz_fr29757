import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreatePublikacjaInput = {
  streszczenie: Scalars['String'];
  tytul: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  imie: Scalars['String'];
  nazwisko: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPublikacja: Publikacja;
  createUser: User;
};


export type MutationCreatePublikacjaArgs = {
  createPublikacjaData: CreatePublikacjaInput;
};


export type MutationCreateUserArgs = {
  createUserData: CreateUserInput;
};

export type Publikacja = {
  __typename?: 'Publikacja';
  _id: Scalars['String'];
  streszczenie: Scalars['String'];
  tytul: Scalars['String'];
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  publikacja: Array<Publikacja>;
  publikacjaa: Publikacja;
  user: User;
};


export type QueryPublikacjaaArgs = {
  _id: Scalars['String'];
};


export type QueryUserArgs = {
  _id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  email: Scalars['String'];
  imie: Scalars['String'];
  nazwisko: Scalars['String'];
};

export type CreateUserMutationVariables = Exact<{
  createUserData: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', _id: string, imie: string, nazwisko: string, email: string } };

export type CreatePublikacjaMutationVariables = Exact<{
  createPublikacjaData: CreatePublikacjaInput;
}>;


export type CreatePublikacjaMutation = { __typename?: 'Mutation', createPublikacja: { __typename?: 'Publikacja', _id: string, tytul: string, streszczenie: string } };

export type PublikacjaQueryVariables = Exact<{ [key: string]: never; }>;


export type PublikacjaQuery = { __typename?: 'Query', publikacja: Array<{ __typename?: 'Publikacja', _id: string, tytul: string, streszczenie: string, userId: string }> };

export type PublikacjaaQueryVariables = Exact<{
  _id: Scalars['String'];
}>;


export type PublikacjaaQuery = { __typename?: 'Query', publikacjaa: { __typename?: 'Publikacja', _id: string, tytul: string, streszczenie: string, userId: string } };

export const CreateUserDocument = gql`
    mutation createUser($createUserData: CreateUserInput!) {
  createUser(createUserData: $createUserData) {
    _id
    imie
    nazwisko
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    document = CreateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePublikacjaDocument = gql`
    mutation createPublikacja($createPublikacjaData: CreatePublikacjaInput!) {
  createPublikacja(createPublikacjaData: $createPublikacjaData) {
    _id
    tytul
    streszczenie
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePublikacjaGQL extends Apollo.Mutation<CreatePublikacjaMutation, CreatePublikacjaMutationVariables> {
    document = CreatePublikacjaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PublikacjaDocument = gql`
    query publikacja {
  publikacja {
    _id
    tytul
    streszczenie
    userId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PublikacjaGQL extends Apollo.Query<PublikacjaQuery, PublikacjaQueryVariables> {
    document = PublikacjaDocument;
    _id: string;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PublikacjaaDocument = gql`
    query publikacjaa($_id: String!) {
  publikacjaa(_id: $_id) {
    _id
    tytul
    streszczenie
    userId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PublikacjaaGQL extends Apollo.Query<PublikacjaaQuery, PublikacjaaQueryVariables> {
    document = PublikacjaaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }